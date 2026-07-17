import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { getAchievements } from "../services/achievementsService";
import "./Achievements.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    getAchievements().then(setAchievements);
  }, []);

  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.h2
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Achievements
        </motion.h2>
        <motion.p
          className="section-subheading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
        >
          Certifications and recognitions from my work in cybersecurity and
          competitive events.
        </motion.p>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              className="achievement-card glass card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0.1 + index * 0.08}
              variants={fadeUp}
            >
              <div className="achievement-image">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  loading="lazy"
                />
              </div>
              <div className="achievement-body">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline achievement-link"
                  >
                    {achievement.linkLabel}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
