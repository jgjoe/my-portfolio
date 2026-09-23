import { publicAsset } from "../publicAsset";

export default function ProjectMedia({ media, t, onOpen }) {
  if (!media) return <div className="media-placeholder" aria-hidden="true" />;

  if (media.type === "data-flow") {
    return (
      <figure className="data-flow-visual" aria-label={t(media.label)}>
        <div className="data-flow-sources">
          {media.sources.map((source) => <span key={t(source)}>{t(source)}</span>)}
        </div>
        <div className="data-flow-track">
          {media.steps.map((step, index) => (
            <div className="data-flow-step" key={t(step.name)}>
              <strong>{t(step.name)}</strong>
              <span>{t(step.copy)}</span>
              {index < media.steps.length - 1 && <span className="data-flow-arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
        <div className="data-flow-callouts">
          {media.callouts.map((callout) => (
            <div key={t(callout.label)}>
              <strong>{t(callout.value)}</strong>
              <span>{t(callout.label)}</span>
            </div>
          ))}
        </div>
        <figcaption>{t(media.caption)}</figcaption>
      </figure>
    );
  }

  if (media.type === "gallery") {
    return (
      <div className="phone-gallery" aria-label={t(media.label)}>
        {media.images.map((item) => (
          <button
            type="button"
            key={item.src}
            className="phone-frame"
            onClick={() => onOpen({ src: item.src, title: t(item.alt) })}
            aria-label={t(item.alt)}
          >
            <img src={publicAsset(item.src)} alt={t(item.alt)} loading="lazy" />
          </button>
        ))}
      </div>
    );
  }

  if (media.type === "image") {
    return (
      <figure className="browser-shot">
        <div className="browser-bar" aria-hidden="true">
          <span /><span /><span />
          <div>{media.host || "Project preview"}</div>
        </div>
        <button
          type="button"
          className="media-button"
          onClick={() => onOpen({ src: media.src, title: t(media.alt) })}
          aria-label={t(media.alt)}
        >
          <img src={publicAsset(media.src)} alt={t(media.alt)} loading="lazy" />
        </button>
        {media.caption && <figcaption>{t(media.caption)}</figcaption>}
      </figure>
    );
  }

  return (
    <button
      type="button"
      className="poster-frame"
      onClick={() => onOpen({ src: media.src, title: t(media.alt) })}
      aria-label={t(media.alt)}
    >
      <img src={publicAsset(media.src)} alt={t(media.alt)} loading="lazy" />
    </button>
  );
}
