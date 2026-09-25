import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import { portfolio } from "../portfolioData";
import { reveal } from "../motionPresets";

export default function HeroSection({ t }) {
  return (
    <section id="top" className="section-shell hero-section">
      <motion.div {...reveal} className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          {portfolio.hero.eyebrow.map((item) => <span key={item}>{item}</span>)}
        </p>
        <h1>{t(portfolio.hero.title)}</h1>
        <p className="hero-summary">{t(portfolio.hero.summary)}</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">{t(portfolio.ui.viewWork)}</a>
          <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="button button-secondary">
            GitHub ↗
          </a>
        </div>
      </motion.div>

      <motion.aside {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="profile-card">
        <div className="profile-top">
          <img src={profileImage} alt={t(portfolio.hero.photoAlt)} />
          <div>
            <p className="profile-name">{t(portfolio.name)}</p>
            <p className="profile-role">{t(portfolio.hero.profileRole)}</p>
          </div>
        </div>
        <div className="quick-facts">
          {portfolio.hero.quickFacts.map((fact) => (
            <div key={t(fact.label)} className={`quick-fact${fact.kind === "list" ? " quick-fact-list" : ""}`}>
              {fact.kind === "list" ? (
                <>
                  <strong className="quick-fact-title">{t(fact.label)}</strong>
                  <div className="quick-fact-items">
                    {fact.items.map((item) => <span key={t(item)}>{t(item)}</span>)}
                  </div>
                </>
              ) : (
                <>
                  <strong>{t(fact.value)}</strong>
                  <span>{t(fact.label)}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </motion.aside>
    </section>
  );
}
