# LeRenyae Lawrence Watkins — Author Website

**Civic Noir.** Systems over heroes. Subtext over speeches.

Next.js 14 + Tailwind CSS. Deployed on Vercel.

---

## Quick Start

```bash
# 1. Clone or download this project
cd civic-noir-site

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev

# Open http://localhost:3000
```

---

## Deploy to Vercel (5 minutes)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → "Import Project" → select your repo
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Add your custom domain in Vercel Dashboard → Settings → Domains

That's it. SSL, CDN, and edge caching are automatic.

---

## Configuration Checklist

All content lives in **`lib/content.ts`**. Update these fields:

### Must Do Before Launch
- [ ] `siteConfig.links.instagram` — your real Instagram URL
- [ ] `siteConfig.links.twitter` — your real X/Twitter URL
- [ ] `siteConfig.newsletter.formAction` — ConvertKit or Mailchimp form action URL
- [ ] `mediaKit.representation` — agent/publisher info
- [ ] `mediaKit.pressContact` — contact email or publicist

### Images to Add
- [ ] `/public/author-photo.jpg` — author portrait (rec: 800x1000px min)
- [ ] `/public/covers/contempt.jpg` — book cover (rec: 800x1200px)
- [ ] `/public/og-image.jpg` — social share image (1200x630px)
- [ ] `/public/media/author-photos.zip` — press photos download
- [ ] `/public/media/contempt-cover-hires.jpg` — high-res cover for press

### Analytics
- [ ] Replace `G-XXXXXXX` in `app/layout.tsx` with your GA4 Measurement ID

### Contact Form
The contact form needs a backend. Options:
- **Formspree** (easiest): Create form at formspree.io, POST to their endpoint
- **Vercel Serverless Function**: Add `/app/api/contact/route.ts`
- **Netlify Forms**: If deploying on Netlify, add `data-netlify="true"` to form

### Newsletter Signup
Connect to your email provider:
- **ConvertKit**: POST to `https://api.convertkit.com/v3/forms/{FORM_ID}/subscribe`
- **Mailchimp**: Use embedded form action URL
- **Substack**: Link directly to your Substack subscribe page

Update `Newsletter.tsx` handleSubmit function with your provider's API.

---

## File Structure

```
civic-noir-site/
├── app/
│   ├── layout.tsx          # Root layout (header, footer, meta, GA4)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + custom styles
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── not-found.tsx       # 404 page
│   ├── books/page.tsx      # Books & Projects
│   ├── about/page.tsx      # Author bio
│   ├── media/page.tsx      # Media/Press kit
│   └── contact/page.tsx    # Contact form
├── components/
│   ├── Header.tsx          # Nav (responsive, mobile menu)
│   ├── Footer.tsx          # Footer with links
│   ├── Newsletter.tsx      # Email signup (2 variants)
│   └── SectionReveal.tsx   # Scroll-triggered fade-in
├── lib/
│   ├── content.ts          # ALL site content (single source of truth)
│   └── useReveal.ts        # IntersectionObserver hook
├── public/                 # Static assets (add images here)
├── tailwind.config.js      # Custom theme (colors, fonts, animations)
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Design System

**Typography:** Cormorant Garamond (serif) + Outfit (sans-serif)
**Palette:** noir-950 background, bone text, muted gold accents
**Components:** `.btn-primary`, `.btn-secondary`, `.gold-rule`, `.nav-link`
**Animations:** Scroll-reveal via IntersectionObserver, CSS keyframe fades

---

## Adding a Blog (Post-Launch)

When you're ready to add a blog:

1. Create `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`
2. Use MDX for posts: `npm install @next/mdx @mdx-js/loader`
3. Store posts in `/content/blog/` as `.mdx` files
4. Add "Blog" to navigation array in `lib/content.ts`

Don't add this before Contempt ships.

---

## Adding Future Books

In `lib/content.ts`, add objects to the `books` array. The Books page will automatically render them.

---

## Performance Notes

- Google Fonts loaded via CSS `@import` (swap to `next/font` for better CLS if needed)
- Images: Use `next/image` with proper `width`/`height` or `fill` for auto-optimization
- Film grain overlay is pure CSS SVG — zero performance impact
- No JavaScript frameworks beyond React. No animation libraries needed.
