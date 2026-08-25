import { motion } from 'framer-motion'

const scrollTo = (sel) => document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })

const btnBase =
  'font-semibold px-8 py-4 text-lg rounded-md inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Entrada del bar y pizzería Nuevo Alcalá con su logo en la puerta de vidrio"
          src="images/hero-entrada.webp"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            La esquina de siempre, la mejor pizza de Montevideo.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            Descubre el sabor que hizo historia en La Aguada, en nuestro espacio totalmente
            renovado para ti y tu familia.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          >
            <button
              onClick={() => scrollTo('#menu')}
              className={`${btnBase} bg-white text-black hover:bg-stone-100 focus-visible:ring-white`}
            >
              VER EL MENÚ
            </button>
            <button
              onClick={() => scrollTo('#contacto')}
              className={`${btnBase} border-2 border-white text-white bg-transparent hover:bg-white hover:text-black focus-visible:ring-white`}
            >
              CÓMO LLEGAR
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
