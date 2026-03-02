<div align="center">
  <img src="academicpal/public/academicpal.jpg" alt="AcademicPal Logo" width="120" height="120" style="border-radius: 20px;"/>
  
  # Academic Pal
  
  ### Your AI-Powered Academic Companion for Smarter Learning
  
  [![Website](https://img.shields.io/badge/Live-academicpal.in-000000?style=for-the-badge)](https://www.academicpal.in)
  [![License](https://img.shields.io/github/license/Hari-hara7/Academic-pal?style=for-the-badge&color=000000)](LICENSE)
  [![Stars](https://img.shields.io/github/stars/Hari-hara7/Academic-pal?style=for-the-badge&color=000000)](https://github.com/Hari-hara7/Academic-pal/stargazers)
  [![Forks](https://img.shields.io/github/forks/Hari-hara7/Academic-pal?style=for-the-badge&color=000000)](https://github.com/Hari-hara7/Academic-pal/network/members)

  <br/>

  [![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)

</div>

---

##  Overview

**AcademicPal** is a comprehensive full-stack web application designed to empower B.Tech students with AI-powered study tools, real-time collaboration, and community-driven academic resources. Built with modern technologies and a student-first approach.

<div align="center">

|  Smart Learning | Collaboration |  Analytics |  Secure Auth |
|:---:|:---:|:---:|:---:|
| AI-powered search | Real-time chat | Performance tracking | Firebase + OAuth |

</div>

---

##  Features

###  AI-Powered Tools

| Feature | Description |
|---------|-------------|
| **AI Assistant** | Gemini-powered chatbot for instant academic help and doubt solving |
| **Smart Search** | AI-enhanced search across all resources with semantic understanding |
| **Study Planner** | Intelligent schedule generation based on your goals and deadlines |

###  Academic Resources

| Feature | Description |
|---------|-------------|
| **Notes Repository** | Well-organized, exam-ready notes by semester and branch |
| **Question Papers** | Previous years' papers with pattern analysis |
| **Flashcards** | Create, edit, and review flashcards for active recall learning |
| **Mind Maps** | Visual learning with interactive mind map creator |
| **Blogs** | Read and write study tips, experiences, and guides |

###  Collaboration

| Feature | Description |
|---------|-------------|
| **Real-Time Chat** | Instant messaging with peers using Socket.io |
| **Study Groups** | Create or join subject-specific study communities |
| **Discussion Forums** | Q&A threads with upvoting and threaded replies |
| **Peer Tutoring** | Connect with tutors, schedule sessions, and leave feedback |

###  Productivity

| Feature | Description |
|---------|-------------|
| **Performance Analytics** | Track study hours, goals achieved, and identify weak areas |
| **Timetable Generator** | Create and manage your class/study schedules |
| **Study Reminders** | Smart notifications to keep you on track |
| **Upload & Share** | Contribute and explore peer materials |

###  Authentication & Security

| Feature | Description |
|---------|-------------|
| **Multi-Provider Auth** | Google & GitHub OAuth via Firebase |
| **Protected Routes** | Secure access control for authenticated pages |
| **Session Management** | Persistent login across browser sessions |

---

##  System Architecture

<div align="center">
  <img src="academicpal/public/academicpal architecture.jpg" alt="AcademicPal System Architecture" width="100%"/>
  <p><em>High-level architecture of AcademicPal</em></p>
</div>

---

##  Tech Stack

### Frontend
```
Next.js 16        →  React framework with App Router & Turbopack
TypeScript        →  Type-safe development
Tailwind CSS      →  Utility-first styling
Framer Motion     →  Smooth animations
ShadCN UI         →  Accessible component library
Lucide React      →  Modern icon system
```

### Backend
```
Next.js API Routes  →  Serverless API endpoints
Mongoose            →  MongoDB ODM
Firebase Auth       →  Authentication & user management
Socket.io           →  Real-time communication
```

### Database & Storage
```
MongoDB      →  Primary database 
Firebase     →  Auth & real-time features
```

### AI & External Services
```
Google Gemini    →  AI chatbot & content generation
```

### DevOps
```
Vercel           →  Production deployment
Docker           →  Containerization
GitHub Actions   →  CI/CD pipelines
```

---

##  Project Structure

```
academicpal/
├── .dockerignore
├── .env
├── .env.example
├── .gitignore
├── components.json
├── Dockerfile
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.js
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── release.config.js
├── tsconfig.json
│
├── app/                                    # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   ├── ai-assistant/
│   │   └── page.tsx
│   ├── chat/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── dashboardd/
│   │   └── page.tsx
│   ├── home/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── roadmaps/
│   │   └── page.tsx
│   ├── settings/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   ├── terms-and-conditions/
│   │   └── page.tsx
│   ├── upload/
│   │   └── page.tsx
│   │
│   ├── dashboard/                          # User Dashboard
│   │   ├── DashboardClient.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   │
│   │   ├── blogs/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── flashcards/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── delete/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── edit/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── forum/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── mind-map/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── delete/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── edit/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── view/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── performance-analytics/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── delete/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── edit/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── study-groups/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── study-planner/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── delete/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── edit/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── study-reminders/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── delete/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── edit/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── timetable/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   ├── delete/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── edit/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   └── tutoring/
│   │       ├── page.tsx
│   │       ├── become/
│   │       │   └── page.tsx
│   │       ├── feedback/
│   │       │   └── [sessionId]/
│   │       │       └── page.tsx
│   │       ├── find-tutor/
│   │       │   └── page.tsx
│   │       ├── my-sessions/
│   │       │   └── page.tsx
│   │       └── schedule/
│   │           └── [tutorId]/
│   │               └── page.tsx
│   │
│   └── api/                                # API Routes
│       ├── ai/
│       │   └── chat/
│       │       └── route.ts
│       │
│       ├── auth/
│       │   ├── login/
│       │   │   └── route.ts
│       │   ├── logout/
│       │   │   └── route.ts
│       │   └── register/
│       │       └── route.ts
│       │
│       ├── blogs/
│       │   ├── comment/
│       │   │   └── route.ts
│       │   ├── create/
│       │   │   └── route.ts
│       │   ├── get/
│       │   │   └── [id]/
│       │   │       └── route.ts
│       │   ├── get-all/
│       │   │   └── route.ts
│       │   ├── get-one/
│       │   │   └── [id]/
│       │   │       └── route.ts
│       │   └── vote/
│       │       └── route.ts
│       │
│       ├── flashcards/
│       │   ├── create/
│       │   │   └── route.ts
│       │   ├── delete/
│       │   │   └── route.ts
│       │   ├── get/
│       │   │   └── route.ts
│       │   └── update/
│       │       └── route.ts
│       │
│       ├── forum/
│       │   ├── create/
│       │   │   └── route.ts
│       │   ├── get/
│       │   │   └── route.ts
│       │   ├── reply/
│       │   │   └── route.ts
│       │   └── thread/
│       │       └── route.ts
│       │
│       ├── mind-map/
│       │   ├── create/
│       │   │   └── route.ts
│       │   ├── delete/
│       │   │   └── route.ts
│       │   ├── get/
│       │   │   └── route.ts
│       │   └── update/
│       │       └── route.ts
│       │
│       ├── performance-analytics/
│       │   ├── create/
│       │   │   └── route.ts
│       │   ├── delete/
│       │   │   └── route.ts
│       │   ├── get/
│       │   │   └── route.ts
│       │   └── update/
│       │       └── route.ts
│       │
│       ├── study-groups/
│       │   ├── create/
│       │   │   └── route.ts
│       │   ├── get/
│       │   │   └── route.ts
│       │   ├── getById/
│       │   │   └── route.ts
│       │   └── join/
│       │       └── route.ts
│       │
│       ├── study-planner/
│       │   ├── create/
│       │   │   └── route.ts
│       │   ├── delete/
│       │   │   └── route.ts
│       │   ├── get/
│       │   │   └── route.ts
│       │   └── update/
│       │       └── route.ts
│       │
│       ├── study-reminders/
│       │   ├── create/
│       │   │   └── route.ts
│       │   ├── delete/
│       │   │   └── route.ts
│       │   ├── get/
│       │   │   └── route.ts
│       │   └── update/
│       │       └── route.ts
│       │
│       ├── timetable/
│       │   ├── create/
│       │   │   └── route.ts
│       │   ├── delete/
│       │   │   └── route.ts
│       │   ├── get/
│       │   │   └── route.ts
│       │   └── update/
│       │       └── route.ts
│       │
│       └── tutoring/
│           ├── sessions/
│           │   ├── create/
│           │   │   └── route.ts
│           │   ├── feedback/
│           │   │   └── route.ts
│           │   └── my/
│           │       └── route.ts
│           └── tutors/
│               ├── create/
│               │   └── route.ts
│               ├── list/
│               │   └── route.ts
│               └── register/
│                   └── route.ts
│
├── components/                             # React Components
│   ├── About.tsx
│   ├── AdminPanel.tsx
│   ├── Auth.tsx
│   ├── BottomNav.tsx
│   ├── Chat.tsx
│   ├── ChatbotDemo.tsx
│   ├── ChatBox.tsx
│   ├── ChatInput.tsx
│   ├── ChatMessage.tsx
│   ├── Contact.tsx
│   ├── Contact2.tsx
│   ├── Faq.tsx
│   ├── Footer.tsx
│   ├── Footerhome.tsx
│   ├── Glow.tsx
│   ├── GoogleGeminiEffectDemo.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── Home.tsx
│   ├── HowItWorks.tsx
│   ├── KeyFeatures.tsx
│   ├── KeyFeaturesNew.tsx
│   ├── LatestBlog.tsx
│   ├── LoginFooter.tsx
│   ├── MarqueeDemo.tsx
│   ├── MessageBubble.tsx
│   ├── NavBar.tsx
│   ├── Navbar2.tsx
│   ├── NewsletterSignup.tsx
│   ├── PopularResources.tsx
│   ├── Profile.tsx
│   ├── ProtectedRoute.tsx
│   ├── ResourceCard.tsx
│   ├── Settings.tsx
│   ├── SignInPage.tsx
│   ├── Support.tsx
│   ├── Testimonal.tsx
│   ├── TimelineDemo.tsx
│   ├── Workit.tsx
│   │
│   ├── eldoraui/
│   │   ├── gitstarbutton.tsx
│   │   └── staticstepper.tsx
│   │
│   ├── magicui/
│   │   ├── animated-shiny-text.tsx
│   │   ├── border-beam.tsx
│   │   ├── magic-card.tsx
│   │   ├── marquee.tsx
│   │   ├── meteors.tsx
│   │   ├── neon-gradient-card.tsx
│   │   ├── shine-border.tsx
│   │   └── sparkles-text.tsx
│   │
│   └── ui/
│       ├── 3d-marquee.tsx
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── bento-grid.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── glowing-effect.tsx
│       ├── google-gemini-effect.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── progress.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── switch.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       └── timeline.tsx
│
├── context/
│   └── AuthContext.tsx
│
├── hooks/
│   └── useFirebaseAuth.ts
│
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   ├── firebase.ts
│   ├── geminiClient.ts
│   ├── hash.ts
│   ├── middleware.ts
│   ├── socket.ts
│   ├── socketServer.ts
│   ├── time.ts
│   └── utils.ts
│
├── models/
│   ├── Blog.ts
│   ├── Flashcard.ts
│   ├── ForumPost.ts
│   ├── MindMap.ts
│   ├── Session.ts
│   ├── StudyGroup.ts
│   ├── StudyReminder.ts
│   ├── StudySession.ts
│   ├── StudyTask.ts
│   ├── Timetable.ts
│   ├── Tutor.ts
│   └── User.ts
│
├── public/
│   ├── 1.1k.jpg
│   ├── 2k.jpg
│   ├── 4k.png
│   ├── academicpal architecture.jpg
│   ├── academicpal.jpg
│   ├── ads.jpg
│   ├── adso.jpg
│   ├── ai.jpeg
│   ├── file.svg
│   ├── globe.svg
│   ├── hand-drawn-nerd-cartoon-illustration.png
│   ├── image1.png
│   ├── logo_academic_pal-removebg-preview.png
│   ├── manifest.json
│   ├── next.svg
│   ├── notes.jpeg
│   ├── pyqs.jpeg
│   ├── roadmap.webp
│   ├── robots.txt
│   ├── rtc.jpeg
│   ├── Screenshot 2025-06-26 133640.png
│   ├── sitemap.xml
│   ├── sw.js
│   ├── upload.jpeg
│   ├── vercel.svg
│   ├── window.svg
│   ├── workbox-4754cb34.js
│   └── icons/
│       └── icon-192x192.png
│
├── services/
│   └── firebaseConfig.ts
│
└── types/
    ├── blog.ts
    ├── chat.ts
    ├── forum.ts
    ├── mindMap.ts
    ├── resource.d.ts
    ├── session.ts
    ├── studyGroup.ts
    ├── studyReminder.ts
    ├── studySession.ts
    ├── studyTask.ts
    ├── timetable.ts
    ├── tutor.ts
    └── user.ts
```

---

##  Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** or **yarn**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/Hari-hara7/Academic-pal.git
cd Academic-pal/academicpal

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with the following:

```env
# Database
MONGODB_URI="your_mongodb_connection_string"

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY="your_api_key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_auth_domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"

# AI
GEMINI_API_KEY="your_gemini_api_key"

# Auth
JWT_SECRET="your_jwt_secret"
```

---

##  API Reference

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login user |
| `POST` | `/api/auth/logout` | Logout user |

### AI
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/ai/chat` | Send message to AI assistant |

### Flashcards
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/flashcards/get` | Get user's flashcards |
| `POST` | `/api/flashcards/create` | Create flashcard |
| `PUT` | `/api/flashcards/update` | Update flashcard |
| `DELETE` | `/api/flashcards/delete` | Delete flashcard |

### Blogs
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/blogs/get-all` | Get all blog posts |
| `GET` | `/api/blogs/get-one` | Get single blog post |
| `POST` | `/api/blogs/create` | Create blog post |
| `POST` | `/api/blogs/vote` | Upvote/downvote a blog |
| `POST` | `/api/blogs/comment` | Add comment to blog |

### Forum
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/forum/get` | Get forum threads |
| `POST` | `/api/forum/create` | Create new thread |
| `POST` | `/api/forum/reply` | Reply to a thread |
| `GET` | `/api/forum/thread` | Get thread details |

### Study Groups
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/study-groups/get` | List all groups |
| `POST` | `/api/study-groups/create` | Create new group |
| `POST` | `/api/study-groups/join` | Join a group |

### Mind Maps
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET/POST` | `/api/mind-map` | CRUD operations for mind maps |

### Study Planner & Productivity
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET/POST` | `/api/study-planner` | Manage study plans |
| `GET/POST` | `/api/timetable` | Manage timetables |
| `GET/POST` | `/api/study-reminders` | Manage study reminders |
| `GET` | `/api/performance-analytics` | Get performance data |

### Tutoring
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET/POST` | `/api/tutoring/tutors` | Manage tutors |
| `GET/POST` | `/api/tutoring/sessions` | Manage tutoring sessions |

---

##  Development

### Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

##  Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker

```bash
# Build image
docker build -t academicpal .

# Run container
docker run -p 3000:3000 academicpal
```

---

##  Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) for details.

---

##  Author

<div align="center">

**Hariharanath**

Full Stack Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://hariharanath.is-cod.in/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/hariharanath)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Hari-hara7)

</div>

---

##  Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ShadCN UI](https://ui.shadcn.com/) - UI components
- [Firebase](https://firebase.google.com/) - Authentication
- [Prisma](https://prisma.io/) - Database ORM
- [Vercel](https://vercel.com/) - Deployment

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ for students, by students

</div>
