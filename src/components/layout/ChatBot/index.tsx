"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WS_URL = "wss://maya.mandalafoods.co/ws";
const SESSION_KEY = "maya_session_id";

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
};

type WSEvent =
  | { type: "connected"; session_id: string }
  | { type: "typing" }
  | { type: "message"; text: string; session_id: string }
  | { type: "error"; text: string };

type ConnStatus = "connecting" | "online" | "error";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [connStatus, setConnStatus] = useState<ConnStatus>("connecting");
  const wsRef = useRef<WebSocket | null>(null);
  const msgIdRef = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const connect = () => {
    const sessionId = localStorage.getItem(SESSION_KEY);
    const url = sessionId ? `${WS_URL}?session_id=${sessionId}` : WS_URL;
    const ws = new WebSocket(url);
    wsRef.current = ws;
    setConnStatus("connecting");

    ws.onopen = () => {
      // Guard: ignore if this ws was replaced by a newer one (StrictMode)
      if (wsRef.current !== ws) return;
      setConnStatus("online");
    };

    ws.onmessage = (e) => {
      if (wsRef.current !== ws) return;
      const data: WSEvent = JSON.parse(e.data);
      if (data.type === "connected") {
        localStorage.setItem(SESSION_KEY, data.session_id);
      } else if (data.type === "typing") {
        setIsTyping(true);
      } else if (data.type === "message") {
        setIsTyping(false);
        if (data.session_id) localStorage.setItem(SESSION_KEY, data.session_id);
        setMessages((prev) => [
          ...prev,
          { id: ++msgIdRef.current, role: "bot", text: data.text },
        ]);
      } else if (data.type === "error") {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: ++msgIdRef.current, role: "bot", text: data.text },
        ]);
      }
    };

    ws.onclose = () => {
      if (wsRef.current !== ws) return;
      setConnStatus("error");
      wsRef.current = null;
    };

    ws.onerror = () => {
      if (wsRef.current !== ws) return;
      setConnStatus("error");
    };
  };

  useEffect(() => {
    if (!isOpen) {
      const ws = wsRef.current;
      wsRef.current = null; // disown before closing so onclose guard ignores it
      ws?.close();
      return;
    }
    connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const send = () => {
    const text = input.trim();
    if (!text || connStatus !== "online" || wsRef.current?.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ text }));
    setMessages((prev) => [
      ...prev,
      { id: ++msgIdRef.current, role: "user", text },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Chat with Maya"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#e5790e" }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-300 origin-bottom-right",
          "w-[calc(100vw-3rem)] max-w-sm md:max-w-md",
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        )}
        style={{ height: "520px" }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 shrink-0"
          style={{ backgroundColor: "#00a54f" }}
        >
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-none">Maya</p>
            <p className="text-white/70 text-xs mt-0.5">Mandala Foods Genie</p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <div
              className={`w-2 h-2 rounded-full transition-colors ${
                connStatus === "online"
                  ? "bg-green-300"
                  : connStatus === "error"
                  ? "bg-red-400"
                  : "bg-yellow-300 animate-pulse"
              }`}
            />
            <span className="text-white/70 text-xs">
              {connStatus === "online"
                ? "Online"
                : connStatus === "error"
                ? "Disconnected"
                : "Connecting…"}
            </span>
            {connStatus === "error" && (
              <button
                onClick={connect}
                className="text-white/80 hover:text-white text-xs underline ml-1"
              >
                Retry
              </button>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center pb-8">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <p className="font-semibold text-gray-700 text-sm">Hi, I&apos;m Maya!</p>
              <p className="text-gray-400 text-xs mt-1 max-w-[200px] leading-relaxed">
                Your Mandala Foods assistant. Ask me anything!
              </p>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "text-white rounded-2xl rounded-br-none"
                    : "bg-white text-gray-800 rounded-2xl rounded-bl-none shadow-sm"
                }`}
                style={
                  msg.role === "user" ? { backgroundColor: "#e5790e" } : {}
                }
              >
                {msg.role === "bot" ? (
                  <MarkdownText text={msg.text} />
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                <div className="flex gap-1 items-center">
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder="Ask Maya anything…"
            className="flex-1 text-sm px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500/30 placeholder:text-gray-400"
          />
          <button
            onClick={send}
            disabled={!input.trim() || connStatus !== "online"}
            aria-label="Send message"
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all disabled:opacity-40 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#00a54f" }}
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

// ── Simple markdown renderer ────────────────────────────────────────────────

function MarkdownText({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);

  return (
    <div className="space-y-1.5">
      {blocks.map((block, i) => {
        const lines = block.split("\n").filter(Boolean);
        if (lines.length === 0) return null;

        // Unordered list
        if (lines.every((l) => /^[-*+] /.test(l.trim()))) {
          return (
            <ul key={i} className="list-disc list-outside ml-4 space-y-0.5">
              {lines.map((l, j) => (
                <li key={j}>
                  <Inline text={l.replace(/^[-*+] /, "")} />
                </li>
              ))}
            </ul>
          );
        }

        // Ordered list
        if (lines.every((l) => /^\d+\. /.test(l.trim()))) {
          return (
            <ol key={i} className="list-decimal list-outside ml-4 space-y-0.5">
              {lines.map((l, j) => (
                <li key={j}>
                  <Inline text={l.replace(/^\d+\. /, "")} />
                </li>
              ))}
            </ol>
          );
        }

        // Heading (treat single-line block starting with #)
        const headingMatch = block.match(/^(#{1,4}) (.+)$/);
        if (headingMatch) {
          const level = headingMatch[1].length;
          const cls =
            level === 1
              ? "font-bold text-base"
              : level === 2
              ? "font-bold text-sm"
              : "font-semibold text-sm";
          return (
            <p key={i} className={cls}>
              <Inline text={headingMatch[2]} />
            </p>
          );
        }

        // Paragraph — join lines with a space
        return (
          <p key={i}>
            <Inline text={lines.join(" ")} />
          </p>
        );
      })}
    </div>
  );
}

function Inline({ text }: { text: string }) {
  const tokens: React.ReactNode[] = [];
  const regex =
    /\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\[(.+?)\]\((https?:\/\/.+?)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) tokens.push(text.slice(last, match.index));

    if (match[1])
      tokens.push(<strong key={match.index}>{match[1]}</strong>);
    else if (match[2])
      tokens.push(<em key={match.index}>{match[2]}</em>);
    else if (match[3])
      tokens.push(
        <code
          key={match.index}
          className="bg-gray-100 px-1 rounded text-xs font-mono"
        >
          {match[3]}
        </code>
      );
    else if (match[4])
      tokens.push(
        <a
          key={match.index}
          href={match[5]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-600"
        >
          {match[4]}
        </a>
      );

    last = match.index + match[0].length;
  }

  if (last < text.length) tokens.push(text.slice(last));
  return <>{tokens}</>;
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
