import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Mail, Code2, Layers, User, Wrench } from "lucide-react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="project-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal-content glass"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        <h3>{project.title}</h3>
        <p className="project-modal-description">{project.description}</p>

        {project.screenshots?.length > 0 && (
          <div className="project-modal-screenshots">
            {project.screenshots.map((src) => (
              <img key={src} src={src} alt={`${project.title} screenshot`} loading="lazy" />
            ))}
          </div>
        )}

        <div className="project-modal-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        {project.role && (
          <section className="project-modal-section">
            <h4><User size={16} /> My Role</h4>
            <p>{project.role}</p>
          </section>
        )}

        {project.features?.length > 0 && (
          <section className="project-modal-section">
            <h4><Layers size={16} /> Features</h4>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {project.architecture && (
          <section className="project-modal-section">
            <h4><Code2 size={16} /> System Architecture</h4>
            <p>{project.architecture}</p>
          </section>
        )}

        {project.challenges?.length > 0 && (
          <section className="project-modal-section">
            <h4><Wrench size={16} /> Challenges Solved</h4>
            <ul>
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="project-modal-actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.codeRequestEmail && (
            <a
              href={`mailto:${project.codeRequestEmail}?subject=${encodeURIComponent(
                `Source code request: ${project.title}`
              )}`}
              className="btn btn-secondary"
            >
              <Mail size={16} />
              Source code available upon request
            </a>
          )}
        </div>
        {project.demoNote && (
          <p className="project-modal-note">{project.demoNote}</p>
        )}
      </motion.div>
    </motion.div>
  );
}
