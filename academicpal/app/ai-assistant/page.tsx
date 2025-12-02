"use client";
import { motion } from "motion/react";
import Image from "next/image";
import ChatBox from "@/components/ChatBox";
import { Sparkles } from "lucide-react";

export default function AIAssistantPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-screen w-screen bg-gradient-to-b from-black via-black to-blue-950/20 flex flex-col relative overflow-hidden"
    >
  
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
  
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full flex items-center justify-center border-b border-white/10 py-3 sm:py-4 bg-black/95 backdrop-blur-xl z-20 shadow-lg shadow-black/50"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/30 blur-md rounded-lg" />
            <Image
              src="/academicpal.jpg"
              alt="AcademicPal Logo"
              width={36}
              height={36}
              className="rounded-lg relative z-10 ring-2 ring-blue-500/20"
            />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              AcademicPal
            </h1>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400">AI</span>
            </div>
          </div>
        </div>
      </motion.header>

      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex-1 w-full relative z-10 overflow-hidden"
      >
        <ChatBox />
      </motion.div>
    </motion.div>
  );
}

