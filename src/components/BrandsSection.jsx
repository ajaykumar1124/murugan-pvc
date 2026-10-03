import { BRAND_POSTERS } from '../data/site';
import Reveal from './Reveal';
import './BrandsSection.css';

export default function BrandsSection({ onPreview }) {
  const handleBrandClick = (index) => {
    onPreview(BRAND_POSTERS[index].img, BRAND_POSTERS[index].name, BRAND_POSTERS, index);
  };

  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <p className="section-label">03 / BRANDS WE WORK WITH</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-heading">Trusted materials. Better finished spaces.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-description">
              We work with selected PVC and interior material brands to provide reliable materials, consistent finishes and practical solutions for every project.
            </p>
          </Reveal>
        </div>

        <div className="brands-grid">
          {BRAND_POSTERS.map((poster, idx) => (
            <Reveal key={poster.id} delay={idx * 60}>
              <div 
                className="brand-poster"
                onClick={() => handleBrandClick(idx)}
                role="button"
                tabIndex="0"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleBrandClick(idx);
                  }
                }}
              >
                <div className="brand-poster-image">
                  <img 
                    src={poster.img} 
                    alt={`${poster.name} - ${poster.category}`}
                    loading="lazy"
                  />
                </div>
                <div className="brand-poster-info">
                  <h3>{poster.name}</h3>
                  <p>{poster.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
