import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { getStats } from "../services/heroService";
import { useCountUp } from "../hooks/useCountUp";
import "./Stats.css";

function StatItem({ stat, inView, delay }) {
  const count = useCountUp(stat.value, { startWhen: inView });

  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="stat-value gradient-text">
        {count}
        {stat.suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </motion.div>
  );
}

export default function Stats() {
  const [stats, setStats] = useState([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  return (
    <section className="stats section" ref={ref}>
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            stat={stat}
            inView={inView}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  );
}
