import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { getContactInfo } from "../services/contactService";
import { NAV_LINKS } from "../utils/navLinks";
import "./Footer.css";

export default function Footer() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    getContactInfo().then(setContact);
  }, []);

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-name gradient-text">Ainomugisha Collins</span>
          <p>Full-Stack Web & Mobile Developer · Cybersecurity Professional</p>
          {contact && (
            <a href={`mailto:${contact.email}`} className="footer-email">
              <Mail size={14} />
              {contact.email}
            </a>
          )}
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {contact && (
          <ul className="footer-socials">
            <li>
              <a href={contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            {contact.linkedin && (
              <li>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        )}
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ainomugisha Collins. All rights reserved.</p>
        <button
          className="footer-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
