import { SOLUTION_CARDS } from "./sections-data.js";

export function SolutionsSection() {
  const cards = SOLUTION_CARDS.map(
    (card) => `
        <article class="solution-card">
          <div>
            <div class="solution-top">
              <span class="solution-index" aria-hidden="true">${card.num}</span>
              <span class="solution-focus">${card.focus}</span>
            </div>
            <h3 style="margin-top:16px;">${card.title}</h3>
            <p>${card.summary}</p>
          </div>
          <ul class="solution-list">
            ${card.outcomes.map((o) => `<li>${o}</li>`).join("")}
          </ul>
        </article>`
  ).join("");

  return `
  <section class="section section-white" id="solutions" aria-labelledby="solutions-heading">
    <div class="container">
      <div class="section-header">
        <div class="gold-rule-short" aria-hidden="true"></div>
        <div class="section-kicker">BOSS Logistics Capabilities</div>
        <h2 id="solutions-heading">Practical workflow systems built around how freight teams actually operate.</h2>
        <p>
          Each solution targets a measurable operational bottleneck—protecting load margin, tightening cash-flow timing, and keeping shippers informed without adding headcount.
        </p>
      </div>
      <div class="solutions-grid">
        ${cards}
      </div>
    </div>
  </section>`;
}
