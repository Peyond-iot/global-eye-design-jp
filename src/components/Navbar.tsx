
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
        scrolled ? 'bg-white bg-opacity-95 shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-ge-blue">
            <span className="text-ge-red">GLOBAL</span> EYE
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['ホーム', '会社概要', 'サービス', 'お問い合わせ'].map((item, index) => (
            <a 
              key={index}
              href={`#${['home', 'about', 'services', 'contact'][index]}`}
              className="text-ge-dark hover:text-ge-red transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full border-t">
          <div className="container py-4 flex flex-col space-y-4">
            {['ホーム', '会社概要', 'サービス', 'お問い合わせ'].map((item, index) => (
              <a 
                key={index}
                href={`#${['home', 'about', 'services', 'contact'][index]}`}
                className="text-ge-dark hover:text-ge-red py-2 px-4 transition-colors font-medium"
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
