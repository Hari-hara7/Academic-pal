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

## 🏗️ System & Deployment Architecture

> Visualizing how AcademicPal's components interact and are deployed. Dark-themed for clarity and modern aesthetics.

```mermaid
%%{init: {"theme": "dark", "themeVariables": {"background": "#111111", "primaryColor": "#1e1e1e", "primaryTextColor": "#ffffff", "primaryBorderColor": "#ffffff", "lineColor": "#ffffff", "secondaryColor": "#1a1a1a", "tertiaryColor": "#0d0d0d", "clusterBkg": "#1a1a1a", "titleColor": "#ffffff", "edgeLabelBackground": "#111111"}}}%%
graph TB
    subgraph Client["🖥️ Client"]
        Browser["User Browser"]
    end

    subgraph FE["⚛️ Frontend — Next.js 16 + TypeScript"]
        UI["React UI Components\nTailwind CSS · ShadCN · Framer Motion"]
        AuthClient["Firebase Auth Client\nGoogle / GitHub OAuth"]
        SocketClient["Socket.io Client\nReal-time Chat"]
    end

    subgraph BE["🔧 Backend — Next.js API Routes (Serverless)"]
        APIRoutes["API Routes /api/*\nREST Endpoints"]
        SocketServer["Socket.io Server\nReal-time Events"]
    end

    subgraph AI["🤖 AI & ML"]
        GeminiAPI["Google Gemini API\nAI Chatbot & Content"]
        MLHandler["ML Model Handler\nPython Environment"]
    end

    subgraph DB["🗄️ Data Layer"]
        MongoDB[("MongoDB\nUsers · Blogs · Forums\nFlashcards · Plans")]
        FirestoreDB[("Firebase Firestore\nReal-time & Auth Data")]
    end

    subgraph Deploy["🚀 Deployment & DevOps"]
        Vercel["Vercel\nProduction Hosting + CDN"]
        Docker["Docker\nContainerization"]
        CI["GitHub Actions\nCI/CD Pipeline"]
    end

    Browser -->|HTTPS| UI
    UI --> AuthClient
    UI --> SocketClient
    UI -->|API calls| APIRoutes
    AuthClient <-->|OAuth| FirestoreDB
    SocketClient <-->|WebSocket| SocketServer
    APIRoutes -->|Mongoose ODM| MongoDB
    APIRoutes -->|AI Requests| GeminiAPI
    APIRoutes -->|ML Inference| MLHandler
    MLHandler --> MongoDB
    SocketServer --> FirestoreDB
    CI -->|Build & Test| Docker
    CI -->|Auto Deploy| Vercel
    Docker -->|Container| Vercel
```

### 📑 Architecture Components

| Component | Technology | Description |
|-----------|-----------|-------------|
| **User Interface** | Next.js 16, React, TypeScript | Renders all pages, handles routing, animations with Framer Motion, and accessible UI via ShadCN |
| **Authentication** | Firebase Auth (Google & GitHub OAuth) | Secure multi-provider login, persistent sessions, and protected route access control |
| **API Layer** | Next.js Serverless API Routes | Handles all server-side logic — CRUD operations, AI requests, analytics, and real-time coordination |
| **Real-time Engine** | Socket.io (Client + Server) | Powers live group chat, peer notifications, and collaborative study features |
| **AI Assistant** | Google Gemini API | Provides the AI chatbot, smart search, study content generation, and doubt solving |
| **ML Model Handler** | Python Environment | Runs ML models for academic recommendations, performance predictions, and intelligent suggestions |
| **Primary Database** | MongoDB + Mongoose ODM | Stores users, flashcards, blogs, forums, study plans, timetables, tutoring, and mind maps |
| **Real-time Storage** | Firebase Firestore | Manages authentication state, real-time data sync, and live collaboration |
| **Hosting** | Vercel | Production deployment with auto-scaling, serverless functions, edge network, and global CDN |
| **Containerization** | Docker | Packages the application for reproducible environments across development, staging, and production |
| **CI/CD** | GitHub Actions | Automates testing, linting, Docker builds, and deployments on every push to `main` |

---

## 📦 How to Deploy

### Option 1: Vercel (Recommended — Zero Config)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Navigate to the app directory
cd academicpal

# 3. Deploy to production
vercel --prod
```

> Set your environment variables in the Vercel dashboard under **Project → Settings → Environment Variables**.

### Option 2: Docker

```bash
# 1. Build the Docker image
docker build -t academicpal .

# 2. Run the container (pass env vars)
docker run -p 3000:3000 \
  -e MONGODB_URI="your_mongodb_uri" \
  -e NEXT_PUBLIC_FIREBASE_API_KEY="your_key" \
  -e GEMINI_API_KEY="your_gemini_key" \
  academicpal
```

### Option 3: Manual (Node.js)

```bash
# 1. Install dependencies
cd academicpal && npm install

# 2. Configure environment
cp .env.example .env
# Fill in all required values in .env

# 3. Build for production
npm run build

# 4. Start the server
npm run start
```

### Required Environment Variables

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# AI
GEMINI_API_KEY=your_gemini_api_key

# Auth
JWT_SECRET=your_jwt_secret
```

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
├── app/                          # Next.js App Router
│   ├── home/                     # Main dashboard
│   ├── chat/                     # Real-time chat
│   ├── ai-assistant/             # AI chatbot
│   ├── upload/                   # Resource upload
│   ├── profile/                  # User profile
│   ├── settings/                 # User settings
│   ├── dashboard/                # User dashboard
│   │   ├── flashcards/           # Flashcard CRUD
│   │   ├── study-planner/        # Study planning
│   │   ├── timetable/            # Schedule management
│   │   ├── blogs/                # Blog system
│   │   ├── forum/                # Discussion forums
│   │   ├── mind-map/             # Mind map creator
│   │   ├── study-groups/         # Group collaboration
│   │   ├── study-reminders/      # Reminder system
│   │   ├── tutoring/             # Peer tutoring
│   │   └── performance-analytics/
│   │
│   └── api/                      # API Routes
│       ├── auth/                 # Authentication endpoints
│       ├── ai/                   # AI chat endpoint
│       ├── blogs/                # Blog CRUD
│       ├── flashcards/           # Flashcard CRUD
│       ├── forum/                # Forum endpoints
│       ├── mind-map/             # Mind map CRUD
│       ├── study-groups/         # Group management
│       ├── study-planner/        # Planner CRUD
│       ├── study-reminders/      # Reminder CRUD
│       ├── timetable/            # Timetable CRUD
│       ├── tutoring/             # Tutoring system
│       └── performance-analytics/
│
├── components/                   # React components
│   ├── ui/                       # ShadCN UI components
│   ├── magicui/                  # Custom UI effects
│   └── eldoraui/                 # Additional UI components
│
├── context/                      # React Context providers
│   └── AuthContext.tsx           # Global auth state
│
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── models/                       # Data models
├── public/                       # Static assets
├── services/                     # External service configs
└── types/                        # TypeScript definitions
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
