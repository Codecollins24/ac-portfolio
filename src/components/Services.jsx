import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { getServices } from "../services/servicesService";
import { getIcon } from "../utils/iconMap";
import "./Services.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <motion.h2
          id="services-heading"
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Services
        </motion.h2>
        <motion.p
          className="section-subheading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
        >
          I design and develop modern web and mobile applications while applying
          security best practices to build reliable and resilient software
          solutions.
        </motion.p>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                className="service-card glass card-hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={0.15 + index * 0.1}
                variants={fadeUp}
              >
                <div className="service-card-icon">
                  {Icon && <Icon size={22} />}
                </div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {service.credential && (
                  <a
                    href={service.credential.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline service-credential-btn"
                  >
                    {service.credential.label}
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
