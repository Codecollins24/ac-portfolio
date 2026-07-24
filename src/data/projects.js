import noticeboardLogin from "../assets/images/noticeboard-login.jpg";
import noticeboardAdminView from "../assets/images/noticeboard-admin-view.jpg";
import noticeboardNoticeDetail from "../assets/images/noticeboard-notice-detail.jpg";
import smfasSimulator from "../assets/images/smfas-simulator.jpg";
import smfasHome from "../assets/images/smfas-home.jpg";

export const projectsData = [
  {
    id: "institution-digital-noticeboard",
    title: "Institution Digital Notice Board",
    description:
      "A role-based digital notice board that replaces physical boards and word-of-mouth with targeted, real-time institutional communication — five user roles, live WebSocket notifications, and RSA-signed notices.",
    image: noticeboardAdminView,
    screenshots: [noticeboardLogin, noticeboardAdminView, noticeboardNoticeDetail],
    tags: ["React", "Django REST Framework", "Django Channels", "MySQL", "JWT", "WebSockets"],
    demo: "https://institution-digital-noticeboard.vercel.app",
    demoNote:
      "Hosted on free-tier infrastructure — the backend sleeps after 15 minutes idle, so the first load can take up to a minute while it wakes up.",
    codeRequestEmail: "ainomugishac082@gmail.com",
    role:
      "Solo full-stack developer. Designed and built both the React frontend and the Django REST/WebSocket backend, modeled the domain (roles, faculties, targeted publishing, digital signatures), and handled the full production deployment — wiring together five independent free-tier services with no shared infrastructure.",
    features: [
      "Role-based access for five roles — Super Admin, Notice Manager, Student, Lecturer, Other Staff — each with a tailored dashboard and permission set",
      "Targeted publishing by audience, faculty, and department, so people only see notices relevant to them",
      "Real-time notifications over WebSockets with a live unread-count badge, backed by async email alerts for urgent notices",
      "RSA digital signatures — Notice Managers sign what they publish, and anyone can verify a notice's authenticity and catch tampering",
      "Archiving workflow with configurable expiry, plus an admin Audit Log tracking every important action across the system",
    ],
    architecture:
      "React 19 (Vite) single-page app talking to a Django REST Framework API over JWT, with Django Channels + Redis handling live WebSocket notifications and MySQL for persistence. Deployed across five independent free-tier services — Vercel (frontend), Render (backend), Aiven (MySQL), Upstash (Redis), and Cloudinary (media storage) — connected entirely through environment variables.",
    challenges: [
      "Tracked down a subtle dependency collision that only broke WebSockets in production: an unrelated package named django-channels silently overwrote files from the real channels package during install on Linux",
      "Aiven's free MySQL requires TLS — wired up certificate-based SSL through Render's secret files rather than hardcoding a path, keeping local dev unaffected",
      "Render's free tier has no shell access, so the usual createsuperuser workflow didn't work — built an idempotent management command that provisions the admin account from environment variables on every deploy",
    ],
  },
  {
    id: "smfas",
    title: "SMFAS — SMS Mobile Farmers Advisory System",
    description:
      "An SMS-first advisory service that gives farmers instant, expert-curated crop advice — fertilizer rates, disease control, general crop info — across seven crops, reachable by a real SMS gateway or a web simulator.",
    image: smfasSimulator,
    screenshots: [smfasHome, smfasSimulator],
    tags: ["Django", "PostgreSQL", "Africa's Talking SMS API", "REST API"],
    demo: "https://sms-farmers-advisory-system.onrender.com",
    demoNote:
      "Hosted on free-tier infrastructure — the backend sleeps after 15 minutes idle, so the first load can take up to a minute while it wakes up.",
    codeRequestEmail: "ainomugishac082@gmail.com",
    role:
      "Solo developer, built under deadline pressure for the APAC Secondary School ICT Club's NCC 2026 Regional Competition entry, then hardened over two further sessions after the presentation succeeded. Designed the keyword-query engine, modeled the crop-advisory data, and integrated a real SMS gateway alongside a web-based simulator.",
    features: [
      "Keyword-based SMS queries (e.g. \"MAIZE FERTILIZER\") answered instantly across seven crops — Maize, Coffee, Bananas, Beans, Cassava, Groundnuts, and Sweet Potatoes",
      "Two front doors into the same query engine: a phone-mockup web SMS simulator and a real Africa's Talking SMS webhook",
      "Async delivery-report tracking correlates each outbound SMS with its real delivery status, not just API-accepted status",
      "QueryLog model records every query — web and SMS alike — powering a live activity feed and observability",
      "Idempotent data seeding and an idempotent admin-provisioning management command, both safe to rerun on every deploy",
    ],
    architecture:
      "Django backend serving both a plain HTML/CSS/vanilla-JS front end and a REST-style query API, backed by PostgreSQL in production (SQLite locally). Africa's Talking's SDK handles real SMS send/receive against their Sandbox environment, with a shared-secret-protected webhook for inbound messages and delivery reports. Deployed on Render's free tier via `render.yaml`, with WhiteNoise serving static assets and gunicorn as the app server.",
    challenges: [
      "Built the whole prototype and got it presentation-ready in a single day against a hard competition deadline",
      "Africa's Talking's Sandbox blurs 'real' SMS: outbound genuinely delivers to registered test numbers, but inbound is simulated via their dashboard hitting the real webhook — documented this precisely so the demo is never oversold as fully live",
      "Render's free tier has no shell access, so the usual createsuperuser workflow didn't work — wrote an idempotent management command that provisions the admin account from environment variables on every deploy",
    ],
  },
  {
    id: "project-three",
    title: "Project Title Placeholder Three",
    description:
      "A short description of this project will go here — replace with a real case study once the project is ready to showcase.",
    image: null,
    tags: ["Python", "Cybersecurity"],
    github: "#",
    demo: "#",
  },
];
