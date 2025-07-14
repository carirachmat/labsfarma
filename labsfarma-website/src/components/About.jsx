import { Shield, Award, Users, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Legalitas Terjamin",
      description: "Kami mengurus semua perizinan BPOM, sertifikasi Halal, dan HKI untuk memastikan produk Anda legal dan aman."
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description: "Fasilitas berstandar GMP dengan quality control ketat untuk menghasilkan produk herbal berkualitas tinggi."
    },
    {
      icon: Users,
      title: "Tim Ahli Berpengalaman",
      description: "Didukung oleh tim profesional berpengalaman di bidang farmasi, herbal, dan produksi."
    },
    {
      icon: Zap,
      title: "Proses Efisien",
      description: "Dari konsep hingga produk jadi dengan timeline yang jelas dan komunikasi transparan."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="text-green-600">Labsfarma.id</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami adalah mitra strategis yang memahami kebutuhan bisnis herbal Anda. 
            Dengan pengalaman dan komitmen terhadap kualitas, kami siap membantu mewujudkan brand herbal impian Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <feature.icon className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Siap Memulai Bisnis Herbal Anda?
              </h3>
              <p className="text-green-100 mb-6">
                Konsultasikan ide produk herbal Anda dengan tim ahli kami. 
                Dapatkan solusi terbaik untuk mewujudkan brand impian Anda.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-flex flex-col space-y-2">
                <div className="text-3xl font-bold">Gratis</div>
                <div className="text-green-100">Konsultasi Awal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

