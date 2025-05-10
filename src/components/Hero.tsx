
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-[50vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/6fd9fd41-a4b8-4021-b483-0c13546d8127.png" 
          alt="Tokyo cityscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ge-blue/60"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <div className="mb-8 w-full max-w-xs mx-auto">
          <img 
            src="/lovable-uploads/5518a94b-9cda-473f-84fd-75b513f94f4b.png" 
            alt="GLOBAL EYE Logo" 
            className="w-full h-auto"
          />
        </div>

        {/* Slogan and content */}
        <div className="max-w-3xl mx-auto fade-in-view">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
            あなたの将来をつなぐ
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            グローバルな視点でビジネスをサポート
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            人材紹介、ホテル清掃サービス、留学支援業務を通じて
            <br className="hidden sm:block" />
            お客様のニーズに合わせた最適なソリューションを提供します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="group"
              asChild
            >
              <a href="#services">
                サービスを見る <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="#contact">
                お問い合わせ
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center animate-bounce">
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
