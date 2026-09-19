import { motion } from "framer-motion";
import { portfolio } from "../portfolioData";
import { reveal } from "../motionPresets";

export default function ContactSection({ t }) {
  return (
    <section id="contact" className="section-shell contact-section">
      <motion.div {...reveal} className="contact-panel">
        <div>
          <p className="eyebrow">{t(portfolio.contact.eyebrow)}</p>
          <h2>{t(portfolio.contact.title)}</h2>
          <p>{t(portfolio.contact.copy)}</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${portfolio.contact.email}`} className="button button-light">
            {portfolio.contact.email}
          </a>
          <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="button button-dark-outline">
            GitHub ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
