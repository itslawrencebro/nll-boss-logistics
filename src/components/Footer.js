import { NAV_LINKS, SITE_META } from "./sections-data.js";

export function Footer() {
  const quickLinks = NAV_LINKS.map(
    (item) => `<li><a href="${item.href}">${item.label}</a></li>`
  ).join("\n            ");

  return `
  <footer class="site-footer" aria-label="Footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo-wrap">
            <img
              src="assets/nll-logo-primary.png"
              alt="New Limits Legacy — From Strategy to Execution"
              class="footer-logo-img"
              width="1421"
              height="683"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p class="footer-desc">
            BOSS Logistics is the freight and logistics operations consulting practice of New Limits Legacy Consulting—helping brokers, carriers, and 3PL operators turn fragmented workflows into measurable execution.
          </p>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <ul class="footer-links">
            ${quickLinks}
            <li><a href="${SITE_META.parentSiteUrl}" rel="noopener noreferrer">New Limits Legacy Home &rarr;</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Verified Contact &amp; Legal</h4>
          <ul class="footer-links">
            <li><a href="mailto:${SITE_META.contact.email}">${SITE_META.contact.email}</a></li>
            <li><a href="${SITE_META.contact.phoneHref}">${SITE_META.contact.phoneDisplay}</a></li>
            <li><span>${SITE_META.contact.location}</span></li>
            <li>
              <a href="${SITE_META.privacyUrl}" rel="noopener noreferrer">Privacy Policy</a>
              &bull;
              <button type="button" class="js-open-privacy">Logistics Intake Notice</button>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>&copy; 2026 New Limits Legacy Consulting &bull; BOSS Logistics Division</span>
        <span>Deployable path: /logistics &bull; Frisco, Texas</span>
      </div>
    </div>

    <dialog class="privacy-dialog" id="privacy-dialog" aria-labelledby="privacy-dialog-title">
      <h3 id="privacy-dialog-title" style="margin:0 0 10px; color:var(--nll-forest);">
        Privacy &amp; Operational Data Notice
      </h3>
      <p style="font-size:0.94rem; color:var(--nll-slate); margin:0 0 12px;">
        Information submitted on this page is collected solely by New Limits Legacy Consulting to review your freight operations inquiry, coordinate your 30-minute assessment, and manage internal follow-up.
      </p>
      <p style="font-size:0.94rem; color:var(--nll-slate); margin:0 0 18px;">
        Do not include confidential freight documents, customer rate confirmations, signed BOLs/PODs, banking details, or driver PII in public web form submissions. Full privacy terms live at <a href="${SITE_META.privacyUrl}" rel="noopener noreferrer" style="color:var(--nll-forest); font-weight:700;">newlimitslegacy.com/privacy</a>.
      </p>
      <div style="display:flex; justify-content:flex-end;">
        <button type="button" class="btn btn-primary btn-sm" id="close-privacy-dialog">Close</button>
      </div>
    </dialog>
  </footer>`;
}
