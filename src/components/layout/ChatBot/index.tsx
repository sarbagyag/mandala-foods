"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";

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
      wsRef.current = null;
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
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Chat with Maya"}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #e5790e 0%, #c66609 100%)",
          boxShadow: "0 8px 28px rgba(229, 121, 14, 0.45)",
          borderRadius: isOpen ? "50%" : "999px",
          width: isOpen ? "56px" : "auto",
          height: "56px",
          padding: isOpen ? "0" : "0 20px 0 16px",
          gap: isOpen ? "0" : "9px",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" strokeWidth={2.5} />
        ) : (
          <>
            <SparkChatIcon />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: "#ffffff",
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              Ask me anything
            </span>
          </>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden bg-white transition-all duration-300 origin-bottom-right",
          "w-[calc(100vw-3rem)] max-w-[380px]",
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        )}
        style={{
          height: "580px",
          fontFamily: "var(--font-sans)",
          borderRadius: "20px",
          boxShadow:
            "0 24px 64px rgba(0,0,0,0.16), 0 8px 24px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0, 165, 79, 0.12)",
        }}
      >
        {/* ── Header ── */}
        <div
          className="flex items-center gap-3 px-5 py-4 shrink-0"
          style={{
            background: "linear-gradient(135deg, #00a54f 0%, #007a3a 100%)",
          }}
        >
          {/* Avatar with live indicator dot */}
          <div className="relative shrink-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.18)",
                border: "2px solid rgba(255,255,255,0.32)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "#ffffff",
                }}
              >
                M
              </span>
            </div>
            <div
              className={cn(
                "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white transition-colors",
                connStatus === "online"
                  ? "bg-emerald-400"
                  : connStatus === "error"
                  ? "bg-red-400"
                  : "bg-yellow-300 animate-pulse"
              )}
            />
          </div>

          <div className="flex-1 min-w-0">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                color: "#ffffff",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Maya
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.2,
                marginTop: "3px",
                margin: 0,
              }}
            >
              Mandala Foods Genie
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.68)",
              }}
            >
              {connStatus === "online"
                ? "Online"
                : connStatus === "error"
                ? "Disconnected"
                : "Connecting…"}
            </span>
            {connStatus === "error" && (
              <button
                onClick={connect}
                className="underline"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.82)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  marginLeft: "4px",
                }}
              >
                Retry
              </button>
            )}
          </div>
        </div>

        {/* ── Messages ── */}
        <div
          className="flex-1 overflow-y-auto px-4 py-4"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            background: "linear-gradient(180deg, #f6faf7 0%, #edf5f0 100%)",
          }}
        >
          {messages.length === 0 && (
            <div
              className="flex flex-col items-center justify-center h-full text-center px-6"
              style={{ paddingBottom: "32px" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "rgba(0,165,79,0.1)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#00a54f",
                  }}
                >
                  M
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "#1f2937",
                  margin: "0 0 6px",
                }}
              >
                Hi, I&apos;m Maya!
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  lineHeight: "1.55",
                  color: "#6b7280",
                  maxWidth: "220px",
                  margin: 0,
                }}
              >
                Your Mandala Foods assistant. Ask me anything about our
                programs and impact.
              </p>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex",
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start items-end gap-2"
              )}
            >
              {/* Bot avatar */}
              {msg.role === "bot" && (
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#00a54f", marginBottom: "2px" }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    M
                  </span>
                </div>
              )}

              <div
                className={cn(
                  "max-w-[82%]",
                  msg.role === "user"
                    ? "rounded-2xl rounded-br-sm px-4 py-2.5"
                    : "bg-white rounded-2xl rounded-bl-sm px-4 py-3"
                )}
                style={
                  msg.role === "user"
                    ? {
                        background:
                          "linear-gradient(135deg, #e5790e 0%, #c96b09 100%)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        lineHeight: "1.5",
                        color: "#ffffff",
                        boxShadow: "0 2px 10px rgba(229,121,14,0.28)",
                      }
                    : {
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        lineHeight: "1.55",
                        border: "1px solid rgba(0,165,79,0.1)",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                      }
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
            <div className="flex justify-start items-end gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#00a54f" }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  M
                </span>
              </div>
              <div
                className="bg-white rounded-2xl rounded-bl-sm px-4 py-3"
                style={{
                  border: "1px solid rgba(0,165,79,0.1)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex gap-1.5 items-center" style={{ height: "16px" }}>
                  {[0, 120, 240].map((delay) => (
                    <span
                      key={delay}
                      className="rounded-full animate-bounce"
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "#00a54f",
                        opacity: 0.65,
                        animationDelay: `${delay}ms`,
                        display: "block",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ── Input ── */}
        <div
          className="shrink-0 px-4 py-3"
          style={{
            background: "#ffffff",
            borderTop: "1px solid rgba(0,165,79,0.1)",
          }}
        >
          <div
            className="flex items-center gap-2 rounded-full px-4 transition-all duration-200"
            style={{
              background: "#f5f7f5",
              border: "1.5px solid #e5e7eb",
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
          >
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
              className="flex-1 bg-transparent focus:outline-none"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: "#374151",
              }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || connStatus !== "online"}
              aria-label="Send message"
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all disabled:opacity-35 hover:opacity-90 active:scale-95"
              style={{ background: "#00a54f", flexShrink: 0 }}
            >
              <Send className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
          <p
            className="text-center mt-2"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6875rem",
              color: "#9ca3af",
              margin: "8px 0 0",
            }}
          >
            Powered by Mandala Foods AI
          </p>
        </div>
      </div>
    </>
  );
}

