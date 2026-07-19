import noticeboardLogin from "../assets/images/noticeboard-login.jpg";
import noticeboardAdminView from "../assets/images/noticeboard-admin-view.jpg";
import noticeboardNoticeDetail from "../assets/images/noticeboard-notice-detail.jpg";

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
    id: "project-two",
    title: "Project Title Placeholder Two",
    description:
      "A short description of this project will go here — replace with a real case study once the project is ready to showcase.",
    image: null,
    tags: ["Django", "React Native"],
    github: "#",
    demo: null,
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
