import { motion } from "framer-motion";
import { portfolio } from "../portfolioData";
import { reveal } from "../motionPresets";

export default function ProofSection({ t }) {
  return (
    <section className="section-shell proof-section" aria-label={t(portfolio.proof.title)}>
      <motion.div {...reveal} className="proof-grid">
        {portfolio.proof.items.map((item) => (
          <article key={t(item.label)} className="proof-item">
            <span className="proof-kicker">{t(item.kicker)}</span>
            <strong>{t(item.value)}</strong>
            <p>{t(item.label)}</p>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
