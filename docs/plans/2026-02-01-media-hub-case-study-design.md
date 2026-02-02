# Media Aggregation Center - Case Study Website Design

## Overview

A standalone portfolio case study website showcasing the Media Aggregation Center project for WeatherBug. The site demonstrates product thinking, information architecture decisions, and measurable impact through an immersive, cinematic presentation.

**Target Audience:** Hiring managers, recruiters, and product/design leaders reviewing portfolio work.

**URL:** To be deployed on Vercel (e.g., mediahub-casestudy.vercel.app)

---

## Visual Direction

**Style:** Light cinematic with motion
- Light backgrounds (white/off-white) with dark text for readability
- Dark backgrounds for video sections to create contrast and focus
- Smooth scroll-triggered animations
- Large, bold typography with generous whitespace
- Award-quality design inspired by awwwards.com standards

**Typography:**
- Headlines: Clean geometric sans-serif (Inter or similar), bold weight
- Body: Same family, regular weight, generous line-height

**Color Palette:**
- Primary background: #FAFAFA (off-white)
- Video sections: #0A0A0A (near black)
- Text: #1A1A1A (dark gray)
- Accent: To be determined (subtle, used sparingly)

**Animation:**
- Framer Motion for scroll-triggered reveals
- Fade-up and slide animations for text/elements
- Smooth section transitions
- Counter animations for impact numbers

---

## Page Structure

### Section 1: Hero (Full viewport, light)
- Subtle name/role at top
- Large project title: "Media Aggregation Center"
- Hook: "Turning invisible content into a core product capability"
- Scroll indicator animation

### Section 2: Problem (Full viewport, light)
- Bold statement: "Content existed—but was invisible"
- Animated data point: 0.02% page views
- 3 bullet points summarizing the structural problem
- Transition element leading to video

### Section 3: Before Video (Full viewport, dark)
- Full-width video player
- Shows the scattered Now Feed experience
- Caption: "The old experience: content buried in 20+ cards"
- Poster frame for loading state

### Section 4: Insight (Full viewport, light)
- Key quote: "Users weren't uninterested—they didn't know content existed"
- Simple diagram showing information architecture problem
- Brief explanation of the architectural failure

### Section 5: Solution (Full viewport, light)
- Headline: "A dedicated home for content"
- Visual of 5-tab navigation concept
- Text: "Elevate content from a scattered attachment to a first-class entry point"
- Transition to after video

### Section 6: After Video (Full viewport, dark)
- Full-width video player
- Shows the new Media Hub experience
- Caption: "The new experience: one tap to all content"

### Section 7: Impact (Full viewport, light)
- Three large animated counters:
  - "20×" content reads increase
  - "~20K" projected DAU
  - "10×" ad impression growth
- Note: "Data-informed projections based on structural uplift analysis"

### Section 8: Reflection (Shorter section, light)
- Three key learnings as minimal cards:
  1. Content value is unlocked by structure, not volume
  2. When feature tweaks stop moving metrics, zoom out to system design
  3. Data calibrates decisions, not justifies them
- Professional closing statement

### Section 9: Footer (Compact)
- Name and contact link
- Optional: "View more work" link
- Subtle tech attribution (optional)

---

## Technical Architecture

### Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animation:** Framer Motion
- **Deployment:** Vercel

### Project Structure
```
/app
  page.tsx              # Main single-page case study
  layout.tsx            # Root layout (fonts, metadata, analytics)
  globals.css           # Tailwind imports, custom styles
/components
  /sections
    Hero.tsx
    Problem.tsx
    BeforeVideo.tsx
    Insight.tsx
    Solution.tsx
    AfterVideo.tsx
    Impact.tsx
    Reflection.tsx
    Footer.tsx
  /ui                   # shadcn components
  AnimatedCounter.tsx   # Reusable counter for impact section
  VideoPlayer.tsx       # Optimized video component
  ScrollReveal.tsx      # Wrapper for scroll animations
/public
  /videos
    before.mp4          # Before experience video
    after.mp4           # After experience video
  /images
    og-image.png        # Social sharing image
```

### Key Technical Decisions

**Single Page Architecture**
- Entire case study as one scrollable page
- No routing complexity needed
- Smooth scroll experience

**Video Optimization**
- Lazy loading with Intersection Observer
- Poster frames for instant visual feedback
- Compressed MP4 format for web
- Consider video hosting (Vercel Blob or external) if files are large

**Animation Strategy**
- Framer Motion's `useInView` for scroll triggers
- Staggered animations for list items
- Counter animation using `useSpring` or similar

**Performance Targets**
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Videos load on demand, not blocking initial render

**SEO & Social**
- Proper meta tags for LinkedIn/Twitter sharing
- Open Graph image
- Semantic HTML structure

---

## Content Requirements

### Videos (User to Provide)
- [ ] Before experience video (MP4, compressed for web)
- [ ] After experience video (MP4, compressed for web)

### Text Content
- All text content provided in original case study document
- Will be condensed to minimal, impactful copy for cinematic presentation

### Optional Assets
- [ ] Diagram showing information architecture problem
- [ ] 5-tab navigation visual/mockup
- [ ] Profile photo (for footer/about)

---

## Implementation Plan

1. Initialize Next.js project with Tailwind and shadcn
2. Set up project structure and base layout
3. Build Hero section
4. Build Problem section with animations
5. Build Before Video section
6. Build Insight section
7. Build Solution section
8. Build After Video section with video player
9. Build Impact section with animated counters
10. Build Reflection and Footer sections
11. Add scroll animations throughout
12. Optimize performance and test
13. Deploy to Vercel

---

## Success Criteria

- Clean, professional presentation that reflects product/design sensibility
- Videos play smoothly and are the focal point
- Page loads fast and feels polished
- Works well on desktop and mobile
- Easy for recruiters to share and view
