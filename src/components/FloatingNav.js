import { useEffect, useRef, useState } from "react";
import { portfolio } from "../portfolioData";

export default function FloatingNav({ lang, theme, setLang, setTheme, t }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const links = [
    ["#projects", portfolio.ui.projects],
    ["#credentials", portfolio.ui.credentials],
    ["#contact", portfolio.ui.contact],
  ];

  const close = () => setOpen(false);
  const themeLabel =
    theme === "dark" ? t(portfolio.ui.themeToLight) : t(portfolio.ui.themeToDark);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="floating-header">
      <nav className="nav-capsule" aria-label="Portfolio">
        <a href="#top" className="brand-mark" onClick={close}>JIGWAN JOE</a>
        <div className="nav-desktop">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{t(label)}</a>
          ))}
        </div>
        <div className="nav-tools">
          <button
            type="button"
            className="nav-tool lang-switch"
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            aria-label={t(portfolio.ui.languageLabel)}
          >
            {lang === "ko" ? "EN" : "KO"}
          </button>
          <button
            type="button"
            className="nav-tool theme-switch"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === "dark" ? "☀" : "◐"}
          </button>
          <button
            type="button"
            ref={menuButtonRef}
            className="nav-tool menu-switch"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t(portfolio.ui.menuClose) : t(portfolio.ui.menuOpen)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label={t(portfolio.ui.mobileNavigation)}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>{t(label)}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
