import gmpFactoryImage from '../assets/gmp_factory.jpg'
import rdLabImage from '../assets/rd_lab.jpg'
import warehouseImage from '../assets/warehouse.jpg'
import logisticsImage from '../assets/logistics.png'

import bpomLogo from '../assets/bpom_logo.png'
import halalLogo from '../assets/halal_logo.png'
import gmpLogo from '../assets/gmp_logo.png'
import iso9001Logo from '../assets/iso9001_logo.png'
import haccpLogo from '../assets/haccp_logo.jpg'
import cpotbLogo from '../assets/cpotb_logo.webp'

const Facilities = () => {
  const facilities = [
    {
      title: "Pabrik Berstandar GMP",
      description: "Fasilitas produksi modern dengan standar Good Manufacturing Practice untuk menjamin kualitas produk.",
      image: gmpFactoryImage
    },
    {
      title: "Laboratorium R&D",
      description: "Laboratorium lengkap untuk penelitian, pengembangan formula, dan quality control produk herbal.",
      image: rdLabImage
    },
    {
      title: "Gudang Penyimpanan",
      description: "Sistem penyimpanan terkontrol dengan suhu dan kelembaban optimal untuk menjaga kualitas bahan baku.",
      image: warehouseImage
    },
    {
      title: "Distribusi Logistik",
      description: "Jaringan distribusi yang luas untuk memastikan produk sampai ke tangan konsumen dengan aman.",
      image: logisticsImage
    }
  ]

  const certifications = [
    { name: "BPOM", desc: "Badan Pengawas Obat dan Makanan", logo: bpomLogo },
    { name: "HALAL", desc: "Majelis Ulama Indonesia", logo: halalLogo },
    { name: "GMP", desc: "Good Manufacturing Practice", logo: gmpLogo },
    { name: "ISO 9001", desc: "Sistem Manajemen Mutu", logo: iso9001Logo },
    { name: "HACCP", desc: "Hazard Analysis Critical Control Point", logo: haccpLogo },
    { name: "CPOTB", desc: "Cara Pembuatan Obat Tradisional yang Baik", logo: cpotbLogo }
  ]

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fasilitas <span className="text-green-600">Berstandar Tinggi</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Didukung fasilitas modern dan teknologi terkini untuk menghasilkan produk herbal berkualitas premium 
            yang memenuhi standar internasional.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Sertifikasi & Legalitas
            </h3>
            <p className="text-green-100 max-w-2xl mx-auto">
              Kami memiliki semua sertifikasi dan legalitas yang diperlukan untuk memastikan 
              produk Anda aman, berkualitas, dan dapat dipasarkan dengan percaya diri.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center flex flex-col items-center justify-center">
                <img src={cert.logo} alt={cert.name} className="h-16 w-auto mb-2" />
                <div className="text-lg font-bold text-white mb-1">{cert.name}</div>
                <div className="text-xs text-green-100">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10,000+", label: "m² Luas Pabrik", color: "text-green-600" },
            { number: "50+", label: "Tenaga Ahli", color: "text-teal-600" },
            { number: "24/7", label: "Quality Control", color: "text-blue-600" },
            { number: "99.9%", label: "Tingkat Kepuasan", color: "text-purple-600" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities

