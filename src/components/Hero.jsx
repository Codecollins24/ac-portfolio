import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getHeroContent } from "../services/heroService";
import { getIcon } from "../utils/iconMap";
import profileImg from "../assets/images/profile.jpg";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    getHeroContent().then(setHero);
  }, []);

  if (!hero) return <section id="home" className="hero" />;

  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            className="hero-name gradient-text"
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            {hero.name}
          </motion.h1>

          <motion.div
            className="hero-roles"
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            {hero.roles.map((role) => (
              <span key={role} className="hero-role">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="hero-description"
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="hero-badges"
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
          >
            {hero.badges.map((badge) => {
              const Icon = getIcon(badge.icon);
              return (
                <span key={badge.label} className="hero-badge glass">
                  {Icon && <Icon size={14} />}
                  {badge.label}
                </span>
              );
            })}
          </motion.div>

          <motion.div
            className="hero-ctas"
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeUp}
          >
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                download={cta.download || undefined}
                className={`btn btn-${cta.variant}`}
              >
                {cta.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-visual-frame glass"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={profileImg} alt="Ainomugisha Collins" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
