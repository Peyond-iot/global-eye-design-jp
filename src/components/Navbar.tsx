
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const Navbar = ({ activeSection, onNavClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    onNavClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            handleNavigation('home'); 
          }} 
          className="flex items-center"
        >
          <img 
            src="/lovable-uploads/5518a94b-9cda-473f-84fd-75b513f94f4b.png" 
            alt="GLOBAL EYE Logo" 
            className="h-10 md:h-12 drop-shadow-sm" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['ホーム', '会社概要', 'サービス', 'お問い合わせ'].map((item, index) => {
            const sectionId = ['home', 'about', 'services', 'contact'][index];
            return (
              <a 
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(sectionId);
                }}
                className={cn(
                  "transition-colors font-medium relative px-2 py-1",
                  "after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full",
                  activeSection === sectionId 
                    ? "after:w-full text-ge-red after:bg-ge-red" 
                    : "after:bg-ge-red hover:text-ge-red text-ge-blue"
                )}
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <X className="text-ge-dark" /> : 
            <Menu className="text-ge-dark" />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full border-t shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-1">
            {['ホーム', '会社概要', 'サービス', 'お問い合わせ'].map((item, index) => {
              const sectionId = ['home', 'about', 'services', 'contact'][index];
              return (
                <a 
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(sectionId);
                  }}
                  className={cn(
                    "py-3 px-4 transition-colors font-medium rounded-md",
                    activeSection === sectionId
                      ? "text-ge-red bg-gray-100"
                      : "text-ge-dark hover:text-ge-red hover:bg-gray-100"
                  )}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
