import { useState, useRef, useEffect } from "react";

const SUGGESTIONS = [
  "What are your skills?",
  "Tell me about Veehive",
  "Are you open to work?",
  "How can I contact you?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey! 👋 I'm Jomel's AI assistant. Ask me anything about his skills, projects, or how to get in touch.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const ask = async (userText) => {
    if (!userText.trim() || loading) return;

    const userMsg = { role: "user", content: userText };
    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setShowSuggestions(false);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const reply =
        data?.reply || "Sorry, I couldn't get a response. Try again!";

      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const send = () => {
    if (input.trim()) ask(input.trim());
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <div
        className={`w-80 bg-black-100 border border-white/10 rounded-2xl overflow-hidden flex flex-col max-h-[460px]
          transition-all duration-300 origin-bottom-right
          ${
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.07]">
          <div className="w-8 h-8 rounded-full bg-white text-black-100 flex items-center justify-center text-xs font-bold flex-shrink-0">
            JS
          </div>
          <div className="flex-1">
            <p className="text-white text-xs font-semibold">
              Jomel's Assistant
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/30 hover:text-white/70 transition-colors text-lg leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 min-h-0">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[82%] text-[12.5px] leading-relaxed px-3 py-2.5 rounded-2xl
                ${
                  m.role === "assistant"
                    ? "bg-white/[0.07] text-white/85 self-start rounded-bl-sm"
                    : "bg-white text-black self-end rounded-br-sm font-medium"
                }`}
            >
              {m.content}
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="bg-white/[0.07] self-start px-3 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div className="flex flex-wrap gap-1.5 px-3 py-2 border-t border-white/[0.06]">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => ask(s)}
                className="text-[11px] px-2.5 py-1 rounded-full border border-white/12
                  text-white/50 hover:bg-white/[0.08] hover:text-white hover:border-white/25
                  transition-all duration-200 cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex gap-2 items-center px-3 py-2.5 border-t border-white/[0.07]">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask me anything..."
            disabled={loading}
            className="flex-1 bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2
              text-[12.5px] text-white placeholder:text-white/25 outline-none
              focus:border-white/25 disabled:opacity-50 transition-colors"
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center
              text-sm font-bold hover:bg-white/90 disabled:opacity-40
              transition-all duration-150 cursor-pointer flex-shrink-0"
          >
            ↑
          </button>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-12 h-12 rounded-full bg-white text-black-100 flex items-center justify-center
          text-xl hover:scale-105 hover:bg-white/90 transition-all duration-200 cursor-pointer"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
