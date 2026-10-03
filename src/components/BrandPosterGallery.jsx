import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Reveal from './Reveal';
import './BrandPosterGallery.css';

export default function BrandPosterGallery({ posters, onPreview }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrevious = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? posters.length - 1 : prev - 1));
  }, [posters.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === posters.length - 1 ? 0 : prev + 1));
  }, [posters.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') handleClose();
    },
    [selectedIndex, handlePrevious, handleNext, handleClose],
  );

  return (
    <section className="section brand-posters" id="brands">
      <div className="container brand-posters-inner">
        <Reveal>
          <p className="eyebrow">05 / Brands we work with</p>
          <h2 className="display">
            Trusted materials.
            <br />
            Better finished spaces.
          </h2>
          <p className="lede brand-posters-lede">
            We work with selected PVC and interior material brands to provide reliable materials,
            consistent finishes and practical solutions for every project.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="brand-posters-grid">
            {posters.map((poster, index) => (
              <button
                key={poster.id}
                className="brand-poster-card"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${poster.name} poster`}
                type="button"
              >
                <div className="brand-poster-image">
                  <img src={poster.img} alt={poster.name} loading="lazy" />
                </div>
                <div className="brand-poster-info">
                  <h3 className="brand-poster-name">{poster.name}</h3>
                  <p className="brand-poster-category">{poster.category}</p>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {selectedIndex !== null && (
        <div
          className="brand-poster-lightbox"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={0}
        >
          <div className="brand-poster-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="brand-poster-lightbox-image">
              <img src={posters[selectedIndex].img} alt={posters[selectedIndex].name} />
            </div>

            <div className="brand-poster-lightbox-controls">
              <button
                className="brand-poster-lightbox-nav brand-poster-lightbox-prev"
                onClick={handlePrevious}
                aria-label="Previous poster"
                type="button"
              >
                <ChevronLeft />
              </button>

              <div className="brand-poster-lightbox-counter">
                {selectedIndex + 1} / {posters.length}
              </div>

              <button
                className="brand-poster-lightbox-nav brand-poster-lightbox-next"
                onClick={handleNext}
                aria-label="Next poster"
                type="button"
              >
                <ChevronRight />
              </button>

              <button
                className="brand-poster-lightbox-close"
                onClick={handleClose}
                aria-label="Close lightbox"
                type="button"
              >
                <X />
              </button>
            </div>

            <div className="brand-poster-lightbox-info">
              <h3>{posters[selectedIndex].name}</h3>
              <p>{posters[selectedIndex].category}</p>
            </div>
          </div>

          <div className="brand-poster-lightbox-overlay" />
        </div>
      )}
    </section>
  );
}
