import { ChevronDown } from 'lucide-react'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'

const FAQ = () => {
  const faqItems = [
    {
      question: "Apa itu jasa maklon herbal Labsfarma.id?",
      answer: "Labsfarma.id menyediakan jasa maklon (OEM/ODM) untuk produk herbal, mulai dari pengembangan konsep, formulasi, produksi, hingga pengurusan legalitas (BPOM, Halal) dan desain kemasan. Kami membantu Anda menciptakan brand herbal Anda sendiri tanpa perlu membangun pabrik."
    },
    {
      question: "Bagaimana proses maklon di Labsfarma.id?",
      answer: "Proses maklon kami meliputi beberapa tahapan: konsultasi konsep produk, pengembangan formulasi dan sampel, pengurusan legalitas (BPOM, Halal, HKI), produksi massal dengan standar GMP, dan desain kemasan. Kami akan mendampingi Anda di setiap langkahnya."
    },
    {
      question: "Apakah Labsfarma.id melayani maklon dengan MOQ rendah?",
      answer: "Ya, kami memahami kebutuhan startup dan UMKM. Labsfarma.id menawarkan Minimum Order Quantity (MOQ) yang fleksibel dan kompetitif, memungkinkan Anda untuk memulai bisnis herbal dengan investasi yang terjangkau."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk proses maklon?",
      answer: "Waktu yang dibutuhkan bervariasi tergantung kompleksitas produk, ketersediaan bahan baku, dan proses perizinan. Namun, kami berkomitmen untuk menyelesaikan setiap proyek seefisien mungkin dengan estimasi waktu yang transparan sejak awal."
    },
    {
      question: "Apakah Labsfarma.id membantu pengurusan legalitas produk?",
      answer: "Tentu saja! Kami menyediakan layanan lengkap pengurusan legalitas, termasuk pendaftaran BPOM, sertifikasi Halal MUI, dan Hak Kekayaan Intelektual (HKI) untuk brand Anda. Kami memastikan produk Anda legal dan aman untuk dipasarkan."
    },
    {
      question: "Jenis produk herbal apa saja yang bisa dimaklon di Labsfarma.id?",
      answer: "Kami melayani berbagai jenis produk herbal, seperti suplemen herbal, jamu tradisional, ekstrak herbal, teh herbal, minyak herbal, dan banyak lagi. Silakan konsultasikan ide produk Anda dengan tim kami untuk kemungkinan pengembangannya."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering <span className="text-green-600">Diajukan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar jasa maklon herbal di Labsfarma.id.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-green-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ

