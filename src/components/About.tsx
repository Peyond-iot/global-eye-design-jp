
import { Building, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-ge-gray">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ge-blue mb-4">会社概要</h2>
          <p className="text-ge-dark text-lg">2025年に設立された株式会社GLOBAL EYEは、人材紹介から留学支援まで幅広いサービスを提供しています。</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-ge-blue mb-4">会社情報</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4 align-top font-medium text-ge-dark">会社名</td>
                      <td className="py-3 align-top">株式会社GLOBAL EYE（GLOBAL EYE CO.,Ltd)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4 align-top font-medium text-ge-dark">会社設立</td>
                      <td className="py-3 align-top">2025年2月6日</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4 align-top font-medium text-ge-dark">資本金</td>
                      <td className="py-3 align-top">500万円</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4 align-top font-medium text-ge-dark">代表取締役</td>
                      <td className="py-3 align-top">多満 在美奈</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4 align-top font-medium text-ge-dark">事業内容</td>
                      <td className="py-3 align-top">
                        <ul className="list-disc list-inside space-y-1">
                          <li>有料職業紹介事業</li>
                          <li>外国人留学生の受入先の紹介その他の支援業務</li>
                          <li>在留ビザに関数業務</li>
                          <li>人材育成のための教育事業及びカウンセリング並びにそれらに関するコンサルティング業務</li>
                          <li>外国語の翻訳及び通訳並びに出版業</li>
                          <li>ビルメンテナンス業及び清掃業</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-ge-blue mb-4">お問い合わせ</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building className="h-5 w-5 text-ge-red mr-3 mt-1 flex-shrink-0" />
                    <p>335ｰ0003 埼玉県蕨市南町4ｰ39ｰ2コスモプレイス蕨 3F</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-ge-red mr-3 flex-shrink-0" />
                    <p>048-278-4550</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-ge-red mr-3 flex-shrink-0" />
                    <p>globaleye025@gmail.com</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-ge-gray p-4 rounded-md">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.6847656493196!2d139.6833596!3d35.8153992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c0ee8707f8c7%3A0xa0fe4ea1b4a7a838!2s4-39-2%20Minaminacho%2C%20Warabi%2C%20Saitama%20335-0003%2C%20Japan!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                      className="w-full h-60 rounded-md"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="GLOBAL EYE Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
