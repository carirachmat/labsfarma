import { Button } from '@/components/ui/button'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send
} from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-green-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Siap memulai perjalanan bisnis herbal Anda? Tim ahli kami siap membantu mewujudkan 
            brand impian Anda. Konsultasi gratis untuk langkah pertama yang tepat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telepon</div>
                    <div className="text-gray-600">+62 21 1234 5678</div>
                    <div className="text-gray-600">+62 812 3456 7890</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@labsfarma.id</div>
                    <div className="text-gray-600">konsultasi@labsfarma.id</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Alamat</div>
                    <div className="text-gray-600">
                      Jl. Industri Herbal No. 123<br />
                      Kawasan Industri Terpadu<br />
                      Jakarta Timur 13920
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Jam Operasional</div>
                    <div className="text-gray-600">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 08:00 - 12:00<br />
                      Minggu: Tutup
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Kontak Cepat</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-green-600 hover:bg-green-700 text-white flex-1" asChild>
                  <a href="https://wa.me/6282146379907" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={18} />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 flex-1" asChild>
                  <a href="https://wa.me/6282146379907" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2" size={18} />
                    Telepon
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Konsultasi Gratis
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Masukkan alamat email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Produk Herbal
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Pilih jenis produk</option>
                  <option>Suplemen Herbal</option>
                  <option>Jamu Tradisional</option>
                  <option>Ekstrak Herbal</option>
                  <option>Teh Herbal</option>
                  <option>Minyak Herbal</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ceritakan tentang ide produk herbal Anda..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                <Send className="mr-2" size={18} />
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Mulai Perjalanan Bisnis Herbal Anda Hari Ini
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Jangan tunda lagi! Konsultasikan ide produk herbal Anda dengan tim ahli kami 
            dan dapatkan solusi terbaik untuk mewujudkan brand impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <a href="https://wa.me/6282146379907" target="_blank" rel="noopener noreferrer">
                Konsultasi Sekarang
              </a>
            </Button>
            <Button size="lg" variant="default" className="bg-white text-green-600 hover:bg-gray-100">
              Download Katalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

