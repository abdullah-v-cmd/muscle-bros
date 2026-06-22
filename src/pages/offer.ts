import { getHead, getNav, getFooter } from '../components/layout'

export function offerPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>${getHead('What We Offer', 'Free gym memberships, free supplements, and real mentorship for young men aged 14–25 across the UK.')}</head>
<body>
${getNav('/what-we-offer')}

<!-- HERO -->
<section class="offer-page-hero">
  <div class="offer-page-hero-bg"></div>
  <div class="page-hero-content">
    <span class="section-label reveal">Three Pillars</span>
    <h1 class="section-title reveal reveal-delay-1">Everything You<br>Need. Nothing<br>to <span class="gold">Pay.</span></h1>
    <p class="section-sub reveal reveal-delay-2">Every young man on the Muscle Bros programme gets access to all three pillars from day one. No waiting lists. No conditions. No cost.</p>
  </div>
</section>

<!-- PILLAR OVERVIEW CARDS -->
<section class="offer-section section--dark2" style="padding:80px 0;">
  <div class="container">
    <div class="offer-grid">
      <div class="offer-card reveal reveal-delay-1">
        <div class="offer-card-num">01</div>
        <div class="offer-icon">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect x="1" y="13" width="4" height="6" rx="1" fill="currentColor"/><rect x="27" y="13" width="4" height="6" rx="1" fill="currentColor"/><rect x="5" y="10" width="4" height="12" rx="1" fill="currentColor"/><rect x="23" y="10" width="4" height="12" rx="1" fill="currentColor"/><rect x="9" y="14" width="14" height="4" rx="1" fill="currentColor"/></svg>
        </div>
        <h3>Free Gym Membership</h3>
        <p>Fully funded access across our partner network.</p>
      </div>
      <div class="offer-card reveal reveal-delay-2">
        <div class="offer-card-num">02</div>
        <div class="offer-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
        </div>
        <h3>Free Supplements</h3>
        <p>Monthly nutrition supply, delivered to your door.</p>
      </div>
      <div class="offer-card reveal reveal-delay-3">
        <div class="offer-card-num">03</div>
        <div class="offer-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>Mentorship</h3>
        <p>One-to-one guidance from men who've lived it.</p>
      </div>
    </div>
  </div>
</section>

<!-- PILLAR DETAILS -->
<section class="offer-pillars-detail">
  <div class="container">

    <!-- Pillar 1 -->
    <div class="pillar-detail reveal">
      <div class="pillar-detail-img">
        <img
          src="https://images.unsplash.com/photo-1549476464-37392f717541?w=800&q=80&auto=format&fit=crop"
          alt="Free gym membership"
          loading="lazy"
        />
      </div>
      <div class="pillar-detail-content">
        <span class="section-label">Pillar One</span>
        <h2>Free Gym<br>Membership</h2>
        <p>
          We've partnered with 47 independent and commercial gyms across Birmingham, Manchester, London, Leeds, Bristol, and Sheffield. Every member gets a fully funded, unlimited-access pass — valid 7 days a week, from the first day they're accepted.
        </p>
        <p>
          No joining fees. No admin charges. No excuses to not walk through that door.
        </p>
        <div class="pillar-features">
          <div class="pillar-feature">Unlimited access to partner gyms in your city</div>
          <div class="pillar-feature">Free induction session with a certified coach</div>
          <div class="pillar-feature">Personalised training programme created for you</div>
          <div class="pillar-feature">Access to group training sessions and events</div>
          <div class="pillar-feature">No time limit — membership lasts as long as you need it</div>
        </div>
      </div>
    </div>

    <!-- Pillar 2 -->
    <div class="pillar-detail reverse reveal">
      <div class="pillar-detail-img">
        <img
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80&auto=format&fit=crop"
          alt="Free supplements"
          loading="lazy"
        />
      </div>
      <div class="pillar-detail-content">
        <span class="section-label">Pillar Two</span>
        <h2>Free<br>Supplements</h2>
        <p>
          Nutrition is part of the process. We partner with quality UK supplement brands who donate monthly supplies specifically for Muscle Bros members. Because if you're going to train hard, your body needs the fuel to match.
        </p>
        <p>
          Everything we supply is safe, tested, and appropriate for your training level. Our nutritional advisors review every product before it reaches our members.
        </p>
        <div class="pillar-features">
          <div class="pillar-feature">Monthly protein supply tailored to your training</div>
          <div class="pillar-feature">Vitamins and minerals for overall health support</div>
          <div class="pillar-feature">Pre-workout and recovery nutrition products</div>
          <div class="pillar-feature">All products tested and quality-approved</div>
          <div class="pillar-feature">Nutritional guidance included at no extra cost</div>
        </div>
      </div>
    </div>

    <!-- Pillar 3 -->
    <div class="pillar-detail reveal">
      <div class="pillar-detail-img">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80&auto=format&fit=crop"
          alt="Mentorship programme"
          loading="lazy"
        />
      </div>
      <div class="pillar-detail-content">
        <span class="section-label">Pillar Three</span>
        <h2>Mentorship<br>Programme</h2>
        <p>
          The gym changes your body. Mentorship changes your life. Every member is matched with a personal mentor — a man who has genuinely walked a similar path and come through the other side with something to show for it.
        </p>
        <p>
          This isn't a helpline. It's a real relationship. Monthly one-to-ones, WhatsApp check-ins, shared gym sessions, and the kind of honest conversation that actually moves the needle.
        </p>
        <div class="pillar-features">
          <div class="pillar-feature">Matched with a mentor based on background and goals</div>
          <div class="pillar-feature">Monthly structured one-to-one sessions</div>
          <div class="pillar-feature">Life skills — finance, career, relationships, mindset</div>
          <div class="pillar-feature">Group brotherhood events and workshops</div>
          <div class="pillar-feature">Long-term support — no programme end date</div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ELIGIBILITY -->
