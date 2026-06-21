export function getNav(activePage: string = ''): string {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/what-we-offer', label: 'What We Offer' },
    { href: '/impact', label: 'Impact' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/contact', label: 'Contact' },
  ]

  const navLinks = links
    .map(
      (l) =>
        `<a href="${l.href}" class="nav-link${activePage === l.href ? ' active' : ''}">${l.label}</a>`
    )
    .join('')

  return `
<header class="site-header" id="site-header">
  <nav class="nav-container">
    <a href="/" class="nav-logo">
      <span class="logo-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="13" width="4" height="6" rx="1" fill="#C9A84C"/>
          <rect x="27" y="13" width="4" height="6" rx="1" fill="#C9A84C"/>
          <rect x="5" y="10" width="4" height="12" rx="1" fill="#C9A84C"/>
          <rect x="23" y="10" width="4" height="12" rx="1" fill="#C9A84C"/>
          <rect x="9" y="14" width="14" height="4" rx="1" fill="#C9A84C"/>
        </svg>
      </span>
      <span class="logo-text">MUSCLE<span class="logo-accent">BROS</span></span>
    </a>

    <div class="nav-links" id="nav-links">
      ${navLinks}
    </div>

    <div class="nav-actions">
      <a href="/get-involved#donate" class="btn-donate">Donate Now</a>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</header>
`
}

export function getHead(title: string, description: string): string {
  return `
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="${description}" />
<meta name="theme-color" content="#0a0a0a" />
<title>${title} | Muscle Bros UK</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/static/style.css" />
`
}

export function getFooter(): string {
  return `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="/" class="nav-logo">
        <span class="logo-icon">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="13" width="4" height="6" rx="1" fill="#C9A84C"/>
            <rect x="27" y="13" width="4" height="6" rx="1" fill="#C9A84C"/>
            <rect x="5" y="10" width="4" height="12" rx="1" fill="#C9A84C"/>
            <rect x="23" y="10" width="4" height="12" rx="1" fill="#C9A84C"/>
            <rect x="9" y="14" width="14" height="4" rx="1" fill="#C9A84C"/>
          </svg>
        </span>
        <span class="logo-text">MUSCLE<span class="logo-accent">BROS</span></span>
      </a>
      <p class="footer-tagline">Built in the Gym. Shaped for Life.</p>
      <p class="footer-charity">Registered UK Charity · Helping young men build discipline &amp; purpose.</p>
    </div>

    <div class="footer-links">
      <div class="footer-col">
        <h4>Navigate</h4>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/what-we-offer">What We Offer</a>
        <a href="/impact">Impact</a>
        <a href="/get-involved">Get Involved</a>
        <a href="/contact">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <a href="/get-involved#donate">Make a Donation</a>
        <a href="/get-involved#volunteer">Volunteer</a>
        <a href="/get-involved#partner">Partner With Us</a>
        <a href="/contact">Get in Touch</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <p>Muscle Bros HQ</p>
        <p>Birmingham, B1 1AA</p>
        <p>United Kingdom</p>
        <a href="mailto:info@musclebros.org.uk">info@musclebros.org.uk</a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 Muscle Bros UK. All rights reserved.</p>
    <p>Registered Charity No. 1234567</p>
  </div>
</footer>

<script src="/static/app.js"></script>
`
}
