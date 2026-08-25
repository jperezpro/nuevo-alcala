import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/nav'

const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del body mientras el drawer móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  // Marca como activa la sección que ocupa el centro del viewport.
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach((section) => section && observer.observe(section))
    return () => sections.forEach((section) => section && observer.unobserve(section))
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    scrollTo(href)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${scrolled ? 'shadow-lg' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 max-w-full">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNav('#inicio')}
            >
              <img src="images/logo.png" alt="Nuevo Alcalá Logo" className="h-12 w-auto" />
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNav(item.href)}
                  className="relative text-white hover:text-stone-300 transition-colors duration-200 font-medium"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400"
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            <motion.button
              className="md:hidden p-2 text-white z-[100] relative"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-2/5 min-w-[220px] max-w-[280px] bg-[#4A2A2A] z-[1000] shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="p-8 pt-28 h-full flex flex-col">
                <nav className="flex flex-col">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNav(item.href)}
                      className={`text-left text-xl py-4 font-medium transition-colors duration-300 border-b border-white/10 last:border-b-0 ${
                        activeSection === item.href.substring(1)
                          ? 'text-amber-400'
                          : 'text-white hover:text-amber-300'
                      }`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
