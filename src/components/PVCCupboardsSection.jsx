import { PVC_CUPBOARDS } from '../data/site';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import './PVCCupboardsSection.css';

export default function PVCCupboardsSection({ onPreview }) {
  const handleCupboardClick = (index) => {
    const cupboardImages = PVC_CUPBOARDS.map(cupboard => ({ img: cupboard.img, alt: cupboard.title }));
    onPreview(PVC_CUPBOARDS[index].img, PVC_CUPBOARDS[index].title, cupboardImages, index);
  };

  return (
    <section className="pvc-cupboards-section">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <p className="section-label">02 / PVC CUPBOARDS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-heading">Storage that works beautifully.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-description">
              Made-to-measure PVC cupboards for bedrooms, kitchens, utility spaces and everyday storage.
            </p>
          </Reveal>
        </div>

        <div className="cupboards-grid">
          {PVC_CUPBOARDS.map((cupboard, idx) => (
            <Reveal key={cupboard.id} delay={idx * 60}>
              <div 
                className="cupboard-card"
                onClick={() => handleCupboardClick(idx)}
                role="button"
                tabIndex="0"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCupboardClick(idx);
                  }
                }}
              >
                <div className="cupboard-image">
                  <img 
                    src={cupboard.img} 
                    alt={cupboard.title}
                    loading="lazy"
                  />
                </div>
                <div className="cupboard-content">
                  <h3>{cupboard.title}</h3>
                  <p className="cupboard-desc">{cupboard.desc}</p>
                  <div className="cupboard-features">
                    {cupboard.features.map((feature, fidx) => (
                      <span key={fidx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleCupboardClick(idx); }} className="view-work">
                    View Details <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
