import { publicAsset } from "../publicAsset";

export default function ProjectMedia({ media, t, onOpen }) {
  if (!media) return <div className="media-placeholder" aria-hidden="true" />;

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
