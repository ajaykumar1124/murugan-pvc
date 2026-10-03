import Reveal from './Reveal';
import './PVCInteriorsHero.css';

export default function PVCInteriorsHero() {
  return (
    <section className="pvc-hero">
      <div className="container pvc-hero-inner">
        <Reveal>
          <p className="pvc-hero-label">PVC INTERIORS / CUPBOARDS</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="pvc-hero-title">
            PVC interiors,<br />
            made for everyday living.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="pvc-hero-description">
            Made-to-measure PVC interior works and cupboards designed for modern homes, practical storage and long-lasting everyday use.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="pvc-hero-buttons">
            <button className="btn btn-primary" type="button" onClick={() => document.getElementById('pvc-works')?.scrollIntoView({ behavior: 'smooth' })}>
              View Our Work
            </button>
            <button className="btn btn-outline" type="button" onClick={() => document.getElementById('pvc-contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get a Quote
            </button>
          </div>
        </Reveal>
      </div>
      <Reveal className="pvc-hero-image">
        <img 
          src="/images/pvc-interior-01-living-room.jpg" 
          alt="Premium PVC interior with fluted wall panels"
        />
      </Reveal>
    </section>
  );
}
