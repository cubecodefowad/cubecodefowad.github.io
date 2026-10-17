import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initResumeDialog from "./scripts/resumeDialog";
import initCopyGuard from "./scripts/copyGuard";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

// ScrollReveal is loaded from a CDN in index.html. If that request fails the
// `sr` class on <html> would leave every .load-hidden section invisible, so
// fall back to showing them. Tilt is bundled, so it is always safe to run.
if (typeof ScrollReveal === "undefined") {
  document.documentElement.classList.remove("sr");
} else {
  initScrollReveal(targetElements, defaultProps);
}

initTiltEffect();
initResumeDialog();
initCopyGuard();
