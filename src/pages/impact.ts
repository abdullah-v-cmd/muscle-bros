import { getHead, getNav, getFooter } from '../components/layout'

export function impactPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>${getHead('Impact & Stories', 'Real stories from real young men whose lives have been changed by the Muscle Bros programme.')}</head>
<body>
${getNav('/impact')}

<!-- HERO -->
<section class="impact-page-hero">
  <div class="impact-page-hero-bg"></div>
  <div class="page-hero-content">
    <span class="section-label reveal">The Proof</span>
    <h1 class="section-title reveal reveal-delay-1">Numbers Tell<br>Half the Story.<br><span class="gold">Men Tell the Rest.</span></h1>
    <p class="section-sub reveal reveal-delay-2">Since 2019, over 1,200 young men have come through our doors. These are some of their stories.</p>
  </div>
</section>

<!-- STATS BAR -->
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="reveal">
        <div class="stat-num" data-count="1200" data-suffix="+">1200+</div>
        <div class="stat-label">Members Supported</div>
      </div>
      <div class="stat-divider"></div>
      <div class="reveal reveal-delay-1">
        <div class="stat-num" data-count="94" data-suffix="%">94%</div>
        <div class="stat-label">Crime-Free in Year 1</div>
      </div>
      <div class="stat-divider"></div>
      <div class="reveal reveal-delay-2">
        <div class="stat-num" data-count="340" data-suffix="+">340+</div>
        <div class="stat-label">Entered Employment</div>
      </div>
      <div class="stat-divider"></div>
      <div class="reveal reveal-delay-3">
        <div class="stat-num" data-count="87" data-suffix="%">87%</div>
        <div class="stat-label">Still Active After 12 Months</div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS LARGE -->
<section class="testimonials-full">
  <div class="container">
    <div class="reveal" style="margin-bottom:56px;">
      <span class="section-label">Member Stories</span>
      <h2 class="section-title">Words From the<br>Programme</h2>
    </div>

    <div class="testimonials-large-grid">

      <div class="testimonial-large reveal reveal-delay-1">
        <div class="story-quote">&ldquo;</div>
        <blockquote>
          Before Muscle Bros, every week was the same cycle. Boredom, trouble, court dates. My probation officer referred me at 18. I walked into the gym thinking it was some kind of punishment — and within two months it was the only thing I looked forward to. <em>The mentor they matched me with changed everything.</em> He'd been through worse than me and built a real life. That's what I needed to see.
        </blockquote>
        <div class="testimonial-meta">
          <div class="testimonial-avatar">JD</div>
          <div>
            <div class="testimonial-name">Jordan D., 21</div>
            <div class="testimonial-role">Member since 2021 · Birmingham · Now works as a PT</div>
          </div>
        </div>
      </div>

      <div class="testimonial-large reveal reveal-delay-2">
        <div class="story-quote">&ldquo;</div>
        <blockquote>
          I grew up without a dad. The men I had around me weren't great role models. When I started at Muscle Bros at 16, my mentor Marcus was the first man who genuinely sat down with me, asked what I wanted out of life, and then actually helped me work towards it. <em>That's not something money can buy — but Muscle Bros found a way to give it away for free.</em>
        </blockquote>
        <div class="testimonial-meta">
          <div class="testimonial-avatar">KA</div>
          <div>
            <div class="testimonial-name">Kwame A., 19</div>
            <div class="testimonial-role">Member since 2022 · Manchester · In college studying sport science</div>
          </div>
        </div>
      </div>

      <div class="testimonial-large reveal reveal-delay-1">
        <div class="story-quote">&ldquo;</div>
        <blockquote>
          The discipline isn't just physical. When you're training consistently, you stop sleeping in, you stop making excuses, you start thinking longer-term. <em>The gym taught me how to delay gratification.</em> That one skill changed my whole relationship with money, with people, with the way I carry myself. I'm a completely different person.
        </blockquote>
        <div class="testimonial-meta">
          <div class="testimonial-avatar">TM</div>
          <div>
            <div class="testimonial-name">Tyrese M., 23</div>
            <div class="testimonial-role">Member since 2020 · London · Runs his own landscaping business</div>
          </div>
        </div>
      </div>

      <div class="testimonial-large reveal reveal-delay-2">
        <div class="story-quote">&ldquo;</div>
        <blockquote>
          I was excluded from school at 15 and spent two years drifting. No qualification, no job, no routine. Muscle Bros gave me a reason to wake up at the same time every day. <em>That sounds small, but for me it was everything.</em> Routine is the foundation. Once I had that, I could build anything on top of it.
        </blockquote>
        <div class="testimonial-meta">
          <div class="testimonial-avatar">RC</div>
          <div>
            <div class="testimonial-name">Ryan C., 20</div>
            <div class="testimonial-role">Member since 2023 · Leeds · Completing a Level 3 gym instructor qualification</div>
          </div>
        </div>
      </div>

      <div class="testimonial-large reveal reveal-delay-1">
        <div class="story-quote">&ldquo;</div>
        <blockquote>
          Growing up, the gym was this thing that rich kids did after school. I couldn't even afford the bus to get there, let alone a membership. When I found out Muscle Bros was real — that they'd actually pay for everything — I didn't believe it. <em>But they did. And they've been doing it for two years.</em>
        </blockquote>
        <div class="testimonial-meta">
          <div class="testimonial-avatar">OA</div>
          <div>
            <div class="testimonial-name">Omar A., 17</div>
            <div class="testimonial-role">Member since 2024 · Bristol · Currently in college</div>
          </div>
        </div>
      </div>

      <div class="testimonial-large reveal reveal-delay-2">
        <div class="story-quote">&ldquo;</div>
        <blockquote>
          I used to think strength was about being the most feared person on your block. <em>Muscle Bros showed me that real strength is self-control.</em> It's training when you're tired. It's not reacting when someone tries to provoke you. It's building something instead of tearing things down. I get it now. Finally.
        </blockquote>
        <div class="testimonial-meta">
          <div class="testimonial-avatar">LB</div>
          <div>
            <div class="testimonial-name">Leon B., 22</div>
            <div class="testimonial-role">Member since 2021 · Sheffield · Volunteer mentor in the programme</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- PRESS / RECOGNITION STRIP -->
