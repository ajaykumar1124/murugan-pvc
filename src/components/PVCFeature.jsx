import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import './PVCFeature.css';

export default function PVCFeature() {
  return (
    <section className="pvc-feature">
      <div className="container">
        <div className="pvc-feature-grid">
          <Reveal className="pvc-feature-content">
            <p className="section-label">05 / PVC INTERIOR WORKS</p>
            <h2 className="section-heading">
              Practical interiors.<br />
              Made for everyday living.
            </h2>
            <p className="pvc-feature-description">
              Explore our made-to-measure PVC interior works, cupboards, storage solutions and the materials and brands we work with.
            </p>
            <Link to="/pvc-interiors" className="btn btn-primary">
              Explore PVC Interiors
              <ArrowUpRight size={18} />
            </Link>
          </Reveal>
          <Reveal className="pvc-feature-image">
            <img 
              src="/images/pvc-interior-03-tv-unit.jpg" 
              alt="PVC TV unit and storage interior"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
