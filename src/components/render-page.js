import { SITE_META } from "./sections-data.js";
import { Header } from "./Header.js";
import { Hero } from "./Hero.js";
import { ProblemSection } from "./ProblemSection.js";
import { ProcessSection } from "./ProcessSection.js";
import { AssessmentSection } from "./AssessmentSection.js";
import { LeadFormSection } from "./LeadFormSection.js";
import { FaqSection } from "./FaqSection.js";
import { Footer } from "./Footer.js";

export function renderLogisticsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "New Limits Legacy Consulting — BOSS Logistics",
    url: SITE_META.canonicalUrl,
    email: SITE_META.contact.email,
    telephone: SITE_META.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Frisco",
      addressRegion: "TX",
      addressCountry: "US",
    },
    description: SITE_META.description,
    areaServed: "US",
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${SITE_META.title}</title>
  <meta name="description" content="${SITE_META.description}" />
  <link rel="canonical" href="${SITE_META.canonicalUrl}" />
  <meta name="robots" content="index, follow" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="${SITE_META.title}" />
  <meta property="og:description" content="${SITE_META.description}" />
  <meta property="og:url" content="${SITE_META.canonicalUrl}" />

  <link rel="icon" type="image/png" href="assets/nll-logo-emblem.png" />
  <link rel="apple-touch-icon" href="assets/nll-logo-emblem.png" />
  <link rel="stylesheet" href="src/styles/logistics.css" />

  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ${Header()}
  <main id="main-content">
    ${Hero()}
    ${ProblemSection()}
    ${AssessmentSection()}
    ${ProcessSection()}
    ${LeadFormSection()}
    ${FaqSection()}
  </main>
  ${Footer()}
  <script type="module" src="src/scripts/logistics.js"></script>
</body>
</html>
`;
}
