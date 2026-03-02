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

- `app/` — Pages & API routes (App Router)
- `components/` — Reusable React components
- `context/` — React Context providers (Auth)
- `lib/` — Utility functions & configurations
- `models/` — Mongoose data models
- `types/` — TypeScript type definitions
- `services/` — External service configurations
- `public/` — Static assets & PWA files

## Deployment

Deploys automatically to [Vercel](https://vercel.com/) on push to `main`.
