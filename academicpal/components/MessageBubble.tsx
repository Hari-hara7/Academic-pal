"use client";
import { ChatMessage } from "@/types/chat";
import { cn } from "@/lib/utils";
import { Bot, User as UserIcon } from "lucide-react";

export default function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "w-full my-1.5 flex items-end gap-2",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      {!isUser && (
        <div className="h-8 w-8 shrink-0 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center">
          <Bot size={16} />
        </div>
      )}

      <div
        className={cn(
          "max-w-[82%] sm:max-w-[75%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed break-words",
          "shadow-sm",
          isUser
            ? "bg-sky-500 text-white rounded-br-md"
            : "bg-neutral-950 text-neutral-100 border border-white/10 rounded-bl-md",
        )}
      >
        <p className="whitespace-pre-wrap selection:bg-sky-500/30">
          {message.content}
        </p>
      </div>

      {isUser && (
        <div className="h-8 w-8 shrink-0 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center">
          <UserIcon size={16} />
        </div>
      )}
    </div>
  );
}
