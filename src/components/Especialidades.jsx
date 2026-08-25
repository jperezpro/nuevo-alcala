import { motion } from 'framer-motion'
import { especialidades, cartaUrl } from '../data/especialidades'

export default function Especialidades() {
  return (
    <motion.section
      id="menu"
      className="bg-white py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6">
            Un Vistazo a Nuestras Especialidades
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada plato cuenta una historia de tradición y sabor. Haz clic en cualquiera de
            nuestras especialidades para descubrir la carta completa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {especialidades.map((item, i) => (
            <motion.a
              key={item.id}
              href={cartaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/5] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:from-black/80 transition-all duration-500" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight tracking-wide uppercase">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="text-center text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Haz clic en cualquier especialidad para ver nuestra carta completa
        </motion.p>
      </div>
    </motion.section>
  )
}
