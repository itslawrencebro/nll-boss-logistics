import { PROCESS_STAGES } from "./sections-data.js";

export function ProcessSection() {
  const buttons = PROCESS_STAGES.map(
    (stage, idx) => `
        <button
          type="button"
          class="process-step-btn"
          role="tab"
          id="tab-${stage.id}"
          aria-selected="${idx === 0 ? "true" : "false"}"
          aria-controls="panel-process"
          data-stage-index="${idx}"
        >
          <span class="process-step-num">Stage ${stage.step}</span>
          <span class="process-step-name">${stage.name}</span>
          <span class="process-step-short">${stage.short}</span>
        </button>`
  ).join("");

  const first = PROCESS_STAGES[0];
  const deliverablesList = first.deliverables.map((d) => `<li>${d}</li>`).join("");

  return `
  <section class="section section-ivory" id="how-it-works" aria-labelledby="process-heading">
    <div class="container">
      <div class="section-header">
        <div class="gold-rule-short" aria-hidden="true"></div>
        <div class="section-kicker">How BOSS Logistics Works</div>
        <h2 id="process-heading">Discover &rarr; Diagnose &rarr; Design &rarr; Implement &rarr; Measure.</h2>
        <p>
          Every engagement moves through five structured stages with clear checkpoints so your leadership team sees the operational plan before anything changes in production.
        </p>
      </div>

      <div class="process-rail" role="tablist" aria-label="BOSS Logistics 5-Stage Process">
        ${buttons}
      </div>

      <div
        class="process-detail-panel"
        id="panel-process"
        role="tabpanel"
        aria-live="polite"
        aria-labelledby="tab-${first.id}"
      >
        <div>
          <div class="section-kicker" id="process-panel-kicker">Stage ${first.step} &bull; ${first.name}</div>
          <h3 id="process-panel-headline">${first.headline}</h3>
          <p id="process-panel-desc">${first.description}</p>
          <a
            href="#contact"
            class="btn btn-primary btn-sm js-assessment-cta"
            data-analytics-cta="process_schedule_assessment"
          >
            Start at Stage 01: Discover
          </a>
        </div>
        <div class="process-deliverables">
          <h4>Stage Deliverables</h4>
          <ul id="process-panel-deliverables">
            ${deliverablesList}
          </ul>
        </div>
      </div>
    </div>
  </section>`;
}
