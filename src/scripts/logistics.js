/**
 * New Limits Legacy — BOSS Logistics Interactive Controller (Static / Zero-Connector)
 *
 * Self-contained client-side interactions:
 * - Mobile navigation drawer
 * - Smooth CTA scrolling & focus management
 * - Interactive 5-stage Process inspector (Discover -> Measure)
 * - Assessment workflow selector mapped to #primary_bottleneck
 * - Accessible FAQ accordion
 * - Client-side sign-up form validation & mailto/clipboard confirmation
 * - Privacy notice modal dialog
 */

import {
  ASSESSMENT_BOTTLENECK_PREVIEWS,
  PROCESS_STAGES,
} from "../components/sections-data.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+()\-\.\s]{7,30}$/;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function scrollToAssessmentForm() {
  const formSection = document.getElementById("contact-form") || document.getElementById("contact");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const firstInput = document.getElementById("full_name");
  if (firstInput) {
    window.setTimeout(() => {
      firstInput.focus({ preventScroll: true });
    }, 350);
  }
}

function initMobileDrawer() {
  const toggleBtn = document.getElementById("nav-toggle");
  const drawer = document.getElementById("mobile-drawer");
  if (!toggleBtn || !drawer) return;

  function setDrawer(open) {
    toggleBtn.setAttribute("aria-expanded", String(open));
    toggleBtn.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
    drawer.hidden = !open;
    drawer.classList.toggle("open", open);
  }

  toggleBtn.addEventListener("click", () => {
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    setDrawer(!isOpen);
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setDrawer(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
      setDrawer(false);
      toggleBtn.focus();
    }
  });
}

function initCtaScrolling() {
  document.querySelectorAll(".js-assessment-cta").forEach((cta) => {
    cta.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToAssessmentForm();
    });
  });
}

function initProcessTabs() {
  const tabs = Array.from(document.querySelectorAll(".process-step-btn"));
  const panel = document.getElementById("panel-process");
  const kickerEl = document.getElementById("process-panel-kicker");
  const headlineEl = document.getElementById("process-panel-headline");
  const descEl = document.getElementById("process-panel-desc");
  const listEl = document.getElementById("process-panel-deliverables");

  if (!tabs.length || !panel || !kickerEl || !headlineEl || !descEl || !listEl) return;

  function selectStage(index) {
    const stage = PROCESS_STAGES[index];
    if (!stage) return;

    tabs.forEach((tab, idx) => {
      tab.setAttribute("aria-selected", String(idx === index));
    });

    panel.setAttribute("aria-labelledby", `tab-${stage.id}`);
    kickerEl.textContent = `Stage ${stage.step} • ${stage.name}`;
    headlineEl.textContent = stage.headline;
    descEl.textContent = stage.description;
    listEl.innerHTML = stage.deliverables.map((d) => `<li>${escapeHtml(d)}</li>`).join("");
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectStage(index));

    tab.addEventListener("keydown", (event) => {
      let nextIdx = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIdx = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIdx = (index - 1 + tabs.length) % tabs.length;
      }
      if (nextIdx !== null) {
        event.preventDefault();
        tabs[nextIdx].focus();
        selectStage(nextIdx);
      }
    });
  });
}

function initAssessmentSelector() {
  const chips = Array.from(document.querySelectorAll(".workflow-chip"));
  const titleEl = document.getElementById("focus-box-title");
  const summaryEl = document.getElementById("focus-box-summary");
  const applyBtn = document.getElementById("apply-bottleneck-btn");
  const bottleneckSelect = document.getElementById("primary_bottleneck");

  if (!chips.length || !titleEl || !summaryEl || !applyBtn) return;

  let selectedValue = ASSESSMENT_BOTTLENECK_PREVIEWS[0].value;

  function selectChip(value) {
    const match = ASSESSMENT_BOTTLENECK_PREVIEWS.find((item) => item.value === value);
    if (!match) return;
    selectedValue = match.value;

    chips.forEach((chip) => {
      const active = chip.dataset.bottleneckValue === selectedValue;
      chip.classList.toggle("active", active);
      chip.setAttribute("aria-pressed", String(active));
    });

    titleEl.textContent = match.focusTitle;
    summaryEl.textContent = match.focusSummary;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => selectChip(chip.dataset.bottleneckValue));
  });

  applyBtn.addEventListener("click", () => {
    if (bottleneckSelect) {
      bottleneckSelect.value = selectedValue;
      bottleneckSelect.removeAttribute("aria-invalid");
      const err = document.getElementById("err-primary_bottleneck");
      if (err) err.textContent = "";
    }
    scrollToAssessmentForm();
  });
}

function initFaqAccordion() {
  const triggers = Array.from(document.querySelectorAll(".faq-trigger"));
  triggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panelId = btn.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const nextState = !expanded;
      btn.setAttribute("aria-expanded", String(nextState));
      if (panel) {
        panel.hidden = !nextState;
      }
    });
  });
}

function initPrivacyDialog() {
  const dialog = document.getElementById("privacy-dialog");
  const closeBtn = document.getElementById("close-privacy-dialog");
  if (!dialog) return;

  document.querySelectorAll(".js-open-privacy").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
    });
  }
}

