"use client";
import { useState } from "react";
import { ChatMessage } from "@/types/chat";
import { v4 as uuidv4 } from "uuid";
import MessageBubble from "./MessageBubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Send,
  Loader2,
  Paperclip,
  Image as ImageIcon,
  Smile,
  Mic,
  Bot,
} from "lucide-react";

export default function ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (loading) return;
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: uuidv4(),
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          role: "assistant",
          content: data.text || "Error occurred.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          role: "assistant",
          content: "Network error. Try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        flex flex-col w-full mx-auto
        max-w-3xl
        [--bottom-nav:calc(env(safe-area-inset-bottom)+56px)] md:[--bottom-nav:0px]
        h-[calc(100svh-var(--bottom-nav))]
        bg-black
      "
    >
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
          <Bot size={18} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white text-sm font-semibold">
            AcademicPal Assistant
          </span>
          <span className="text-xs text-neutral-400">
            Ask anything academically
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 space-y-3 pb-28">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-sm text-neutral-400 px-2">
            <Loader2 className="h-4 w-4 animate-spin text-sky-400" />
            Thinking...
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="sticky bottom-0 z-10 bg-black border-t border-white/10 px-3 sm:px-4 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        {/* Action row */}
        <div className="mb-2 flex items-center gap-1.5">
          <Button
            type="button"
            variant="ghost"
            className="h-9 w-9 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"
            aria-label="Attach file"
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="h-9 w-9 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"
            aria-label="Insert image"
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="h-9 w-9 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"
            aria-label="Emoji"
          >
            <Smile className="h-4 w-4" />
          </Button>
          <div className="ml-auto">
            <Button
              type="button"
              variant="ghost"
              className="h-9 w-9 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800"
              aria-label="Voice input"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Input pill */}
        <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5">
          <Input
            placeholder="Ask AcademicPal Assistant…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 bg-transparent border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-neutral-500"
          />
          <Button
            onClick={sendMessage}
            disabled={loading}
            className="h-10 w-10 rounded-full p-0 bg-sky-500 hover:bg-sky-600 text-white disabled:opacity-60 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
