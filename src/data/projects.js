import noticeboardLogin from "../assets/images/noticeboard-login.jpg";
import noticeboardAdminView from "../assets/images/noticeboard-admin-view.jpg";
import noticeboardNoticeDetail from "../assets/images/noticeboard-notice-detail.jpg";
import luersEmergency from "../assets/images/luers-emergency.jpg";
import luersQueue from "../assets/images/luers-queue.jpg";
import luersAnalytics from "../assets/images/luers-analytics.jpg";
import geomarticsHome from "../assets/images/geomartics-home.jpg";
import geomarticsServices from "../assets/images/geomartics-services.jpg";

export const projectsData = [
  {
    id: "institution-digital-noticeboard",
    title: "Institution Digital Notice Board",
    description:
      "A role-based digital notice board that replaces physical boards and word-of-mouth with targeted, real-time institutional communication, with five user roles, live WebSocket notifications, and RSA-signed notices.",
    image: noticeboardAdminView,
    screenshots: [noticeboardLogin, noticeboardAdminView, noticeboardNoticeDetail],
    tags: ["React", "Django REST Framework", "Django Channels", "MySQL", "JWT", "WebSockets"],
    demo: "https://institution-digital-noticeboard.vercel.app",
    demoNote:
      "Hosted on free-tier infrastructure, so the backend sleeps after 15 minutes idle and the first load can take up to a minute while it wakes up.",
    codeRequestEmail: "ainomugishac082@gmail.com",
    role:
      "Solo full-stack developer. Designed and built both the React frontend and the Django REST/WebSocket backend, modeled the domain (roles, faculties, targeted publishing, digital signatures), and handled the full production deployment, wiring together five independent free-tier services with no shared infrastructure.",
    features: [
      "Role-based access for five roles (Super Admin, Notice Manager, Student, Lecturer, Other Staff), each with a tailored dashboard and permission set",
      "Targeted publishing by audience, faculty, and department, so people only see notices relevant to them",
      "Real-time notifications over WebSockets with a live unread-count badge, backed by async email alerts for urgent notices",
      "RSA digital signatures: Notice Managers sign what they publish, and anyone can verify a notice's authenticity and catch tampering",
      "Archiving workflow with configurable expiry, plus an admin Audit Log tracking every important action across the system",
    ],
    architecture:
      "React 19 (Vite) single-page app talking to a Django REST Framework API over JWT, with Django Channels + Redis handling live WebSocket notifications and MySQL for persistence. Deployed across five independent free-tier services: Vercel for the frontend, Render for the backend, Aiven for MySQL, Upstash for Redis, and Cloudinary for media storage, all connected through environment variables.",
    challenges: [
      "Tracked down a subtle dependency collision that only broke WebSockets in production: an unrelated package named django-channels silently overwrote files from the real channels package during install on Linux",
      "Aiven's free MySQL requires TLS, so certificate-based SSL was wired up through Render's secret files rather than a hardcoded path, keeping local dev unaffected",
      "Render's free tier has no shell access, so the usual createsuperuser workflow didn't work. An idempotent management command now provisions the admin account from environment variables on every deploy",
    ],
  },
  {
    id: "luers",
    title: "LUERS: Lira University Emergency Reporting System",
    description:
      "A campus emergency reporting platform where students and staff report an incident in a few taps, and the system routes it to the right department for live tracking and resolution.",
    image: luersEmergency,
    screenshots: [luersEmergency, luersQueue, luersAnalytics],
    tags: ["React", "TypeScript", "Django REST Framework", "PostgreSQL", "WebSockets", "PWA"],
    demoRequestEmail: "ainomugishac082@gmail.com",
    demoNote:
      "This project isn't publicly hosted. Request a link by email and a demo will be shared with you.",
    role:
      "Team project. Built the React and TypeScript frontend end to end, and extended the Django REST backend that a teammate started: security hardening, the role and permission model, department routing, background tasks, automated tests, and CI for both repositories.",
    features: [
      "One-screen emergency reporting: pick a category (security, medical, fire, accident, other) and send. Location, a photo, and a description are optional extras, and sending never waits on GPS",
      "Automatic routing to the responsible department by category, with a keyword classifier for ambiguous reports",
      "Live report queue updated over WebSockets, with search, filters, and CSV and PDF export, plus an analytics dashboard for trends, status, and urgency",
      "Permission-based access control: roles are bundles of permissions managed inside the app, and department heads create and manage their own responders",
      "Installable PWA with an offline report queue: reports made without a connection are saved on the device and sent automatically when it returns",
    ],
    architecture:
      "React 19 and TypeScript (Vite) single-page app with Tailwind CSS v4, TanStack Query for server state, and React Hook Form with Zod for validation, talking to a Django REST Framework API over JWT. Django Channels pushes live updates over WebSockets, Celery sends email and SMS notifications off the request path, and PostgreSQL and Redis provide storage, caching, and the task broker.",
    challenges: [
      "Closed a WebSocket authorization gap: live-update access originally trusted a blanket role check, so it now goes through the same report-visibility rules as the REST API",
      "Replaced a fixed role list with a proper role-to-permission model, so adding a capability means adding one permission rather than changing the schema, with guards against users escalating their own privileges",
      "Built an offline report queue on IndexedDB that replays through the normal authenticated API client, so an expired token refreshes automatically instead of the replay failing",
    ],
  },
  {
    id: "geomartics",
    title: "Geomartics: Land Surveying Website",
    description:
      "A fast, responsive single-page marketing site for a land-surveying business in Lira City, Uganda. It covers services, an about section, and a contact form that opens a pre-filled email, with no backend to maintain.",
    image: geomarticsHome,
    screenshots: [geomarticsHome, geomarticsServices],
    tags: ["React", "Vite", "Tailwind CSS", "Vercel"],
    demo: "https://geomarticsproject.vercel.app",
    codeRequestEmail: "ainomugishac082@gmail.com",
    role:
      "Solo developer. Designed and built the whole site (layout, branding, copy structure, responsive behavior) and set up deployment so every push to the main branch publishes automatically.",
    features: [
      "Single-page layout with six service sections, an about section, a \"why choose us\" section, and clear calls to action throughout",
      "Contact form that builds a pre-filled mailto message from the visitor's details, with no server, database, or form service to maintain",
      "Navbar that highlights the section currently in view, plus gentle scroll-reveal animations that switch off for visitors who prefer reduced motion",
      "Responsive hero image served at multiple resolutions, with lazy-loaded images below the fold, and a layout checked down to 375px phone width",
      "All site copy and contact details live in one content file, so updates never touch component code",
    ],
    architecture:
      "React 19 and Vite single-page app styled with Tailwind CSS v4 and lucide-react icons. No backend: the contact flow is a mailto link and the content is a static data module. Hosted on Vercel, with the GitHub repository connected so pushes to main deploy to production automatically.",
    challenges: [
      "Kept every line of copy strictly factual, with no invented testimonials, statistics, or certifications, so the site only claims what the business can stand behind",
      "Delivered a working contact flow without a backend by generating a well-formed, URL-encoded mailto message from the form fields",
      "Kept the hero fast on slow mobile data by serving responsive image sizes through srcset rather than one large file",
    ],
  },
];
