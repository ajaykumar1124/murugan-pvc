import { Link } from 'react-router-dom';
import PVCInteriorsHero from '../components/PVCInteriorsHero';
import PVCInteriorWorks from '../components/PVCInteriorWorks';
import PVCCupboardsSection from '../components/PVCCupboardsSection';
import BrandsSection from '../components/BrandsSection';
import EnquirySection from '../components/EnquirySection';
import './PVCInteriorsPage.css';

export default function PVCInteriorsPage({ interest, onInterestChange, onPreview }) {
  return (
    <>
      <main>
        <PVCInteriorsHero />
        {/* 01 / PVC INTERIOR WORKS */}
        <PVCInteriorWorks onPreview={onPreview} />
        {/* 02 / PVC CUPBOARDS */}
        <PVCCupboardsSection onPreview={onPreview} />
        {/* 03 / BRANDS WE WORK WITH */}
        <BrandsSection onPreview={onPreview} />
        {/* 04 / LET'S MAKE A PLAN */}
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
