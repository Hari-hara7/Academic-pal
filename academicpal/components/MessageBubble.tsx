"use client";
import { ChatMessage } from "@/types/chat";
import { cn } from "@/lib/utils";
import { Bot, User as UserIcon } from "lucide-react";
import { motion } from "motion/react";

export default function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "w-full my-2 flex items-end gap-3",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-blue-500/30 blur-md rounded-full" />
          <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Bot size={18} strokeWidth={2.5} />
          </div>
        </div>
      )}

      <div
        className={cn(
          "max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed break-words",
          "shadow-xl transition-all duration-200",
          isUser
            ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md shadow-blue-500/30"
            : "bg-neutral-900/90 text-neutral-100 border border-white/10 rounded-bl-md shadow-black/30 backdrop-blur-sm"
        )}
      >
        <p className={cn(
          "whitespace-pre-wrap",
          isUser ? "selection:bg-white/20" : "selection:bg-blue-500/20"
        )}>
          {message.content}
        </p>
      </div>

      {isUser && (
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-neutral-700/30 blur-md rounded-full" />
          <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 text-neutral-300 flex items-center justify-center shadow-lg border border-white/10">
            <UserIcon size={18} strokeWidth={2} />
          </div>
        </div>
      )}
    </motion.div>
  );
}