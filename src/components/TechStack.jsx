import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getTechStack } from "../services/techStackService";
import "./TechStack.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function TechStack() {
  const [stack, setStack] = useState([]);

  useEffect(() => {
    getTechStack().then(setStack);
  }, []);

  return (
    <section id="tech-stack" className="section" aria-labelledby="tech-stack-heading">
      <div className="container">
        <motion.h2
          id="tech-stack-heading"
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Tech Stack
        </motion.h2>
        <motion.p
          className="section-subheading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
        >
          Tools and technologies I use to build secure, full-stack products.
        </motion.p>

        <div className="tech-grid">
          {stack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-card glass card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.05 * index}
              variants={fadeUp}
            >
              <div className="tech-card-top">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-level">{tech.level}</span>
              </div>
              <div className="tech-bar-track">
                <motion.div
                  className="tech-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.proficiency}%` }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
