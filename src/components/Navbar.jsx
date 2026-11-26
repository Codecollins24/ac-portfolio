import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon, Mail } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";
import { NAV_LINKS } from "../utils/navLinks";
import "./Navbar.css";

const SECTION_IDS = NAV_LINKS.map((link) => link.id);
const CV_REQUEST_HREF = "mailto:ainomugishac082@gmail.com?subject=CV%20Request";
// Keep in sync with the mobile breakpoint in Navbar.css.
const DESKTOP_QUERY = "(min-width: 1025px)";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const handleResize = (e) => {
      if (e.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="navbar glass">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo gradient-text" onClick={closeMenu}>
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
            type="button"
            className="navbar-icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={CV_REQUEST_HREF} className="btn btn-primary navbar-cv-btn">
            <Mail size={16} />
            Request CV
          </a>
          <button
            ref={menuBtnRef}
            type="button"
            className="navbar-icon-btn navbar-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* The menu and backdrop float over the page, so opening it never pushes
          content down. Animate only opacity and transforms here: a Framer Motion
          height animation restores the old scroll position while measuring,
          which cancels the scroll started by tapping a link. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            className="navbar-backdrop"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          />
        )}
        {menuOpen && (
          <motion.nav
            key="menu"
            id="mobile-menu"
            className="navbar-mobile glass"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Mobile"
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`navbar-mobile-link ${activeId === link.id ? "is-active" : ""}`}
                    aria-current={activeId === link.id ? "location" : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="navbar-mobile-cv">
                <a
                  href={CV_REQUEST_HREF}
                  className="btn btn-primary"
                  onClick={closeMenu}
                >
                  <Mail size={16} />
                  Request CV
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
