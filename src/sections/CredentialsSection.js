import { motion } from "framer-motion";
import { portfolio } from "../portfolioData";
import { reveal } from "../motionPresets";
import SectionHeading from "../components/SectionHeading";

export default function CredentialsSection({ t }) {
  return (
    <section id="credentials" className="section-shell section-gap">
      <SectionHeading
        eyebrow={t(portfolio.credentials.eyebrow)}
        title={t(portfolio.credentials.title)}
        copy={t(portfolio.credentials.copy)}
      />
      <div className="credential-grid">
        {portfolio.credentials.groups.map((group) => (
          <motion.article key={t(group.title)} {...reveal} className="credential-card">
            <h3>{t(group.title)}</h3>
            <ul>
              {group.items.map((item) => <li key={t(item)}>{t(item)}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
      <motion.div {...reveal} className="skills-panel">
        <p>{t(portfolio.credentials.skillsTitle)}</p>
        <div className="skill-groups">
          {portfolio.skills.map((group) => (
            <div key={t(group.title)}>
              <h3>{t(group.title)}</h3>
              <div className="skill-row">
                {group.items.map((skill) => <span key={t(skill)}>{t(skill)}</span>)}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
