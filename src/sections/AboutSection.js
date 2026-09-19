import { motion } from "framer-motion";
import { portfolio } from "../portfolioData";
import { reveal } from "../motionPresets";
import SectionHeading from "../components/SectionHeading";

export default function AboutSection({ t }) {
  return (
    <section id="about" className="section-shell section-gap">
      <SectionHeading
        eyebrow={t(portfolio.about.eyebrow)}
        title={t(portfolio.about.title)}
        copy={t(portfolio.about.copy)}
      />
      <div className="strength-grid">
        {portfolio.about.strengths.map((strength, index) => (
          <motion.article
            key={t(strength.title)}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * 0.05 }}
            className="strength-card"
          >
            <span>0{index + 1}</span>
            <h3>{t(strength.title)}</h3>
            <p>{t(strength.copy)}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
