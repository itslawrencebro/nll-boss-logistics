import { PROBLEM_ITEMS } from "./sections-data.js";

export function ProblemSection() {
  const cards = PROBLEM_ITEMS.map(
    (item) => `
        <article class="problem-card">
          <div class="problem-meta">
            <span class="problem-tag">${item.tag}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="problem-impact">${item.impact}</div>
        </article>`
  ).join("");

  return `
  <section class="section section-smoke" id="problems" aria-labelledby="problems-heading">
    <div class="container">
      <div class="section-header">
        <div class="gold-rule-short" aria-hidden="true"></div>
        <div class="section-kicker">Where Margin &amp; Desk Capacity Leak</div>
        <h2 id="problems-heading">Freight moves fast. Administrative handoffs rarely keep up.</h2>
        <p>
          When growing brokerages and carriers add load volume without connecting intake, dispatch, and billing workflows, every extra load adds manual coordination overhead.
        </p>
      </div>
      <div class="problem-grid">
        ${cards}
      </div>
    </div>
  </section>`;
}
