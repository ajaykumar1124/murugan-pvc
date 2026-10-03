# Sri Murugan — Premium PVC Doors & uPVC Windows

A modern, fully responsive website for Sri Murugan, Chennai's trusted provider of premium PVC doors, uPVC windows, and complete interior solutions.

## 🌟 Features

- **Modern Responsive Design**: Mobile-first approach with fluid layouts for all devices
- **Professional UI/UX**: Clean, intuitive interface with smooth animations
- **Comprehensive Sections**:
  - Hero section with company highlights
  - About section with company story and values
  - Products showcase with category filtering
  - Services with alternating image/text layouts
  - Portfolio gallery with lightbox viewer
  - Contact form with validation
  - Professional footer with sitemap
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Performance**: Optimized images, lazy loading, code splitting
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **CSS3** - Modern styling with CSS variables

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd "sri murugan"
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including React, React Router, Lucide icons, and Vite.

### 3. Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

The development server includes:
- Hot Module Replacement (HMR)
- Fast refresh
- Error overlay
- Automatic browser opening

### 4. Build for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Minify JavaScript and CSS
- Optimize images
- Generate source maps
- Output to the `dist/` directory

### 5. Preview Production Build

Test the production build locally:

```bash
npm run preview
```

The preview will be available at `http://localhost:5174`

## 🔐 Environment Variables

### Setup

1. Copy the example environment file:

```bash
copy .env.example .env
```

2. Edit `.env` and add your actual values:

```env
# Email Service Configuration
VITE_EMAIL_SERVICE_API_KEY=your_actual_api_key_here
VITE_CONTACT_EMAIL=srimuruganpvcdoorandupvcwindow@gmail.com

# Optional configurations
VITE_API_URL=
VITE_GA_ID=
VITE_MAPS_API_KEY=
```

### Email Service Integration

The contact form is ready to integrate with email services like:

