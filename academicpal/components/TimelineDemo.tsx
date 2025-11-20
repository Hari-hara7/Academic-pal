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
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black p-6 shadow-2xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                  <Rocket className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    The Beginning
                  </h3>
                  <p className="text-xs text-gray-400">
                    Foundation & Launch
                  </p>
                </div>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-gray-300">
                Academic Pal started with a{" "}
                <span className="font-semibold text-blue-400">
                  bold vision
                </span>{" "}
                to democratize quality education. Built with{" "}
                <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-blue-400">
                  HTML, CSS, JavaScript
                </span>
                , it proved that great ideas don&apos;t need complex tech.
              </p>
              <div className="mb-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-3">
                  <Award className="mb-2 h-5 w-5 text-blue-500" />
                  <p className="text-xs font-medium text-white">
                    Google AdSense
                  </p>
                  <p className="text-xs text-gray-400">Approved</p>
                </div>
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-3">
                  <TrendingUp className="mb-2 h-5 w-5 text-blue-500" />
                  <p className="text-xs font-medium text-white">1,000+</p>
                  <p className="text-xs text-gray-400">Active Users</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="group relative overflow-hidden rounded-xl">
              <Image
                src="/adso.jpg"
                alt="Google AdSense Approval"
                width={500}
                height={300}
                className="h-32 w-full rounded-xl object-cover shadow-xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105 md:h-48 lg:h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <Image
                src="/1.1k.jpg"
                alt="First 1000 Users Milestone"
                width={500}
                height={300}
                className="h-32 w-full rounded-xl object-cover shadow-xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105 md:h-48 lg:h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black p-6 shadow-2xl">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Evolution</h3>
                  <p className="text-xs text-gray-400">
                    Modernization & Growth
                  </p>
                </div>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-gray-300">
                A complete transformation powered by modern technologies:{" "}
                <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-blue-400">
                  Vite + React
                </span>
                ,{" "}
                <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-blue-400">
                  TypeScript
                </span>
                ,{" "}
                <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-blue-400">
                  Firebase
                </span>
                , and{" "}
                <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-blue-400">
                  TailwindCSS
                </span>
                .
              </p>
              <div className="mb-4 flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">
                <Target className="h-6 w-6 text-blue-500" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    2,000+ Users
                  </p>
                  <p className="text-xs text-gray-400">
                    100% growth with enhanced UX
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-white border border-blue-500/20">
                  Dynamic Uploads
                </span>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-white border border-blue-500/20">
                  Improved Performance
                </span>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-white border border-blue-500/20">
                  Modern Design
                </span>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src="/2k.jpg"
              alt="2000 Users Achievement"
              width={500}
              height={300}
              className="h-40 w-full rounded-xl object-cover shadow-xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105 md:h-56 lg:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-black/60 border border-blue-500/30 px-3 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-white">
                Milestone Achieved
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black p-6 shadow-2xl">
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/30">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Next Generation
                  </h3>
                  <p className="text-xs text-gray-400">
                    AI-Powered & Scalable
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                Academic Pal enters the{" "}
                <span className="font-semibold text-blue-400">
                  AI era
                </span>{" "}
                with cutting-edge technologies and intelligent features.
              </p>
              <div className="mb-4 grid grid-cols-3 gap-2 md:grid-cols-4">
                <div className="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5 text-center">
                  <p className="text-[10px] font-medium text-blue-400">
                    Next.js 15
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5 text-center">
                  <p className="text-[10px] font-medium text-blue-400">
                    Supabase
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5 text-center">
                  <p className="text-[10px] font-medium text-blue-400">
                    MongoDB
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 px-2 py-1.5 text-center">
                  <p className="text-[10px] font-medium text-blue-400">
                    AI/ML
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-blue-400">
                      4,000+
                    </p>
                    <p className="text-xs text-gray-400">Active Users</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/40">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src="/4k.png"
              alt="4000 Users Milestone"
              width={500}
              height={300}
              className="h-40 w-full rounded-xl object-cover shadow-xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105 md:h-56 lg:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between rounded-lg bg-black/60 border border-blue-500/30 px-4 py-3 backdrop-blur-sm">
                <div>
                  <p className="text-sm font-bold text-white">
                    Record Growth
                  </p>
                  <p className="text-xs text-gray-300">
                    300% increase in 2025
                  </p>
                </div>
                <Award className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Features",
      content: (
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black p-6 shadow-2xl">
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="relative">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Powerful <span className="text-blue-500">Features</span>
                </h3>
                <p className="text-sm text-gray-400">
                  Everything you need for academic success
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <Upload className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Upload Materials
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Share notes & resources with the community
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <FileText className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Blog Platform
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Write & read academic insights
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <BookOpen className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Study Notes
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Access comprehensive learning materials
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <ScrollText className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Question Papers
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Practice with past exam papers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <MessageCircle className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Real-Time Chat
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Connect instantly with peers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <Search className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        AI Smart Search
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Find answers intelligently
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <BarChart2 className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Analytics
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Track performance & get reminders
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <Brain className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Flashcards
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Study smarter with spaced repetition
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <CalendarClock className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Timetable Generator
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Organize your study schedule
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <Users2 className="h-5 w-5 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        Study Groups
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Collaborate with fellow students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-20 px-4 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
      <div className="relative">
        <Timeline data={data} />
      </div>
    </div>
  );
}
