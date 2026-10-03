import Hero from '../components/Hero';
import ValueStrip from '../components/ValueStrip';
import ProductCatalogue from '../components/ProductCatalogue';
import MaterialProfile from '../components/MaterialProfile';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import PVCFeature from '../components/PVCFeature';
import EnquirySection from '../components/EnquirySection';

export default function Home({ interest, onInterestChange, onAsk, onPreview }) {
  return (
    <>
      <main>
        <Hero />
        <ValueStrip />
        {/* 01 / THE CATALOGUE */}
        <ProductCatalogue onAsk={onAsk} onPreview={onPreview} />
        {/* 02 / THE INSIDE STORY */}
        <MaterialProfile />
        {/* 03 / OUR SERVICES */}
        <Services onPreview={onPreview} />
        {/* 04 / VISUAL REFERENCES */}
        <Gallery onPreview={onPreview} />
        {/* 05 / PVC INTERIOR WORKS STARTER */}
        <PVCFeature />
        {/* 06 / LET'S MAKE A PLAN */}
        <EnquirySection interest={interest} onInterestChange={onInterestChange} />
      </main>
    </>
  );
}
