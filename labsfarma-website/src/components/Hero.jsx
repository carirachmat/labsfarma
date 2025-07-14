import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Wujudkan Brand Herbal 
              <span className="text-green-600"> Impian Anda</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Solusi maklon herbal terpercaya untuk kesuksesan bisnis Anda. 
              Dari konsep hingga produk siap edar dengan legalitas BPOM dan sertifikasi Halal.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">Legalitas BPOM & Halal Terjamin</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">Fasilitas Berstandar GMP</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-gray-700">MOQ Rendah & Harga Kompetitif</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://wa.me/6282146379907" target="_blank" rel="noopener noreferrer">
                  Mulai Konsultasi
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Lihat Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Produk Berhasil</div>
                </div>
                <div className="bg-teal-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-600">50+</div>
                  <div className="text-sm text-gray-600">Klien Puas</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="bg-purple-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Dukungan</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Terpercaya
            </div>
            <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Berkualitas
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

