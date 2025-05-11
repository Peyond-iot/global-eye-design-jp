
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
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
    
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href');
        const element = document.querySelector(id || '');
        
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Initial check for elements in view
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Add click event listener for smooth scrolling
    document.addEventListener('click', handleSmoothScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  // Set page title and metadata
  useEffect(() => {
    document.title = "GLOBAL EYE - あなたの未来をつなぐ";
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <About />
      </div>
      <div className="bg-ge-gray">
        <Services />
      </div>
      <div className="bg-white">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
