import { getHead, getNav, getFooter } from '../components/layout'

export function homePage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>${getHead('Home', 'Muscle Bros UK — A charity that uses free gym memberships, supplements, and mentorship to keep young men off the streets and build disciplined lives.')}</head>
<body>
${getNav('/')}

<!-- HERO -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid-overlay"></div>
  <div class="hero-content">
    <div class="hero-eyebrow">UK Registered Charity &nbsp;·&nbsp; Est. 2019 &nbsp;·&nbsp; Birmingham</div>
    <h1 class="hero-title">
      Built in<br>the Gym.<br><span class="accent">Shaped for</span><br>Life.
    </h1>
    <p class="hero-sub">
      We give young men access to free gym memberships, supplements, and mentorship — because discipline built under the bar carries into every area of life.
    </p>
    <div class="hero-actions">
      <a href="/get-involved" class="btn btn-primary">
        Join the Programme
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="/get-involved#donate" class="btn btn-outline">Support Our Mission</a>
    </div>

    <div class="hero-stats">
      <div>
        <div class="hero-stat-num" data-count="1200" data-suffix="+">1200+</div>
        <div class="hero-stat-label">Young Men Helped</div>
      </div>
      <div>
        <div class="hero-stat-num" data-count="47" data-suffix="">47</div>
        <div class="hero-stat-label">Partner Gyms</div>
      </div>
      <div>
        <div class="hero-stat-num" data-count="6" data-suffix="">6</div>
        <div class="hero-stat-label">UK Cities</div>
      </div>
      <div>
        <div class="hero-stat-num" data-count="94" data-suffix="%">94%</div>
        <div class="hero-stat-label">Stayed Out of Trouble</div>
      </div>
    </div>
  </div>
  <div class="hero-scroll">
    <div class="hero-scroll-line"></div>
    Scroll
  </div>
</section>

<!-- MARQUEE STRIP -->
<div class="mission-strip">
  <div class="mission-strip-inner">
    <span class="mission-strip-item">Iron Builds Discipline <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Discipline Changes Lives <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Free Gym Memberships <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Free Supplements <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Real Mentorship <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Purpose Over Postcode <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Iron Builds Discipline <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Discipline Changes Lives <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Free Gym Memberships <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Free Supplements <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Real Mentorship <span class="mission-strip-dot"></span></span>
    <span class="mission-strip-item">Purpose Over Postcode <span class="mission-strip-dot"></span></span>
  </div>
</div>

<!-- MISSION -->
<section class="mission-section">
  <div class="container">
    <div class="mission-layout">
      <div class="mission-visual reveal">
        <div class="mission-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80&auto=format&fit=crop"
            alt="Young man training in the gym"
            loading="lazy"
          />
        </div>
        <div class="mission-img-badge">
          <span class="num">5+</span>
          <span class="label">Years of Impact</span>
        </div>
      </div>

      <div class="mission-text-content reveal reveal-delay-1">
        <span class="section-label">Our Mission</span>
        <h2 class="section-title">The Gym Is Just the Beginning</h2>
        <p class="section-sub">
          Muscle Bros exists because too many young men in the UK are falling through the cracks — and no one is offering them a real way out. We're not a gym brand. We're a movement.
        </p>

        <div class="mission-pillars">
          <div class="mission-pillar">
            <div class="pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5a4.5 4.5 0 1 0 6.364 6.364"/><path d="M17.5 17.5a4.5 4.5 0 1 0-6.364-6.364"/><line x1="3" y1="3" x2="21" y2="21"/></svg>
            </div>
            <div class="pillar-body">
              <h4>Zero Cost, Zero Barrier</h4>
              <p>Memberships, supplements, and coaching — all completely free for eligible young men aged 14–25.</p>
            </div>
          </div>
          <div class="mission-pillar">
            <div class="pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="pillar-body">
              <h4>Mentorship That's Real</h4>
              <p>Matched with men who've walked the same streets, made the same mistakes, and found a better path.</p>
            </div>
          </div>
          <div class="mission-pillar">
            <div class="pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div class="pillar-body">
              <h4>Measurable Change</h4>
              <p>94% of our programme members stayed out of the criminal justice system in their first year with us.</p>
            </div>
          </div>
        </div>

        <a href="/about" class="btn btn-ghost" style="margin-top:40px;">Read Our Full Story</a>
      </div>
    </div>
  </div>
</section>

