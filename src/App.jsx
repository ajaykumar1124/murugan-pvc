import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompletedProjectsPage from './pages/CompletedProjectsPage';
import ServicesPage from './pages/ServicesPage';
import PVCInteriorsPage from './pages/PVCInteriorsPage';
import Lightbox from './components/Lightbox';

export default function App() {
  const [interest, setInterest] = useState('Fixed window');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxGallery, setLightboxGallery] = useState([]);

  const handleAsk = useCallback((value) => {
    if (value) setInterest(value);
  }, []);

  const handlePreview = useCallback((image, title, gallery = [], index = 0) => {
    if (!image) return;
    setLightboxImage(image);
    setLightboxTitle(title || 'Preview');
    setLightboxGallery(gallery);
    setLightboxIndex(index);
  }, []);

  const handleClosePreview = useCallback(() => {
    setLightboxImage(null);
    setLightboxTitle('');
    setLightboxIndex(null);
    setLightboxGallery([]);
  }, []);

  const handleNextImage = useCallback(() => {
    if (!lightboxGallery.length) return;
    const nextIndex = (lightboxIndex + 1) % lightboxGallery.length;
    const nextImage = lightboxGallery[nextIndex];
    setLightboxIndex(nextIndex);
    setLightboxImage(nextImage.img || nextImage);
    setLightboxTitle(`Image ${nextIndex + 1}`);
  }, [lightboxIndex, lightboxGallery]);

  const handlePrevImage = useCallback(() => {
    if (!lightboxGallery.length) return;
    const prevIndex = (lightboxIndex - 1 + lightboxGallery.length) % lightboxGallery.length;
    const prevImage = lightboxGallery[prevIndex];
    setLightboxIndex(prevIndex);
    setLightboxImage(prevImage.img || prevImage);
    setLightboxTitle(`Image ${prevIndex + 1}`);
  }, [lightboxIndex, lightboxGallery]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              interest={interest}
              onInterestChange={setInterest}
              onAsk={handleAsk}
              onPreview={handlePreview}
            />
          }
        />
        <Route
          path="/services"
          element={
            <ServicesPage
              interest={interest}
              onInterestChange={setInterest}
              onPreview={handlePreview}
            />
          }
        />
        <Route
          path="/completed-projects"
          element={<CompletedProjectsPage onPreview={handlePreview} />}
        />
        <Route path="/our-team" element={<Navigate to="/pvc-interiors#our-team" replace />} />
        <Route
          path="/pvc-interiors"
          element={
            <PVCInteriorsPage
              interest={interest}
              onInterestChange={setInterest}
              onPreview={handlePreview}
            />
          }
        />
      </Routes>
      <Footer />
      <Lightbox 
        image={lightboxImage} 
        title={lightboxTitle} 
        onClose={handleClosePreview}
        onNext={lightboxGallery.length > 0 ? handleNextImage : null}
        onPrev={lightboxGallery.length > 0 ? handlePrevImage : null}
        currentIndex={lightboxIndex}
        total={lightboxGallery.length || undefined}
      />
    </Router>
  );
}