// ── Markdown renderer ─────────────────────────────────────────────────────────
// Processes line-by-line to correctly handle mixed content
// (e.g. a paragraph followed immediately by a bullet list in the same block).
// Uses div/span (not p) so global p-tag CSS rules don't interfere.

function MarkdownText({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line — skip (gap is handled by the flex container)
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Horizontal rule  ---  ***  ___
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      elements.push(
        <div
          key={key++}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "4px 0",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(0,165,79,0.25) 20%, rgba(0,165,79,0.25) 80%, transparent)",
            }}
          />
        </div>
      );
      i++;
      continue;
    }

    // Heading  #  ##  ###  ####
    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const fs =
        level === 1 ? "0.9375rem" : level === 2 ? "0.875rem" : "0.875rem";
      const fw = level <= 2 ? 700 : 600;
      elements.push(
        <div
          key={key++}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: fs,
            fontWeight: fw,
            lineHeight: 1.4,
            color: "#111827",
          }}
        >
          <Inline text={headingMatch[2]} />
        </div>
      );
      i++;
      continue;
    }

    // Markdown table — detect by pipe-separated rows
    if (/^\|.+\|/.test(line)) {
      const tableLines: string[] = [];
      while (i < lines.length && /^\|.+\|/.test(lines[i])) {
        tableLines.push(lines[i]);
        i++;
      }
      // Parse header, separator, and body rows
      const rows = tableLines.filter((l) => !/^\|[\s|:-]+\|$/.test(l));
      const [headerRow, ...bodyRows] = rows;
      const parseRow = (r: string) =>
        r
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
      const headers = parseRow(headerRow);
      const body = bodyRows.map(parseRow);
      elements.push(
        <div
          key={key++}
          style={{
            overflowX: "auto",
            borderRadius: "10px",
            border: "1px solid rgba(0,165,79,0.15)",
            fontSize: "0.8125rem",
            fontFamily: "var(--font-sans)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "260px",
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,165,79,0.1) 0%, rgba(0,122,58,0.1) 100%)",
                }}
              >
                {headers.map((h, hi) => (
                  <th
                    key={hi}
                    style={{
                      padding: "8px 12px",
                      textAlign: "left",
                      fontWeight: 600,
                      color: "#007a3a",
                      borderBottom: "1px solid rgba(0,165,79,0.2)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Inline text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr
                  key={ri}
                  style={{
                    background:
                      ri % 2 === 0 ? "#ffffff" : "rgba(0,165,79,0.03)",
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "7px 12px",
                        color: "#374151",
                        borderBottom:
                          ri < body.length - 1
                            ? "1px solid rgba(0,165,79,0.08)"
                            : "none",
                        lineHeight: "1.45",
                      }}
                    >
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list — collect consecutive bullet lines
    if (/^[\s]*[-*+]\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[\s]*[-*+]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[\s]*[-*+]\s/, ""));
        i++;
      }
      elements.push(
        <div
          key={key++}
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          {items.map((item, j) => (
            <div
              key={j}
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "flex-start",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                lineHeight: "1.55",
                color: "#374151",
              }}
            >
              <span
                style={{
                  color: "#00a54f",
                  flexShrink: 0,
                  fontSize: "0.5rem",
                  marginTop: "5px",
                  display: "block",
                }}
              >
                ●
              </span>
              <span>
                <Inline text={item} />
              </span>
            </div>
          ))}
        </div>
      );
      continue;
    }

    // Ordered list — collect consecutive numbered lines
    if (/^[\s]*\d+\.\s/.test(line)) {
      const items: string[] = [];
      const firstNumMatch = line.trim().match(/^(\d+)\./);
      const startNum = firstNumMatch ? parseInt(firstNumMatch[1]) : 1;
      while (i < lines.length && /^[\s]*\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[\s]*\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <div
          key={key++}
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          {items.map((item, j) => (
            <div
              key={j}
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "flex-start",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                lineHeight: "1.55",
                color: "#374151",
              }}
            >
              <span
                style={{
                  color: "#00a54f",
                  fontWeight: 600,
                  flexShrink: 0,
                  minWidth: "18px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                }}
              >
                {startNum + j}.
              </span>
              <span>
                <Inline text={item} />
              </span>
            </div>
          ))}
        </div>
      );
      continue;
    }

    // Paragraph — collect consecutive non-special lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^#{1,4}\s/.test(lines[i]) &&
      !/^[\s]*[-*+]\s/.test(lines[i]) &&
      !/^[\s]*\d+\.\s/.test(lines[i]) &&
      !/^\|.+\|/.test(lines[i]) &&
      !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(
        <div
          key={key++}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            lineHeight: "1.55",
            color: "#374151",
          }}
        >
          <Inline text={paraLines.join(" ")} />
        </div>
      );
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {elements}
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
      tokens.push(
        <strong
          key={match.index}
          style={{
            fontWeight: 700,
            color: "#111827",
            fontFamily: "var(--font-sans)",
          }}
        >
          {match[1]}
        </strong>
      );
    else if (match[2])
      tokens.push(
        <em key={match.index} style={{ fontStyle: "italic" }}>
          {match[2]}
        </em>
      );
    else if (match[3])
      tokens.push(
        <code
          key={match.index}
          style={{
            background: "rgba(0,165,79,0.08)",
            padding: "0.1em 0.35em",
            borderRadius: "4px",
            fontSize: "0.8125rem",
            fontFamily: "monospace",
            color: "#007a3a",
          }}
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
          style={{ color: "#00a54f", textDecoration: "underline" }}
        >
          {match[4]}
        </a>
      );

    last = match.index + match[0].length;
  }

  if (last < text.length) tokens.push(text.slice(last));
  return <>{tokens}</>;
}

function SparkChatIcon() {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      className="w-5 h-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chat bubble */}
      <path
        d="M19 13.5a2 2 0 0 1-2 2H6.5L3 19V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.5z"
        fill="rgba(255,255,255,0.25)"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sparkle dots inside bubble */}
      <circle cx="7.5" cy="8.5" r="1.1" fill="white" />
      <circle cx="11" cy="8.5" r="1.1" fill="white" />
      <circle cx="14.5" cy="8.5" r="1.1" fill="white" />
    </svg>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
