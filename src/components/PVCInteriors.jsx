import { useCallback, useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import {
  BRAND,
  PVC_INTERIOR_WORKS,
  PVC_CUPBOARDS,
  PVC_GALLERY,
  PVC_WHY,
  PVC_PROCESS,
  BRAND_POSTERS,
  whatsappUrl,
} from '../data/site';
import Reveal from './Reveal';
import Lightbox from './Lightbox';
import BrandPosterGallery from './BrandPosterGallery';
import './PVCInteriors.css';

export default function PVCInteriors() {
  const [interest, setInterest] = useState('PVC Interior Works');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleAsk = useCallback((value) => {
    if (value) setInterest(value);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document
      .getElementById('pvc-contact')
      ?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }, []);

  const handlePreview = useCallback((image, title) => {
    if (!image) return;
    setLightboxImage(image);
    setLightboxTitle(title || 'Product preview');
  }, []);

  const handleClosePreview = useCallback(() => {
    setLightboxImage(null);
    setLightboxTitle('');
  }, []);

  return (
    <div className="pvc-interiors-page">
      {/* Hero Section */}
      <section className="section pvc-hero">
        <div className="container pvc-hero-inner">
          <Reveal>
            <p className="eyebrow">PVC Interiors / Cupboards</p>
            <h1 className="display">
              PVC interiors,
              <br />
              made for everyday living.
            </h1>
            <p className="lede">
              Made-to-measure PVC interior works and cupboards designed for modern homes, practical
              storage and long-lasting everyday use.
            </p>
            <div className="pvc-hero-cta">
              <button
                className="btn btn-primary"
                onClick={() => handleAsk('PVC Interior Works')}
                type="button"
              >
                View Our Work
              </button>
              <a className="btn btn-outline" href={whatsappUrl('Hi, I would like to enquire about PVC Interior Works and Cupboards.')}>
                Get a Quote
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="pvc-hero-image">
              <img
                src="/images/18-interior-design.jpg"
                alt="PVC interior works showcase"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PVC Interior Works Section */}
      <section className="section pvc-interior-works">
        <div className="container pvc-interior-works-inner">
          <Reveal>
            <p className="eyebrow">02 / PVC Interior Works</p>
            <h2 className="display">PVC Interior Works</h2>
            <p className="lede pvc-section-lede">
              Complete PVC interior solutions designed around your space, lifestyle and storage
              needs.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="pvc-works-grid">
              {PVC_INTERIOR_WORKS.map((work) => (
                <div key={work.id} className="pvc-work-card">
                  <div className="pvc-work-image">
                    <img src={work.img} alt={work.title} loading="lazy" />
                  </div>
                  <div className="pvc-work-content">
                    <h3 className="pvc-work-title">{work.title}</h3>
                    <p className="pvc-work-desc">{work.desc}</p>
                    <button
                      className="pvc-work-cta"
                      onClick={() => handleAsk(work.enquiry)}
                      type="button"
                    >
                      View Work <ArrowUpRight width={16} height={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PVC Cupboards Section */}
      <section className="section pvc-cupboards">
        <div className="container pvc-cupboards-inner">
          <Reveal>
            <p className="eyebrow">03 / PVC Cupboards</p>
            <h2 className="display">PVC Cupboards</h2>
            <p className="lede pvc-section-lede">
              Made-to-measure PVC cupboards for bedrooms, kitchens, utility spaces and everyday
              storage.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="pvc-cupboards-tabs">
              {PVC_CUPBOARDS.map((cupboard, index) => (
                <button
                  key={cupboard.id}
                  className={`pvc-cupboard-tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  type="button"
                >
                  {cupboard.title}
                </button>
              ))}
            </div>

            <div className="pvc-cupboard-content">
              <div className="pvc-cupboard-image">
                <img src={PVC_CUPBOARDS[activeTab].img} alt={PVC_CUPBOARDS[activeTab].title} />
              </div>
              <div className="pvc-cupboard-details">
                <h3 className="pvc-cupboard-title">{PVC_CUPBOARDS[activeTab].title}</h3>
                <p className="pvc-cupboard-desc">{PVC_CUPBOARDS[activeTab].desc}</p>
                <ul className="pvc-cupboard-features">
                  {PVC_CUPBOARDS[activeTab].features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAsk(PVC_CUPBOARDS[activeTab].title)}
                  type="button"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section pvc-gallery">
        <div className="container pvc-gallery-inner">
          <Reveal>
            <p className="eyebrow">04 / Our PVC Works</p>
            <h2 className="display">See Our PVC Work</h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="pvc-gallery-grid">
              {PVC_GALLERY.map((item, index) => (
                <button
                  key={index}
                  className="pvc-gallery-item"
                  onClick={() => handlePreview(item.img, item.alt)}
                  type="button"
                  aria-label={`View ${item.alt}`}
                >
                  <img src={item.img} alt={item.alt} loading="lazy" />
                  <div className="pvc-gallery-overlay">
                    <span className="pvc-gallery-icon">+</span>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why PVC Section */}
      <section className="section pvc-why">
        <div className="container pvc-why-inner">
          <Reveal>
            <p className="eyebrow">05 / Why PVC</p>
            <h2 className="display">Why Choose PVC</h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="pvc-why-grid">
              {PVC_WHY.map((item, index) => (
                <div key={index} className="pvc-why-card">
                  <h3 className="pvc-why-title">{item.title}</h3>
                  <p className="pvc-why-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand Section */}
      <section className="section pvc-brand-section">
        <div className="container pvc-brand-section-inner">
          <Reveal>
            <div className="pvc-brand-hero">
              <div className="pvc-brand-content">
                <p className="eyebrow eyebrow--gold">Sri Murugan</p>
                <h2 className="display display--light">
                  Designed for your space.
                  <br />
                  Built for everyday life.
                </h2>
                <p className="lede lede--light">
                  From PVC cupboards to complete interior works, we focus on practical materials,
                  accurate measurements and clean finishing.
                </p>
              </div>
              <div className="pvc-brand-logo">
                <img src="/logo.png" alt="Sri Murugan Logo" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand Posters Gallery */}
      <BrandPosterGallery posters={BRAND_POSTERS} />

      {/* Process Section */}
      <section className="section pvc-process">
        <div className="container pvc-process-inner">
          <Reveal>
            <p className="eyebrow">07 / Our Process</p>
            <h2 className="display">How We Work</h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="pvc-process-grid">
              {PVC_PROCESS.map((item, index) => (
                <div key={index} className="pvc-process-card">
                  <div className="pvc-process-number">{item.step}</div>
                  <h3 className="pvc-process-title">{item.title}</h3>
                  <p className="pvc-process-desc">{item.desc}</p>
                  {index < PVC_PROCESS.length - 1 && (
                    <div className="pvc-process-arrow">
                      <ChevronDown />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section pvc-contact" id="pvc-contact">
        <div className="container pvc-contact-inner">
          <Reveal>
            <p className="eyebrow">08 / Contact</p>
            <h2 className="display">Planning a PVC interior?</h2>
            <p className="lede pvc-section-lede">
              Tell us what you need and our team will help you plan the right solution.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="pvc-contact-grid">
              <form className="pvc-contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="pvc-form-group">
                  <label htmlFor="pvc-name">Name</label>
                  <input type="text" id="pvc-name" name="name" required />
                </div>
                <div className="pvc-form-group">
                  <label htmlFor="pvc-phone">Phone Number</label>
                  <input type="tel" id="pvc-phone" name="phone" required />
                </div>
                <div className="pvc-form-group">
                  <label htmlFor="pvc-email">Email</label>
                  <input type="email" id="pvc-email" name="email" required />
                </div>
                <div className="pvc-form-group">
                  <label htmlFor="pvc-service">Service Required</label>
                  <select
                    id="pvc-service"
                    name="service"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option>PVC Interior Works</option>
                    <option>PVC Cupboard</option>
                    <option>Wardrobe</option>
                    <option>TV Unit</option>
                    <option>Modular Kitchen</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="pvc-form-group pvc-form-group-full">
                  <label htmlFor="pvc-details">Project Details</label>
                  <textarea id="pvc-details" name="details" rows={4} />
                </div>
                <a
                  href={whatsappUrl(
                    `Hello ${BRAND.name}, I would like to enquire about ${interest}. Please contact me with more information.`,
                  )}
                  className="btn btn-primary btn-block"
                >
                  Send Enquiry via WhatsApp
                </a>
              </form>

              <div className="pvc-contact-info">
                <h3>Quick Contact</h3>
                <div className="pvc-contact-items">
                  <a href={`tel:${BRAND.phonePrimary}`} className="pvc-contact-item">
                    <span className="pvc-contact-label">Call</span>
                    <span className="pvc-contact-value">{BRAND.phonePrimary}</span>
                  </a>
                  <a href={whatsappUrl()} className="pvc-contact-item">
                    <span className="pvc-contact-label">WhatsApp</span>
                    <span className="pvc-contact-value">{BRAND.whatsapp}</span>
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="pvc-contact-item">
                    <span className="pvc-contact-label">Email</span>
                    <span className="pvc-contact-value">{BRAND.email}</span>
                  </a>
                  <div className="pvc-contact-item">
                    <span className="pvc-contact-label">Address</span>
                    <span className="pvc-contact-value">{BRAND.fullAddress}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Lightbox image={lightboxImage} title={lightboxTitle} onClose={handleClosePreview} />
    </div>
  );
}
