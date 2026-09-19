import { useEffect, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { portfolio, pick } from "./portfolioData";
import FloatingNav from "./components/FloatingNav";
import AccessibleModal from "./components/AccessibleModal";
import EvidenceModal from "./components/EvidenceModal";
import HeroSection from "./sections/HeroSection";
import ProofSection from "./sections/ProofSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import CredentialsSection from "./sections/CredentialsSection";
import ContactSection from "./sections/ContactSection";
import { publicAsset } from "./publicAsset";

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("portfolio-demo-lang") || "ko");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-demo-theme");
    if (saved) return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [modalMedia, setModalMedia] = useState(null);
  const [evidenceProject, setEvidenceProject] = useState(null);
  const t = useMemo(() => (value) => pick(value, lang), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("portfolio-demo-lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-demo-theme", theme);
  }, [theme]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="portfolio-app">
        <a className="skip-link" href="#main-content">{t(portfolio.ui.skipToContent)}</a>
        <FloatingNav
          lang={lang}
          theme={theme}
          setLang={setLang}
          setTheme={setTheme}
          t={t}
        />

        <main id="main-content">
          <HeroSection t={t} />
          <ProofSection t={t} />
          <AboutSection t={t} />
          <ProjectsSection
            t={t}
            onOpenMedia={setModalMedia}
            onOpenEvidence={setEvidenceProject}
          />
          <CredentialsSection t={t} />
          <ContactSection t={t} />
        </main>

        <footer className="site-footer">
          <div className="section-shell footer-inner">
            <span>© 2026 {t(portfolio.name)}</span>
          </div>
        </footer>

        <AccessibleModal
          open={Boolean(modalMedia)}
          onClose={() => setModalMedia(null)}
          title={modalMedia?.title || ""}
          closeLabel={t(portfolio.ui.closeDialog)}
        >
          {modalMedia && (
            <img
              src={publicAsset(modalMedia.src)}
              alt={modalMedia.title}
              className="modal-image"
            />
          )}
        </AccessibleModal>

        <EvidenceModal
          project={evidenceProject}
          t={t}
          onClose={() => setEvidenceProject(null)}
        />
      </div>
    </MotionConfig>
  );
}

export default App;
