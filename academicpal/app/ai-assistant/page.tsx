"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ChatBox from "@/components/ChatBox";

export default function AIAssistantPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[100svh] bg-black flex flex-col items-center justify-start"
    >
      {/* Header with logo */}
      <header className="w-full flex items-center justify-center border-b border-white/10 py-4 sticky top-0 bg-black/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <Image
            src="/academicpal.jpg"
            alt="AcademicPal Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <h1 className="text-xl font-semibold tracking-tight text-white">
            AcademicPal <span className="text-sky-400">AI Assistant</span>
          </h1>
        </div>
      </header>

      {/* Chatbox full screen */}
      <div className="flex-1 w-full max-w-4xl px-4 md:px-0">
        <ChatBox />
      </div>
    </motion.div>
  );
}
