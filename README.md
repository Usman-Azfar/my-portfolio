<div align="center">

# Usman Azfar — Portfolio

**Software Engineer · Researcher · Systems Builder**

*I build dependable software for high-consequence systems — from financial platforms to applied AI.*

[![Live Site](https://img.shields.io/badge/Live_Site-my--portfolio--usman--0a4c.vercel.app-7CC7FF?style=for-the-badge&logo=vercel&logoColor=white)](https://my-portfolio-usman-0a4c.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

**[View the live portfolio →](https://my-portfolio-usman-0a4c.vercel.app)**

</div>

---

## About

This is the source code for my personal portfolio. It's built as a research and engineering showcase rather than a generic developer template. It covers my work across AI, edge systems, financial infrastructure and software engineering, and everything on it is real: actual publications, projects, credentials and experience.

## What's inside

| Section | What it shows |
| --- | --- |
| **Hero** | A 3D animated neural field built with React Three Fiber |
| **About & Education** | Background, academic record and linked transcripts |
| **Tech Stack** | Skills grouped by domain, each linked to the projects and roles where I used it |
| **Experience** | Professional roles and a live engineering journal of real problems solved on the job |
| **Research** | *HelmX*, a multimodal AI smart helmet for road safety (bachelor's thesis, accepted) |
| **Projects** | Marlin, HelmX, CampusCore, MoneyMate and an 8086 register debugger, each with a detail view |
| **Courses & Certifications** | DeepLearning.AI, AMD AI Academy and Google certificates with inline previews |
| **Leadership & Achievements** | Teaching, co-founding Aetarix, community work and competition results |

## Features

- **Cinematic dark interface** with a 3D hero scene, scroll-reveal animations and a consistent design system
- **Responsive design** that works on phones, tablets and desktops
- **Content-driven architecture**: almost all content and theme values live in one typed config file, [`src/config/site.ts`](src/config/site.ts)
- **Live engineering journal** synced from Cloud Firestore in real time, with a fallback to local data so the site never depends on the backend
- **Private admin editor** at `/admin`, protected by Firebase Authentication and Firestore Security Rules
- **SEO-ready**, with metadata, Open Graph tags, a sitemap and `robots.txt`

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| Motion & 3D | Framer Motion, Three.js, React Three Fiber, Drei |
| Backend (optional) | Firebase Authentication, Cloud Firestore |
| Tooling | ESLint 9 |
| Hosting | Vercel |

## Project structure

```text
src/
├── app/                  # Routes, root layout, /admin editor, sitemap and robots
├── components/           # UI grouped by portfolio section (hero, research, projects…)
├── config/site.ts        # Content and theme for the whole site
├── lib/                  # Firebase client, journal hook and shared utilities
└── types/index.ts        # Shared TypeScript models
public/documents/         # CV, transcripts and certificates (served publicly)
```

## Getting started

**Prerequisites:** Node.js 20.9 or newer

```bash
git clone https://github.com/Usman-Azfar/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Firebase setup (optional)

The public site works without Firebase. Firebase only powers the live engineering journal and the `/admin` editor. To enable it, copy `.env.example` to `.env.local` and fill in your Firebase web app config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

> [!IMPORTANT]
> `NEXT_PUBLIC_` values are bundled into browser code, so never put passwords, private keys or service-account credentials in them. Access control is enforced by [`firestore.rules`](firestore.rules), which allows journal writes only from the configured admin account. Deploy and review those rules before you enable the editor.

## Deployment

The site is deployed on **Vercel** at **[my-portfolio-usman-0a4c.vercel.app](https://my-portfolio-usman-0a4c.vercel.app)**.

1. Import the repository into Vercel. It detects Next.js automatically.
2. *(Optional)* Add the five Firebase variables under **Settings → Environment Variables**.
3. Deploy. If you change environment variables later, redeploy so they take effect.

## Editing content

- **Portfolio content and theme:** [`src/config/site.ts`](src/config/site.ts)
- **Courses and certifications:** [`src/components/certifications/Certifications.tsx`](src/components/certifications/Certifications.tsx), with files in `public/documents/certificates/`
- **Engineering journal:** the `/admin` editor (when Firebase is configured)

## Security

- Never commit `.env.local`, private keys or service-account files. They are gitignored.
- Keep the Firestore rules restrictive, with no unauthenticated writes.
- Everything in `public/documents/` is publicly accessible, so add only files meant to be public.

---

<div align="center">

**Usman Azfar** · Lahore, Pakistan

[Live Portfolio](https://my-portfolio-usman-0a4c.vercel.app) · [GitHub](https://github.com/Usman-Azfar) · [Email](mailto:usmanazfarshafiq@gmail.com)

</div>
