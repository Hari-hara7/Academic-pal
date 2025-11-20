"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  NotebookText,
  FileText,
  MessageCircle,
  Search,
  UploadCloud,
  Brain,
  CalendarCheck,
  BarChart4,
  AlarmClock,
  Users2,
  CalendarDays,
  Map,
  BrainCircuit,
  MessageSquareMore,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Star,
  Zap,
  Bot,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Comprehensive Notes",
    description:
      "Access crisp, well-organized notes for all subjects. Designed for clarity and speed.",
    icon: NotebookText,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "https://academicpal.vercel.app/notes.html",
    buttonText: "Access Notes",
    category: "Study",
    isPopular: true,
  },
  {
    title: "Past Question Papers",
    description:
      "Prepare with confidence using past papers and understand exam patterns.",
    icon: FileText,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "https://academicpal.vercel.app/Pyq.html",
    buttonText: "View Papers",
    category: "Exam Prep",
    isPopular: false,
  },
  {
    title: "Access & Contribute Materials",
    description:
      "Upload your resources and gain access to shared study content.",
    icon: UploadCloud,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/upload",
    buttonText: "Upload or Explore",
    category: "Resources",
    isPopular: false,
  },
  {
    title: "AI Study Assistant",
    description:
      "Get instant academic help powered by Gemini Flash 2.5 — ask doubts, generate notes, or get study guidance.",
    icon: Bot,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/ai-assistant",
    buttonText: "Ask AI Assistant",
    category: "Productivity",
    isPopular: true,
  },
  {
    title: "Create & Explore Mindtrees",
    description:
      "Visualize your learning with interactive mind maps for complex topics.",
    icon: BrainCircuit,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Start Mapping",
    category: "Visual Learning",
    isPopular: false,
  },
  {
    title: "Peer-to-Peer Tutoring",
    description:
      "Become a tutor or find one to guide you through tough subjects.",
    icon: GraduationCap,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Find or Become Tutor",
    category: "Community",
    isPopular: false,
  },
  {
    title: "Ask & Answer in Forums",
    description:
      "Post questions and get answers from fellow students and mentors.",
    icon: MessageSquareMore,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Join Discussion",
    category: "Community",
    isPopular: false,
  },
  {
    title: "Blogs",
    description: "Read and write blogs on study strategies and academic tips.",
    icon: FileText,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Explore Blogs",
    category: "Content",
    isPopular: false,
  },
  {
    title: "Tech Roadmaps",
    description:
      "Structured roadmaps for frontend, backend, DevOps, AI, and more.",
    icon: Map,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/roadmaps",
    buttonText: "Explore Roadmaps",
    category: "Learning Paths",
    isPopular: true,
  },
  {
    title: "Real-Time Chat",
    description:
      "Engage with peers instantly and get help right when you need it.",
    icon: MessageCircle,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/chat",
    buttonText: "Chat Now",
    category: "Communication",
    isPopular: true,
  },
  {
    title: "AcademicPal AI - Smart Search",
    description:
      "AI-powered search for notes, references, and materials in seconds.",
    icon: Search,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "https://academicpal-ml-chatbot-g6gn.vercel.app/",
    buttonText: "Try AI Search",
    category: "AI Tools",
    isPopular: true,
  },
  {
    title: "Flashcards",
    description: "Memorize key concepts with interactive flashcards.",
    icon: Brain,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Start Reviewing",
    category: "Study Tools",
    isPopular: false,
  },
  {
    title: "Study Planner",
    description: "Plan your study schedule with customizable timetables.",
    icon: CalendarCheck,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Plan Now",
    category: "Productivity",
    isPopular: false,
  },
  {
    title: "Performance Analytics",
    description:
      "Track study hours and visualize progress with detailed charts.",
    icon: BarChart4,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "View Analytics",
    category: "Analytics",
    isPopular: false,
  },
  {
    title: "Study Reminders",
    description: "Personalized study notifications sent to your browser.",
    icon: AlarmClock,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Set Reminders",
    category: "Productivity",
    isPopular: false,
  },
  {
    title: "Study Groups",
    description: "Join or create study groups with like-minded peers.",
    icon: Users2,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Join Groups",
    category: "Community",
    isPopular: false,
  },
  {
    title: "Timetable Generator",
    description: "Create academic timetables based on your preferences.",
    icon: CalendarDays,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-blue-400/10",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Generate Timetable",
    category: "Organization",
    isPopular: false,
  },
];

