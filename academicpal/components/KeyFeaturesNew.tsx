'use client';

import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  Zap
} from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Comprehensive Notes',
    description: 'Access crisp, well-organized notes for all subjects. Designed for clarity and speed.',
    icon: NotebookText,
    iconColor: 'text-purple-400',
    bgGradient: 'from-purple-500/10 to-violet-500/10',
    borderColor: 'border-purple-500/30',
    link: 'https://academicpal.vercel.app/notes.html',
    buttonText: 'Access Notes',
    category: 'Study',
    isPopular: true,
  },
  {
    title: 'Past Question Papers',
    description: 'Prepare with confidence using past papers and understand exam patterns.',
    icon: FileText,
    iconColor: 'text-orange-400',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-500/30',
    link: 'https://academicpal.vercel.app/Pyq.html',
    buttonText: 'View Papers',
    category: 'Exam Prep',
    isPopular: false,
  },
  {
    title: 'Access & Contribute Materials',
    description: 'Upload your resources and gain access to shared study content.',
    icon: UploadCloud,
    iconColor: 'text-red-400',
    bgGradient: 'from-red-500/10 to-pink-500/10',
    borderColor: 'border-red-500/30',
    link: '/upload',
    buttonText: 'Upload or Explore',
    category: 'Resources',
    isPopular: false,
  },
  {
    title: 'Create & Explore Mindtrees',
    description: 'Visualize your learning with interactive mind maps for complex topics.',
    icon: BrainCircuit,
    iconColor: 'text-indigo-400',
    bgGradient: 'from-indigo-500/10 to-purple-500/10',
    borderColor: 'border-indigo-500/30',
    link: '/register',
    buttonText: 'Start Mapping',
    category: 'Visual Learning',
    isPopular: false,
  },
  {
    title: 'Peer-to-Peer Tutoring',
    description: 'Become a tutor or find one to guide you through tough subjects.',
    icon: GraduationCap,
    iconColor: 'text-green-400',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/30',
    link: '/register',
    buttonText: 'Find or Become Tutor',
    category: 'Community',
    isPopular: false,
  },
  {
    title: 'Ask & Answer in Forums',
    description: 'Post questions and get answers from fellow students and mentors.',
    icon: MessageSquareMore,
    iconColor: 'text-blue-400',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    link: '/register',
    buttonText: 'Join Discussion',
    category: 'Community',
    isPopular: false,
  },
  {
    title: 'Blogs',
    description: 'Read and write blogs on study strategies and academic tips.',
    icon: FileText,
    iconColor: 'text-pink-400',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    borderColor: 'border-pink-500/30',
    link: '/register',
    buttonText: 'Explore Blogs',
    category: 'Content',
    isPopular: false,
  },
  {
    title: 'Tech Roadmaps',
    description: 'Structured roadmaps for frontend, backend, DevOps, AI, and more.',
    icon: Map,
    iconColor: 'text-yellow-400',
    bgGradient: 'from-yellow-500/10 to-amber-500/10',
    borderColor: 'border-yellow-500/30',
    link: '/roadmaps',
    buttonText: 'Explore Roadmaps',
    category: 'Learning Paths',
    isPopular: true,
  },
  {
    title: 'Real-Time Chat',
    description: 'Engage with peers instantly and get help right when you need it.',
    icon: MessageCircle,
    iconColor: 'text-cyan-400',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
    link: '/chat',
    buttonText: 'Chat Now',
    category: 'Communication',
    isPopular: true,
  },
  {
    title: 'AcademicPal AI - Smart Search',
    description: 'AI-powered search for notes, references, and materials in seconds.',
    icon: Search,
    iconColor: 'text-emerald-400',
    bgGradient: 'from-emerald-500/10 to-green-500/10',
    borderColor: 'border-emerald-500/30',
    link: 'https://academicpal-ml-chatbot-g6gn.vercel.app/',
    buttonText: 'Try AI Search',
    category: 'AI Tools',
    isPopular: true,
  },
  {
    title: 'Flashcards',
    description: 'Memorize key concepts with interactive flashcards.',
    icon: Brain,
    iconColor: 'text-purple-400',
    bgGradient: 'from-purple-500/10 to-indigo-500/10',
    borderColor: 'border-purple-500/30',
    link: '/register',
    buttonText: 'Start Reviewing',
    category: 'Study Tools',
    isPopular: false,
  },
  {
    title: 'Study Planner',
    description: 'Plan your study schedule with customizable timetables.',
    icon: CalendarCheck,
    iconColor: 'text-blue-400',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    borderColor: 'border-blue-500/30',
    link: '/register',
    buttonText: 'Plan Now',
    category: 'Productivity',
    isPopular: false,
  },
  {
    title: 'Performance Analytics',
    description: 'Track study hours and visualize progress with detailed charts.',
    icon: BarChart4,
    iconColor: 'text-green-400',
    bgGradient: 'from-green-500/10 to-teal-500/10',
    borderColor: 'border-green-500/30',
    link: '/register',
    buttonText: 'View Analytics',
    category: 'Analytics',
    isPopular: false,
  },
  {
    title: 'Study Reminders',
    description: 'Personalized study notifications sent to your browser.',
    icon: AlarmClock,
    iconColor: 'text-amber-400',
    bgGradient: 'from-amber-500/10 to-yellow-500/10',
    borderColor: 'border-amber-500/30',
    link: '/register',
    buttonText: 'Set Reminders',
    category: 'Productivity',
    isPopular: false,
  },
  {
    title: 'Study Groups',
    description: 'Join or create study groups with like-minded peers.',
    icon: Users2,
    iconColor: 'text-pink-400',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    borderColor: 'border-pink-500/30',
    link: '/register',
    buttonText: 'Join Groups',
    category: 'Community',
    isPopular: false,
  },
  {
    title: 'Timetable Generator',
    description: 'Create academic timetables based on your preferences.',
    icon: CalendarDays,
    iconColor: 'text-violet-400',
    bgGradient: 'from-violet-500/10 to-purple-500/10',
    borderColor: 'border-violet-500/30',
    link: '/register',
    buttonText: 'Generate Timetable',
    category: 'Organization',
    isPopular: false,
  }
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
          0%, 100% {
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
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>
      
      <section className="relative py-20 px-4 bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl float-animation" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl float-animation" style={{animationDelay: '1.5s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-600/3 to-blue-600/3 rounded-full blur-3xl float-animation" style={{animationDelay: '3s'}} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-6 float-animation">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Powerful Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 tracking-tight">
              Key Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of tools designed to enhance your academic journey and boost your productivity.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                    hover:scale-[1.03] hover:-translate-y-2
                    hover:shadow-${feature.iconColor.split('-')[1]}-500/20
                    before:absolute before:inset-0 before:bg-gradient-to-br 
                    before:from-white/5 before:to-transparent 
                    before:opacity-0 before:transition-opacity before:duration-300
                    hover:before:opacity-100 rounded-2xl
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Animated border glow */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-r ${feature.borderColor?.replace('border-', 'from-')?.replace('/30', '/20') || 'from-gray-500/20'} to-transparent
                    blur-sm transition-opacity duration-500
                  `} />
                  
                  {/* Popular badge */}
                  {feature.isPopular && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold shadow-lg">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <CardContent className="p-6 relative z-10 h-full flex flex-col">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`
                        p-3 rounded-xl bg-black/20 ${feature.iconColor} 
                        group-hover:scale-110 group-hover:rotate-6 
                        transition-all duration-500 shadow-lg
                        group-hover:shadow-${feature.iconColor.split('-')[1]}-500/30
                      `}>
                        <IconComponent className="w-7 h-7 drop-shadow-sm" />
                      </div>
                      <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full border border-gray-700">
                        {feature.category}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <CardTitle className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-3 leading-tight">
                      {feature.title}
                    </CardTitle>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-1 mb-4">
                      {feature.description}
                    </p>
                    
                    {/* Button */}
                    <Link href={feature.link} target={feature.link.startsWith("http") ? "_blank" : "_self"} className="mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full bg-gray-900/50 border-gray-600 text-white hover:bg-gray-800/70 hover:border-gray-500 transition-all duration-300 group relative overflow-hidden shimmer-effect"
                      >
                        <span className="flex items-center justify-center gap-2 relative z-10">
                          <IconComponent className={`w-4 h-4 ${feature.iconColor}`} />
                          {feature.buttonText}
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                      </Button>
                    </Link>
                  </CardContent>

                  {/* Animated background particles */}
                  <div className="absolute top-4 right-8 w-2 h-2 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-white/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100" style={{animationDelay: '0.5s'}} />
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-lg font-semibold">Ready to get started?</span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using AcademicPal to enhance their learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <Star className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link href="/chat">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Try Live Chat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
