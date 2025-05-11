
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle scroll animations
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.fade-in-view');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
        
        if (isInView) {
          element.classList.add('in-view');
        }
      });
    };
    
    // Initial check for elements in view
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  // Handle navigation click
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    // Scroll to top when changing sections
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Set page title and metadata
  useEffect(() => {
    document.title = "GLOBAL EYE - あなたの未来をつなぐ";
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
      
      {activeSection === 'home' && <Hero />}
      
      {activeSection === 'about' && (
        <div className="bg-white pt-20">
          <About />
        </div>
      )}
      
      {activeSection === 'services' && (
        <div className="bg-ge-gray pt-20">
          <Services />
        </div>
      )}
      
      {activeSection === 'contact' && (
        <div className="bg-white pt-20">
          <Contact />
        </div>
      )}
      
      <Footer onNavClick={handleNavClick} />
    </div>
  );
};

export default Index;
