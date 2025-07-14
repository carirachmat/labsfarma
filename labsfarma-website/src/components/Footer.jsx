import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Youtube
} from 'lucide-react'
import labsfarmaLogo from '../assets/LOGOLABSFARMATP1.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={labsfarmaLogo} 
                alt="Labsfarma.id" 
                className="h-10 w-auto mr-3 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Labsfarma.id adalah mitra terpercaya untuk jasa maklon herbal berkualitas tinggi. 
              Kami membantu mewujudkan brand herbal impian Anda dengan legalitas terjamin dan standar internasional.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400" />
                <span className="text-gray-300">info@labsfarma.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-green-400" />
                <span className="text-gray-300">Jakarta Timur, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Layanan</a></li>
              <li><a href="#facilities" className="text-gray-300 hover:text-green-400 transition-colors">Fasilitas</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Konsultasi Produk</span></li>
              <li><span className="text-gray-300">Formulasi Herbal</span></li>
              <li><span className="text-gray-300">Pengurusan BPOM</span></li>
              <li><span className="text-gray-300">Produksi Massal</span></li>
              <li><span className="text-gray-300">Desain Kemasan</span></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Labsfarma.id. Semua hak cipta dilindungi.
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

