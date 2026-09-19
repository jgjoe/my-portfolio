export default function ArchitectureDiagram({ architecture, t }) {
  if (!architecture) return null;

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
          <div className="architecture-stage" key={stage.name}>
            <strong>{stage.name}</strong>
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
