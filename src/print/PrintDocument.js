import profileImage from "../assets/profile.jpg";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import { portfolio } from "../portfolioData";
import { publicAsset } from "../publicAsset";

const PORTFOLIO_URL = "https://jgjoe.github.io/my-portfolio/";
const PAGE_COUNT = portfolio.projects.featured.length + 1;

/* Printed URLs stay readable on one line: drop the scheme, and shorten deep
   GitHub file paths to repo/…/file. The anchor keeps the full address. */
const displayUrl = (href) => {
  const bare = href.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
  const parts = bare.split("/");
  if (parts[0] === "github.com" && parts.length > 5) {
    return `${parts.slice(0, 3).join("/")}/…/${parts[parts.length - 1]}`;
  }
  return bare;
};

/* The document is hidden on screen and becomes the only printed content under
   @media print. Every sentence comes from portfolioData.js. */
export default function PrintDocument({ t }) {
  return (
    <div className="print-document" aria-hidden="true">
      <SummaryPage t={t} />
      {portfolio.projects.featured.map((project, index) => (
        <ProjectPage key={project.title} project={project} index={index} t={t} />
      ))}
    </div>
  );
}

function PageFooter({ t, page }) {
  return (
    <footer className="print-footer">
      <span>
        {t(portfolio.name)} · {PORTFOLIO_URL}
      </span>
      <span>
        {page} / {PAGE_COUNT}
      </span>
    </footer>
  );
}

