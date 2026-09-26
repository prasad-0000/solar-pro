# Solstice — Solar Website (Landing Pages + Nav + Footer)

Design concept: "Dawn Line" — a deep pre-dawn navy fading into a solar amber/orange
horizon, with a signature animated **Sun Arc** that literally traces the sun's path
across the sky as the visitor scrolls the Home page (built with GSAP ScrollTrigger).
Everything else (page reveals, hover states, stat counters) uses Framer Motion for
snappy, native-feeling React animation.

## 1. Install the extra packages into your existing Vite project

Run this inside your project root (the folder with your existing package.json):

```bash
npm install react-router-dom framer-motion gsap lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 2. Copy files in

Copy everything inside this `src/` folder into your project's `src/` folder
(merge, don't fully overwrite if you already have files — but these are new files
so it should be a clean drop-in):

- `src/main.jsx` (replace yours)
- `src/App.jsx` (replace yours)
- `src/index.css` (replace yours)
- `src/components/*` (new)
- `src/pages/*` (new)

Also copy `tailwind.config.js` and `postcss.config.js` into your project root
(replace the ones `tailwindcss init` generated).

## 3. Add the fonts + favicon meta to index.html

Add this inside the `<head>` of your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## 4. Run it

```bash
npm run dev
```

## Structure

```
src/
  main.jsx              -> wraps App in BrowserRouter
  App.jsx               -> Layout (Navbar + <Outlet/> + Footer) + 6 routes
  index.css             -> Tailwind + design tokens (CSS variables)
  components/
    Navbar.jsx           -> sticky glass nav, active link underline, mobile drawer
    Footer.jsx            -> 4-column footer + newsletter
    Reveal.jsx             -> reusable scroll-reveal wrapper (Framer Motion)
    SunArc.jsx              -> signature GSAP ScrollTrigger sun-path hero animation
    StatCounter.jsx           -> animated counting stat
  pages/
    Home.jsx        -> hero + sun arc + highlights + CTA
    About.jsx        -> story, mission, timeline
    Services.jsx      -> 6 service cards with hover lift
    Products.jsx       -> panel/inverter/battery product grid + specs
    Projects.jsx         -> filterable project gallery
    Contact.jsx            -> animated contact form + map/info cards
```

## Notes
- Colors, type, and the sun-arc motif are defined once as CSS variables /
  Tailwind theme extensions in `tailwind.config.js` + `index.css` — change the
  palette in one place and it cascades everywhere.
- Respect for `prefers-reduced-motion` is built into `Reveal.jsx` and `SunArc.jsx`.
- Every page is responsive from 360px phones up through ultrawide desktops.
