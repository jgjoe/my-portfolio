import { portfolio } from "../portfolioData";
import AccessibleModal from "./AccessibleModal";

export default function EvidenceModal({ project, t, onClose }) {
  if (!project) return null;

  const title = project.titleLines
    ? project.titleLines.map((line) => t(line)).join(" ")
    : t(project.title);
  const evidenceTitle = t(project.evidenceTitle || portfolio.ui.evidenceLinks);
  const evidenceLinks = project.links.slice(2);

  return (
    <AccessibleModal
      open={Boolean(project)}
      onClose={onClose}
      title={`${title} ${evidenceTitle}`}
      closeLabel={t(portfolio.ui.closeDialog)}
    >
      <div className="evidence-modal-body">
        <p className="evidence-modal-intro">{t(portfolio.ui.evidenceModalIntro)}</p>
        {project.evidenceNotes?.length > 0 ? (
          <div className="evidence-note-list">
            {project.evidenceNotes.map((note) => (
              <div key={t(note.label)}>
                <strong>{t(note.label)}</strong>
                <p>{t(note.copy)}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="evidence-result-grid">
            {project.results.map((result) => (
              <div key={t(result.label)}>
                <strong>{t(result.value)}</strong>
                <span>{t(result.label)}</span>
              </div>
            ))}
          </div>
        )}
        {evidenceLinks.length > 0 && (
          <div className="evidence-source-list">
            {evidenceLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                <span>{t(link.label)}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </AccessibleModal>
  );
}
