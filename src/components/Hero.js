import { HERO_DATA } from "./sections-data.js";

export function Hero() {
  const principlesHtml = HERO_DATA.principles.map((p) => `<span>${p}</span>`).join("");

  return `
  <section class="hero-section" aria-labelledby="hero-heading">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-subheadline-top">
          <span class="hero-dot" aria-hidden="true"></span>
          <span>${HERO_DATA.subheadlineAbove}</span>
        </div>
        <h1 id="hero-heading">${HERO_DATA.headline}</h1>
        <p class="hero-positioning">${HERO_DATA.positioning}</p>
        <div class="hero-cta-group">
          <a
            href="#contact"
            class="btn btn-gold js-assessment-cta"
          >
            ${HERO_DATA.primaryCta.label}
          </a>
          <a
            href="#assessment"
            class="btn btn-ghost-light"
          >
            See Assessment Overview
          </a>
        </div>
        <div class="hero-principles">
          ${principlesHtml}
        </div>
      </div>
    </div>
  </section>`;
}