<section class="section section--dark2" style="padding:64px 0;">
  <div class="container reveal">
    <div style="text-align:center;margin-bottom:40px;">
      <span class="section-label">Recognition</span>
      <h3 style="font-family:var(--font-display);font-size:1.8rem;color:var(--white);">Featured &amp; Recognised By</h3>
    </div>
    <div style="display:flex;justify-content:center;gap:48px;flex-wrap:wrap;align-items:center;">
      <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--grey);letter-spacing:0.1em;">BBC Three</div>
      <div style="width:1px;height:30px;background:rgba(255,255,255,0.1);"></div>
      <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--grey);letter-spacing:0.1em;">The Guardian</div>
      <div style="width:1px;height:30px;background:rgba(255,255,255,0.1);"></div>
      <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--grey);letter-spacing:0.1em;">ITV News</div>
      <div style="width:1px;height:30px;background:rgba(255,255,255,0.1);"></div>
      <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--grey);letter-spacing:0.1em;">Birmingham Mail</div>
      <div style="width:1px;height:30px;background:rgba(255,255,255,0.1);"></div>
      <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--grey);letter-spacing:0.1em;">YMCA Awards</div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section section--dark" style="text-align:center;">
  <div class="container reveal">
    <span class="section-label">Be Part of the Next Chapter</span>
    <h2 class="section-title" style="max-width:600px;margin:0 auto 24px;">The Next Story<br>Could Be Yours</h2>
    <p class="section-sub" style="margin:0 auto 40px;">If you're aged 14–25 and based in the UK, apply for the programme today. There's no cost, no catch — just a commitment to show up.</p>
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
      <a href="/get-involved" class="btn btn-primary">Apply for the Programme</a>
      <a href="/get-involved#donate" class="btn btn-outline">Support a Young Man</a>
    </div>
  </div>
</section>

${getFooter()}
</body>
</html>`
}
