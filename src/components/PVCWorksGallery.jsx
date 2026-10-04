import { PVC_GALLERY } from '../data/site';
import Reveal from './Reveal';
import './PVCWorksGallery.css';

export default function PVCWorksGallery({ onPreview }) {
  const handleImageClick = (index) => {
    onPreview(PVC_GALLERY[index].img, PVC_GALLERY[index].alt, PVC_GALLERY, index);
  };

  return (
    <section className="pvc-works-gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <p className="section-label">04 / PVC WORK GALLERY</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-heading">Picture the finished space.</h2>
          </Reveal>
        </div>

        <div className="gallery-grid">
          {PVC_GALLERY.map((image, idx) => {
            // Create varied masonry layout
            const isWide = idx === 0 || idx === 4 || idx === 9 || idx === 14;
            const isTall = idx === 2 || idx === 7 || idx === 12;
            
            return (
              <Reveal key={idx} delay={idx * 40}>
                <div 
                  className={`gallery-item ${isWide ? 'gallery-item-wide' : ''} ${isTall ? 'gallery-item-tall' : ''}`}
                  onClick={() => handleImageClick(idx)}
                  role="button"
                  tabIndex="0"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleImageClick(idx);
                    }
                  }}
                >
                  <img 
                    src={image.img} 
                    alt={image.alt}
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-counter">{String(idx + 1).padStart(2, '0')} / {String(PVC_GALLERY.length).padStart(2, '0')}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
