import { FAQ_ITEMS } from "./sections-data.js";

export function FaqSection() {
  const itemsHtml = FAQ_ITEMS.map(
    (faq, idx) => `
        <div class="faq-item">
          <button
            type="button"
            class="faq-trigger"
            id="faq-btn-${faq.id}"
            aria-expanded="${idx === 0 ? "true" : "false"}"
            aria-controls="faq-panel-${faq.id}"
          >
            <span>${faq.question}</span>
            <span class="faq-icon" aria-hidden="true">+</span>
          </button>
          <div
            class="faq-panel"
            id="faq-panel-${faq.id}"
            role="region"
            aria-labelledby="faq-btn-${faq.id}"
            ${idx === 0 ? "" : "hidden"}
          >
            <p style="margin:0;">${faq.answer}</p>
          </div>
        </div>`
  ).join("");

  return `
  <section class="section section-white" id="faq" aria-labelledby="faq-heading">
    <div class="container">
      <div class="section-header">
        <div class="gold-rule-short" aria-hidden="true"></div>
        <div class="section-kicker">Frequently Asked Questions</div>
        <h2 id="faq-heading">Clear answers before we schedule a call.</h2>
        <p>
          Straightforward answers on TMS compatibility, how assessments work, team size fit, and scoped pricing.
        </p>
      </div>
      <div class="faq-list">
        ${itemsHtml}
      </div>
    </div>
  </section>`;
}
