
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-ge-gray">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ge-blue mb-4">お問い合わせ</h2>
          <p className="text-ge-dark text-lg">お気軽にお問い合わせください</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-8">
            <h3 className="text-xl font-bold text-ge-blue mb-6">お問い合わせフォーム</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前 <span className="text-ge-red">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-ge-blue/20 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">会社名</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-ge-blue/20 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス <span className="text-ge-red">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-ge-blue/20 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-ge-blue/20 focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">件名 <span className="text-ge-red">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-ge-blue/20 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">メッセージ <span className="text-ge-red">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-ge-blue/20 focus:outline-none"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-ge-red hover:bg-red-700 text-white rounded-md transition-colors"
                >
                  送信する <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-8">
              <h3 className="text-xl font-bold text-ge-blue mb-6">連絡先情報</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-ge-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">電話番号</h4>
                    <p className="text-gray-700">048-278-4550</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-ge-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">メールアドレス</h4>
                    <p className="text-gray-700">globaleye025@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-ge-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">住所</h4>
                    <p className="text-gray-700">335ｰ0003 埼玉県蕨市南町4ｰ39ｰ20コスモプレイス蕨 310</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.862090790196!2d139.6862552!3d35.8308738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ea49d754b2c5%3A0xb0ce13347e5165f0!2z44CSMzM1LTAwMDMg5Z-8546J55yM6JmO5biC5Y2X55S677yU5LiB55uu77yT77yZ4oiS77yS!5e0!3m2!1sja!2sjp!4v1715503315503!5m2!1sja!2sjp"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="GLOBAL EYE Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
