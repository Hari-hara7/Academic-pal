"use client";
import { useState, useRef, useEffect } from "react";
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
  Sparkles,
} from "lucide-react";

export default function ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (loading) return;
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: uuidv4(), role: "user", content: trimmed };
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
        { id: uuidv4(), role: "assistant", content: data.text || "Error occurred." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: uuidv4(), role: "assistant", content: "Network error. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-black">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 sm:px-6 py-3 border-b border-white/10 bg-gradient-to-r from-black/95 to-neutral-950/95 backdrop-blur-xl">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full" />
          <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
            <Bot size={18} strokeWidth={2.5} />
          </div>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white text-sm sm:text-base font-bold">AcademicPal Assistant</span>
          <span className="text-[10px] sm:text-xs text-blue-400 font-medium flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Online • Ready to help
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 py-4 space-y-4 custom-scrollbar">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Welcome to AcademicPal AI</h3>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-md">
                Ask me anything about your studies, homework, research, or any academic topic. I'm here to help!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-6 sm:mt-8 w-full max-w-xl">
                {[
                  { icon: "📚", text: "Explain complex concepts" },
                  { icon: "✍️", text: "Help with homework" },
                  { icon: "🔬", text: "Research assistance" },
                  { icon: "💡", text: "Study tips & strategies" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer group"
                    onClick={() => setInput(item.text)}
                  >
                    <span className="text-xl sm:text-2xl">{item.icon}</span>
                    <span className="text-xs sm:text-sm text-neutral-300 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {loading && (
            <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 px-2 py-2">
              <div className="relative">
                <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin text-blue-400" />
                <div className="absolute inset-0 blur-md bg-blue-400/30" />
              </div>
              <span className="font-medium">AI is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Composer */}
      <div className="bg-gradient-to-t from-black via-neutral-950 to-transparent border-t border-white/10 px-3 sm:px-4 md:px-6 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
        {/* Input pill */}
        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-focus-within:opacity-20 blur transition duration-300" />
          <div className="relative flex items-center gap-2 rounded-full border border-neutral-800 group-focus-within:border-blue-500/50 bg-neutral-900/80 backdrop-blur-sm px-3 sm:px-4 py-2 transition-all duration-300 shadow-lg">
            <Input
              placeholder="Ask AcademicPal anything…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              className="flex-1 bg-transparent border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-neutral-500 text-sm sm:text-[15px]"
            />
            <Button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full p-0 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/30 disabled:shadow-none relative group/btn shrink-0"
              aria-label="Send message"
            >
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              {loading ? (
                <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin relative z-10" />
              ) : (
                <Send className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}