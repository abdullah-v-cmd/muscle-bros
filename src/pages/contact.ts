import { getHead, getNav, getFooter } from '../components/layout'

export function contactPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>${getHead('Contact Us', 'Get in touch with Muscle Bros UK — for programme enquiries, donations, volunteering, and partnerships.')}</head>
<body>
${getNav('/contact')}

<!-- HERO -->
<section class="contact-hero">
  <div class="contact-hero-bg"></div>
  <div class="page-hero-content">
    <span class="section-label reveal">Reach Out</span>
    <h1 class="section-title reveal reveal-delay-1">Let's Talk.<br><span class="gold">We're Real People.</span></h1>
    <p class="section-sub reveal reveal-delay-2">Whether you want to apply, donate, partner, or just ask a question — drop us a message and someone on the team will get back to you within 48 hours.</p>
  </div>
</section>

<!-- CONTACT SECTION -->
<section class="contact-section">
  <div class="container">
    <div class="contact-layout">

      <!-- INFO -->
      <div class="contact-info reveal">
        <h2>Get in<br>Touch</h2>
        <p>We're a small, committed team. Your message won't go into a void — it'll be read by someone who cares about what we do and why.</p>

        <div class="contact-details">
          <div class="contact-detail">
            <div class="contact-detail-icon">📍</div>
            <div class="contact-detail-text">
              <h4>Address</h4>
              <p>Muscle Bros HQ<br>Birmingham, B1 1AA<br>United Kingdom</p>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail-icon">✉️</div>
            <div class="contact-detail-text">
              <h4>Email</h4>
              <a href="mailto:info@musclebros.org.uk">info@musclebros.org.uk</a>
              <br/>
              <a href="mailto:donate@musclebros.org.uk" style="font-size:0.8rem;color:var(--grey);margin-top:4px;display:block;">donate@musclebros.org.uk</a>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail-icon">📞</div>
            <div class="contact-detail-text">
              <h4>Phone</h4>
              <p>+44 (0) 121 000 0000</p>
              <p style="font-size:0.8rem;color:var(--grey);margin-top:4px;">Mon–Fri, 9am–5pm</p>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail-icon">🗓️</div>
            <div class="contact-detail-text">
              <h4>Response Time</h4>
              <p>We aim to reply within 48 working hours.</p>
            </div>
          </div>
        </div>

        <div style="margin-top:40px;padding:28px;background:var(--dark3);border-radius:var(--radius-lg);border-left:3px solid var(--gold);">
          <p style="font-size:0.85rem;color:var(--grey-light);line-height:1.7;">
            <strong style="color:var(--white);">For urgent safeguarding matters:</strong><br>
            If you're concerned about the safety of a young person, please contact your local authority or call 999 in an emergency. For non-urgent safeguarding enquiries, email <a href="mailto:safeguarding@musclebros.org.uk" style="color:var(--gold);">safeguarding@musclebros.org.uk</a>.
          </p>
        </div>
      </div>

      <!-- FORM -->
      <div class="reveal reveal-delay-1">
        <div class="contact-form">
          <div id="form-wrap">
            <h3 style="font-family:var(--font-display);font-size:2rem;color:var(--white);margin-bottom:32px;">Send Us a Message</h3>

            <form id="contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="first-name">First Name *</label>
                  <input type="text" id="first-name" name="firstName" placeholder="Marcus" required />
                </div>
                <div class="form-group">
                  <label for="last-name">Last Name *</label>
                  <input type="text" id="last-name" name="lastName" placeholder="Johnson" required />
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number (optional)</label>
                <input type="tel" id="phone" name="phone" placeholder="+44 7700 000000" />
              </div>

              <div class="form-group">
                <label for="reason">Reason for Contact *</label>
                <select id="reason" name="reason" required>
                  <option value="" disabled selected>Select a reason…</option>
                  <option value="join">I want to apply for the programme</option>
                  <option value="donate">I want to make a donation</option>
                  <option value="mentor">I want to become a mentor</option>
                  <option value="partner">I want to partner with Muscle Bros</option>
                  <option value="gym-partner">I own a gym and want to partner</option>
                  <option value="press">Press / media enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group" id="age-group" style="display:none;">
                <label for="age">Your Age (for programme applicants)</label>
                <input type="number" id="age" name="age" placeholder="e.g. 18" min="14" max="25" />
              </div>

              <div class="form-group">
                <label for="city">City / Town</label>
                <input type="text" id="city" name="city" placeholder="e.g. Birmingham" />
              </div>

              <div class="form-group">
                <label for="message">Your Message *</label>
                <textarea id="message" name="message" placeholder="Tell us a bit about yourself and how we can help, or how you'd like to help us…" required></textarea>
              </div>

              <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:28px;">
                <input type="checkbox" id="consent" name="consent" required style="width:16px;height:16px;margin-top:2px;flex-shrink:0;accent-color:var(--gold);cursor:pointer;" />
                <label for="consent" style="font-size:0.78rem;color:var(--grey-light);line-height:1.6;cursor:pointer;">
                  I consent to Muscle Bros storing my details to process this enquiry. We will never share your data with third parties. See our privacy policy for full details.
                </label>
              </div>

              <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </form>
          </div>

          <div class="form-success" id="form-success">
            <div class="form-success-icon">✅</div>
            <h3>Message Received</h3>
            <p>Thanks for reaching out. One of the team will get back to you within 48 working hours.</p>
            <a href="/" class="btn btn-outline" style="margin-top:28px;">Back to Home</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CITIES -->
<section class="section section--dark2" style="padding:80px 0;">
  <div class="container">
    <div class="reveal" style="text-align:center;margin-bottom:48px;">
      <span class="section-label">Our Locations</span>
      <h2 class="section-title">Where We Operate</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;" class="reveal reveal-delay-1">
      ${['Birmingham', 'Manchester', 'London', 'Leeds', 'Bristol', 'Sheffield'].map((city, i) => `
      <div style="padding:28px 32px;background:var(--dark3);border-radius:var(--radius-lg);border:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:16px;">
        <div style="width:40px;height:40px;background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;">📍</div>
        <div>
          <div style="font-family:var(--font-display);font-size:1.3rem;color:var(--white);">${city}</div>
          <div style="font-size:0.75rem;color:var(--grey);margin-top:2px;">${i < 2 ? 'Multiple partner gyms' : 'Partner gym network'}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<script>
  // Show age field for programme applicants
  document.getElementById('reason').addEventListener('change', function() {
    const ageGroup = document.getElementById('age-group');
    ageGroup.style.display = this.value === 'join' ? 'flex' : 'none';
  });
</script>

${getFooter()}
</body>
</html>`
}
