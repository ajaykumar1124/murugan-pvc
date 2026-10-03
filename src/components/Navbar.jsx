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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = () => {
    setOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    setOpen(false);
  };

  const handlePVCInteriorsClick = (e) => {
    e.preventDefault();
    navigate('/pvc-interiors');
    setOpen(false);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate('/services');
    setOpen(false);
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
            {isOnPVCPage ? (
              <>
                <Link to="/" onClick={handleNavClick}>
                  Home
                </Link>
                <a href="#pvc-contact" onClick={handleNavClick}>
                  Contact
                </a>
              </>
            ) : (
              <>
                <a href="#products" onClick={handleNavClick}>
                  Products
                </a>
                <Link to="/services" onClick={handleServicesClick}>
                  Our services
                </Link>
                <a href="#works" onClick={handleNavClick}>
                  Our Works
                </a>
                <a href="#brands" onClick={handleNavClick}>
                  Brands
                </a>
                <Link to="/pvc-interiors" onClick={handlePVCInteriorsClick}>
                  PVC Interiors
                </Link>
                <a href="#contact" onClick={handleNavClick}>
                  Contact
                </a>
              </>
            )}
          </nav>

          <div className="nav-cta">
            <a className="nav-phone" href={`tel:${BRAND.phonePrimary}`}>
              <Phone />
              {BRAND.phonePrimary}
            </a>
            <a
              className="btn btn-primary nav-enquiry"
              href={isOnPVCPage ? '#pvc-contact' : '#contact'}
              onClick={handleNavClick}
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
          {isOnPVCPage ? (
            <>
              <Link to="/" onClick={handleNavClick}>
                Home
              </Link>
              <a href="#pvc-contact" onClick={handleNavClick}>
                Contact
              </a>
            </>
          ) : (
            <>
              <a href="#products" onClick={handleNavClick}>
                Products
              </a>
              <Link to="/services" onClick={handleServicesClick}>
                Our services
              </Link>
              <a href="#works" onClick={handleNavClick}>
                Our Works
              </a>
              <a href="#brands" onClick={handleNavClick}>
                Brands
              </a>
              <Link to="/pvc-interiors" onClick={handlePVCInteriorsClick}>
                PVC Interiors
              </Link>
              <a href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </>
          )}
        </nav>

        <div className="nav-drawer-foot">
          <a
            className="btn btn-primary btn-block"
            href={isOnPVCPage ? '#pvc-contact' : '#contact'}
            onClick={handleNavClick}
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
