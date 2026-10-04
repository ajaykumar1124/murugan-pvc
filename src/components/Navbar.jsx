import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { BRAND, whatsappUrl } from '../data/site';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isOnPVCPage = location.pathname === '/pvc-interiors';
  const sectionLinks = [
    { label: 'About Us', id: 'about-us' },
    { label: 'Services', id: 'services' },
    { label: 'Completed Projects', id: 'completed-projects' },
    { label: 'Our Team', id: 'our-team' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!['/', '/pvc-interiors'].includes(location.pathname) || !location.hash) return undefined;
    const sectionId = location.hash.slice(1);
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  const handleNavClick = () => {
    setOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    setOpen(false);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setOpen(false);
    if (isOnPVCPage && sectionId === 'contact') {
      document.getElementById('pvc-contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const hash = `#${sectionId}`;
    if (location.pathname === '/' && location.hash === hash) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(`/${hash}`);
  };

  const handleTeamClick = (event) => {
    event.preventDefault();
    setOpen(false);
    if (location.pathname === '/pvc-interiors' && location.hash === '#our-team') {
      document.getElementById('our-team')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate('/pvc-interiors#our-team');
  };

  const handleProjectsClick = (event) => {
    event.preventDefault();
    setOpen(false);
    navigate('/completed-projects');
  };

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    setOpen(false);
    if (isOnPVCPage) {
      document.getElementById('pvc-contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    handleSectionClick(e, 'contact');
  };

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="brand" onClick={handleLogoClick}>
            <img src="/logo.png" alt="Sri Murugan Logo" className="brand-logo" />
            <span className="brand-text">
              <span className="brand-name">{BRAND.name}</span>
              <span className="brand-sub">{BRAND.headerSub}</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            <Link to="/" onClick={handleLogoClick}>Home</Link>
            {sectionLinks.map((item) => (
              <a
                href={item.id === 'our-team' ? '/pvc-interiors#our-team' : item.id === 'completed-projects' ? '/completed-projects' : isOnPVCPage && item.id === 'contact' ? '#pvc-contact' : `/#${item.id}`}
                key={item.id}
                onClick={item.id === 'our-team' ? handleTeamClick : item.id === 'completed-projects' ? handleProjectsClick : (event) => handleSectionClick(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <a className="nav-phone" href={`tel:${BRAND.phonePrimary}`}>
              <Phone />
              {BRAND.phonePrimary}
            </a>
            <a
              className="btn btn-primary nav-enquiry"
              href={isOnPVCPage ? '#pvc-contact' : '#contact'}
              onClick={handleEnquiryClick}
            >
              Start an enquiry
            </a>
            <button
              type="button"
              className="nav-burger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="nav-drawer-head">
          <span className="brand">
            <img src="/logo.png" alt="Sri Murugan Logo" className="brand-logo" />
            <span className="brand-text">
              <span className="brand-name">{BRAND.name}</span>
              <span className="brand-sub">{BRAND.headerSub}</span>
            </span>
          </span>
          <button type="button" className="nav-burger" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="nav-drawer-links" aria-label="Mobile">
          <Link to="/" onClick={handleLogoClick}>Home</Link>
          {sectionLinks.map((item) => (
            <a
              href={item.id === 'our-team' ? '/pvc-interiors#our-team' : item.id === 'completed-projects' ? '/completed-projects' : isOnPVCPage && item.id === 'contact' ? '#pvc-contact' : `/#${item.id}`}
              key={item.id}
              onClick={item.id === 'our-team' ? handleTeamClick : item.id === 'completed-projects' ? handleProjectsClick : (event) => handleSectionClick(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-drawer-foot">
          <a
            className="btn btn-primary btn-block"
            href={isOnPVCPage ? '#pvc-contact' : '/#contact'}
            onClick={handleEnquiryClick}
          >
            Start an enquiry
          </a>
          <a className="btn btn-outline btn-block" href={`tel:${BRAND.phonePrimary}`}>
            <Phone /> {BRAND.phonePrimary}
          </a>
          <a className="nav-drawer-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
