
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (section: string) => void;
}

const Footer = ({ onNavClick }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    onNavClick('home');
  };

  return (
    <footer className="bg-white text-ge-blue py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2">
              <span className="text-white bg-ge-blue px-2 py-1">GLOBAL</span> <span className="text-white bg-ge-red px-2 py-1">EYE</span>
            </h2>
            <p className="text-ge-blue text-sm">
              グローバルな視点でビジネスをサポートいたします。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2 text-ge-blue">サービス</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('services');
                  }}
                  className="text-ge-blue hover:text-ge-red transition-colors"
                >
                  人材紹介サービス
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('services');
                  }}
                  className="text-ge-blue hover:text-ge-red transition-colors"
                >
                  ホテル清掃サービス
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('services');
                  }}
                  className="text-ge-blue hover:text-ge-red transition-colors"
                >
                  留学支援業務
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2 text-ge-blue">お問い合わせ</h3>
            <address className="not-italic text-ge-blue text-sm">
              <p>電話: 048-278-4550</p>
              <p>メール: globaleye025@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-ge-blue/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-ge-blue/80 text-xs">
            &copy; {new Date().getFullYear()} 株式会社GLOBAL EYE All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-3 sm:mt-0 p-2 rounded-full bg-ge-red hover:bg-red-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
