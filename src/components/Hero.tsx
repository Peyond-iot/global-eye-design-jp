import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="relative flex flex-col">
      {/* Navigation placeholder for proper spacing */}
      <div className="h-16"></div>

      {/* Banner image with overlay text */}
      <div
        className="relative w-full"
        style={{ height: isMobile ? "40vh" : "60vh" }}
      >
        <img
          src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=100"
          alt="Tokyo cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30"></div>

        {/* Centered text on image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              多様な人材で、未来の可能性を広げる
            </h1>
          </div>
        </div>
      </div>

      {/* Content section below image */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="pt-6">
            <Button
              variant="secondary"
              size="lg"
              className="group shadow-md bg-ge-red hover:bg-red-700 text-white"
              onClick={() => {
                const servicesSection =
                  document.getElementById("services-section");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              サービスを見る{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Services section (moved from Services.tsx) */}
      <div id="services-section" className="bg-white py-12">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ge-blue mb-4">
              サービス
            </h2>
            <p className="text-ge-dark text-lg">
              お客様の多様なニーズに応える幅広いサービスを提供しております
            </p>
          </div>

          <div className="flex flex-col space-y-8">
            {/* First Service - Changed to row layout */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
                    alt="人材紹介サービス"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4">
                    <div className="text-ge-red mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-ge-blue">
                      人材紹介サービス
                    </h3>
                  </div>
                  <p className="text-ge-dark">
                    GLOBAL
                    EYEでは、日本人および外国人の人材紹介サービスを提供しております。企業様の多様なニーズに合わせて、最適な人材をご提案いたします。経験豊富なコンサルタントが、採用から定着までしっかりサポートいたします。
                  </p>
                </div>
              </div>
            </div>

            {/* Second Service */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
                    alt="ホテル清掃サービス"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4">
                    <div className="text-ge-red mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-ge-blue">
                      ホテル清掃サービス
                    </h3>
                  </div>
                  <p className="text-ge-dark">
                    お客様に快適な空間をご提供するため、丁寧かつ迅速な清掃を心がけております。経験豊富なスタッフが、安心・安全な環境づくりをサポートいたします。清潔で心地よいホテルライフをお届けします。
                  </p>
                </div>
              </div>
            </div>

            {/* Third Service */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&auto=format&fit=crop"
                    alt="留学支援業務"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4">
                    <div className="text-ge-red mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-ge-blue">
                      留学支援業務
                    </h3>
                  </div>
                  <p className="text-ge-dark">
                    GLOBAL
                    EYEでは、留学生・外国人学生の面接や日本語テストの実施だけでなく、日本語学校へのご紹介から入学までのフォローアップも行っております。学生一人ひとりの状況や目標に寄り添い、きめ細やかなサポートを提供することで、安心して日本での学びをスタートできるよう全力でお手伝いいたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
