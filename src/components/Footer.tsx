
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-ge-blue text-white">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">
              <span className="text-ge-red">GLOBAL</span> EYE
            </h2>
            <p className="text-white/80 mb-4">
              グローバルな視点でビジネスをサポートいたします。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">人材紹介サービス</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">ホテル清掃サービス</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">留学支援業務</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <address className="not-italic text-white/80">
              <p className="mt-2">電話: 048-278-4550</p>
              <p>メール: globaleye025@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} 株式会社GLOBAL EYE All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-3 rounded-full bg-ge-red hover:bg-red-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
