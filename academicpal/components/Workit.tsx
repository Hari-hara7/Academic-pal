"use client";

import { motion } from "motion/react";
import {
  CheckCircle,
  Calendar,
  Brain,
  ListTodo,
  BarChart3,
  Bell,
  BookOpen,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CodeContainer, StaticStep } from "@/components/eldoraui/staticstepper";

const steps = [
  {
    title: "Register on AcademicPal",
    description:
      "Sign up to access exclusive tools and features tailored for your academic success.",
    code: "https://academicpal.in/register",
    icon: "✨",
  },
  {
    title: "Login to Your Dashboard",
    description:
      "Access your personalized learning space with AI-powered insights.",
    code: "https://academicpal.in/login",
    icon: "🚀",
  },
  {
    title: "Explore Smart Dashboard",
    description:
      "Navigate to your dashboard to unlock powerful academic tools and resources.",
    code: "Navigate to Dashboard > Tools",
    icon: "🎯",
  },
];

const features = [
  {
    name: "Auto Timetable",
    description:
      "AI-powered schedule optimization for your classes and study sessions",
    icon: Calendar,
  },
  {
    name: "Flashcards",
    description:
      "Smart flashcards with spaced repetition for effective learning",
    icon: Brain,
  },
  {
    name: "Study Planner",
    description: "Organize your study goals with intelligent task management",
    icon: ListTodo,
  },
  {
    name: "Analytics",
    description:
      "Track your progress with detailed insights and visualizations",
    icon: BarChart3,
  },
  {
    name: "Reminders",
    description: "Never miss a deadline with smart notification system",
    icon: Bell,
  },
  {
    name: "Blogs",
    description: "Access educational content and share your knowledge",
    icon: BookOpen,
  },
  {
    name: "Groups",
    description: "Collaborate with peers in study groups and communities",
    icon: Users,
  },
];

export default function AccessSpecialFeatures() {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-blue-400 font-medium">
              Powerful Features
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold tracking-tight text-white">
            Access Special Features &<br />
            <span className="text-blue-500">Advanced Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to excel in your academic journey, powered by AI
          </p>
        </motion.div>

        {/* Static Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto mb-20"
        >
          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <StaticStep step={index + 1} title={step.title}>
                  <div className="space-y-3">
                    <p className="text-gray-400 text-sm">{step.description}</p>
                    <CodeContainer>
                      <div className="flex items-center justify-between">
                        <span>{step.code}</span>
                        <span className="text-2xl ml-3">{step.icon}</span>
                      </div>
                    </CodeContainer>
                  </div>
                </StaticStep>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards Section */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12"
          >
            Your <span className="text-blue-500">Academic Toolkit</span>
          </motion.h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative"
                >
                  <div className="relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm hover:bg-white/[0.05] hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 mb-4 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white/70 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {feature.name}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 text-sm flex-grow leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Footer with check icon */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-blue-500/20 transition-colors duration-300">
                      <span className="text-xs text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                        Available now
                      </span>
                      <CheckCircle className="w-5 h-5 text-blue-500/40 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