function SummaryPage({ t }) {
  return (
    <section className="print-page">
      <div className="print-summary-top">
        <div className="print-summary-copy">
          <p className="print-eyebrow">{portfolio.hero.eyebrow.join(" · ")}</p>
          <h1 className="print-headline">{t(portfolio.hero.title)}</h1>
          <p className="print-summary-text">{t(portfolio.hero.summary)}</p>
        </div>
        <aside className="print-profile">
          <div className="print-profile-top">
            <img className="print-photo" src={profileImage} alt={t(portfolio.hero.photoAlt)} />
            <div>
              <p className="print-name">{t(portfolio.name)}</p>
              <p className="print-role">{portfolio.hero.profileRole}</p>
            </div>
          </div>
          <div className="print-facts">
            {portfolio.hero.quickFacts.map((fact) => (
              <div className="print-fact" key={t(fact.label)}>
                {fact.kind === "list" ? (
                  <>
                    <strong>{t(fact.label)}</strong>
                    <span>{fact.items.map((item) => t(item)).join(" · ")}</span>
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
        </aside>
      </div>

      <h2 className="print-section-title">{t(portfolio.proof.title)}</h2>
      <div className="print-proof-row">
        {portfolio.proof.items.map((item) => (
          <article className="print-proof-card" key={t(item.label)}>
            <p className="print-proof-kicker">{t(item.kicker)}</p>
            <p className="print-proof-value">{t(item.value)}</p>
            <p className="print-proof-label">{t(item.label)}</p>
            <p className="print-proof-project">{t(item.project)}</p>
          </article>
        ))}
      </div>

      <div className="print-columns">
        <div className="print-credentials">
          {portfolio.credentials.groups.map((group) => (
            <div className="print-credential" key={t(group.title)}>
              <h3 className="print-subtitle">{t(group.title)}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={t(item)}>{t(item)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="print-skills">
          <h3 className="print-subtitle">{t(portfolio.credentials.skillsTitle)}</h3>
          {portfolio.skills.map((group) => (
            <div className="print-skill-group" key={t(group.title)}>
              <p className="print-skill-title">{t(group.title)}</p>
              <div className="print-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="print-contact">
        <div>
          <p className="print-contact-eyebrow">{t(portfolio.contact.eyebrow)}</p>
          <h2 className="print-contact-title">{t(portfolio.contact.title)}</h2>
        </div>
        <div className="print-contact-lines">
          <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a>
          <a href={portfolio.contact.github}>{portfolio.contact.github}</a>
          <a href={PORTFOLIO_URL}>{PORTFOLIO_URL}</a>
        </div>
      </div>

      <PageFooter t={t} page={1} />
    </section>
  );
}

function ProjectPage({ project, index, t }) {
  const typeItems = Array.isArray(project.type) ? project.type : [project.type];
  const title = project.titleLines
    ? project.titleLines.map((line) => t(line)).join(" ")
    : t(project.title);

  return (
    <section className="print-page print-project-page">
      <header className="print-project-head">
        <p className="print-project-meta">
          <span>0{index + 1}</span>
          <span>{typeItems.map((item) => t(item)).join(" · ")}</span>
          <span>{t(project.period)}</span>
        </p>
        <h2 className="print-project-title">{title}</h2>
        {project.subtitle && <p className="print-project-subtitle">{t(project.subtitle)}</p>}
        <p className="print-project-lead">{t(project.lead)}</p>
      </header>

      <div className="print-project-body">
        <div className="print-project-details">
          {project.details.map((detail) => (
            <div className="print-detail" key={t(detail.label)}>
              <p className="print-detail-label">{t(detail.label)}</p>
              <p className="print-detail-copy">{t(detail.copy)}</p>
            </div>
          ))}
        </div>

        <div className="print-project-side">
          {/* A diagram explains the solution better than a screenshot, so it wins when both exist. */}
          {project.architecture ? (
            <div className="print-architecture">
              <ArchitectureDiagram architecture={project.architecture} t={t} />
            </div>
          ) : (
            <PrintMedia media={project.media} t={t} />
          )}
          <div className="print-results">
            {project.results.map((result) => (
              <div className="print-result" key={t(result.label)}>
                <strong>{t(result.value)}</strong>
                <span>{t(result.label)}</span>
              </div>
            ))}
          </div>
          <div className="print-tags print-tech">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="print-evidence-band">
        <h3 className="print-subtitle">{t(project.evidenceTitle || portfolio.ui.evidenceLinks)}</h3>
        <div className="print-evidence-notes">
          {project.evidenceNotes.map((note) => (
            <p key={t(note.label)}>
              <strong>{t(note.label)}</strong>: {t(note.copy)}
            </p>
          ))}
        </div>
        <div className="print-evidence-links">
          {project.links.map((link) => (
            <span className="print-link" key={link.href}>
              <a href={link.href}>{t(link.label)}</a>
              <span className="print-link-url">{displayUrl(link.href)}</span>
            </span>
          ))}
        </div>
      </div>

      <PageFooter t={t} page={index + 2} />
    </section>
  );
}

function PrintMedia({ media, t }) {
  if (!media) return null;

  if (media.type === "browser-gallery") {
    const shot = media.images[0];
    return (
      <figure className="print-shot">
        <img src={publicAsset(shot.src)} alt={t(shot.alt)} />
        {shot.caption && <figcaption>{t(shot.caption)}</figcaption>}
      </figure>
    );
  }

  if (media.type === "image") {
    return (
      <figure className="print-shot">
        <img src={publicAsset(media.src)} alt={t(media.alt)} />
        {media.caption && <figcaption>{t(media.caption)}</figcaption>}
      </figure>
    );
  }

  if (media.type === "gallery") {
    return (
      <div className="print-gallery">
        {media.images.map((item) => (
          <img key={item.src} src={publicAsset(item.src)} alt={t(item.alt)} />
        ))}
      </div>
    );
  }

  if (media.type === "data-flow") {
    return (
      <div className="print-flow">
        <div className="print-tags print-flow-sources">
          {media.sources.map((source) => (
            <span key={t(source)}>{t(source)}</span>
          ))}
        </div>
        <ol className="print-flow-steps">
          {media.steps.map((step, index) => (
            <li key={t(step.name)}>
              <span className="print-flow-index">{index + 1}</span>
              <div>
                <strong>{t(step.name)}</strong>
                <span>{t(step.copy)}</span>
              </div>
            </li>
          ))}
        </ol>
        <div className="print-flow-callouts">
          {media.callouts.map((callout) => (
            <div key={t(callout.label)}>
              <strong>{t(callout.value)}</strong>
              <span>{t(callout.label)}</span>
            </div>
          ))}
        </div>
        <p className="print-caption">{t(media.caption)}</p>
      </div>
    );
  }

  return (
    <figure className="print-poster">
      <img src={publicAsset(media.src)} alt={t(media.alt)} />
    </figure>
  );
}
