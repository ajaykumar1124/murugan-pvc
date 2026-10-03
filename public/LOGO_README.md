# Sri Murugan Logo Files

This folder contains all logo variations for the Sri Murugan website.

## Logo Files

### 1. `logo.svg` (Primary Logo - Dark Version)
- **Size**: 200x200px
- **Usage**: Main logo for light backgrounds
- **Where used**: Navbar, general branding
- **Design**: Circular badge with window frame motif and "S" monogram
- **Colors**: Dark green background with gold accents

### 2. `logo-light.svg` (Light Version)
- **Size**: 200x200px
- **Usage**: Logo for dark backgrounds
- **Where used**: Footer
- **Design**: Same as primary but with lighter, more transparent colors
- **Colors**: Translucent green with bright gold accents

### 3. `logo-horizontal.svg` (Horizontal Layout)
- **Size**: 400x120px
- **Usage**: Wide banner spaces, email signatures, print materials
- **Design**: Logo icon on left with text on right
- **Includes**: Full business name and tagline

### 4. `favicon.svg` (Website Icon)
- **Size**: 64x64px
- **Usage**: Browser tab icon
- **Design**: Simplified window frame with "S" letter
- **Optimized**: For small sizes and quick loading

## Design Elements

### Symbolism
- **Window Frame**: Represents the core business (PVC windows and doors)
- **Four Panes**: Symbolizes completeness and quality
- **"S" Monogram**: Sri Murugan initial
- **Circular Badge**: Premium, established brand feeling
- **Peacock Feather Accents**: Subtle reference to Lord Murugan (peacock is his vahana/vehicle)
- **Gold Accents**: Premium quality and craftsmanship

### Color Palette
- **Primary Green**: #294d43 (brand stability, natural)
- **Gold**: #d7a33b (premium, craftsmanship)
- **Terracotta**: #c95334 (warmth, accent)
- **Cream**: #f5f1e8 (elegance, light)

### Typography
- **Monogram**: Georgia serif (classic, established)
- **Labels**: Space Mono (modern, technical precision)

## Usage Guidelines

### DO:
✅ Use on light backgrounds (logo.svg)  
✅ Use on dark backgrounds (logo-light.svg)  
✅ Maintain aspect ratio when resizing  
✅ Keep clear space around logo (minimum 20px)  
✅ Use provided color versions  

### DON'T:
❌ Stretch or distort the logo  
❌ Change colors arbitrarily  
❌ Add effects (shadows, glows, etc.)  
❌ Place on busy backgrounds  
❌ Use dark logo on dark backgrounds  

## Export Formats

All logos are provided as SVG (Scalable Vector Graphics) which means:
- ✅ Infinite scalability without quality loss
- ✅ Small file size
- ✅ Crisp on all screens including Retina/4K
- ✅ Can be exported to PNG/JPG if needed

### If You Need PNG/JPG

Use an online converter or design software:

**For PNG exports:**
- Favicon: 64x64px, 128x128px, 256x256px
- Logo: 400x400px, 800x800px
- Social media: 1200x1200px

**For print:**
- Export at 300 DPI
- Minimum 2000px width

## File Locations

```
public/
├── logo.svg              → Main logo (light backgrounds)
├── logo-light.svg        → Logo for dark backgrounds
├── logo-horizontal.svg   → Wide format logo
└── favicon.svg           → Browser tab icon
```

## Social Media Sizes

When creating social media graphics, use these dimensions:

- **Facebook**: 1200x630px (og:image)
- **Twitter**: 1200x600px
- **Instagram**: 1080x1080px (square)
- **LinkedIn**: 1200x627px

Use `logo.svg` as the base and export to PNG at these sizes.

## Brand Colors Reference

```css
--green: #294d43           /* Primary brand */
--green-deep: #31584e      /* Dark sections */
--terracotta: #c95334      /* CTA buttons */
--gold: #d7a33b            /* Accents */
--cream: #f5f1e8           /* Light background */
--beige: #ede6d8           /* Alt background */
--ink: #29231f             /* Dark text */
```

## Contact

For logo modifications or additional formats, refer to the design system in `/src/index.css` or consult the project documentation.

---

**Logo Design**: Premium Editorial Style  
**Created**: 2024  
**Format**: SVG (Scalable Vector Graphics)  
**License**: Sri Murugan Business Use
