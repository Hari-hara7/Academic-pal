"use client"

import {
  AlarmClock,
  BarChart4,
  Brain,
  CalendarCheck,
  CalendarDays,
  FileText,
  MessageCircle,
  NotebookText,
  Search,
  UploadCloud,
  LogOut,
  Users2,
  Mail,
  UserCircle,
  Info,
  Map,
  Star,
  TrendingUp,
  Clock,
  Settings,
  Bell,
  ChevronRight,
  Calendar,
  Activity,
  Sparkles,
  Target,
  Award,
  BookMarked,
  Clock3,
  TrendingDown,
  Zap,
  Coffee,
  CheckCircle2,
} from "lucide-react"

import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { GitStarButton } from "@/components/eldoraui/gitstarbutton"

const FEATURES = [
  {
    title: "Blogs",
    description: "Read and write blogs on study strategies, academic tips, and personal experiences.",
    icon: FileText,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Explore Blogs",
    category: "Content",
    isNew: false,
  },
  {
    title: "Comprehensive Notes",
    description: "Access crisp, well-organized notes for all subjects. Designed for clarity and speed.",
    icon: NotebookText,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/upload",
    buttonText: "Access Notes",
    category: "Study",
    isNew: false,
  },
  {
    title: 'Tech Roadmaps',
    description: 'Explore structured roadmaps for various technologies. Stay on track with curated paths for frontend, backend, DevOps, AI, and more.',
    icon: Map,
    iconColor: 'text-blue-400',
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: '/roadmaps',
    buttonText: 'Explore Roadmaps',
    category: "Learning",
    isNew: true,
  },
  {
    title: "Past Question Papers",
    description: "Prepare with confidence using past papers and understand exam patterns.",
    icon: FileText,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/upload",
    buttonText: "View Papers",
    category: "Exam Prep",
    isNew: false,
  },
  {
    title: "Real-Time Chat",
    description: "Engage with peers instantly. Ask, share, and get help live.",
    icon: MessageCircle,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/chat",
    buttonText: "Chat Now",
    category: "Community",
    isNew: false,
  },
  {
    title: "AcademicPal AI - Smart Notes Search",
    description: "Powered by AI, find what you need in seconds — notes, references, and more.",
    icon: Search,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "https://academicpal-ml-chatbot-g6gn.vercel.app/",
    buttonText: "Start Searching",
    category: "AI Tools",
    isNew: true,
  },
  {
    title: "Access & Contribute Materials",
    description: "Upload your resources and explore shared content from others.",
    icon: UploadCloud,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/upload",
    buttonText: "Upload or Explore",
    category: "Resources",
    isNew: false,
  },
  {
    title: "Flashcards",
    description: "Memorize key concepts with interactive, subject-based flashcards.",
    icon: Brain,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Start Reviewing",
    category: "Study",
    isNew: false,
  },
  {
    title: "Study Planner",
    description: "Plan your study schedule efficiently with timetables and task lists.",
    icon: CalendarCheck,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Plan Now",
    category: "Productivity",
    isNew: false,
  },
  {
    title: "Performance Analytics",
    description: "Track your study hours, weak areas, and progress with charts.",
    icon: BarChart4,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "View Stats",
    category: "Analytics",
    isNew: false,
  },
  {
    title: "Study Reminders",
    description: "Stay on track with browser-based personalized study alerts.",
    icon: AlarmClock,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Set Reminders",
    category: "Productivity",
    isNew: false,
  },
  {
    title: "Study Groups",
    description: "Join or create study groups with like-minded peers.",
    icon: Users2,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Join a Group",
    category: "Community",
    isNew: false,
  },
  {
    title: "Timetable Generator",
    description: "Easily create a personalized academic timetable.",
    icon: CalendarDays,
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    link: "/register",
    buttonText: "Generate Timetable",
    category: "Productivity",
    isNew: false,
  },
]