- **EmailJS** - [https://www.emailjs.com/](https://www.emailjs.com/)
- **SendGrid** - [https://sendgrid.com/](https://sendgrid.com/)
- **Custom Backend** - Your own API endpoint

To integrate, update `src/components/Contact.jsx` with your email service logic.

**Important**: Never commit `.env` file to version control. It's already in `.gitignore`.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy via Vercel Website**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Add environment variables in Vercel dashboard
   - Click "Deploy"

3. **Configure Environment Variables**:
   - In Vercel dashboard → Settings → Environment Variables
   - Add all variables from `.env.example`
   - Redeploy if needed

4. **Custom Domain**:
   - Go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - SSL certificate is automatically provisioned

### Deploy to Netlify

1. **Deploy via Netlify Website**:
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Configure:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Add environment variables
   - Click "Deploy site"

2. **Environment Variables**:
   - Site settings → Build & deploy → Environment
   - Add all variables from `.env.example`

3. **Custom Domain**:
   - Domain settings → Add custom domain
   - Follow DNS configuration instructions

### Deploy to Other Platforms

The site is compatible with:
- **Render** - [render.com](https://render.com)
- **Cloudflare Pages** - [pages.cloudflare.com](https://pages.cloudflare.com)
- **GitHub Pages** (requires additional configuration for SPA routing)

## 📱 Responsive Breakpoints

The website is tested and optimized for:

### Desktop
- 1920×1080 (Full HD)
- 1440×900
- 1366×768
- 1280×720

### Laptop
- 1366×768
- 1536×864

### Tablet
- 1024×1366 (iPad Pro)
- 834×1194 (iPad Air)
- 768×1024 (iPad)

### Mobile
- 430×932 (iPhone 14 Pro Max)
- 414×896 (iPhone 11)
- 390×844 (iPhone 13)
- 375×812 (iPhone X)
- 360×800 (Android)

## 🎨 Customization

### Update Brand Colors

Edit `src/index.css`:

```css
:root {
  --green: #294d43;      /* Primary brand color */
  --terracotta: #c95334; /* Accent color */
  --cream: #f5f1e8;      /* Background color */
  /* ... other colors */
}
```

### Update Content

- **Site data**: `src/data/site.js`
- **Products**: Edit PRODUCTS array in `src/components/Products.jsx`
- **Services**: Edit SERVICES array in `src/components/Services.jsx`
- **Works**: Edit WORKS array in `src/components/Works.jsx`

### Replace Images

Add your images to `public/images/` and update the paths in:
- Product cards
- Service sections
- Gallery/Works
- Hero section

## 📊 Performance Optimization

The website includes:

- ✅ **Code Splitting**: React vendors and icons separated
- ✅ **Lazy Loading**: Images load only when visible
- ✅ **Minification**: JavaScript and CSS optimized
- ✅ **CSS Variables**: Efficient styling with no runtime cost
- ✅ **Tree Shaking**: Unused code removed in production
- ✅ **Preconnect**: Font optimization with preconnect

## ♿ Accessibility

The website follows WCAG 2.1 guidelines:

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Alt text for images
- ✅ Proper heading hierarchy (H1-H6)
- ✅ Color contrast compliance
- ✅ `prefers-reduced-motion` support

## 🔍 SEO Features

- ✅ Semantic HTML5
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Robots.txt ready
- ✅ Sitemap ready
- ✅ Proper heading hierarchy
- ✅ Image alt attributes

## 📁 Project Structure

```
sri-murugan/
├── public/
│   ├── images/              # Product & gallery images
│   ├── logo.svg            # Brand logo
│   ├── favicon.svg         # Site favicon
│   └── _redirects          # Netlify SPA routing
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   ├── Works.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Reveal.jsx      # Animation wrapper
│   ├── pages/
│   │   ├── Home.jsx        # Main landing page
│   │   └── NotFound.jsx    # 404 page
│   ├── data/
│   │   └── site.js         # Site content & config
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .env.example            # Environment template
├── .gitignore             # Git ignore rules
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── vercel.json            # Vercel SPA routing
└── README.md              # Documentation
```

## 🧪 Testing Checklist

Before deploying, verify:

### Functionality
- [ ] All navigation links work
- [ ] Contact form validation works
- [ ] Filter buttons work (Products, Works)
- [ ] Lightbox opens and navigation works
- [ ] Mobile menu opens/closes smoothly
- [ ] All CTAs link correctly
- [ ] WhatsApp button works
- [ ] Phone/email links work

### Responsive Design
- [ ] Desktop (1920×1080, 1366×768)
- [ ] Tablet (1024×768, 768×1024)
- [ ] Mobile (iPhone, Android various sizes)
- [ ] No horizontal scrolling
- [ ] No overlapping text
- [ ] Images display correctly
- [ ] Buttons are touchable (44×44px minimum)

### Performance
- [ ] `npm run build` completes successfully
- [ ] No console errors
- [ ] Images load quickly
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90

### SEO
- [ ] Page title is correct
- [ ] Meta description is present
- [ ] Open Graph tags work (test with Facebook Debugger)
- [ ] All images have alt text
- [ ] Heading hierarchy is correct (H1 → H2 → H3)

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Development Server Won't Start

```bash
# Check if port 5173 is in use
# Kill the process or change port in vite.config.js
```

### 404 Errors After Deployment

Ensure SPA routing is configured:
- **Vercel**: `vercel.json` is present
- **Netlify**: `public/_redirects` is present

### Environment Variables Not Working

- Verify variable names start with `VITE_`
- Restart development server after changing `.env`
- Check variables are set in hosting platform dashboard

## 📞 Contact Information

**Sri Murugan**  
PVC Doors & uPVC Windows

- **Address**: 175, GNT Rd, Sakthivel Nagar, Puzhal, Chennai, Tamil Nadu 600066
- **Phone**: 8220719474 | 9003219474
- **Email**: srimuruganpvcdoorandupvcwindow@gmail.com
- **WhatsApp**: +91 8220719474

## 📄 License

© 2024 Sri Murugan. All rights reserved.

## 🤝 Support

For technical support or questions:
1. Check this README
2. Review code comments
3. Check [Vite documentation](https://vitejs.dev)
4. Check [React documentation](https://react.dev)

---

**Built with ❤️ for Sri Murugan**
