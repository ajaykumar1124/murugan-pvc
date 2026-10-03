import { ArrowUpRight } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ product, onAsk, onPreview }) {
  return (
    <article
      className={`product-card tone-${product.tone} ${product.span === 2 ? 'span-2' : ''}`}
    >
      <button
        type="button"
        className="product-media product-media-button"
        onClick={() => onPreview?.(product.img, product.title)}
        aria-label={`Preview ${product.title}`}
      >
        <img src={product.img} alt={product.title} loading="lazy" />
      </button>
      <span className="product-code">{product.code}</span>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-desc">{product.desc}</p>
      <div className="product-foot">
        <span>{String(product.id).padStart(2, '0')} / made to measure</span>
        <button type="button" className="product-ask" onClick={() => onAsk(product.enquiry)}>
          Ask about it <ArrowUpRight />
        </button>
      </div>
    </article>
  );
}
