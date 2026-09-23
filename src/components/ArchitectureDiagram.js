export default function ArchitectureDiagram({ architecture, t }) {
  if (!architecture) return null;

  if (architecture.variant === "hub") {
    return (
      <div className="architecture-block" role="group" aria-label={t(architecture.title)}>
        <div className="architecture-heading">
          <span>{t(architecture.title)}</span>
          <div className="architecture-sources">
            {architecture.sources.map((source) => (
              <span key={t(source)}>{t(source)}</span>
            ))}
          </div>
        </div>
        <div className="architecture-hub-grid">
          <div className="architecture-hub-core">
            <strong>{t(architecture.hub.name)}</strong>
            <span>{t(architecture.hub.copy)}</span>
          </div>
          {architecture.spokes.map((spoke, index) => (
            <div className={`architecture-hub-spoke architecture-hub-spoke-${index + 1}`} key={t(spoke.name)}>
              <strong>{t(spoke.name)}</strong>
              <span>{t(spoke.copy)}</span>
            </div>
          ))}
        </div>
        <p>{t(architecture.note)}</p>
      </div>
    );
  }

  if (architecture.variant === "decision") {
    return (
      <div className="architecture-block" role="group" aria-label={t(architecture.title)}>
        <div className="architecture-heading">
          <span>{t(architecture.title)}</span>
          <div className="architecture-sources">
            {architecture.sources.map((source) => (
              <span key={t(source)}>{t(source)}</span>
            ))}
          </div>
        </div>
        <div className="architecture-decision-flow">
          <div className="architecture-decision-stages">
            {architecture.stages.map((stage, index) => (
              <div className="architecture-stage" key={t(stage.name)}>
                <strong>{t(stage.name)}</strong>
                <span>{t(stage.copy)}</span>
                {index < architecture.stages.length - 1 && (
                  <span className="architecture-arrow" aria-hidden="true">→</span>
                )}
              </div>
            ))}
          </div>
          <div className="architecture-decision-card">
            <span>{t(architecture.decision.label)}</span>
            <strong>{t(architecture.decision.result)}</strong>
            <small>{t(architecture.decision.action)}</small>
          </div>
        </div>
        <p>{t(architecture.note)}</p>
      </div>
    );
  }

  return (
    <div className="architecture-block" role="group" aria-label={t(architecture.title)}>
      <div className="architecture-heading">
        <span>{t(architecture.title)}</span>
        <div className="architecture-sources">
          {architecture.sources.map((source) => (
            <span key={t(source)}>{t(source)}</span>
          ))}
        </div>
      </div>
      <div className="architecture-flow">
        {architecture.stages.map((stage, index) => (
          <div className="architecture-stage" key={t(stage.name)}>
            <strong>{t(stage.name)}</strong>
            <span>{t(stage.copy)}</span>
            {index < architecture.stages.length - 1 && (
              <span className="architecture-arrow" aria-hidden="true">→</span>
            )}
          </div>
        ))}
      </div>
      <p>{t(architecture.note)}</p>
    </div>
  );
}
