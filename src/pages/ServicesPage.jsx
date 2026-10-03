import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import EnquirySection from '../components/EnquirySection';
import './ServicesPage.css';

export default function ServicesPage({ interest, onInterestChange, onPreview }) {
  return (
    <>
      <main>
        <section className="services-page-hero">
          <div className="container">
            <div className="services-hero-content">
              <p className="section-label">Our Complete Services</p>
              <h1 className="page-heading">Every room. 
              <br /> Every service.</h1>
              <p className="page-subtitle">
                From pooja rooms to modular kitchens, from glass work to custom interiors — we bring practical solutions and fine craftsmanship to every corner of your home.
              </p>
            </div>
          </div>
        </section>

        <Services onPreview={onPreview} />
        
        <EnquirySection interest={interest} onInterestChange={onInterestChange} />

        <div className="back-to-home-section">
          <Link to="/" className="btn btn-primary">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
