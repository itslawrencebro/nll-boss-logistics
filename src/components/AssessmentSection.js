import { ASSESSMENT_BOTTLENECK_PREVIEWS, ASSESSMENT_PILLARS } from "./sections-data.js";

export function AssessmentSection() {
  const pillarsHtml = ASSESSMENT_PILLARS.map(
    (item) => `
          <article class="assessment-step-card">
            <span class="assessment-step-num">STEP ${item.num}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>`
  ).join("");

  const chipsHtml = ASSESSMENT_BOTTLENECK_PREVIEWS.map(
    (b, idx) => `
            <button
              type="button"
              class="workflow-chip ${idx === 0 ? "active" : ""}"
              data-bottleneck-value="${b.value}"
              aria-pressed="${idx === 0 ? "true" : "false"}"
            >
              ${b.label}
            </button>`
  ).join("");

  const first = ASSESSMENT_BOTTLENECK_PREVIEWS[0];

  return `
  <section class="section section-forest" id="assessment" aria-labelledby="assessment-heading">
    <div class="container">
      <div class="section-header">
        <div class="gold-rule-short" aria-hidden="true"></div>
        <div class="section-kicker">Operations Assessment</div>
        <h2 id="assessment-heading">Start with one high-friction workflow—not a multi-quarter overhaul.</h2>
        <p>
          Our 30-minute Operations Assessment isolates where manual work is costing your operation time and cash-flow speed, before you commit to implementation.
        </p>
      </div>

      <div class="assessment-layout">
        <div class="assessment-steps">
          ${pillarsHtml}
        </div>

        <div class="assessment-selector-card">
          <div>
            <h3>Select Your Highest-Friction Workflow</h3>
            <p>Preview what we inspect during your 30-minute assessment and pre-fill the booking form below.</p>
          </div>

          <div class="workflow-chips" role="group" aria-label="Select workflow bottleneck to preview">
            ${chipsHtml}
          </div>

          <div class="workflow-focus-box" aria-live="polite">
            <strong id="focus-box-title">${first.focusTitle}</strong>
            <span id="focus-box-summary">${first.focusSummary}</span>
          </div>

          <div>
            <button
              type="button"
              class="btn btn-primary"
              id="apply-bottleneck-btn"
              style="width:100%;"
              data-analytics-cta="assessment_apply_bottleneck"
            >
              Schedule Assessment for This Workflow &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
