import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import labsfarmaLogo from '../assets/LOGOLABSFARMATP1.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={labsfarmaLogo} 
              alt="Labsfarma.id" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Beranda</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Tentang Kami</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Layanan</a>
            <a href="#facilities" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Fasilitas</a>
            <a href="#faq" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Kontak</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="https://wa.me/6282146379907" target="_blank" rel="noopener noreferrer">Konsultasi Gratis</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Tentang Kami</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Layanan</a>
              <a href="#facilities" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Fasilitas</a>
              <a href="#faq" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors" onClick={closeMenu}>Kontak</a>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full" asChild>
                <a href="https://wa.me/6282146379907" target="_blank" rel="noopener noreferrer">Konsultasi Gratis</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

