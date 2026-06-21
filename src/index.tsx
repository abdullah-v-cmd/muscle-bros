import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { aboutPage } from './pages/about'
import { offerPage } from './pages/offer'
import { impactPage } from './pages/impact'
import { getInvolvedPage } from './pages/get-involved'
import { contactPage } from './pages/contact'

const app = new Hono()

// Serve static assets
app.use('/static/*', serveStatic({ root: './' }))

// Routes
app.get('/', (c) => c.html(homePage()))
app.get('/about', (c) => c.html(aboutPage()))
app.get('/what-we-offer', (c) => c.html(offerPage()))
app.get('/impact', (c) => c.html(impactPage()))
app.get('/get-involved', (c) => c.html(getInvolvedPage()))
app.get('/contact', (c) => c.html(contactPage()))

// Contact form handler
app.post('/api/contact', async (c) => {
  const body = await c.req.parseBody()
  // In production, this would send an email or save to DB
  return c.json({ success: true, message: 'Message received. We\'ll be in touch soon.' })
})

export default app
