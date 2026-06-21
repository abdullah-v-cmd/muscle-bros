import { getHead, getNav, getFooter } from '../components/layout'

export function getInvolvedPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>${getHead('Get Involved', 'Join the Muscle Bros programme or support our mission through donations and volunteering.')}</head>
<body>
${getNav('/get-involved')}

<!-- HERO -->
<section class="involved-hero">
  <div class="involved-hero-bg"></div>
  <div class="page-hero-content">
    <span class="section-label reveal">Two Ways In</span>
    <h1 class="section-title reveal reveal-delay-1">Your Move.<br><span class="gold">Make It Count.</span></h1>
    <p class="section-sub reveal reveal-delay-2">Whether you're a young man looking for direction, or someone with the means to fund one — this is where it starts.</p>
  </div>
</section>

<!-- TRACKS -->
<section class="tracks-section" id="apply">
  <div class="container">
    <div class="reveal">
      <span class="section-label">Get Involved</span>
      <h2 class="section-title">Choose Your Track</h2>
    </div>
    <div class="track-layout">

      <!-- JOIN TRACK -->
      <div class="track-panel track-panel--join reveal reveal-delay-1">
        <div class="track-panel-header">
          <span class="section-label">For Young Men Aged 14–25</span>
          <h2>Join the<br>Programme</h2>
          <p>If you're ready to commit to your growth — physically, mentally, and in life — we're ready to back you. No cost. No catch.</p>
        </div>
        <div class="track-panel-body">
          <div class="track-eligibility">
            <h4>You Qualify If:</h4>
            <div class="track-criteria">
              <div class="track-criterion">
                <div class="criterion-check">✓</div>
                <span>You are male, aged 14 to 25</span>
              </div>
              <div class="track-criterion">
                <div class="criterion-check">✓</div>
                <span>You live in or near Birmingham, Manchester, London, Leeds, Bristol, or Sheffield</span>
              </div>
              <div class="track-criterion">
                <div class="criterion-check">✓</div>
                <span>You currently don't have a gym membership due to financial barriers</span>
              </div>
              <div class="track-criterion">
                <div class="criterion-check">✓</div>
                <span>You're willing to commit to the programme and show up consistently</span>
              </div>
              <div class="track-criterion">
                <div class="criterion-check">✓</div>
                <span>You want to build a better direction for your life</span>
              </div>
            </div>
          </div>

          <div style="margin-bottom:28px;">
            <h4 style="font-size:0.8rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--grey);margin-bottom:14px;">What You'll Receive:</h4>
            <div class="track-criteria">
              <div class="track-criterion">
                <div class="criterion-check">✓</div>
                <span>Fully funded gym membership (unlimited access)</span>
              </div>
              <div class="track-criterion">
                <div class="criterion-check">✓</div>
                <span>Monthly supplement supply delivered to you</span>
              </div>
              <div class="track-criterion">
                <div class="criterion-check">✓</div>
                <span>Matched one-to-one mentor for ongoing support</span>
              </div>
              <div class="track-criterion">
                <div class="criterion-check">✓</div>
                <span>Access to group events, workshops, and brotherhood community</span>
              </div>
            </div>
          </div>

          <a href="/contact?reason=join" class="btn btn-primary" style="width:100%;justify-content:center;">Apply Now — It's Free</a>
          <p style="font-size:0.75rem;color:var(--grey);text-align:center;margin-top:12px;">Applications reviewed within 5 working days.</p>
        </div>
      </div>

      <!-- SUPPORT TRACK -->
      <div class="track-panel track-panel--support reveal reveal-delay-2">
        <div class="track-panel-header">
          <span class="section-label">For Donors &amp; Volunteers</span>
          <h2>Support<br>Our Work</h2>
          <p>Your contribution — financial or personal — directly funds a young man's access to the programme. No overhead bloat. 100% into the mission.</p>
        </div>
        <div class="track-panel-body">
          <div style="margin-bottom:32px;">
            <h4 style="font-size:0.8rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--grey);margin-bottom:14px;">Ways to Support:</h4>
            <div class="track-criteria" style="gap:12px;">
              <div class="track-criterion" style="align-items:flex-start;gap:12px;">
                <div class="criterion-check" style="margin-top:2px;flex-shrink:0;">✓</div>
                <div>
                  <strong style="font-size:0.875rem;color:var(--white);display:block;margin-bottom:2px;">Monthly Donation</strong>
                  <span style="font-size:0.8rem;color:var(--grey-light);">As little as £10/month funds a supplement supply for a young man in the programme.</span>
                </div>
              </div>
              <div class="track-criterion" style="align-items:flex-start;gap:12px;">
                <div class="criterion-check" style="margin-top:2px;flex-shrink:0;">✓</div>
                <div>
                  <strong style="font-size:0.875rem;color:var(--white);display:block;margin-bottom:2px;">Become a Mentor</strong>
                  <span style="font-size:0.8rem;color:var(--grey-light);">If you're aged 25+ with lived experience and want to give back, apply to be a mentor.</span>
                </div>
              </div>
              <div class="track-criterion" style="align-items:flex-start;gap:12px;">
                <div class="criterion-check" style="margin-top:2px;flex-shrink:0;">✓</div>
                <div>
                  <strong style="font-size:0.875rem;color:var(--white);display:block;margin-bottom:2px;">Corporate Partnership</strong>
                  <span style="font-size:0.8rem;color:var(--grey-light);">Partner your brand with our mission. Supplement brands, gym chains, and employers welcome.</span>
                </div>
              </div>
              <div class="track-criterion" style="align-items:flex-start;gap:12px;">
                <div class="criterion-check" style="margin-top:2px;flex-shrink:0;">✓</div>
                <div>
                  <strong style="font-size:0.875rem;color:var(--white);display:block;margin-bottom:2px;">Gym Partnership</strong>
                  <span style="font-size:0.8rem;color:var(--grey-light);">Own or manage a gym? Partner with us to offer free access to our members in your city.</span>
                </div>
              </div>
            </div>
          </div>

          <a href="#donate" class="btn btn-ghost" style="width:100%;justify-content:center;">Donate or Volunteer</a>
          <p style="font-size:0.75rem;color:var(--grey);text-align:center;margin-top:12px;">Registered UK Charity · Charity No. 1234567</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- DONATE SECTION -->
