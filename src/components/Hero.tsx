
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="relative flex flex-col">
      {/* Navigation placeholder for proper spacing */}
      <div className="h-16"></div>
      
      {/* Banner image with overlay text */}
      <div className="relative w-full" style={{ height: isMobile ? '40vh' : '60vh' }}>
        <img 
          src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=100" 
          alt="Tokyo cityscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30"></div>
        
        {/* Centered logo and slogan */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              <span className="text-white">GLOBAL</span> <span className="text-ge-red">EYE</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-white leading-tight drop-shadow-md">
              あなたの未来をつなぐ
            </h2>
          </div>
        </div>
      </div>
      
      {/* Content section below image */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl font-medium text-ge-blue">グローバルな視点でビジネスをサポート</p>
          <p className="text-lg text-gray-700">人材紹介、ホテル清掃サービス、留学支援業務を通じて</p>
          <p className="text-lg text-gray-700">お客様のニーズに合わせた最適なソリューションを提供します</p>
          
          <div className="pt-6">
            <Button 
              variant="secondary" 
              size="lg"
              className="group shadow-md bg-ge-red hover:bg-red-700 text-white"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                // Update the active section in the parent component
                const event = new CustomEvent('navClick', { detail: 'services' });
                window.dispatchEvent(event);
              }}
            >
              サービスを見る <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