const Dashboard = () => {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        router.push("/signup")
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push("/signup")
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }

  if (!user)
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white text-lg font-semibold">
        Loading your dashboard...
      </div>
    )

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
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .feature-card-button {
          position: relative;
          overflow: hidden;
        }
        
        .feature-card-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.7s ease-in-out;
        }
        
        .feature-card-button:hover::before {
          left: 100%;
        }
      `}</style>
      
      <main className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float-animation" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{animationDelay: '1.5s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl float-animation" style={{animationDelay: '3s'}} />
        </div>        {/* Hero Section */}
        <div className="relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="relative px-4 sm:px-6 py-6 sm:py-8 md:px-8 lg:px-20 md:py-16">
          {/* Welcome Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 sm:px-4 md:px-6 py-2 mt-12 md:py-3 rounded-full bg-blue-500/20 border border-blue-500/30 mb-3 sm:mb-4 md:mb-6 float-animation">
              <UserCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />
              <span className="text-sm md:text-lg font-medium ">Welcome back!</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 px-2 sm:px-4">
              Hello, <span className="text-blue-500">{user.displayName?.split(" ")[0]}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto px-4">
              Your personalized academic companion awaits. Explore, learn, and excel with our comprehensive suite of tools.
            </p>
          </div>

          {/* GitHub Star Button */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
            <GitStarButton />
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 bg-black md:px-8 lg:px-20 pb-6 sm:pb-8 md:pb-12">{/* User Profile Section */}
        <div className="grid grid-cols-1 bg-black lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {/* Profile Card */}
          <Card className="lg:col-span-1 bg-black border-gray-700 shadow-2xl"> 
            <CardHeader className="text-center pb-3 md:pb-4">
              <div className="relative inline-block mb-3 md:mb-4">
                <Image
                  src={user.photoURL || "/default-profile.png"}
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-blue-500 shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full border-2 md:border-4 border-black flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{user.displayName}</h2>
              <p className="text-gray-400 flex items-center justify-center gap-2 text-sm md:text-base">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                <span className="truncate max-w-full">{user.email}</span>
              </p>
              <Badge className="mt-2 md:mt-3 bg-blue-500 text-white border-0 text-xs md:text-sm">
                Premium Student
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-pointer">
                  <div className="text-2xl font-bold text-blue-400">13+</div>
                  <div className="text-xs text-gray-400">Features</div>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-pointer">
                  <div className="text-2xl font-bold text-blue-400">∞</div>
                  <div className="text-xs text-gray-400">Resources</div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="space-y-2">
                <h4 className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-wide">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                  <Link href="/chat">
                    <Button variant="outline" size="sm" className="w-full text-xs border-gray-600 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 py-2">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">Chat</span>
                    </Button>
                  </Link>
                  <Link href="/upload">
                    <Button variant="outline" size="sm" className="w-full text-xs border-gray-600 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 py-2">
                      <UploadCloud className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">Upload</span>
                    </Button>
                  </Link>
                  <Link href="/roadmaps">
                    <Button variant="outline" size="sm" className="w-full text-xs border-gray-600 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 py-2">
                      <Map className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">Roadmaps</span>
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="w-full text-xs border-gray-600 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 py-2">
                    <Coffee className="w-3 h-3 mr-1" />
                    <span className="hidden sm:inline">Break</span>
                  </Button>
                </div>
              </div>
              
              <Separator className="bg-gray-700" />
              <div className="space-y-2">
              
              </div>
            </CardContent>
            <CardFooter>
             
            </CardFooter>
          </Card>

          {/* Quick Stats */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-white">Platform Overview</h3>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 self-start sm:self-auto">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                <span className="text-xs md:text-sm text-blue-400 font-medium">All features ready</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="bg-black border-white/20 shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-400 text-xs md:text-sm font-medium">Available Features</p>
                      <p className="text-2xl md:text-3xl font-bold text-white">13+</p>
                      <p className="text-gray-400 text-xs md:text-sm">Study tools & resources</p>
                      <div className="flex items-center gap-1 mt-1 md:mt-2">
                        <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-400" />
                        <span className="text-xs text-blue-400">All ready to use</span>
                      </div>
                    </div>
                    <div className="p-2 md:p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                      <NotebookText className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                    <div className="bg-blue-500 h-1.5 md:h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black border-white/20 shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-400 text-xs md:text-sm font-medium">AI-Powered Search</p>
                      <p className="text-2xl md:text-3xl font-bold text-white">Live</p>
                      <p className="text-gray-400 text-xs md:text-sm">Smart notes finder</p>
                      <div className="flex items-center gap-1 mt-1 md:mt-2">
                        <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-400" />
                        <span className="text-xs text-blue-400">Fully functional</span>
                      </div>
                    </div>
                    <div className="p-2 md:p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                      <Search className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                    <div className="bg-blue-500 h-1.5 md:h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black border-white/20 shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-400 text-xs md:text-sm font-medium">Real-time Chat</p>
                      <p className="text-2xl md:text-3xl font-bold text-white">Active</p>
                      <p className="text-gray-400 text-xs md:text-sm">Connect with peers</p>
                      <div className="flex items-center gap-1 mt-1 md:mt-2">
                        <Users2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-400" />
                        <span className="text-xs text-blue-400">Join conversations</span>
                      </div>
                    </div>
                    <div className="p-2 md:p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                    <div className="bg-blue-500 h-1.5 md:h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black border-white/20 shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-400 text-xs md:text-sm font-medium">Resource Sharing</p>
                      <p className="text-2xl md:text-3xl font-bold text-white">Open</p>
                      <p className="text-gray-400 text-xs md:text-sm">Upload & download</p>
                      <div className="flex items-center gap-1 mt-1 md:mt-2">
                        <UploadCloud className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-400" />
                        <span className="text-xs text-blue-400">Share knowledge</span>
                      </div>
                    </div>
                    <div className="p-2 md:p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                      <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                    <div className="bg-blue-500 h-1.5 md:h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-black border-gray-700 shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Available Features</h4>
                      <p className="text-sm text-gray-400">Explore what you can do with AcademicPal</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-black/50">
                    Explore All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <div className="p-2 rounded-full bg-blue-500/20">
                      <Search className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">AI-Powered Notes Search</p>
                      <p className="text-xs text-gray-400">Find notes instantly with smart search • Ready to use</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <div className="p-2 rounded-full bg-blue-500/20">
                      <MessageCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">Real-time Peer Chat</p>
                      <p className="text-xs text-gray-400">Connect with fellow students • Available now</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <div className="p-2 rounded-full bg-blue-500/20">
                      <Map className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">Tech Roadmaps</p>
                      <p className="text-xs text-gray-400">Structured learning paths for various technologies • Explore now</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="mb-12">
          <Card className="bg-black border-white/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5" />
            <CardContent className="relative p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-blue-500 animate-pulse float-animation">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Daily <span className="text-blue-500">Motivation</span>
                </h3>
              </div>
              <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </p>
              <p className="text-sm text-gray-500">— Winston Churchill</p>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span>Start your learning journey</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>Achieve your academic goals</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Explore Features</h3>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700/50 self-start sm:self-auto">
              View All
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {FEATURES.map(({ title, description, icon: Icon, iconColor, bgColor, borderColor, link, buttonText, category, isNew }, index) => (
              <Card
                key={title}
                className={`
                  group relative overflow-hidden
                  bg-gradient-to-br ${bgColor} 
                  border ${borderColor} backdrop-blur-sm 
                  shadow-xl hover:shadow-2xl 
                  transition-all duration-500 ease-out
                  hover:scale-[1.03] hover:-translate-y-2
                  hover:shadow-${iconColor.split('-')[1]}-500/20
                  before:absolute before:inset-0 before:bg-gradient-to-br 
                  before:from-white/5 before:to-transparent 
                  before:opacity-0 before:transition-opacity before:duration-300
                  hover:before:opacity-100
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                {/* Animated border glow */}
                <div className={`
                  absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
                  bg-gradient-to-r ${borderColor.replace('border-', 'from-').replace('/30', '/40')} to-transparent
                  blur-sm transition-opacity duration-500
                `} />
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`
                      p-3 rounded-xl bg-black/20 ${iconColor} 
                      group-hover:scale-110 group-hover:rotate-6 
                      transition-all duration-500 shadow-lg
                      group-hover:shadow-${iconColor.split('-')[1]}-500/30
                    `}>
                      <Icon className="w-6 h-6 drop-shadow-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                      {isNew && (
                        <Badge className="bg-blue-500 text-white text-xs px-2 py-1 animate-pulse shadow-lg border-0">
                          NEW
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 group-hover:border-white/50 group-hover:text-white/90 transition-all duration-300">
                        {category}
                      </Badge>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                    {title}
                  </h4>
                </CardHeader>
                <CardContent className="pb-4 relative z-10">
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {description}
                  </p>
                </CardContent>
                <CardFooter className="pt-4 relative z-20">
                  <Link href={link} target={link.startsWith("http") ? "_blank" : "_self"} className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full bg-black/50 border-gray-600 text-white hover:bg-black/70 hover:border-gray-500 transition-colors duration-200 relative z-30"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {buttonText}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>

                {/* Animated background particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100" style={{animationDelay: '0.5s'}} />
              </Card>
            ))}
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="mb-8 sm:mb-12">
          <Card className="bg-black border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5" />
            <CardContent className="p-6 sm:p-8 relative z-10">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-blue-500">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Ready to <span className="text-blue-500">Excel?</span></h3>
                <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
                  Start your academic journey with AcademicPal's comprehensive suite of tools. 
                  Join thousands of students who are already achieving their goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2">
                  <Link href="/chat">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 w-full sm:w-auto">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="https://academicpal-ml-chatbot-g6gn.vercel.app/" target="_blank">
                    <Button 
                   
                      className="border-white/30 text-white hover:bg-white/10 hover:border-blue-500 px-6 py-2 rounded-full font-medium transition-all duration-300 w-full sm:w-auto hover:scale-105 shadow-md hover:shadow-lg backdrop-blur-sm"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Try AI Search
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 sm:pt-12 border-t border-gray-800">
          <div className="space-y-4">
            <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto px-4">
              AcademicPal - Your trusted partner in academic excellence. 
              <br />
              <span className="italic text-gray-600">Not affiliated with NMAMIT College.</span>
            </p>
            <div className="flex justify-center items-center gap-2 sm:gap-4 px-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span className="text-xs sm:text-sm text-gray-400">Rated 4.9/5 by 4,000+ students</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
            <div className="flex justify-center items-center gap-4 sm:gap-6 pt-2">
              <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                Open Source
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                Student Built
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                Community Driven
              </Badge>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default Dashboard
