import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ image, title, onClose, onNext, onPrev, currentIndex, total }) {
  useEffect(() => {
    if (!image) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && onNext) onNext();
      if (event.key === 'ArrowLeft' && onPrev) onPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [image, onClose, onNext, onPrev]);

  if (!image) return null;

  const hasCounter = currentIndex !== undefined && total !== undefined;

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close preview">
          <X size={32} />
        </button>
        
        {onPrev && (
          <button 
            type="button" 
            className="lightbox-prev" 
            onClick={onPrev} 
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}
        
        {onNext && (
          <button 
            type="button" 
            className="lightbox-next" 
            onClick={onNext} 
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}
        
        <img src={image} alt={title || 'Preview'} className="lightbox-image" />
        
        {hasCounter && (
          <div className="lightbox-counter">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
        )}
      </div>
    </div>
  );
}
