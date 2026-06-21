import { getHead, getNav, getFooter } from '../components/layout'

export function aboutPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>${getHead('About Us', 'The story of Muscle Bros UK — why we exist, what drives us, and what makes our approach to youth empowerment different.')}</head>
<body>
${getNav('/about')}

<!-- HERO -->
<section class="about-hero">
  <div class="about-hero-bg"></div>
  <div class="page-hero-content">
    <span class="section-label reveal">Our Story</span>
    <h1 class="section-title reveal reveal-delay-1">We Were Built<br>From the<br><span class="gold">Bottom Up</span></h1>
    <p class="section-sub reveal reveal-delay-2">Muscle Bros wasn't created in a boardroom. It was created on the gym floor, by men who knew exactly what was missing.</p>
  </div>
</section>

<!-- STORY -->
<section class="about-story">
  <div class="container">
    <div class="about-story-layout">
      <div class="about-body reveal">
        <span class="section-label">The Problem We Saw</span>
        <h2 class="section-title" style="margin-bottom:32px;">When the Streets Are the Only Option</h2>
        <p>
          In cities across the UK, <strong>thousands of young men between 14 and 25</strong> are falling through every gap the system has to offer. Schools are underfunded. Youth clubs are closing. Knife crime is rising. And the opportunity to belong to something meaningful? Almost entirely absent.
        </p>
        <p>
          The gym has always been a sanctuary — a place where effort translates directly into results, where discipline is built rep by rep, where you learn to show up even when you don't feel like it. But for most young men in underserved communities, <strong>even a basic gym membership is a luxury they can't afford.</strong>
        </p>
        <p>
          Muscle Bros was founded in Birmingham in 2019 by a group of men who had lived this reality. Men who had grown up in environments where crime, gangs, and hopelessness were normalised — and who found their way out through the iron.
        </p>
        <p>
          The question they asked was simple: <em>What if every young man who needed this had access to it?</em>
        </p>
      </div>

      <div class="about-img-stack reveal reveal-delay-1">
        <div class="about-img-main">
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=700&q=80&auto=format&fit=crop"
            alt="Young man training"
            loading="lazy"
          />
        </div>
        <div class="about-img-accent">
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80&auto=format&fit=crop"
            alt="Training session"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT MAKES US DIFFERENT -->
<section class="section section--dark2">
  <div class="container">
    <div style="max-width:700px;" class="reveal">
      <span class="section-label">Why We're Different</span>
      <h2 class="section-title">Not a Gym Brand.<br>Not a Government Scheme.</h2>
      <p class="section-sub" style="max-width:600px;margin-bottom:48px;">
        There are a lot of charities that operate from a distance. Muscle Bros was built by the community, for the community. We don't parachute in — we're already there.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:900px;" class="reveal reveal-delay-1">
      <div style="padding:36px;background:var(--dark3);border-radius:var(--radius-lg);border:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:var(--font-display);font-size:1.5rem;color:var(--gold);margin-bottom:12px;">Peer-Led</div>
        <p style="font-size:0.9rem;color:var(--grey-light);line-height:1.75;">Every mentor in our programme has been through what our members are going through. There's no lecture — just lived experience and genuine care.</p>
      </div>
      <div style="padding:36px;background:var(--dark3);border-radius:var(--radius-lg);border:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:var(--font-display);font-size:1.5rem;color:var(--gold);margin-bottom:12px;">Fully Free</div>
        <p style="font-size:0.9rem;color:var(--grey-light);line-height:1.75;">Zero cost to the young men we serve. No forms, no assessments, no conditions. If you need it and you're willing to commit — you're in.</p>
      </div>
      <div style="padding:36px;background:var(--dark3);border-radius:var(--radius-lg);border:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:var(--font-display);font-size:1.5rem;color:var(--gold);margin-bottom:12px;">Long-Term</div>
        <p style="font-size:0.9rem;color:var(--grey-light);line-height:1.75;">We don't do 6-week interventions. Membership lasts as long as it takes. We track progress, celebrate wins, and stay in the corner.</p>
      </div>
      <div style="padding:36px;background:var(--dark3);border-radius:var(--radius-lg);border:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:var(--font-display);font-size:1.5rem;color:var(--gold);margin-bottom:12px;">Evidence-Based</div>
        <p style="font-size:0.9rem;color:var(--grey-light);line-height:1.75;">94% of members stayed out of the criminal justice system in their first year. We track what works and double down on it.</p>
      </div>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="about-values">
  <div class="container">
    <div class="reveal">
      <span class="section-label">What We Stand For</span>
      <h2 class="section-title">Our Values</h2>
    </div>
    <div class="values-grid">
      <div class="value-card reveal reveal-delay-1">
        <span class="value-card-icon">⚡</span>
        <h3>Discipline</h3>
        <p>We believe discipline is the most powerful tool a man can carry — and the gym is where it's forged.</p>
      </div>
      <div class="value-card reveal reveal-delay-2">
        <span class="value-card-icon">🤝</span>
        <h3>Brotherhood</h3>
        <p>A community of men who hold each other accountable, celebrate each other's progress, and refuse to leave anyone behind.</p>
      </div>
      <div class="value-card reveal reveal-delay-3">
        <span class="value-card-icon">🎯</span>
        <h3>Purpose</h3>
        <p>Every young man deserves a reason to get up in the morning. We help them find it — and build towards it every day.</p>
      </div>
      <div class="value-card reveal reveal-delay-4">
        <span class="value-card-icon">🔑</span>
        <h3>Access</h3>
        <p>The tools for a better life shouldn't be gated by postcode or income. We remove every financial barrier, every time.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section section--dark" style="text-align:center;">
  <div class="container reveal">
    <span class="section-label">Be Part of the Change</span>
    <h2 class="section-title" style="max-width:700px;margin:0 auto 24px;">Ready to Join or Support Us?</h2>
    <p class="section-sub" style="margin:0 auto 40px;">Whether you're a young man looking for direction, or someone who wants to invest in the next generation — there's a place for you here.</p>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
      <a href="/get-involved" class="btn btn-primary">Get Involved</a>
      <a href="/contact" class="btn btn-outline">Contact Us</a>
    </div>
  </div>
</section>

${getFooter()}
</body>
</html>`
}