const KeyFeatures = () => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .feature-card {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .shimmer-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 2s infinite;
        }
      `}</style>

      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 bg-gradient-to-r from-blue-600/5 to-blue-500/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl float-animation" />
          <div
            className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 bg-gradient-to-r from-blue-500/5 to-blue-400/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl float-animation"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 bg-gradient-to-r from-blue-600/3 to-blue-500/3 rounded-full blur-xl sm:blur-2xl md:blur-3xl float-animation"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="relative inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-400/20 border border-blue-500/30 mb-4 sm:mb-6 md:mb-7 lg:mb-8 hover:scale-105 transition-all duration-300 cursor-pointer group/badge">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent">
                Powerful Features
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-tight leading-tight px-1 sm:px-2">
              Key Features
            </h2>

            <div className="relative max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 leading-relaxed font-medium px-3 sm:px-4 md:px-6 lg:px-8">
                Discover our comprehensive suite of tools designed to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  enhance your academic journey
                </span>{" "}
                and boost your productivity.
              </p>
              <div className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className={`
                    group relative overflow-hidden feature-card
                    bg-gradient-to-br ${feature.bgGradient} 
                    border ${feature.borderColor} backdrop-blur-sm 
                    shadow-xl hover:shadow-2xl 
                    transition-all duration-500 ease-out
                    hover:scale-[1.02] sm:hover:scale-[1.03] hover:-translate-y-1 sm:hover:-translate-y-2
                    before:absolute before:inset-0 before:bg-gradient-to-br 
                    before:from-white/5 before:to-transparent 
                    before:opacity-0 before:transition-opacity before:duration-300
                    hover:before:opacity-100 rounded-xl sm:rounded-2xl
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Animated border glow */}
                  <div
                    className={`
                    absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-r ${feature.borderColor?.replace("border-", "from-")?.replace("/30", "/20") || "from-gray-500/20"} to-transparent
                    blur-sm transition-opacity duration-500
                  `}
                  />

                  {/* Enhanced Popular badge */}
                  {feature.isPopular && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                      <div className="relative">
                        <div className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white text-xs font-bold shadow-lg animate-pulse">
                          <Star
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-spin"
                            style={{ animationDuration: "3s" }}
                          />
                          <span className="text-xs">Popular</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-md animate-pulse" />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <CardContent className="p-4 sm:p-5 md:p-6 relative z-10 h-full flex flex-col">
                    {/* Enhanced Icon and Category */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div
                        className={`
                        relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-black/30 to-gray-900/50 ${feature.iconColor} 
                        group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 sm:group-hover:rotate-6 
                        transition-all duration-500 shadow-lg backdrop-blur-sm
                        group-hover:shadow-xl sm:group-hover:shadow-2xl border border-white/10
                      `}
                      >
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 drop-shadow-lg relative z-10" />
                        <div
                          className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.bgGradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                      </div>
                      <div className="relative">
                        <div className="text-xs text-gray-300 bg-gradient-to-r from-gray-800/80 to-gray-900/80 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gray-600/50 backdrop-blur-sm font-medium">
                          {feature.category}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Title */}
                    <CardTitle className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 mb-2 sm:mb-3 leading-tight">
                      {feature.title}
                    </CardTitle>

                    {/* Enhanced Description */}
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1 mb-4 sm:mb-5 md:mb-6 font-medium">
                      {feature.description}
                    </p>

                    {/* Enhanced Button */}
                    <Link
                      href={feature.link}
                      target={
                        feature.link.startsWith("http") ? "_blank" : "_self"
                      }
                      className="mt-auto"
                    >
                      <Button
                        variant="outline"
                        className="relative w-full bg-gradient-to-r from-gray-900/60 via-black/60 to-gray-900/60 border-gray-600/50 text-white hover:bg-gradient-to-r hover:from-gray-800/80 hover:via-gray-900/80 hover:to-gray-800/80 hover:border-gray-500/70 transition-all duration-300 group/btn overflow-hidden backdrop-blur-sm py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm"
                      >
                        {/* Button shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-500" />

                        <span className="flex items-center justify-center gap-1.5 sm:gap-2 relative z-10">
                          <IconComponent
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${feature.iconColor} group-hover/btn:scale-110 transition-transform duration-200`}
                          />
                          <span className="truncate">{feature.buttonText}</span>
                          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                        </span>
                      </Button>
                    </Link>
                  </CardContent>

                  {/* Enhanced animated background particles */}
                  <div className="absolute top-4 right-8 sm:top-6 sm:right-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute top-1/2 right-4 sm:right-6 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ animationDelay: "1s" }}
                  />
                </Card>
              );
            })}
          </div>

          {/* Enhanced Bottom CTA Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center relative px-2 sm:px-4 md:px-6 lg:px-8">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-blue-500/5 to-blue-400/5 rounded-xl sm:rounded-2xl md:rounded-3xl blur-xl sm:blur-2xl md:blur-3xl" />

            <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/30">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 lg:py-4 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 mb-4 sm:mb-6 md:mb-8 lg:mb-10 hover:scale-105 transition-transform duration-300 cursor-pointer group/cta">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-400 animate-bounce" />
                <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Ready to get started?
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-lg opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-1 sm:px-2 md:px-4">
                Join the Academic Revolution
              </h3>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 mb-5 sm:mb-6 md:mb-8 lg:mb-10 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-6 lg:px-8">
                Join{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  thousands of students
                </span>{" "}
                who are already using AcademicPal to enhance their learning
                experience and achieve academic excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-2 sm:px-4 md:px-6 lg:px-8 max-w-2xl mx-auto">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button className="relative w-full sm:w-auto bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-lg sm:rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base lg:text-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group/btn overflow-hidden">
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                      <Star
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 animate-spin"
                        style={{ animationDuration: "3s" }}
                      />
                      <span className="whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg">
                        Get Started Free
                      </span>
                    </span>
                  </Button>
                </Link>

                <Link href="/chat" className="w-full sm:w-auto">
                  <Button className="relative w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-lg sm:rounded-xl md:rounded-2xl text-xs sm:text-sm md:text-base lg:text-lg font-bold transition-all duration-300 hover:scale-105 backdrop-blur-sm group/btn2 overflow-hidden">
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-400/10 opacity-0 group-hover/btn2:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover/btn2:animate-pulse" />
                      <span className="whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg">
                        Try Live Chat
                      </span>
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6 md:pt-7 lg:pt-8 border-t border-gray-700/50 px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 text-gray-400">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                  <span className="font-medium text-xs sm:text-sm md:text-base">
                    Free to Start
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 text-gray-400">
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse flex-shrink-0"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <span className="font-medium text-xs sm:text-sm md:text-base">
                    16+ Features
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 text-gray-400">
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse flex-shrink-0"
                    style={{ animationDelay: "1s" }}
                  />
                  <span className="font-medium text-xs sm:text-sm md:text-base">
                    24/7 Access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
