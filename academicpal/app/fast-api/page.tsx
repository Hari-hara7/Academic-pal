"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footerhome';
import BottomNav from "@/components/BottomNav";
import { motion } from "motion/react";
import { Terminal, Zap, Shield, Blocks, ArrowRight, Code, Database, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FastAPI() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <NavBar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          {/* Background effects matching the main HeroSection */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
            
            <motion.div 
              animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" 
            />
            <motion.div 
              animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" 
            />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-blue-500/30 rounded-full backdrop-blur-sm"
              >
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-200">Model Context Protocol (MCP) Ready</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
              >
                Supercharge AI with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  AcademicPal Fast API
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              >
                Connect your AI agents directly to AcademicPal's data. Build custom study tools, automate your schedule, and generate flashcards instantly using our blazing-fast MCP server integration.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0 h-14 px-8 rounded-xl shadow-lg shadow-blue-500/25 group">
                  <span className="flex items-center gap-2 text-lg font-semibold">
                    Generate API Key
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 text-blue-300 bg-transparent h-14 px-8 rounded-xl">
                  <span className="flex items-center gap-2 text-lg font-semibold">
                    <Code className="w-5 h-5" />
                    Read the Docs
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Code Snippet Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto bg-black/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10"
            >
              <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs font-mono text-gray-400">claude_desktop_config.json</div>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="text-gray-300">
                    <span className="text-blue-400">{"{"}</span>{"\n"}
                    {"  "}<span className="text-blue-300">"mcpServers"</span>: <span className="text-blue-400">{"{"}</span>{"\n"}
                    {"    "}<span className="text-blue-300">"academicpal_api"</span>: <span className="text-yellow-400">{"{"}</span>{"\n"}
                    {"      "}<span className="text-blue-300">"command"</span>: <span className="text-green-400">"uv"</span>,{"\n"}
                    {"      "}<span className="text-blue-300">"args"</span>: [<span className="text-green-400">"run"</span>, <span className="text-green-400">"academicpal-mcp-server"</span>],{"\n"}
                    {"      "}<span className="text-blue-300">"env"</span>: <span className="text-purple-400">{"{"}</span>{"\n"}
                    {"        "}<span className="text-blue-300">"ACADEMICPAL_API_KEY"</span>: <span className="text-green-400">"YOUR_API_KEY_HERE"</span>{"\n"}
                    {"      "}<span className="text-purple-400">{"}"}</span>{"\n"}
                    {"    "}<span className="text-yellow-400">{"}"}</span>{"\n"}
                    {"  "}<span className="text-blue-400">{"}"}</span>{"\n"}
                    <span className="text-blue-400">{"}"}</span>
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by the Model Context Protocol</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Give AI models direct, secure access to your academic life. Let Claude, ChatGPT, or any MCP client organize your studies.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Database,
                  title: "Read/Write Access",
                  description: "Agents can read your pending tasks, schedule blocks in your timetable, and auto-generate flashcards."
                },
                {
                  icon: Cpu,
                  title: "Action Feed Core",
                  description: "The engine behind the 'What do I do today?' feature, aggregating LMS data, calendars, and your local to-dos."
                },
                {
                  icon: Shield,
                  title: "Secure & Scoped",
                  description: "You control exactly what data the AI can see. JWT-based authentication ensures your study materials stay private."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-blue-500/10 hover:border-blue-500/30 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
      <Footer />
    </div>
  );
}
