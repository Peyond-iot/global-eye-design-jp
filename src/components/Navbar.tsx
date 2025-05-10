
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/5518a94b-9cda-473f-84fd-75b513f94f4b.png" 
            alt="GLOBAL EYE Logo" 
            className="h-10 md:h-12 drop-shadow-sm" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['ホーム', '会社概要', 'サービス', 'お問い合わせ'].map((item, index) => (
            <a 
              key={index}
              href={`#${['home', 'about', 'services', 'contact'][index]}`}
              className={cn(
                "hover:text-ge-red transition-colors font-medium relative px-2 py-1 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-ge-red after:transition-all after:duration-300 hover:after:w-full",
                scrolled ? "text-ge-dark" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <X className={scrolled ? "text-ge-dark" : "text-white"} /> : 
            <Menu className={scrolled ? "text-ge-dark" : "text-white"} />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm w-full border-t shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-1">
            {['ホーム', '会社概要', 'サービス', 'お問い合わせ'].map((item, index) => (
              <a 
                key={index}
                href={`#${['home', 'about', 'services', 'contact'][index]}`}
                className="text-ge-dark hover:text-ge-red hover:bg-gray-100 py-3 px-4 transition-colors font-medium rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
