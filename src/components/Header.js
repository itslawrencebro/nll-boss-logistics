import { SITE_META } from "./sections-data.js";

const SIMPLE_NAV_LINKS = [
  { label: "Assessment", href: "#assessment" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Sign Up", href: "#contact" },
];

export function Header() {
  const navItems = SIMPLE_NAV_LINKS.map(
    (item) => `<a href="${item.href}">${item.label}</a>`
  ).join("\n          ");

  const mobileNavItems = SIMPLE_NAV_LINKS.map(
    (item) => `<a href="${item.href}" class="mobile-nav-link">${item.label}</a>`
  ).join("\n        ");

  return `
  <header class="site-header" id="top">
    <div class="container header-inner">
      <a href="#top" class="brand-lockup" aria-label="New Limits Legacy Consulting — BOSS Logistics Home">
        <img
          src="assets/nll-logo-compact.png"
          alt="New Limits Legacy metallic emblem and wordmark"
          class="brand-logo-img"
          width="1413"
          height="613"
          decoding="async"
        />
        <span class="brand-divider" aria-hidden="true"></span>
        <span class="brand-division">
          <span class="brand-division-tag">${SITE_META.divisionName}</span>
          <span class="brand-division-sub">Operations Consulting</span>
        </span>
      </a>

      <nav class="main-nav" aria-label="Primary Navigation">
        ${navItems}
      </nav>

      <div class="header-actions">
        <a
          href="#contact"
          class="btn btn-primary btn-sm header-cta-desktop js-assessment-cta"
        >
          Schedule an Operations Assessment
        </a>
        <button
          type="button"
          class="nav-toggle"
          id="nav-toggle"
          aria-expanded="false"
          aria-controls="mobile-drawer"
          aria-label="Open navigation menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <div class="mobile-drawer" id="mobile-drawer" hidden>
      <nav class="mobile-drawer-links" aria-label="Mobile Navigation">
        ${mobileNavItems}
      </nav>
      <a
        href="#contact"
        class="btn btn-primary js-assessment-cta"
        style="width:100%;"
      >
        Schedule an Operations Assessment
      </a>
    </div>
  </header>`;
}
