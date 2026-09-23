import { motion } from "framer-motion";
import { portfolio } from "../portfolioData";
import { reveal } from "../motionPresets";
import SectionHeading from "../components/SectionHeading";
import ProjectMedia from "../components/ProjectMedia";
import ArchitectureDiagram from "../components/ArchitectureDiagram";

export default function ProjectsSection({ t, onOpenMedia, onOpenEvidence }) {
  return (
    <section id="projects" className="section-shell section-gap">
      <SectionHeading
        eyebrow={t(portfolio.projects.eyebrow)}
        title={t(portfolio.projects.title)}
        copy={t(portfolio.projects.copy)}
      />
      <div className="project-stack">
        {portfolio.projects.featured.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            index={index}
            t={t}
            onOpenMedia={onOpenMedia}
            onOpenEvidence={onOpenEvidence}
          />
        ))}
      </div>

      <div className="more-work">
        <p className="eyebrow">{t(portfolio.projects.moreEyebrow)}</p>
        <h3>{t(portfolio.projects.moreTitle)}</h3>
        <div className="archive-grid">
          {portfolio.projects.more.map((project) => (
            <ArchiveProject key={t(project.title)} project={project} t={t} onOpenMedia={onOpenMedia} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project, index, t, onOpenMedia, onOpenEvidence }) {
  const visibleIndexes = project.visibleDetailIndexes || (project.details.length > 2 ? [1, 2] : [0, 1]);
  const visibleDetails = visibleIndexes
    .map((detailIndex) => project.details[detailIndex])
    .filter(Boolean);
  const deepDetails = project.details.filter((_, detailIndex) => !visibleIndexes.includes(detailIndex));
  const primaryLinks = project.links.slice(0, 2);
  const evidenceLinks = project.links.slice(2);
  const typeItems = Array.isArray(project.type) ? project.type : [project.type];

  return (
    <motion.article {...reveal} className="project-card">
      <div className="project-main">
        <div className="project-meta">
          <div className="project-meta-primary">
            <span className="project-index">0{index + 1}</span>
            {typeItems.map((item) => <span key={t(item)}>{t(item)}</span>)}
          </div>
          <time>{t(project.period)}</time>
        </div>
        <h3>
          {project.titleLines
            ? project.titleLines.map((line) => <span key={t(line)}>{t(line)}</span>)
            : project.title}
        </h3>
        {project.subtitle && <p className="project-subtitle">{t(project.subtitle)}</p>}
        <p className="project-lead">{t(project.lead)}</p>

        <div className="tech-row">
          {project.tech.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}
        </div>

        <div className="result-grid">
          {project.results.map((result) => (
            <div key={t(result.label)}>
              <strong>{t(result.value)}</strong>
              <span>{t(result.label)}</span>
            </div>
          ))}
        </div>

        <div className="project-facts">
          {visibleDetails.map((detail) => (
            <div key={t(detail.label)}>
              <span>{t(detail.label)}</span>
              <p>{t(detail.copy)}</p>
            </div>
          ))}
        </div>

        {deepDetails.length > 0 && (
          <details className="deep-dive">
            <summary>{t(portfolio.ui.projectDeepDive)}</summary>
            <div className="deep-dive-list">
              {deepDetails.map((detail) => (
                <div key={t(detail.label)}>
                  <span>{t(detail.label)}</span>
                  <p>{t(detail.copy)}</p>
                </div>
              ))}
            </div>
            <ArchitectureDiagram architecture={project.architecture} t={t} />
          </details>
        )}

        <div className="project-links">
          {primaryLinks.map((link, linkIndex) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={linkIndex === 0 ? "primary" : ""}
            >
              {t(link.label)} <span aria-hidden="true">↗</span>
            </a>
          ))}
          {evidenceLinks.length > 0 && (
            <button type="button" onClick={() => onOpenEvidence(project)} className="evidence-button">
              {t(portfolio.ui.viewEvidence)}
            </button>
          )}
        </div>
      </div>

      <div className="project-visual">
        <ProjectMedia media={project.media} t={t} onOpen={onOpenMedia} />
      </div>
    </motion.article>
  );
}

function ArchiveProject({ project, t, onOpenMedia }) {
  const typeItems = Array.isArray(project.type) ? project.type : [project.type];
  const content = (
    <>
      <div className="archive-type">
        {typeItems.map((item) => <span key={t(item)}>{t(item)}</span>)}
      </div>
      <h4>{t(project.title)}</h4>
      <p>{t(project.copy)}</p>
    </>
  );

  if (project.link) {
    return (
      <a className="archive-card" href={project.link} target="_blank" rel="noreferrer">
        {content}
        <span className="archive-arrow" aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <article className="archive-card archive-static">
      {content}
      {project.media && (
        <button
          type="button"
          onClick={() => onOpenMedia({ src: project.media.src, title: t(project.media.alt) })}
        >
          {t(portfolio.projects.posterOpen)} ↗
        </button>
      )}
    </article>
  );
}