<section class="section section--dark2">
  <div class="container reveal" style="max-width:800px;text-align:center;margin:0 auto;">
    <span class="section-label">Who Can Apply</span>
    <h2 class="section-title">You're Eligible If&hellip;</h2>
    <p class="section-sub" style="margin:0 auto 48px;">Our programme is designed for young men who need it most. Here's who qualifies:</p>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;text-align:left;" class="reveal reveal-delay-1">
      <div style="padding:24px 28px;background:var(--dark3);border-radius:var(--radius-lg);display:flex;gap:14px;align-items:flex-start;">
        <span style="color:var(--gold);font-size:1.2rem;flex-shrink:0;margin-top:2px;">✓</span>
        <div>
          <strong style="font-size:0.9rem;color:var(--white);">Aged 14–25</strong>
          <p style="font-size:0.82rem;color:var(--grey-light);margin-top:4px;line-height:1.6;">You're between 14 and 25 years old and based in the UK.</p>
        </div>
      </div>
      <div style="padding:24px 28px;background:var(--dark3);border-radius:var(--radius-lg);display:flex;gap:14px;align-items:flex-start;">
        <span style="color:var(--gold);font-size:1.2rem;flex-shrink:0;margin-top:2px;">✓</span>
        <div>
          <strong style="font-size:0.9rem;color:var(--white);">UK Resident</strong>
          <p style="font-size:0.82rem;color:var(--grey-light);margin-top:4px;line-height:1.6;">You live in or near one of our six active cities.</p>
        </div>
      </div>
      <div style="padding:24px 28px;background:var(--dark3);border-radius:var(--radius-lg);display:flex;gap:14px;align-items:flex-start;">
        <span style="color:var(--gold);font-size:1.2rem;flex-shrink:0;margin-top:2px;">✓</span>
        <div>
          <strong style="font-size:0.9rem;color:var(--white);">Willing to Commit</strong>
          <p style="font-size:0.82rem;color:var(--grey-light);margin-top:4px;line-height:1.6;">You're ready to show up consistently — to the gym and to the process.</p>
        </div>
      </div>
      <div style="padding:24px 28px;background:var(--dark3);border-radius:var(--radius-lg);display:flex;gap:14px;align-items:flex-start;">
        <span style="color:var(--gold);font-size:1.2rem;flex-shrink:0;margin-top:2px;">✓</span>
        <div>
          <strong style="font-size:0.9rem;color:var(--white);">No Gym Membership</strong>
          <p style="font-size:0.82rem;color:var(--grey-light);margin-top:4px;line-height:1.6;">You currently don't have access to a gym due to financial barriers.</p>
        </div>
      </div>
    </div>
    <div style="margin-top:48px;">
      <a href="/get-involved" class="btn btn-primary">Apply for the Programme</a>
    </div>
  </div>
</section>

${getFooter()}
</body>
</html>`
}
