import { GALLERY } from '../data/site';
import Reveal from './Reveal';
import './Gallery.css';

export default function Gallery({ onPreview }) {
  const handleImageClick = (index) => {
    const galleryImages = GALLERY.map(item => ({ img: item.img, alt: item.title }));
    onPreview(GALLERY[index].img, GALLERY[index].title, galleryImages, index);
  };

  return (
    <section className="section gallery" id="works">
      <div className="container">
        <Reveal className="gallery-head">
          <div>
            <p className="eyebrow eyebrow--gold">04 / Visual references</p>
            <h2 className="display">
              Picture the
              <br />
              finished room.
            </h2>
          </div>
          <p className="lede gallery-lede">
            Realistic reference visuals for windows, storage, glass, interiors and kitchens. Your
            final design is measured and made for your space.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {GALLERY.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} className={`gallery-item g-${item.span}`} delay={i * 70}>
                <button
                  type="button"
                  className="gallery-image-button"
                  onClick={() => handleImageClick(i)}
                  aria-label={`Preview ${item.title}`}
                >
                  <img src={item.img} alt={item.title} loading="lazy" />
                </button>
                <div className="gallery-cap">
                  <Icon strokeWidth={1.5} />
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-sub">{item.sub}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="gallery-foot">A considered finish starts with a considered conversation.</p>
        </Reveal>
      </div>
    </section>
  );
}
