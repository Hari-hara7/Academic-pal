# AcademicPal — Frontend Application

This is the **Next.js 16** frontend for [AcademicPal](https://www.academicpal.in), an AI-powered academic companion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Tech Stack

- **Next.js 16** with App Router & Turbopack
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Firebase Auth** for authentication
- **MongoDB** with Mongoose ODM
- **ShadCN UI** for components

## Project Structure

```
academicpal/
├── .dockerignore
├── .env / .env.example
├── .gitignore
├── components.json
├── Dockerfile
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.js / next.config.ts
├── package.json / package-lock.json
├── postcss.config.mjs
├── release.config.js
├── tsconfig.json
│
├── app/
│   ├── globals.css, layout.tsx, page.tsx, favicon.ico
│   ├── about/, ai-assistant/, chat/, contact/, dashboardd/
│   ├── home/, login/, privacy-policy/, profile/, register/
│   ├── roadmaps/, settings/, signup/, terms-and-conditions/, upload/
│   │
│   ├── dashboard/
│   │   ├── DashboardClient.tsx, layout.tsx, page.tsx
│   │   ├── blogs/ (page, create, [id])
│   │   ├── flashcards/ (page, create, edit/[id], delete/[id])
│   │   ├── forum/ (page, create, [id])
│   │   ├── mind-map/ (page, create, edit/[id], delete/[id], view/[id])
│   │   ├── performance-analytics/ (page, create, edit/[id], delete/[id])
│   │   ├── study-groups/ (page, create, [id])
│   │   ├── study-planner/ (page, create, edit/[id], delete/[id])
│   │   ├── study-reminders/ (page, create, edit/[id], delete/[id])
│   │   ├── timetable/ (page, create, edit/[id], delete/[id])
│   │   └── tutoring/ (page, become, find-tutor, my-sessions, feedback/[sessionId], schedule/[tutorId])
│   │
│   └── api/
│       ├── ai/chat/
│       ├── auth/ (login, logout, register)
│       ├── blogs/ (create, get/[id], get-all, get-one/[id], comment, vote)
│       ├── flashcards/ (create, get, update, delete)
│       ├── forum/ (create, get, reply, thread)
│       ├── mind-map/ (create, get, update, delete)
│       ├── performance-analytics/ (create, get, update, delete)
│       ├── study-groups/ (create, get, getById, join)
│       ├── study-planner/ (create, get, update, delete)
│       ├── study-reminders/ (create, get, update, delete)
│       ├── timetable/ (create, get, update, delete)
│       └── tutoring/
│           ├── sessions/ (create, feedback, my)
│           └── tutors/ (create, list, register)
│
├── components/
│   ├── About, AdminPanel, Auth, BottomNav, Chat, ChatbotDemo
│   ├── ChatBox, ChatInput, ChatMessage, Contact, Contact2, Faq
│   ├── Footer, Footerhome, Glow, GoogleGeminiEffectDemo, Header
│   ├── HeroSection, Home, HowItWorks, KeyFeatures, KeyFeaturesNew
│   ├── LatestBlog, LoginFooter, MarqueeDemo, MessageBubble, NavBar
│   ├── Navbar2, NewsletterSignup, PopularResources, Profile
│   ├── ProtectedRoute, ResourceCard, Settings, SignInPage
│   ├── Support, Testimonal, TimelineDemo, Workit
│   ├── eldoraui/ (gitstarbutton, staticstepper)
│   ├── magicui/ (animated-shiny-text, border-beam, magic-card, marquee, meteors, neon-gradient-card, shine-border, sparkles-text)
│   └── ui/ (3d-marquee, accordion, avatar, badge, bento-grid, button, card, checkbox, dialog, dropdown-menu, glowing-effect, google-gemini-effect, input, label, progress, select, separator, sheet, skeleton, switch, tabs, textarea, timeline)
│
├── context/
│   └── AuthContext.tsx
│
├── hooks/
│   └── useFirebaseAuth.ts
│
├── lib/
│   ├── auth.ts, db.ts, firebase.ts, geminiClient.ts, hash.ts
│   ├── middleware.ts, socket.ts, socketServer.ts, time.ts, utils.ts
│
├── models/
│   ├── Blog, Flashcard, ForumPost, MindMap, Session
│   ├── StudyGroup, StudyReminder, StudySession, StudyTask
│   ├── Timetable, Tutor, User
│
├── public/
│   ├── Images: 1.1k.jpg, 2k.jpg, 4k.png, academicpal.jpg, academicpal architecture.jpg
│   ├── ads.jpg, adso.jpg, ai.jpeg, image1.png, notes.jpeg, pyqs.jpeg
│   ├── roadmap.webp, rtc.jpeg, Screenshot 2025-06-26 133640.png, upload.jpeg
│   ├── SVGs: file.svg, globe.svg, next.svg, vercel.svg, window.svg
│   ├── logo_academic_pal-removebg-preview.png, hand-drawn-nerd-cartoon-illustration.png
│   ├── PWA: manifest.json, robots.txt, sitemap.xml, sw.js, workbox-4754cb34.js
│   └── icons/icon-192x192.png
│
├── services/
│   └── firebaseConfig.ts
│
└── types/
    ├── blog, chat, forum, mindMap, resource.d, session
    ├── studyGroup, studyReminder, studySession, studyTask
    ├── timetable, tutor, user
```

## Deployment

Deploys automatically to [Vercel](https://vercel.com/) on push to `main`.
