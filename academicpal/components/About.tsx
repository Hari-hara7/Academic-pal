"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Inter } from "next/font/google";
import { 
  Users, 
  Sparkles, 
  Search, 
  MessageCircle, 
  Rocket,
  BookOpen,
  FileText,
  Bot
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const features = [
  {
    title: "4K+ Active Users",
    description: "Trusted by thousands of NMAMIT students every semester.",
    icon: Users,
  },
  {
    title: "AI-powered Search",
    description: "Find relevant notes and questions in seconds.",
    icon: Search,
  },
  {
    title: "Real-Time Community",
    description: "Chat, share, and collaborate with your peers live.",
    icon: MessageCircle,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`${inter.className} relative bg-black py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 text-white overflow-hidden`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)]" />
        
        <motion.div 
          animate={{ 
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-80 bg-blue-500/5 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 lg:w-96 h-40 sm:h-56 md:h-72 lg:h-96 bg-blue-500/4 rounded-full blur-3xl" 
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6 xs:mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 bg-white/5 border border-blue-500/30 rounded-full backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-300">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="p-0.5 xs:p-1 sm:p-1.5 bg-blue-500 rounded-full"
            >
              <Rocket className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-white" />
            </motion.div>
            <span className="text-xs xs:text-xs sm:text-sm md:text-base font-medium text-white group-hover:text-blue-400 transition-colors">
              Empowering Students
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-4 xs:mb-5 sm:mb-6">
            <span className="text-white">About </span>
            <span className="text-blue-500">AcademicPal</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-10 xs:mb-12 sm:mb-14 md:mb-16 px-2"
        >
          <span className="text-white font-semibold">AcademicPal</span> is a powerful academic companion used by{" "}
          <span className="text-blue-400 font-bold">4,000+ students</span> at{" "}
          <span className="text-blue-500 font-semibold">NMAMIT</span>. It provides{" "}
          <span className="text-white font-medium">curated notes</span>,{" "}
          <span className="text-white font-medium">solved PYQs</span>,{" "}
          <span className="text-white font-medium">AI-powered search</span>, and{" "}
          <span className="text-white font-medium">real-time chat</span> — all in one place.
        </motion.p>

        {/* Feature Highlights */}
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6 mb-10 xs:mb-12 sm:mb-14 md:mb-16 max-w-4xl mx-auto"
        >
          {[
            { icon: BookOpen, label: "Curated Notes" },
            { icon: FileText, label: "Solved PYQs" },
            { icon: Bot, label: "AI Search" },
            { icon: MessageCircle, label: "Live Chat" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer"
            >
              <feature.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/70 group-hover:text-blue-500 mx-auto mb-1.5 xs:mb-2 sm:mb-3 group-hover:scale-110 transition-all duration-300" />
              <p className="text-xs xs:text-xs sm:text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                {feature.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
                <CardContent className="p-4 xs:p-5 sm:p-6 md:p-8">
                  <div className="flex items-start gap-3 xs:gap-4 sm:gap-5">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.2 }}
                      className="p-2 xs:p-2.5 sm:p-3 md:p-4 rounded-lg xs:rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 shrink-0"
                    >
                      <item.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-base xs:text-lg sm:text-xl md:text-2xl mb-1 xs:mb-1.5 sm:mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs xs:text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 mt-10 xs:mt-12 sm:mt-14 md:mt-16 pt-8 xs:pt-10 sm:pt-12 border-t border-gray-700/50"
        >
          {[
            { value: "4K+", label: "Students" },
            { value: "100+", label: "Resources" },
            { value: "24/7", label: "AI Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="text-center group cursor-pointer"
            >
              <div className="flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 mb-1 xs:mb-1.5 sm:mb-2">
                <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs xs:text-sm sm:text-base text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