<section class="donate-section" id="donate">
  <div class="container">
    <div class="reveal" style="text-align:center;max-width:700px;margin:0 auto 64px;">
      <span class="section-label">Make a Donation</span>
      <h2 class="section-title">Every Pound<br>Gets to Work</h2>
      <p class="section-sub" style="margin:0 auto;">We operate with near-zero admin overhead. Over 90p in every pound goes directly to programme costs — memberships, supplements, and mentor support.</p>
    </div>

    <div class="donate-tiers">
      <div class="donate-tier reveal reveal-delay-1">
        <div class="donate-tier-amount">£10</div>
        <div class="donate-tier-period">per month</div>
        <div class="donate-tier-impact">Funds one month of supplements for a young man in the programme — the nutrition side of his transformation.</div>
        <a href="/contact?reason=donate&amount=10" class="btn btn-outline" style="width:100%;justify-content:center;">Donate £10/mo</a>
      </div>

      <div class="donate-tier featured reveal reveal-delay-2">
        <div class="donate-tier-amount">£30</div>
        <div class="donate-tier-period">per month</div>
        <div class="donate-tier-impact">Covers a gym membership AND supplements for one young man for a full month. The complete physical package.</div>
        <a href="/contact?reason=donate&amount=30" class="btn btn-primary" style="width:100%;justify-content:center;">Donate £30/mo</a>
      </div>

      <div class="donate-tier reveal reveal-delay-3">
        <div class="donate-tier-amount">£100</div>
        <div class="donate-tier-period">per month</div>
        <div class="donate-tier-impact">Fund the entire programme for one young man — gym, supplements, and mentor hours. Full transformation, start to finish.</div>
        <a href="/contact?reason=donate&amount=100" class="btn btn-outline" style="width:100%;justify-content:center;">Donate £100/mo</a>
      </div>
    </div>

    <div class="reveal" style="text-align:center;margin-top:48px;">
      <p style="font-size:0.875rem;color:var(--grey);margin-bottom:16px;">Prefer to make a one-off donation or set up a bank transfer?</p>
      <a href="/contact?reason=donate" class="btn btn-ghost">Get in Touch About Donating</a>
    </div>
  </div>
</section>

<!-- VOLUNTEER -->
<section class="section section--dark" id="volunteer" style="text-align:center;">
  <div class="container reveal" style="max-width:720px;margin:0 auto;">
    <span class="section-label">Become a Mentor</span>
    <h2 class="section-title">You've Walked the<br>Road. Now Light It.</h2>
    <p class="section-sub" style="margin:0 auto 40px;">
      Our mentors are men aged 25+ who have genuine lived experience and a desire to give back. If you've overcome adversity, built discipline, and want to help the next generation — we want to hear from you.
    </p>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
      <a href="/contact?reason=mentor" class="btn btn-primary">Apply to Be a Mentor</a>
      <a href="/contact?reason=partner" class="btn btn-outline" id="partner">Partner With Us</a>
    </div>
  </div>
</section>

${getFooter()}
</body>
</html>`
}
