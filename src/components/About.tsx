
import { Building, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-ge-gray">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ge-blue mb-4">会社概要</h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col items-center">
              {/* Company Information */}
              <div className="w-full max-w-2xl mb-8">
                <h3 className="text-xl font-bold text-ge-blue mb-4 text-center">会社情報</h3>
                <div className="w-full">
                  <div className="border-b py-3 flex flex-row">
                    <div className="font-medium text-ge-dark min-w-[120px]">会社名</div>
                    <div>株式会社GLOBAL EYE（GLOBAL EYE CO.,Ltd)</div>
                  </div>
                  <div className="border-b py-3 flex flex-row">
                    <div className="font-medium text-ge-dark min-w-[120px]">会社設立</div>
                    <div>2025年2月6日</div>
                  </div>
                  <div className="border-b py-3 flex flex-row">
                    <div className="font-medium text-ge-dark min-w-[120px]">資本金</div>
                    <div>500万円</div>
                  </div>
                  <div className="border-b py-3 flex flex-row">
                    <div className="font-medium text-ge-dark min-w-[120px]">代表取締役</div>
                    <div>多満 在美奈</div>
                  </div>
{/*                   <div className="border-b py-3 flex flex-row">
                    <div className="font-medium text-ge-dark min-w-[120px]">事業内容</div>
                    <div>
                      <ul className="list-disc list-inside space-y-1">
                        <li>有料職業紹介事業</li>
                        <li>外国人留学生の受入先の紹介その他の支援業務</li>
                        <li>人材育成のための教育事業及びカウンセリング並びにそれらに関するコンサルティング業務</li>
                        <li>外国語の翻訳及び通訳並びに出版業</li>
                        <li>ビルメンテナンス業及び清掃業</li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="w-full max-w-2xl">
                <h3 className="text-xl font-bold text-ge-blue mb-4 text-center">お問い合わせ</h3>
                <div className="space-y-4 flex flex-col items-center">
                  <div className="flex items-start">
                    <Building className="h-5 w-5 text-ge-red mr-3 mt-1 flex-shrink-0" />
                    <p>335ｰ0003 埼玉県蕨市南町4ｰ39ｰ2コスモプレイス蕨 310</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
