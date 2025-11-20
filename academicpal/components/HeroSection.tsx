"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen, Zap, Shield, Sparkles, TrendingUp } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function HeroSection() {
  return (
    <section
      className={`${inter.className} relative min-h-screen bg-black text-white overflow-hidden`}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.08),transparent_50%)]" />
        
        {/* Animated orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-80 bg-blue-500/5 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-72 lg:w-96 h-40 sm:h-56 md:h-72 lg:h-96 bg-purple-500/4 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-1/2 right-1/3 w-24 sm:w-36 md:w-48 lg:w-64 h-24 sm:h-36 md:h-48 lg:h-64 bg-emerald-500/3 rounded-full blur-2xl" 
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 md:py-16 lg:py-12 xl:py-16 2xl:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center"
        >
          {/* Content Section - Always First on Mobile */}
          <motion.div 
            variants={itemVariants} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full order-1 lg:order-1 space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
          >
            {/* Trust Badge */}
            <div className="flex justify-center sm:justify-start">
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-950/40 to-purple-950/30 border border-blue-500/30 rounded-full backdrop-blur-sm group hover:border-blue-400/50 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="p-0.5 xs:p-1 sm:p-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                >
                  <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-white" />
                </motion.div>
                <span className="text-xs xs:text-xs sm:text-sm md:text-base font-medium text-blue-200 group-hover:text-blue-100 transition-colors">
                  Trusted by 4,000+ students 
                </span>
              </motion.div>
            </div>

            {/* Main Heading */}
            <motion.div 
              variants={itemVariants} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6"
            >
              <motion.h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
                <div className="flex flex-col xs:flex-row xs:flex-wrap xs:gap-x-2 sm:gap-x-3 md:gap-x-4">
                  <motion.div
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-300% bg-clip-text text-transparent"
                    style={{ backgroundSize: "300% 100%" }}
                  >
                 Academic Unleashed
                  </motion.div>
           
                </div>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-full lg:max-w-2xl"
              >
                Transform your academic journey with AI-powered study tools, personalized learning paths, and collaborative features designed for modern students.
              </motion.p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6"
            >
              {[
                { icon: BookOpen, label: "Smart Study Plans", color: "blue" },
                { icon: Users, label: "Study Groups", color: "purple" },
                { icon: Zap, label: "AI Assistance", color: "emerald" },
                { icon: TrendingUp, label: "Progress Tracking", color: "blue" },
                { icon: Shield, label: "Secure Platform", color: "purple" },
                { icon: Star, label: "Top Rated", color: "emerald" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer"
                >
                  <feature.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-400 mb-1.5 xs:mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-xs xs:text-xs sm:text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                    {feature.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 md:pt-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/upload">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group"
                  >
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      Start Learning Now
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/ai-assistant">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-base sm:text-lg md:text-xl font-semibold bg-transparent border-2 border-blue-500/50 hover:border-blue-400 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-xl sm:rounded-2xl transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                    Ai-Assistant
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-full"
                      />
                    </div>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-10 sm:text-small"
            >
              {[
                { value: "4K+", label: "Students" },
                { value: "12+", label: "Features" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:text-blue-400 transition-colors"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
            
          {/* Enhanced Right Image Section */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Enhanced floating elements */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 sm:-top-8 md:-top-10 -left-6 sm:-left-8 md:-left-10 w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 bg-blue-500/20 rounded-full blur-2xl" 
            />
            <motion.div 
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -right-6 sm:-right-8 md:-right-10 w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 bg-purple-500/15 rounded-full blur-2xl" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-1/2 -right-3 sm:-right-4 md:-right-6 w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 bg-emerald-500/12 rounded-full blur-lg" 
            />

            {/* Enhanced image container */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              {/* Multiple glow layers */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-500/10 to-emerald-400/15 rounded-2xl sm:rounded-3xl blur-2xl" 
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-500/15 to-emerald-400/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50" />
              
              {/* Main image card */}
              <motion.div 
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 2
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl group perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image
                    src="/academicpal.jpg"
                    alt="AcademicPal platform preview"
                    width={800}
                    height={800}
                    priority
                    className="object-contain w-full h-auto transition-all duration-500 group-hover:scale-[1.01]"
                  />
                  
                  {/* Interactive overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                </div>
                
                {/* Enhanced floating UI indicators */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" 
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-purple-400 rounded-full shadow-md shadow-purple-400/50" 
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-1/2 left-2 sm:left-3 md:left-4 w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-emerald-400 rounded-full shadow-sm shadow-emerald-400/50" 
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  className="absolute top-1/4 right-1/4 w-0.5 sm:w-1 md:w-1.5 h-0.5 sm:h-1 md:h-1.5 bg-yellow-400 rounded-full shadow-sm shadow-yellow-400/50" 
                />
              </motion.div>
            </div>
          </motion.div>

        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-blue-950/30 to-purple-950/20 border border-blue-500/30 rounded-full backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex -space-x-1 sm:-space-x-1.5">
              {[
                "from-blue-400 to-blue-600",
                "from-purple-400 to-purple-600", 
                "from-emerald-400 to-emerald-600"
              ].map((gradient, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r ${gradient} rounded-full border-2 border-black`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-blue-200 group-hover:text-blue-100 transition-colors">
              Start your academic transformation today
            </span>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
