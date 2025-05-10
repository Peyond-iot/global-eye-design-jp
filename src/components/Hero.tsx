
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.8)), url("https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1920&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            グローバルな視点でビジネスをサポート
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            人材紹介、ホテル清掃サービス、留学支援業務を通じて
            <br className="hidden sm:block" />
            お客様のニーズに合わせた最適なソリューションを提供します
          </p>
          <a 
            href="#services" 
            className="inline-flex items-center px-6 py-3 bg-ge-red text-white rounded-md hover:bg-red-700 transition-colors"
          >
            サービスを見る <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
        <a 
          href="#about" 
          className="p-2 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 transition-all"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