function initLeadForm() {
  const form = document.getElementById("logistics-lead-form");
  const statusBanner = document.getElementById("form-status-banner");

  if (!form || !statusBanner) return;

  const requiredFields = [
    "full_name",
    "company_name",
    "email",
    "phone",
    "business_type",
    "primary_bottleneck",
    "consent_to_contact",
  ];

  function setFieldError(fieldName, message) {
    const input = form.elements.namedItem(fieldName);
    const errEl = document.getElementById(`err-${fieldName}`);
    if (errEl) {
      errEl.textContent = message || "";
    }
    if (input && input instanceof HTMLElement) {
      if (message) {
        input.setAttribute("aria-invalid", "true");
      } else {
        input.removeAttribute("aria-invalid");
      }
    }
  }

  function clearAllErrors() {
    [
      ...requiredFields,
      "job_title",
      "monthly_load_volume",
      "current_tms",
      "preferred_meeting_time",
    ].forEach((name) => setFieldError(name, ""));
  }

  function showBanner(type, htmlContent) {
    statusBanner.className = `form-banner ${type}`;
    statusBanner.innerHTML = htmlContent;
  }

  function hideBanner() {
    statusBanner.className = "form-banner hidden";
    statusBanner.innerHTML = "";
  }

  function validateField(fieldName) {
    const el = form.elements.namedItem(fieldName);
    if (!el) return "";

    if (fieldName === "consent_to_contact") {
      return !el.checked
        ? "Please confirm consent so New Limits Legacy can contact you."
        : "";
    }

    const val = String(el.value || "").trim();

    if (fieldName === "full_name") {
      return val.length < 2 ? "Full name is required (at least 2 characters)." : "";
    }
    if (fieldName === "company_name") {
      return val.length < 2 ? "Company name is required (at least 2 characters)." : "";
    }
    if (fieldName === "email") {
      return !EMAIL_RE.test(val) ? "Enter a valid work email address." : "";
    }
    if (fieldName === "phone") {
      const digits = val.replace(/\D/g, "");
      return !PHONE_RE.test(val) || digits.length < 7
        ? "Enter a valid direct phone number (at least 7 digits)."
        : "";
    }
    if (fieldName === "business_type") {
      return !val ? "Select your business type." : "";
    }
    if (fieldName === "primary_bottleneck") {
      return !val ? "Select your primary operational bottleneck." : "";
    }
    return "";
  }

  requiredFields.forEach((fieldName) => {
    const el = form.elements.namedItem(fieldName);
    if (!el) return;
    const eventType =
      el.tagName === "SELECT" || el.type === "checkbox" ? "change" : "blur";
    el.addEventListener(eventType, () => {
      setFieldError(fieldName, validateField(fieldName));
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    hideBanner();
    clearAllErrors();

    // Honeypot check: quietly reset if bot populated hidden field
    const hp = form.elements.namedItem("website_url")?.value || "";
    if (hp.trim() !== "") {
      form.reset();
      showBanner("success", "<strong>Thank you.</strong> Your request has been noted.");
      return;
    }

    const errors = {};
    requiredFields.forEach((fieldName) => {
      const msg = validateField(fieldName);
      if (msg) {
        errors[fieldName] = msg;
        setFieldError(fieldName, msg);
      }
    });

    if (Object.keys(errors).length > 0) {
      showBanner(
        "error",
        "<strong>Please check your entries.</strong> One or more required fields need attention below."
      );
      const firstBadName = Object.keys(errors)[0];
      const firstBadEl = form.elements.namedItem(firstBadName);
      if (firstBadEl && typeof firstBadEl.focus === "function") {
        firstBadEl.focus();
      }
      return;
    }

    const payload = {
      full_name: form.elements.namedItem("full_name").value.trim(),
      company_name: form.elements.namedItem("company_name").value.trim(),
      job_title: form.elements.namedItem("job_title").value.trim(),
      email: form.elements.namedItem("email").value.trim(),
      phone: form.elements.namedItem("phone").value.trim(),
      business_type: form.elements.namedItem("business_type").value,
      monthly_load_volume: form.elements.namedItem("monthly_load_volume").value,
      current_tms: form.elements.namedItem("current_tms").value.trim(),
      primary_bottleneck: form.elements.namedItem("primary_bottleneck").value,
      preferred_meeting_time: form.elements.namedItem("preferred_meeting_time").value.trim(),
    };

    const emailBody = [
      `Name: ${payload.full_name}`,
      `Company: ${payload.company_name}`,
      payload.job_title ? `Title: ${payload.job_title}` : null,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Business Type: ${payload.business_type}`,
      payload.monthly_load_volume ? `Monthly Volume: ${payload.monthly_load_volume}` : null,
      payload.current_tms ? `Current TMS: ${payload.current_tms}` : null,
      `Primary Bottleneck: ${payload.primary_bottleneck}`,
      payload.preferred_meeting_time ? `Preferred Time: ${payload.preferred_meeting_time}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoHref = `mailto:contact@newlimitslegacy.com?subject=${encodeURIComponent(
      `BOSS Logistics Assessment Request — ${payload.company_name}`
    )}&body=${encodeURIComponent(emailBody)}`;

    showBanner(
      "success",
      `<strong>Assessment Request Prepared</strong><br/>
      Thank you, ${escapeHtml(payload.full_name)}. Your request summary for <strong>${escapeHtml(
        payload.company_name
      )}</strong> (focus: <strong>${escapeHtml(
        payload.primary_bottleneck
      )}</strong>) is ready.<br/>
      <div style="margin-top:12px; display:flex; flex-wrap:wrap; gap:10px;">
        <a href="${mailtoHref}" class="btn btn-primary btn-sm">Send via Email App &rarr;</a>
        <a href="tel:+12148436001" class="btn btn-secondary btn-sm">Call (214) 843-6001</a>
      </div>`
    );

    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileDrawer();
  initCtaScrolling();
  initProcessTabs();
  initAssessmentSelector();
  initFaqAccordion();
  initPrivacyDialog();
  initLeadForm();
});
