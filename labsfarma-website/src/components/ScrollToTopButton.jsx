import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show button after scrolling 300px
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <Button 
          onClick={scrollToTop} 
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg"
          size="icon"
        >
          <ArrowUp size={24} />
        </Button>
      )}
    </div>
  )
}

export default ScrollToTopButton

