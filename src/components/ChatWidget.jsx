import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const QUICK_REPLIES = ["Shipping times?", "Do you have decaf?", "Store hours?"];

const INITIAL_MESSAGE = {
  id: "greeting",
  from: "bot",
  text: "Hey, I'm Brewbot! Ask me about our roasts, shipping, or hours.",
};

function getBotReply(input) {
  const text = input.toLowerCase();

  if (text.includes("ship")) {
    return "We roast to order and ship within 48 hours — most orders arrive in 3-5 business days.";
  }
  if (text.includes("decaf")) {
    return "Yep! Our Costa Rican Tarrazú is Swiss Water Process decaf — full flavor, no caffeine.";
  }
  if (text.includes("hour") || text.includes("open")) {
    return "Our roastery is open Mon–Sat, 8am–6pm at 123 Roastery Lane, Portland.";
  }
  if (text.includes("contact") || text.includes("phone") || text.includes("email")) {
    return "You can reach us at hello@brewhauscoffee.example or (503) 555-0192.";
  }
  if (text.includes("price") || text.includes("cost")) {
    return "Our bags range from $14.99 to $18.49 — check out the Shop page for the full lineup.";
  }
  if (text.includes("thank")) {
    return "Anytime! Enjoy your coffee.";
  }
  return "Good question! For anything specific, our team would love to help — reach out via the Contact page.";
}

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage = { id: crypto.randomUUID(), from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), from: "bot", text: getBotReply(trimmed) },
      ]);
    }, 700);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(draft);
  }

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Brewbot chat"
          className="animate-fade-in-up flex h-96 w-[min(20rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/40"
        >
          <div className="flex items-center justify-between gap-2 border-b border-border/60 bg-primary/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                <Coffee className="h-4 w-4 text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-sm font-semibold leading-none">Brewbot</p>
                <p className="mt-1 text-xs text-muted-foreground">Usually replies instantly</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div
            ref={scrollRef}
            role="log"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "animate-fade-in-up flex",
                  m.from === "user" ? "justify-end" : "justify-start",
                )}
              >
                <p
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                    m.from === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-muted text-foreground",
                  )}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-muted px-3 py-2.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/60" />
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && !typing && (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendMessage(q)}
                  className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border/60 p-3">
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a message…"
              aria-label="Message"
              className="h-9 flex-1 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
            <Button type="submit" size="icon" aria-label="Send message">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}

      <Button
        size="icon-lg"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="relative h-14 w-14 rounded-full shadow-xl shadow-black/40 transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && messages.length <= 1 && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
          </span>
        )}
      </Button>
    </div>
  );
}

export default ChatWidget;
