
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="home" 
      className={`relative ${isMobile ? 'h-[60vh]' : 'h-[90vh]'} flex items-center justify-center overflow-hidden`}
    >
      {/* High-quality background image with Tokyo/high-tech theme */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=100" 
          alt="Tokyo cityscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/20"></div> {/* Reduced opacity overlay */}
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 flex flex-col items-center justify-center text-center">
        {/* Logo and slogan */}
        <div className="max-w-3xl mx-auto fade-in-view bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            GLOBAL <span className="text-ge-red">EYE</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-8 drop-shadow-md">
            あなたの未来をつなぐ
          </h2>
          
          <div className="space-y-6 text-white">
            <p className="text-xl font-medium">グローバルな視点でビジネスをサポート</p>
            <p className="text-lg">人材紹介、ホテル清掃サービス、留学支援業務を通じて</p>
            <p className="text-lg">お客様のニーズに合わせた最適なソリューションを提供します</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button 
              variant="secondary" 
              size="lg"
              className="group shadow-lg bg-ge-red hover:bg-red-700 text-white"
            >
              サービスを見る <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/20 shadow-lg"
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
