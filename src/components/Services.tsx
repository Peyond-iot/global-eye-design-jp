
import { User, Home, Book } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "人材紹介サービス",
      icon: <User className="h-12 w-12 text-ge-red mb-4" />,
      description: "GLOBAL EYEでは、日本人および外国人の人材紹介サービスを提供しております。企業様の多様なニーズに合わせて、最適な人材をご提案いたします。経験豊富なコンサルタントが、採用から定着までしっかりサポートいたします。",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "ホテル清掃サービス",
      icon: <Home className="h-12 w-12 text-ge-red mb-4" />,
      description: "お客様に快適な空間をご提供するため、丁寧かつ迅速な清掃を心がけております。経験豊富なスタッフが、安心・安全な環境づくりをサポートいたします。清潔で心地よいホテルライフをお届けします。",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "留学支援業務",
      icon: <Book className="h-12 w-12 text-ge-red mb-4" />,
      description: "GLOBAL EYEでは、留学生・外国人学生の面接や日本語テストの実施だけでなく、日本語学校へのご紹介から入学までのフォローアップも行っております。学生一人ひとりの状況や目標に寄り添い、きめ細やかなサポートを提供することで、安心して日本での学びをスタートできるよう全力でお手伝いいたします。",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ge-blue mb-4">サービス</h2>
          <p className="text-ge-dark text-lg">お客様の多様なニーズに応える幅広いサービスを提供しております</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-bold text-ge-blue mb-3">{service.title}</h3>
                </div>
                <p className="text-ge-dark">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
