import Reveal from './Reveal';
import './BrandStory.css';

export default function BrandStory() {
  return (
    <section className="brand-story">
      <div className="container">
        <Reveal className="brand-story-content">
          <img src="/logo.png" alt="Sri Murugan Logo" className="brand-story-logo" />
          <h2>Designed for your space. Built for everyday life.</h2>
          <p>
            From PVC cupboards to complete interior works, we focus on practical materials, accurate measurements and clean finishing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
