import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAboutContent } from "../services/aboutService";
import { getIcon } from "../utils/iconMap";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    getAboutContent().then(setAbout);
  }, []);

  if (!about) return <section id="about" className="section" />;

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <motion.h2
          id="about-heading"
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {about.heading}
        </motion.h2>
        <motion.p
          className="section-subheading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
        >
          {about.description}
        </motion.p>

        <div className="about-cards">
          {about.cards.map((card, index) => {
            const Icon = getIcon(card.icon);
            return (
              <motion.div
                key={card.title}
                className="about-card glass card-hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0.15 + index * 0.1}
                variants={fadeUp}
              >
                <div className="about-card-icon">
                  {Icon && <Icon size={22} />}
                </div>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
