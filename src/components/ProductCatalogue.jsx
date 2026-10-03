import { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/site';
import ProductCard from './ProductCard';
import Reveal from './Reveal';
import './ProductCatalogue.css';

export default function ProductCatalogue({ onAsk, onPreview }) {
  const [category, setCategory] = useState('All');
  const visible = category === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  return (
    <section className="section catalogue" id="products">
      <div className="container">
        <Reveal className="catalogue-head">
          <div>
            <p className="eyebrow">01 / The catalogue</p>
            <h2 className="display">
              Useful pieces for
              <br />
              the way your home
              <br />
              works.
            </h2>
          </div>
          <p className="lede catalogue-lede">
            From a single window to a full interiors package, we help you select the right profile,
            thickness and finish for the job.
          </p>
        </Reveal>

        <Reveal className="filters" delay={80}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${category === cat ? 'active' : ''}`}
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="product-grid">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} onAsk={onAsk} onPreview={onPreview} />
          ))}
        </div>
      </div>
    </section>
  );
}
