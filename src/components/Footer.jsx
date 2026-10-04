import { BRAND } from '../data/site';
import './Footer.css';

const footerLinks = [
  { label: 'About Us', id: 'about-us' },
  { label: 'Services', id: 'services' },
  { label: 'Completed Projects', id: 'completed-projects' },
  { label: 'Our Team', id: 'our-team' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-brand">
          <a href="/" className="site-footer-name">{BRAND.name} PVC</a>
          <p>Quality PVC solutions with professional service and dedicated workmanship.</p>
        </div>
        <nav className="site-footer-nav" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              href={link.id === 'our-team' ? '/pvc-interiors#our-team' : link.id === 'completed-projects' ? '/completed-projects' : `/#${link.id}`}
              key={link.id}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container site-footer-bottom">
        <span>{BRAND.name} PVC</span>
        <a href={`tel:${BRAND.phonePrimary}`}>{BRAND.phonePrimary}</a>
      </div>
    </footer>
  );
}