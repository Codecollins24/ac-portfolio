import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";
import { NAV_LINKS } from "../utils/navLinks";
import "./Navbar.css";

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar glass">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo gradient-text">
          AC
        </a>

        <nav className="navbar-links" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="navbar-link-item">
                <a
                  href={`#${link.id}`}
                  className={`navbar-link ${activeId === link.id ? "is-active" : ""}`}
                >
                  {link.label}
                  {activeId === link.id && (
                    <motion.span
                      className="navbar-indicator"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <button
            className="navbar-icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="/cv/Ainomugisha-Collins-CV.pdf"
            download
            className="btn btn-primary navbar-cv-btn"
          >
            <Download size={16} />
            Download CV
          </a>
          <button
            className="navbar-icon-btn navbar-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="navbar-mobile glass"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label="Mobile"
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={activeId === link.id ? "is-active" : ""}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
