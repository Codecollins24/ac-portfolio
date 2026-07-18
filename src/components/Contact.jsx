import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getContactInfo, submitContactForm } from "../services/contactService";
import { getIcon } from "../utils/iconMap";
import "./Contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

function buildMailto(contact, formData) {
  const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "a visitor"}`);
  const body = encodeURIComponent(
    `${formData.message}\n\n— ${formData.name} (${formData.email})`
  );
  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const [contact, setContact] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    getContactInfo().then(setContact);
  }, []);

  if (!contact) return <section id="contact" className="section" />;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    const result = await submitContactForm(form);

    if (result.fallback) {
      window.location.href = buildMailto(contact, form);
      setStatus("fallback");
      return;
    }

    setStatus(result.ok ? "success" : "error");
  };

  const infoItems = [
    { icon: "Mail", label: contact.email, href: `mailto:${contact.email}` },
    { icon: "Phone", label: contact.phone, href: `tel:${contact.phone}` },
    {
      icon: "MessageCircle",
      label: "WhatsApp",
      href: `https://wa.me/${contact.whatsapp.replace("+", "")}`,
    },
    { icon: "LinkIcon", label: "GitHub", href: contact.github },
    // Commented out for now — re-enable once the LinkedIn profile is ready.
    // contact.linkedin
    //   ? { icon: "LinkIcon", label: "LinkedIn", href: contact.linkedin }
    //   : { icon: "LinkIcon", label: "LinkedIn (coming soon)", href: null },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <motion.h2
          id="contact-heading"
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          {contact.heading}
        </motion.h2>
        <motion.p
          className="section-subheading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          variants={fadeUp}
        >
          Reach out for freelance work, collaboration, or just to say hello.
        </motion.p>

        <div className="contact-grid">
          <motion.ul
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.15}
            variants={fadeUp}
          >
            {infoItems.map((item) => {
              const Icon = getIcon(item.icon);
              const content = (
                <>
                  <span className="contact-info-icon">
                    {Icon && <Icon size={18} />}
                  </span>
                  {item.label}
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="contact-info-link"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="contact-info-link is-disabled">
                      {content}
                    </span>
                  )}
                </li>
              );
            })}
          </motion.ul>

          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.25}
            variants={fadeUp}
          >
            <label>
              Name
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="contact-form-status is-success">
                Message sent — thank you! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact-form-status is-error">
                Something went wrong. Please email me directly at{" "}
                {contact.email}.
              </p>
            )}
            {status === "fallback" && (
              <p className="contact-form-status">
                Opening your email client to send this message directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
