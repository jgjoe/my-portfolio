import { useState } from "react";
import { portfolio } from "../portfolioData";
import { publicAsset } from "../publicAsset";

export default function ProjectMedia({ media, t, onOpen }) {
  if (!media) return <div className="media-placeholder" aria-hidden="true" />;

  const body =
    media.type === "browser-gallery" ? <BrowserGallery media={media} t={t} onOpen={onOpen} />
      : media.type === "data-flow" ? <DataFlow media={media} t={t} />
        : media.type === "gallery" ? <PhoneGallery media={media} t={t} onOpen={onOpen} />
          : media.type === "image" ? <Shot media={media} t={t} onOpen={onOpen} />
            : <Poster media={media} t={t} onOpen={onOpen} />;

  if (media.type === "data-flow") return body;

  return (
    <div className="media-stack">
      {body}
      <p className="media-hint">{t(portfolio.ui.enlargeHint)}</p>
    </div>
  );
}

function DataFlow({ media, t }) {
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

function PhoneGallery({ media, t, onOpen }) {
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
          <img src={publicAsset(item.src)} alt={t(item.alt)} />
        </button>
      ))}
    </div>
  );
}

function Shot({ media, t, onOpen }) {
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
        <img src={publicAsset(media.src)} alt={t(media.alt)} />
      </button>
      {media.caption && <figcaption>{t(media.caption)}</figcaption>}
    </figure>
  );
}

function Poster({ media, t, onOpen }) {
  return (
    <button
      type="button"
      className="poster-frame"
      onClick={() => onOpen({ src: media.src, title: t(media.alt) })}
      aria-label={t(media.alt)}
    >
      <img src={publicAsset(media.src)} alt={t(media.alt)} />
    </button>
  );
}

function BrowserGallery({ media, t, onOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = media.images[activeIndex];

  return (
    <figure className="browser-shot browser-gallery">
      <div className="browser-bar" aria-hidden="true">
        <span /><span /><span />
        <div>{media.host || "Project preview"}</div>
      </div>
      <button
        type="button"
        className="media-button browser-gallery-main"
        onClick={() => onOpen({ src: active.src, title: t(active.alt) })}
        aria-label={t(active.alt)}
      >
        <img src={publicAsset(active.src)} alt={t(active.alt)} />
      </button>
      <div className="browser-gallery-tabs" aria-label={t(media.label)}>
        {media.images.map((item, index) => (
          <button
            type="button"
            key={item.src}
            className={index === activeIndex ? "active" : ""}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {t(item.tab)}
          </button>
        ))}
      </div>
      {active.caption && <figcaption>{t(active.caption)}</figcaption>}
    </figure>
  );
}