<!-- WHAT WE OFFER (Preview) -->
<section class="offer-section">
  <div class="container">
    <div class="offer-header reveal">
      <span class="section-label">What We Offer</span>
      <h2 class="section-title">Three Pillars of Change</h2>
      <p class="section-sub">Every young man who joins receives access to all three — no conditions, no waiting lists.</p>
    </div>

    <div class="offer-grid">
      <div class="offer-card reveal reveal-delay-1">
        <div class="offer-card-num">01</div>
        <div class="offer-icon">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="1" y="13" width="4" height="6" rx="1" fill="currentColor"/><rect x="27" y="13" width="4" height="6" rx="1" fill="currentColor"/><rect x="5" y="10" width="4" height="12" rx="1" fill="currentColor"/><rect x="23" y="10" width="4" height="12" rx="1" fill="currentColor"/><rect x="9" y="14" width="14" height="4" rx="1" fill="currentColor"/></svg>
        </div>
        <h3>Free Gym Membership</h3>
        <p>Fully funded access to our partner gym network across 6 UK cities. No joining fees, no monthly payments. Just show up.</p>
        <a href="/what-we-offer" class="offer-card-cta">
          Learn more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>

      <div class="offer-card reveal reveal-delay-2">
        <div class="offer-card-num">02</div>
        <div class="offer-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
        </div>
        <h3>Free Supplements</h3>
        <p>Monthly supply of quality protein, vitamins, and performance nutrition — donated by industry partners who believe in the cause.</p>
        <a href="/what-we-offer" class="offer-card-cta">
          Learn more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>

      <div class="offer-card reveal reveal-delay-3">
        <div class="offer-card-num">03</div>
        <div class="offer-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>Mentorship Programme</h3>
        <p>One-to-one and group mentorship from men who've been through it. Goal-setting, accountability, career pathways, and life skills.</p>
        <a href="/what-we-offer" class="offer-card-cta">
          Learn more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- STATS -->
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="reveal">
        <div class="stat-num" data-count="1200" data-suffix="+">1200+</div>
        <div class="stat-label">Members Supported</div>
      </div>
      <div class="stat-divider"></div>
      <div class="reveal reveal-delay-1">
        <div class="stat-num" data-count="47" data-suffix="">47</div>
        <div class="stat-label">Partner Gyms</div>
      </div>
      <div class="stat-divider"></div>
      <div class="reveal reveal-delay-2">
        <div class="stat-num" data-count="94" data-suffix="%">94%</div>
        <div class="stat-label">Crime Reduction Rate</div>
      </div>
      <div class="stat-divider"></div>
      <div class="reveal reveal-delay-3">
        <div class="stat-num" data-count="6" data-suffix="">6</div>
        <div class="stat-label">UK Cities Active</div>
      </div>
    </div>
  </div>
</section>

<!-- IMPACT PREVIEW -->
<section class="impact-section">
  <div class="container">
    <div class="impact-header reveal">
      <span class="section-label">Real Stories</span>
      <h2 class="section-title">Heard From the Men<br>Who've Lived It</h2>
    </div>
    <div class="stories-grid">
      <div class="story-card reveal reveal-delay-1">
        <div class="story-img">
          <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80&auto=format&fit=crop" alt="Member story" loading="lazy" />
          <div class="story-img-overlay"></div>
        </div>
        <div class="story-body">
          <div class="story-quote">&ldquo;</div>
          <p>Before Muscle Bros I was running the streets, no direction. The gym gave me structure. My mentor gave me purpose. Now I'm three years clean and working as a personal trainer.</p>
          <div class="story-author">
            <div class="story-author-avatar">JD</div>
            <div class="story-author-info">
              <h5>Jordan D.</h5>
              <span>Member since 2021 · Birmingham</span>
            </div>
          </div>
        </div>
      </div>

      <div class="story-card reveal reveal-delay-2">
        <div class="story-img">
          <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80&auto=format&fit=crop" alt="Member story" loading="lazy" />
          <div class="story-img-overlay"></div>
        </div>
        <div class="story-body">
          <div class="story-quote">&ldquo;</div>
          <p>I was 17 with no job, no prospects, getting into trouble every weekend. Muscle Bros signed me up, gave me supplements, a gym slot, and an older brother to look up to. Changed everything.</p>
          <div class="story-author">
            <div class="story-author-avatar">KA</div>
            <div class="story-author-info">
              <h5>Kwame A.</h5>
              <span>Member since 2022 · Manchester</span>
            </div>
          </div>
        </div>
      </div>

      <div class="story-card reveal reveal-delay-3">
        <div class="story-img">
          <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80&auto=format&fit=crop" alt="Member story" loading="lazy" />
          <div class="story-img-overlay"></div>
        </div>
        <div class="story-body">
          <div class="story-quote">&ldquo;</div>
          <p>The discipline you build in the gym bleeds into everything else. I started showing up on time, planning my week, taking care of myself. Small habits, massive shifts.</p>
          <div class="story-author">
            <div class="story-author-avatar">TM</div>
            <div class="story-author-info">
              <h5>Tyrese M.</h5>
              <span>Member since 2020 · London</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- GET INVOLVED PREVIEW -->
<section class="involved-section">
  <div class="container">
    <div class="reveal" style="margin-bottom:48px;">
      <span class="section-label">Get Involved</span>
      <h2 class="section-title">Two Ways to Be<br>Part of This</h2>
    </div>
    <div class="involved-grid">
      <div class="involved-card involved-card--join reveal reveal-delay-1">
        <div class="involved-card-bg">
          <img src="https://images.unsplash.com/photo-1583454155184-870a1f63aebc?w=800&q=80&auto=format&fit=crop" alt="Join the programme" loading="lazy" />
        </div>
        <div class="involved-card-overlay"></div>
        <div class="involved-card-content">
          <span class="involved-card-label">For Young Men</span>
          <h3>Join the<br>Programme</h3>
          <p>If you're aged 14–25 and based in the UK, you can apply for a free membership, supplements, and a mentor today.</p>
          <a href="/get-involved" class="btn btn-primary">Apply Now</a>
        </div>
      </div>

      <div class="involved-card involved-card--support reveal reveal-delay-2">
        <div class="involved-card-bg">
          <img src="https://images.unsplash.com/photo-1549476464-37392f717541?w=800&q=80&auto=format&fit=crop" alt="Support us" loading="lazy" />
        </div>
        <div class="involved-card-overlay"></div>
        <div class="involved-card-content">
          <span class="involved-card-label">For Donors &amp; Volunteers</span>
          <h3>Support<br>Our Work</h3>
          <p>Your donation funds a gym slot, a month of supplements, and the time of a dedicated mentor for a young man in need.</p>
          <a href="/get-involved#donate" class="btn btn-ghost">Donate or Volunteer</a>
        </div>
      </div>
    </div>
  </div>
</section>

${getFooter()}
</body>
</html>`
}
