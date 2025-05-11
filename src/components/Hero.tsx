
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="home" 
      className={`relative ${isMobile ? 'h-[40vh]' : 'h-[60vh]'} flex items-center justify-center overflow-hidden`}
    >
      {/* Background image with reduced overlay opacity for better clarity */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/6fd9fd41-a4b8-4021-b483-0c13546d8127.png" 
          alt="Tokyo cityscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ge-blue/30"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 flex flex-col items-center justify-center text-center">
        {/* Logo and slogan */}
        <div className="max-w-3xl mx-auto fade-in-view">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            GLOBAL <span className="text-ge-red">EYE</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            あなたの未来をつなぐ
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              variant="secondary" 
              size="lg"
              className="group shadow-lg bg-ge-red hover:bg-red-700 text-white"
              asChild
            >
              <a href="#services">
                サービスを見る <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/20 shadow-lg"
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
