"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, ChevronDown, MessageCircle, RotateCcw, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const WS_URL = "wss://maya.mandalafoods.co/ws";
const SESSION_KEY = "maya_session_id";

const SUGGESTIONS = [
  "What products does Mandala Foods make?",
  "How do your school nutrition programmes work?",
  "Where can I buy your products?",
  "How can my organisation partner with you?",
];

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
  error?: boolean;
};

type WSEvent =
  | { type: "connected"; session_id: string }
  | { type: "typing" }
  | { type: "message"; text: string; session_id: string }
  | { type: "error"; text: string };

type ConnStatus = "connecting" | "online" | "error";

/* localStorage can throw (private mode, blocked storage) — never let that break chat. */
const storage = {
  get: (k: string) => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set: (k: string, v: string) => {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* ignore */
    }
  },
  remove: (k: string) => {
    try {
      localStorage.removeItem(k);
    } catch {
      /* ignore */
    }
  },
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [connStatus, setConnStatus] = useState<ConnStatus>("connecting");

  const wsRef = useRef<WebSocket | null>(null);
  const msgIdRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  /* ── Connection (protocol unchanged; see chatbotWebsocket.md) ── */
  const connect = useCallback(() => {
    const sessionId = storage.get(SESSION_KEY);
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
      let data: WSEvent;
      try {
        data = JSON.parse(e.data);
      } catch {
        return;
      }
      if (data.type === "connected") {
        storage.set(SESSION_KEY, data.session_id);
      } else if (data.type === "typing") {
        setIsTyping(true);
      } else if (data.type === "message") {
        setIsTyping(false);
        if (data.session_id) storage.set(SESSION_KEY, data.session_id);
        setMessages((prev) => [...prev, { id: ++msgIdRef.current, role: "bot", text: data.text }]);
      } else if (data.type === "error") {
        setIsTyping(false);
        setMessages((prev) => [...prev, { id: ++msgIdRef.current, role: "bot", text: data.text, error: true }]);
      }
    };

    ws.onclose = () => {
      if (wsRef.current !== ws) return;
      setConnStatus("error");
      setIsTyping(false);
      wsRef.current = null;
    };

    ws.onerror = () => {
      if (wsRef.current !== ws) return;
      setConnStatus("error");
    };
  }, []);

  const disconnect = () => {
    const ws = wsRef.current;
    wsRef.current = null;
    ws?.close();
  };

  // Close the socket if the widget ever unmounts.
  useEffect(() => () => disconnect(), []);

  /* ── Panel behaviour: the socket is only open while the panel is ── */
  const open = () => {
    setIsOpen(true);
    connect();
  };

  const close = useCallback(() => {
    setIsOpen(false);
    disconnect();
    requestAnimationFrame(() => launcherRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);

    // Full-screen on phones: stop the page behind from scrolling.
    const small = window.matchMedia("(max-width: 639px)").matches;
    const prev = document.body.style.overflow;
    if (small) document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("keydown", onKey);
      if (small) document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  // Keep the newest message in view.
  useEffect(() => {
    const el = scrollRef.current;
    if (el && (messages.length > 0 || isTyping)) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const resizeInput = () => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 128)}px`;
  };

  // send() re-checks the socket itself; the button only reflects the visible status.
  const canSend = connStatus === "online";

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || connStatus !== "online" || wsRef.current?.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ text }));
    setMessages((prev) => [...prev, { id: ++msgIdRef.current, role: "user", text }]);
    if (raw === undefined) {
      setInput("");
      requestAnimationFrame(resizeInput);
    }
  };

  const newConversation = () => {
    storage.remove(SESSION_KEY);
    setMessages([]);
    setIsTyping(false);
    disconnect();
    connect();
    inputRef.current?.focus();
  };

  const statusLabel =
    connStatus === "online" ? "Online" : connStatus === "error" ? "Offline" : "Connecting…";

  return (
    <>
      {/* ── Launcher ── */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => (isOpen ? close() : open())}
        aria-expanded={isOpen}
        aria-controls="maya-chat"
        aria-label={isOpen ? "Close chat" : "Chat with Maya, our assistant"}
        className={cn(
          "fixed bottom-4 right-4 z-50 inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-forest text-white shadow-[0_16px_40px_-12px_rgb(11_51_32/0.6)] ring-1 ring-white/15 transition-[background-color,width,padding] duration-200 hover:bg-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 sm:bottom-6 sm:right-6",
          isOpen ? "w-14 max-sm:hidden" : "w-14 sm:w-auto sm:pl-4 sm:pr-5"
        )}
      >
        {isOpen ? (
          <ChevronDown className="h-6 w-6" aria-hidden="true" />
        ) : (
          <>
            <span className="relative">
              <MessageCircle className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-forest" aria-hidden="true" />
            </span>
            <span className="hidden text-[0.95rem] font-semibold tracking-[-0.005em] sm:inline">Ask Maya</span>
          </>
        )}
      </button>

      {/* ── Panel ── */}
      <div
        id="maya-chat"
        role="dialog"
        aria-modal="false"
        aria-labelledby="maya-chat-title"
        inert={!isOpen}
        className={cn(
          "fixed z-50 flex flex-col overflow-hidden bg-white transition-[opacity,transform] duration-200 ease-out",
          "inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[min(640px,calc(100dvh-8rem))] sm:w-[400px] sm:origin-bottom-right sm:rounded-[1.25rem] sm:border sm:border-line sm:shadow-[0_40px_96px_-32px_rgb(15_31_22/0.45)]",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        )}
      >
        {/* Header */}
        <header className="flex shrink-0 items-center gap-3 border-b border-line px-4 py-3.5 sm:px-5">
          <MayaAvatar size="md" />
          <div className="min-w-0 flex-1">
            <h2 id="maya-chat-title" className="text-[0.95rem] font-bold leading-tight tracking-[-0.01em] text-ink">
              Maya
            </h2>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs leading-none text-gray-500">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  connStatus === "online" && "bg-primary",
                  connStatus === "connecting" && "bg-amber-400 motion-safe:animate-pulse",
                  connStatus === "error" && "bg-gray-400"
                )}
                aria-hidden="true"
              />
              <span>{statusLabel}</span>
              <span className="text-gray-300" aria-hidden="true">·</span>
              <span>Mandala Foods assistant</span>
            </p>
          </div>
          {messages.length > 0 && (
            <IconButton label="Start a new conversation" onClick={newConversation}>
              <RotateCcw className="h-4 w-4" />
            </IconButton>
          )}
          <IconButton label="Close chat" onClick={close}>
            <X className="h-5 w-5" />
          </IconButton>
        </header>

        {/* Conversation */}
        <div
          ref={scrollRef}
          role="log"
          aria-live="polite"
          aria-relevant="additions"
          aria-label="Conversation with Maya"
          className="flex-1 overflow-y-auto overscroll-contain px-4 py-6 sm:px-5"
        >
          {messages.length === 0 ? (
            <Welcome disabled={connStatus !== "online"} onPick={(s) => send(s)} />
          ) : (
            <ol className="space-y-4">
              {messages.map((m, i) => {
                const firstInGroup = i === 0 || messages[i - 1].role !== m.role;
                return (
                  <li key={m.id} className={cn("flex gap-2.5", m.role === "user" ? "justify-end" : "justify-start")}>
                    {m.role === "bot" && (
                      <div className="w-7 shrink-0">{firstInGroup && <MayaAvatar size="sm" />}</div>
                    )}
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-3 text-[0.925rem] leading-relaxed",
                        m.role === "user"
                          ? "whitespace-pre-wrap break-words rounded-tr-md bg-forest text-white"
                          : m.error
                            ? "rounded-tl-md border border-red-200 bg-red-50 text-red-900"
                            : "rounded-tl-md bg-[#f3f5f4] text-ink"
                      )}
                    >
                      <span className="sr-only">{m.role === "user" ? "You said:" : "Maya said:"}</span>
                      {m.role === "bot" ? <MarkdownText text={m.text} /> : m.text}
                    </div>
                  </li>
                );
              })}

              {isTyping && (
                <li className="flex gap-2.5">
                  <div className="w-7 shrink-0">
                    {messages[messages.length - 1]?.role !== "bot" && <MayaAvatar size="sm" />}
                  </div>
                  <div className="flex h-11 items-center gap-1.5 rounded-2xl rounded-tl-md bg-[#f3f5f4] px-4">
                    <span className="sr-only">Maya is typing</span>
                    {[0, 150, 300].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-gray-400 motion-safe:animate-bounce"
                        style={{ animationDelay: `${d}ms` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </li>
              )}
            </ol>
          )}
        </div>

        {/* Composer */}
        <div className="shrink-0 border-t border-line px-4 pt-3 [padding-bottom:max(1rem,env(safe-area-inset-bottom))] sm:px-5">
          {connStatus === "error" && (
            <div className="mb-3 flex items-center justify-between gap-3 rounded-xl bg-sand px-3.5 py-2.5 text-[0.8125rem] text-ink" role="status">
              <span>Connection lost.</span>
              <button type="button" onClick={connect} className="font-semibold underline underline-offset-4 hover:text-primary">
                Reconnect
              </button>
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-end gap-2 rounded-2xl border border-line bg-white py-1.5 pl-4 pr-1.5 transition-[border-color,box-shadow] focus-within:border-ink/30 focus-within:shadow-[0_0_0_4px_rgb(0_165_79/0.1)]"
          >
            <label htmlFor="maya-input" className="sr-only">
              Message Maya
            </label>
            <textarea
              id="maya-input"
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                resizeInput();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder={
                connStatus === "online"
                  ? "Ask Maya a question…"
                  : connStatus === "connecting"
                    ? "Connecting to Maya…"
                    : "Maya is offline right now"
              }
              className="max-h-32 min-h-9 flex-1 resize-none bg-transparent py-1.5 text-[0.95rem] leading-6 text-ink placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || !canSend}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-white transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:bg-gray-100 disabled:text-gray-400"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </form>

          <p className="mt-2.5 text-center text-[11px] leading-snug text-gray-400">
            Maya is an AI assistant and can make mistakes. For orders, email{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="underline underline-offset-2 hover:text-ink">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

/* ── Pieces ──────────────────────────────────────────────────────────────── */

function MayaAvatar({ size }: { size: "sm" | "md" }) {
  const sizes = {
    sm: "h-7 w-7 text-[0.7rem]",
    md: "h-10 w-10 text-sm",
  };
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-primary font-bold tracking-[-0.02em] text-white",
        sizes[size]
      )}
      aria-hidden="true"
    >
      M
    </span>
  );
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-mist hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {children}
    </button>
  );
}

function Welcome({ disabled, onPick }: { disabled: boolean; onPick: (s: string) => void }) {
  return (
    <div className="flex h-full flex-col">
      <h3 className="text-[1.6rem] font-bold leading-tight tracking-[-0.03em] text-ink">Hi, I&apos;m Maya.</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-600">
        I can help with our products, school nutrition programmes and how to work with Mandala Foods.
      </p>

      <p className="mb-3 mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400">Suggested questions</p>
      <ul className="space-y-2">
        {SUGGESTIONS.map((s) => (
          <li key={s}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onPick(s)}
              className="group flex w-full items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-left text-[0.9rem] font-semibold leading-snug text-ink transition-colors hover:border-ink/40 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {s}
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Markdown renderer ───────────────────────────────────────────────────────
 * Line-by-line so mixed content (a paragraph followed directly by a list)
 * renders correctly. Uses div/span so global p rules don't interfere.
 */

const TABLE_ROW = /^\|.+\|/;
const BULLET = /^[\s]*[-*+]\s/;
const NUMBERED = /^[\s]*\d+\.\s/;
const HEADING = /^(#{1,4})\s+(.+)$/;
const RULE = /^(-{3,}|\*{3,}|_{3,})$/;

function MarkdownText({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (RULE.test(line.trim())) {
      elements.push(<hr key={key++} className="my-1 border-line" />);
      i++;
      continue;
    }

    const heading = line.match(HEADING);
    if (heading) {
      elements.push(
        <div key={key++} className={cn("font-bold leading-snug text-ink", heading[1].length <= 2 ? "text-[0.975rem]" : "text-[0.925rem]")}>
          <Inline text={heading[2]} />
        </div>
      );
      i++;
      continue;
    }

    if (TABLE_ROW.test(line)) {
      const tableLines: string[] = [];
      while (i < lines.length && TABLE_ROW.test(lines[i])) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter((l) => !/^\|[\s|:-]+\|$/.test(l));
      const parseRow = (r: string) => r.split("|").slice(1, -1).map((c) => c.trim());
      const [headerRow, ...bodyRows] = rows;
      const headers = headerRow ? parseRow(headerRow) : [];
      const body = bodyRows.map(parseRow);
      elements.push(
        <div key={key++} className="overflow-x-auto rounded-lg border border-line bg-white text-[0.8125rem]">
          <table className="w-full min-w-[16rem] border-collapse">
            <thead>
              <tr className="bg-mist">
                {headers.map((h, hi) => (
                  <th key={hi} className="whitespace-nowrap border-b border-line px-3 py-2 text-left font-semibold text-ink">
                    <Inline text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className="border-b border-line last:border-0">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 leading-snug text-gray-700">
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

    if (BULLET.test(line)) {
      const items: string[] = [];
      while (i < lines.length && BULLET.test(lines[i])) {
        items.push(lines[i].replace(BULLET, ""));
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-1.5">
          {items.map((item, j) => (
            <li key={j} className="flex gap-2.5">
              <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    if (NUMBERED.test(line)) {
      const items: string[] = [];
      const start = parseInt(line.trim().match(/^(\d+)\./)?.[1] ?? "1", 10);
      while (i < lines.length && NUMBERED.test(lines[i])) {
        items.push(lines[i].replace(NUMBERED, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="space-y-1.5">
          {items.map((item, j) => (
            <li key={j} className="flex gap-2.5">
              <span className="min-w-[1.1rem] shrink-0 font-semibold tabular-nums text-primary">{start + j}.</span>
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^#{1,4}\s/.test(lines[i]) &&
      !BULLET.test(lines[i]) &&
      !NUMBERED.test(lines[i]) &&
      !TABLE_ROW.test(lines[i]) &&
      !RULE.test(lines[i].trim())
    ) {
      para.push(lines[i]);
      i++;
    }
    if (para.length > 0) {
      elements.push(
        <div key={key++}>
          <Inline text={para.join(" ")} />
        </div>
      );
    }
  }

  return <div className="flex flex-col gap-2.5">{elements}</div>;
}

function Inline({ text }: { text: string }) {
  const tokens: React.ReactNode[] = [];
  // **bold**, *italic*, `code`, [label](https://… or /internal-path)
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`|\[(.+?)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) tokens.push(text.slice(last, match.index));

    if (match[1]) {
      tokens.push(
        <strong key={match.index} className="font-bold text-ink">
          {match[1]}
        </strong>
      );
    } else if (match[2]) {
      tokens.push(<em key={match.index}>{match[2]}</em>);
    } else if (match[3]) {
      tokens.push(
        <code key={match.index} className="rounded bg-white px-1.5 py-0.5 font-mono text-[0.8125rem] text-forest">
          {match[3]}
        </code>
      );
    } else if (match[4]) {
      const href = match[5];
      const cls = "font-semibold text-primary-hover underline underline-offset-2 hover:text-ink";
      tokens.push(
        href.startsWith("/") ? (
          <Link key={match.index} href={href} className={cls}>
            {match[4]}
          </Link>
        ) : (
          <a key={match.index} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
            {match[4]}
          </a>
        )
      );
    }

    last = match.index + match[0].length;
  }

  if (last < text.length) tokens.push(text.slice(last));
  return <>{tokens}</>;
}
