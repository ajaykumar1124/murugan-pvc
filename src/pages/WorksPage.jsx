import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import EnquirySection from '../components/EnquirySection';
import './WorksPage.css';

export default function WorksPage({ interest, onInterestChange, onPreview }) {
  return (
    <>
      <main>
        <Gallery onPreview={onPreview} />
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
