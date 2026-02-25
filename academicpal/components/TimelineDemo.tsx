"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import {
  Upload,
  FileText,
  BookOpen,
  ScrollText,
  MessageCircle,
  Search,
  BarChart2,
  Brain,
  CalendarClock,
  Users2,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
  Target,
  Rocket,
} from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "2023",
      content: (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-black via-black to-blue-950/20 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
            <div className="absolute -right-10 -top-10 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-24 sm:h-32 w-24 sm:w-32 rounded-full bg-blue-400/5 blur-2xl" />
            
            <div className="relative">
              {/* Header */}
              <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 shadow-lg shadow-blue-500/10">
                  <Rocket className="h-5 w-5 sm:h-7 sm:w-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white">
                    The Beginning
                  </h3>
                  <p className="text-[10px] sm:text-sm text-blue-400/80 font-medium">
                    Foundation & Launch
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed text-gray-300/90">
                Academic Pal started with a{" "}
                <span className="font-semibold text-blue-400">bold vision</span>{" "}
                to democratize quality education. Built with{" "}
                <span className="rounded-md bg-blue-500/10 px-1.5 sm:px-2 py-0.5 font-mono text-[10px] sm:text-xs text-blue-400 border border-blue-500/20">
                  HTML, CSS, JavaScript
                </span>
                , it proved that great ideas don&apos;t need complex tech.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="group rounded-lg sm:rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-3 sm:p-4 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
                  <Award className="mb-1.5 sm:mb-2 h-4 w-4 sm:h-6 sm:w-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm font-semibold text-white">Google AdSense</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Approved</p>
                </div>
                <div className="group rounded-lg sm:rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-3 sm:p-4 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
                  <TrendingUp className="mb-1.5 sm:mb-2 h-4 w-4 sm:h-6 sm:w-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm font-semibold text-white">1,000+</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Active Users</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div className="group relative overflow-hidden rounded-lg sm:rounded-xl">
              <Image
                src="/adso.jpg"
                alt="Google AdSense Approval"
                width={500}
                height={300}
                className="h-24 sm:h-32 md:h-48 lg:h-56 w-full rounded-lg sm:rounded-xl object-cover shadow-xl ring-1 ring-white/10 transition-all duration-500 group-hover:scale-105 group-hover:ring-blue-500/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                <span className="text-[10px] sm:text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                  AdSense Approved
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg sm:rounded-xl">
              <Image
                src="/1.1k.jpg"
                alt="First 1000 Users Milestone"
                width={500}
                height={300}
                className="h-24 sm:h-32 md:h-48 lg:h-56 w-full rounded-lg sm:rounded-xl object-cover shadow-xl ring-1 ring-white/10 transition-all duration-500 group-hover:scale-105 group-hover:ring-blue-500/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                <span className="text-[10px] sm:text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                  1K Users
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-black via-black to-blue-950/20 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
            <div className="absolute -left-10 -top-10 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-24 sm:h-32 w-24 sm:w-32 rounded-full bg-blue-400/5 blur-2xl" />
            
            <div className="relative">
              {/* Header */}
              <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 shadow-lg shadow-blue-500/10">
                  <Zap className="h-5 w-5 sm:h-7 sm:w-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white">Evolution</h3>
                  <p className="text-[10px] sm:text-sm text-blue-400/80 font-medium">
                    Modernization & Growth
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed text-gray-300/90">
                A complete transformation powered by modern technologies:{" "}
                <span className="rounded-md bg-blue-500/10 px-1.5 sm:px-2 py-0.5 font-mono text-[10px] sm:text-xs text-blue-400 border border-blue-500/20">
                  Vite + React
                </span>{" "}
                <span className="rounded-md bg-blue-500/10 px-1.5 sm:px-2 py-0.5 font-mono text-[10px] sm:text-xs text-blue-400 border border-blue-500/20">
                  TypeScript
                </span>{" "}
                <span className="rounded-md bg-blue-500/10 px-1.5 sm:px-2 py-0.5 font-mono text-[10px] sm:text-xs text-blue-400 border border-blue-500/20">
                  Firebase
                </span>
              </p>

              {/* Growth Highlight */}
              <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent p-3 sm:p-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/30">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm sm:text-lg font-bold text-white">2,000+ Users</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">100% growth with enhanced UX</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="rounded-full bg-blue-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                  Dynamic Uploads
                </span>
                <span className="rounded-full bg-blue-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                  Improved Performance
                </span>
                <span className="rounded-full bg-blue-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                  Modern Design
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="group relative overflow-hidden rounded-lg sm:rounded-xl">
            <Image
              src="/2k.jpg"
              alt="2000 Users Achievement"
              width={500}
              height={300}
              className="h-32 sm:h-40 md:h-56 lg:h-64 w-full rounded-lg sm:rounded-xl object-cover shadow-xl ring-1 ring-white/10 transition-all duration-500 group-hover:scale-105 group-hover:ring-blue-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 rounded-lg bg-black/50 border border-blue-500/30 px-2 sm:px-3 py-1.5 sm:py-2 backdrop-blur-md">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-white">Milestone Achieved</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-black via-black to-blue-950/20 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
            <div className="absolute -right-10 -bottom-10 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-10 -top-10 h-24 sm:h-32 w-24 sm:w-32 rounded-full bg-blue-400/5 blur-2xl" />
            
            <div className="relative">
             
              <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400/50 shadow-lg shadow-blue-500/30">
                  <Sparkles className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white">Next Generation</h3>
                  <p className="text-[10px] sm:text-sm text-blue-400/80 font-medium">
                    AI-Powered & Scalable
                  </p>
                </div>
              </div>

            
              <p className="mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed text-gray-300/90">
                Academic Pal enters the{" "}
                <span className="font-semibold text-blue-400">AI era</span> with
                cutting-edge technologies:{" "}
                <span className="rounded-md bg-blue-500/10 px-1.5 sm:px-2 py-0.5 font-mono text-[10px] sm:text-xs text-blue-400 border border-blue-500/20">
                  Next.js 15
                </span>{" "}
                <span className="rounded-md bg-blue-500/10 px-1.5 sm:px-2 py-0.5 font-mono text-[10px] sm:text-xs text-blue-400 border border-blue-500/20">
                  Supabase
                </span>{" "}
                <span className="rounded-md bg-blue-500/10 px-1.5 sm:px-2 py-0.5 font-mono text-[10px] sm:text-xs text-blue-400 border border-blue-500/20">
                  MongoDB
                </span>{" "}
                <span className="rounded-md bg-blue-500/10 px-1.5 sm:px-2 py-0.5 font-mono text-[10px] sm:text-xs text-blue-400 border border-blue-500/20">
                  AI/ML
                </span>
              </p>
            

              {/* Stats Card */}
              <div className="rounded-lg sm:rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-500/15 via-blue-500/10 to-transparent p-3 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                      4,000+
                    </p>
                    <p className="text-[10px] sm:text-sm text-gray-400">Active Users</p>
                  </div>
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/40">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="group relative overflow-hidden rounded-lg sm:rounded-xl">
            <Image
              src="/4k.png"
              alt="4000 Users Milestone"
              width={500}
              height={300}
              className="h-32 sm:h-40 md:h-56 lg:h-64 w-full rounded-lg sm:rounded-xl object-cover shadow-xl ring-1 ring-white/10 transition-all duration-500 group-hover:scale-105 group-hover:ring-blue-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
              <div className="flex items-center justify-between rounded-lg bg-black/50 border border-blue-500/30 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-md">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">Record Growth</p>
                  <p className="text-[10px] sm:text-xs text-gray-300">300% increase in 2025</p>
                </div>
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Features",
      content: (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-black via-black to-blue-950/20 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
            <div className="absolute -left-10 -bottom-10 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -right-10 -top-10 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-blue-400/5 blur-3xl" />
            
            <div className="relative">
              {/* Header */}
              <div className="mb-4 sm:mb-8 text-center">
                <h3 className="mb-1 sm:mb-2 text-lg sm:text-2xl md:text-3xl font-bold text-white">
                  Powerful <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Features</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Everything you need for academic success
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
                {[
                  { icon: Upload, title: "Upload Materials", desc: "Share notes & resources" },
                  { icon: FileText, title: "Blog Platform", desc: "Write & read insights" },
                  { icon: BookOpen, title: "Study Notes", desc: "Comprehensive materials" },
                  { icon: ScrollText, title: "Question Papers", desc: "Past exam practice" },
                  { icon: MessageCircle, title: "Real-Time Chat", desc: "Connect with peers" },
                  { icon: Search, title: "AI Smart Search", desc: "Find answers fast" },
                  { icon: BarChart2, title: "Analytics", desc: "Track performance" },
                  { icon: Brain, title: "Flashcards", desc: "Spaced repetition" },
                  { icon: CalendarClock, title: "Timetable", desc: "Study scheduler" },
                  { icon: Users2, title: "Study Groups", desc: "Collaborate together" },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-lg sm:rounded-xl border border-white/10 bg-white/[0.02] p-2.5 sm:p-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/5 hover:shadow-lg hover:shadow-blue-500/5"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-md sm:rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/15 group-hover:border-blue-500/30 transition-all duration-300">
                        <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white/60 group-hover:text-blue-400 transition-colors duration-300" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 truncate">
                          {feature.title}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 truncate">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Content */}
      <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-2 sm:px-4 md:px-6 lg:px-8">
        <Timeline data={data} />
      </div>
    </div>
  );
}
