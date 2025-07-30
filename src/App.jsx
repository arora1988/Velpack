import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variant';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AboutUsPage from './pages/aboutUs';
import Home from './pages/home';
import Technologypage from './pages/technology';
import ContactusPage from './pages/contactus';
import ServicesPage from './pages/ourservices';
import CertificationPage from './pages/certification';
import ScrollToTop from './components/ScrollToTop';

// Page wrapper component
const PageWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/aboutUs" element={<PageWrapper><AboutUsPage /></PageWrapper>} />
          <Route path="/technology" element={<PageWrapper><Technologypage /></PageWrapper>} />
          <Route path="/contactus" element={<PageWrapper><ContactusPage /></PageWrapper>} />
          <Route path="/ourservices" element={<PageWrapper><ServicesPage /></PageWrapper>} />
          <Route path="/certification" element={<PageWrapper><CertificationPage /></PageWrapper>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
