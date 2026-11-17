import { SITE_META } from "./sections-data.js";

export function LeadFormSection() {
  return `
  <section class="section section-smoke" id="contact" aria-labelledby="contact-heading">
    <div class="container">
      <div class="section-header">
        <div class="gold-rule-short" aria-hidden="true"></div>
        <div class="section-kicker">Visitor Sign-Up &amp; Assessment Request</div>
        <h2 id="contact-heading">Request your 30-minute Operations Assessment.</h2>
        <p>
          Complete the form below to outline your current dispatch, paperwork, or billing bottleneck. No software installation or TMS migration is required to get started.
        </p>
      </div>

      <div class="contact-grid">
        <aside class="contact-sidebar" aria-label="Assessment Preparation and Security Information">
          <div class="sidebar-card">
            <h3>What Happens Next</h3>
            <ul class="sidebar-list">
              <li><strong>Focused 30-Minute Review:</strong> Walk through one high-friction workflow from booking to POD and invoicing.</li>
              <li><strong>Keep Your Current TMS:</strong> Practical workflow recommendations built around your existing dispatch and accounting setup.</li>
              <li><strong>Direct Contact:</strong> <a href="mailto:${SITE_META.contact.email}">${SITE_META.contact.email}</a> &bull; <a href="${SITE_META.contact.phoneHref}">${SITE_META.contact.phoneDisplay}</a></li>
            </ul>
          </div>

          <div class="security-notice" role="note">
            <strong>Do Not Submit Sensitive Freight Documents Here</strong>
            Please keep confidential rate confirmations, signed BOLs, POD files, shipper contracts, MC/bank credentials, and driver personal data out of this public sign-up form.
          </div>
        </aside>

        <div class="lead-form-card" id="contact-form">
          <div id="form-status-banner" class="form-banner hidden" role="alert" aria-live="assertive"></div>

          <form id="logistics-lead-form" novalidate>
            <div class="hp-field" aria-hidden="true">
              <label for="website_url">Leave this field empty</label>
              <input type="text" id="website_url" name="website_url" tabindex="-1" autocomplete="off" value="" />
            </div>

            <div class="form-grid-2">
              <div class="form-field">
                <label for="full_name">Full Name <span class="required-mark" aria-hidden="true">*</span></label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required
                  autocomplete="name"
                  maxlength="120"
                  placeholder="Alex Morgan"
                  aria-describedby="err-full_name"
                />
                <span class="field-error" id="err-full_name" role="status"></span>
              </div>

              <div class="form-field">
                <label for="company_name">Company Name <span class="required-mark" aria-hidden="true">*</span></label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  required
                  autocomplete="organization"
                  maxlength="160"
                  placeholder="Summit Freight Brokerage LLC"
                  aria-describedby="err-company_name"
                />
                <span class="field-error" id="err-company_name" role="status"></span>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-field">
                <label for="job_title">Job Title (Optional)</label>
                <input
                  type="text"
                  id="job_title"
                  name="job_title"
                  autocomplete="organization-title"
                  maxlength="120"
                  placeholder="Owner, VP Operations, Dispatch Lead"
                  aria-describedby="err-job_title"
                />
                <span class="field-error" id="err-job_title" role="status"></span>
              </div>

              <div class="form-field">
                <label for="business_type">Business Type <span class="required-mark" aria-hidden="true">*</span></label>
                <select
                  id="business_type"
                  name="business_type"
                  required
                  aria-describedby="err-business_type"
                >
                  <option value="">Select operating model...</option>
                  <option value="broker">Freight Broker</option>
                  <option value="carrier">Motor Carrier</option>
                  <option value="broker-carrier">Broker-Carrier (Dual Authority)</option>
                  <option value="3PL">3PL / Logistics Provider</option>
                  <option value="other">Other</option>
                </select>
                <span class="field-error" id="err-business_type" role="status"></span>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-field">
                <label for="email">Work Email <span class="required-mark" aria-hidden="true">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autocomplete="email"
                  maxlength="160"
                  placeholder="alex@company.com"
                  aria-describedby="err-email"
                />
                <span class="field-error" id="err-email" role="status"></span>
              </div>

              <div class="form-field">
                <label for="phone">Direct Phone <span class="required-mark" aria-hidden="true">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autocomplete="tel"
                  maxlength="30"
                  placeholder="(214) 555-0148"
                  aria-describedby="err-phone"
                />
                <span class="field-error" id="err-phone" role="status"></span>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-field">
                <label for="monthly_load_volume">Monthly Load Volume (Optional)</label>
                <select
                  id="monthly_load_volume"
                  name="monthly_load_volume"
                  aria-describedby="err-monthly_load_volume"
                >
                  <option value="">Prefer not to say / Select range</option>
                  <option value="under_100">Under 100 loads / month</option>
                  <option value="100_300">100 – 300 loads / month</option>
                  <option value="300_750">300 – 750 loads / month</option>
                  <option value="750_1500">750 – 1,500 loads / month</option>
                  <option value="1500_plus">1,500+ loads / month</option>
                </select>
                <span class="field-error" id="err-monthly_load_volume" role="status"></span>
              </div>

              <div class="form-field">
                <label for="current_tms">Current TMS or Dispatch Setup (Optional)</label>
                <input
                  type="text"
                  id="current_tms"
                  name="current_tms"
                  maxlength="160"
                  placeholder="e.g. McLeod, AscendTMS, Tai, Spreadsheets"
                  aria-describedby="err-current_tms"
                />
                <span class="field-error" id="err-current_tms" role="status"></span>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-field">
                <label for="primary_bottleneck">Primary Operational Bottleneck <span class="required-mark" aria-hidden="true">*</span></label>
                <select
                  id="primary_bottleneck"
                  name="primary_bottleneck"
                  required
                  aria-describedby="err-primary_bottleneck"
                >
                  <option value="">Select primary bottleneck...</option>
                  <option value="paperwork">Paperwork &amp; POD Processing</option>
                  <option value="dispatch">Dispatch &amp; Check Calls</option>
                  <option value="tracking">Shipment Tracking &amp; Exceptions</option>
                  <option value="invoicing">Invoicing &amp; QuickBooks Handoffs</option>
                  <option value="carrier verification">Carrier Verification &amp; Packets</option>
                  <option value="other">Other / End-to-End Flow</option>
                </select>
                <span class="field-error" id="err-primary_bottleneck" role="status"></span>
              </div>

              <div class="form-field">
                <label for="preferred_meeting_time">Preferred Meeting Time (Optional)</label>
                <input
                  type="text"
                  id="preferred_meeting_time"
                  name="preferred_meeting_time"
                  maxlength="200"
                  placeholder="e.g. Thu afternoon Central, or next Tue morning"
                  aria-describedby="err-preferred_meeting_time"
                />
                <span class="field-error" id="err-preferred_meeting_time" role="status"></span>
              </div>
            </div>

            <div class="consent-row">
              <input
                type="checkbox"
                id="consent_to_contact"
                name="consent_to_contact"
                required
                aria-describedby="err-consent_to_contact"
              />
              <label for="consent_to_contact">
                I agree that New Limits Legacy Consulting may contact me by email or phone regarding this operations assessment request. <span class="required-mark" aria-hidden="true">*</span>
              </label>
            </div>
            <span class="field-error" id="err-consent_to_contact" role="status" style="display:block; margin:-10px 0 14px;"></span>

            <button type="submit" class="btn btn-primary" id="lead-submit-btn" style="width:100%;">
              <span class="btn-label">Request Operations Assessment</span>
            </button>

            <p class="privacy-footnote">
              Privacy Disclosure: Information submitted is used strictly to schedule and prepare your New Limits Legacy BOSS Logistics assessment. Review our <button type="button" class="js-open-privacy" style="background:none;border:0;padding:0;color:var(--nll-forest);font-weight:700;text-decoration:underline;cursor:pointer;">Privacy Notice</button>.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}
