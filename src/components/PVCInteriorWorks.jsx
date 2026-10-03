import { PVC_INTERIOR_WORKS } from '../data/site';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import './PVCInteriorWorks.css';

export default function PVCInteriorWorks({ onPreview }) {
  const handleWorkClick = (index) => {
    const workImages = PVC_INTERIOR_WORKS.map(work => ({ img: work.img, alt: work.title }));
    onPreview(PVC_INTERIOR_WORKS[index].img, PVC_INTERIOR_WORKS[index].title, workImages, index);
  };

  return (
    <section className="pvc-interior-works" id="pvc-works">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <p className="section-label">01 / PVC INTERIOR WORKS</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-heading">Interiors designed around your space.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="section-description">
              From storage and display to everyday living spaces, our PVC interior solutions are designed for practical use, clean finishing and long-term durability.
            </p>
          </Reveal>
        </div>

        <div className="pvc-works-grid">
          {PVC_INTERIOR_WORKS.map((work, idx) => (
            <Reveal key={work.id} delay={idx * 60}>
              <div 
                className="pvc-work-card"
                onClick={() => handleWorkClick(idx)}
                role="button"
                tabIndex="0"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleWorkClick(idx);
                  }
                }}
              >
                <div className="pvc-work-image">
                  <img 
                    src={work.img} 
                    alt={work.title}
                    loading="lazy"
                  />
                </div>
                <div className="pvc-work-content">
                  <h3>{work.title}</h3>
                  <p>{work.desc}</p>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleWorkClick(idx); }} className="view-work">
                    View Work <ArrowUpRight size={16} />
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
