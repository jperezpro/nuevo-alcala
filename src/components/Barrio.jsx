import { motion } from 'framer-motion'
import { barrio } from '../data/especialidades'

// El original mostraba 3 fotos, pero una era stock de Unsplash. Quedaron las 2
// auténticas del barrio; el grid es de 2 columnas para no dejar un hueco.
export default function Barrio() {
  return (
    <motion.section
      id="barrio"
      className="bg-[#4A2A2A] text-white py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-full">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          El Corazón de La Aguada
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-4xl mx-auto">
          {barrio.map((item, i) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/5]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/80 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight tracking-wide uppercase">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-[#F5F0E1] px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Ubicados en un punto icónico de la ciudad, somos el punto de encuentro del barrio. Te
          esperamos frente a la Plaza 1 de Mayo.
        </motion.p>
      </div>
    </motion.section>
  )
}
