# Sri Murugan PVC & uPVC - Professional Multi-Page Website

## Project Overview

A professionally rebuilt, premium multi-page React website for Sri Murugan PVC & uPVC. The website showcases PVC doors, uPVC windows, interior works, and cupboards with a high-end design aesthetic suitable for a Chennai-based interior/PVC solutions company.

## Key Features

### ✓ Multi-Page Architecture
- **Home Page** (`/`) - Company overview with products, services, and features
- **PVC Interiors Page** (`/pvc-interiors`) - Dedicated showcase for PVC interior works, cupboards, and brands
- Proper React Router v6 routing with clean URLs

### ✓ Design & UX
- Premium architectural/editorial design aesthetic
- Warm cream backgrounds with deep green accents
- High-contrast serif typography for headings
- Generous whitespace and large images
- Smooth scroll animations and transitions
- Fully responsive: mobile (390px) to desktop (1920px)

### ✓ Image Gallery & Media
- 20 high-quality 4K images from OneDrive integrated
- 10 PVC Interior Works images
- 10 PVC Cupboard examples
- Masonry/editorial grid layouts
- Fullscreen lightbox viewer with image counter
- Lazy loading for performance
- Proper aspect ratio preservation

### ✓ Content Sections

#### Home Page
1. Header/Navigation (sticky, responsive)
2. Hero section
3. Value proposition strip
4. Products catalogue
5. Material profiles
6. Services showcase
7. Gallery/Works
8. **NEW: PVC Interiors Feature** (links to page 2)
9. Contact/Enquiry section
10. Footer

#### PVC Interiors Page
1. Hero section
2. PVC Interior Works (10 items with descriptions)
3. PVC Cupboards (10 types with feature tags)
4. PVC Works Gallery (masonry with 20 images)
5. Why PVC section (6 benefits)
6. Brands section (3 partner brands)
7. Brand story
8. Our process (4-step process)
9. Contact/Enquiry section
10. Footer
11. Back to Home button

### ✓ Technical Stack
- **React 18.2.0** - UI framework
- **React Router 6.x** - Multi-page routing
- **Vite 5.0.8** - Build tool (fast, optimized)
- **Lucide React** - Icon library
- **CSS Grid & Flexbox** - Responsive layouts
- **Intersection Observer API** - Scroll animations

### ✓ Performance
- Production build: 230.81 kB JS (72.25 kB gzipped)
- CSS: 38.77 kB (7.82 kB gzipped)
- Lazy loading on all images
- Code splitting with React Router
- Optimized with esbuild

### ✓ Responsive Design
- Desktop: 1920px, 1440px
- Tablet: 1024px, 768px
- Mobile: 390px, 375px, 480px
- Hamburger menu on mobile
- All sections adapt perfectly to screen size
- Touch-friendly buttons and spacing

### ✓ Accessibility
- Semantic HTML
- Proper heading hierarchy
- Alt text on all images
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus states on buttons
- High contrast colors (WCAG compliant)

### ✓ Animations
- Fade-up on scroll reveal
- Image hover zoom effects
- Smooth page transitions
- Staggered animation delays for card lists
- Respects prefers-reduced-motion preference

## File Structure

```
src/
├── App.jsx                           # Main router setup
├── main.jsx                          # Entry point
├── index.css                         # Global styles & CSS variables
│
├── pages/
│   ├── Home.jsx                      # Home page component
│   ├── PVCInteriorsPage.jsx         # PVC Interiors page
│   └── PVCInteriorsPage.css         # Page-specific styles
│
├── components/
│   ├── Navbar.jsx                   # Header with responsive menu
│   ├── Hero.jsx                     # Home hero section
│   ├── ProductCatalogue.jsx         # Products grid
│   ├── Gallery.jsx                  # Works gallery
│   ├── Services.jsx                 # Services showcase
│   ├── Lightbox.jsx                 # Fullscreen image viewer
│   ├── Reveal.jsx                   # Scroll animation wrapper
│   │
│   ├── PVCFeature.jsx              # Home page PVC section
│   ├── PVCInteriorsHero.jsx        # Page 2 hero
│   ├── PVCInteriorWorks.jsx        # Interior works section
│   ├── PVCCupboardsSection.jsx     # Cupboards section
│   ├── PVCWorksGallery.jsx         # Gallery with masonry
│   ├── WhyPVC.jsx                  # Benefits section
│   ├── BrandsSection.jsx           # Brand posters
│   ├── BrandStory.jsx              # Brand narrative
│   ├── ProcessSection.jsx          # Process steps
│   ├── EnquirySection.jsx          # Contact form
│   └── Footer.jsx                  # Footer
│
├── data/
│   └── site.js                      # All content & data
│
public/
├── images/                          # 40+ product/work images
├── logo.png, logo.svg              # Branding
├── _redirects                       # Netlify routing config
└── .htaccess                        # Apache routing config
```

## Setup & Development

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs on `http://localhost:5174/`

### Production Build
```bash
npm run build
```
Output: `dist/` folder (ready to deploy)

### Preview Production Build
```bash
npm run preview
```

## Deployment

### Quick Deploy Checklist
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure server for SPA routing (see DEPLOYMENT.md)
4. Test all routes and pages

### Supported Platforms
- **Netlify** (recommended) - `_redirects` config included
- **Vercel** - Automatic SPA support
- **Apache Server** - `.htaccess` included
- **Nginx** - See DEPLOYMENT.md
- **Any Node.js host** - See DEPLOYMENT.md

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Color Palette
- Deep Green: `#294d43`
- Cream: `#f5f1e8`
- Terracotta: `#c95334`
- Dark: `#29231f`
- Gold Accent: `#d7a33b`

## Typography
- **Serif**: Cormorant Garamond (headings)
- **Sans**: Inter (body text)
- **Mono**: IBM Plex Mono (labels)

## Content Sources
- Product images: 40+ high-quality images from public folder
- 4K images: 20 images from OneDrive (interior works & cupboards)
- Brand information: From site.js data file
- Business details: From site.js BRAND object

## Data Management

All content is managed in `src/data/site.js`:
- Company info (BRAND object)
- Navigation (NAV_LINKS)
- Products (PRODUCTS array)
- Services (SERVICES array)
- PVC Interior Works (PVC_INTERIOR_WORKS)
- PVC Cupboards (PVC_CUPBOARDS)
- Brands (BRAND_POSTERS)
- And more...

To update content, edit the relevant arrays/objects in `site.js`.

## Contact Information
- Phone: 8220719474 / 9003219474
- Email: srimuruganpvcdoorandupvcwindow@gmail.com
- Location: 175, GNT Rd, Sakthivel Nagar, Puzhal, Chennai 600066

## Important Notes

### Do NOT
- Replace provided images with generic stock photos
- Remove the multi-page routing structure
- Put all content on one page
- Make images too small
- Distort images or aspect ratios

### Key Requirements Met
✓ Professional premium design aesthetic
✓ Two separate full pages with distinct content
✓ React Router for proper multi-page navigation
✓ 20 high-quality 4K images integrated
✓ Fully responsive design
✓ Smooth animations and transitions
✓ Fullscreen image gallery with lightbox
✓ Clean, maintainable code structure
✓ Production-ready with deployment configs
✓ All brand identity preserved

## Version History
- **v1.0** - Initial professional rebuild with multi-page routing, 4K images, complete PVC Interiors showcase

---

**Project Date**: September 30, 2026
**Status**: ✓ Complete & Production Ready
**Last Updated**: September 30, 2026
