import { Button } from '@/components/ui/button'
import {
  Lightbulb,
  FlaskConical,
  FileCheck,
  Factory,
  Palette,
  ShieldCheck,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Konsultasi & Pengembangan Konsep",
      description: "Tim ahli kami membantu merumuskan konsep produk herbal yang inovatif dan sesuai target pasar Anda.",
      features: ["Riset pasar", "Analisis kompetitor", "Positioning produk", "Strategi branding"]
    },
    {
      icon: FlaskConical,
      title: "Formulasi & Sampel Produk",
      description: "Pengembangan formulasi unik dengan dukungan laboratorium modern dan tim R&D berpengalaman.",
      features: ["Formulasi custom", "Pengujian khasiat", "Sampel produk", "Optimasi formula"]
    },
    {
      icon: FileCheck,
      title: "Pengurusan Legalitas",
      description: "Kami mengurus semua perizinan yang diperlukan untuk memastikan produk Anda legal dan aman.",
      features: ["Pendaftaran BPOM", "Sertifikasi Halal", "Hak Kekayaan Intelektual", "Dokumen legal"]
    },
    {
      icon: Factory,
      title: "Produksi Massal",
      description: "Fasilitas produksi berstandar GMP dengan teknologi terkini untuk hasil berkualitas tinggi.",
      features: ["Standar GMP", "Kapasitas fleksibel", "Quality control", "Timeline jelas"]
    },
    {
      icon: Palette,
      title: "Desain Kemasan & Branding",
      description: "Tim kreatif kami menciptakan desain kemasan menarik yang sesuai identitas brand Anda.",
      features: ["Desain kemasan", "Konsultasi branding", "Material berkualitas", "Print ready file"]
    },
    {
      icon: ShieldCheck,
      title: "Quality Control Ketat",
      description: "Setiap batch produk melalui pengujian ketat untuk memastikan kualitas dan keamanan.",
      features: ["Uji laboratorium", "Kontrol kualitas", "Sertifikat analisis", "Standar internasional"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-green-600">Komprehensif</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap dari konsep hingga produk siap edar.
            Kami adalah one-stop solution untuk semua kebutuhan maklon herbal Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-green-600" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50" asChild>
                <a href="https://wa.me/6282146379907" target="_blank" rel="noopener noreferrer">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Proses <span className="text-green-600">Maklon</span> Kami
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultasi", desc: "Diskusi kebutuhan dan konsep produk" },
              { step: "02", title: "Formulasi", desc: "Pengembangan formula dan sampel" },
              { step: "03", title: "Produksi", desc: "Produksi massal dengan quality control" },
              { step: "04", title: "Delivery", desc: "Pengiriman produk siap edar" }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full">
                    <div className="border-t-2 border-dashed border-green-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

