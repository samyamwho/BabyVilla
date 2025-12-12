
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ApplyPage from './pages/ApplyPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import FacilityDetailsPage from './pages/FacilityDetails';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden relative">
        <Navbar />
        <SocialSidebar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/facilities/:id" element={<FacilityDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
