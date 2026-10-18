import { motion } from "framer-motion";
import { portfolio } from "../portfolioData";
import { reveal } from "../motionPresets";

export default function ProofSection({ t }) {
  return (
    <section className="section-shell proof-section" aria-label={t(portfolio.proof.title)}>
      <motion.div {...reveal} className="proof-grid">
        {portfolio.proof.items.map((item) => (
          <article key={t(item.value)} className="proof-item">
            <div className="proof-item-topline">
              <span className="proof-kicker">{t(item.kicker)}</span>
              <span className="proof-links">
                {item.projects.map((project) => (
                  <a key={project.target} href={`#${project.target}`} aria-label={t(project.aria)} className="proof-project-link">
                    {t(project.name)} <span aria-hidden="true">↓</span>
                  </a>
                ))}
              </span>
            </div>
            <strong>{t(item.value)}</strong>
            <p>{t(item.label)}</p>
            <ul className="proof-stats">
              {item.stats.map((stat) => <li key={t(stat)}>{t(stat)}</li>)}
            </ul>
          </article>
        ))}
      </motion.div>
    </section>
  );
}