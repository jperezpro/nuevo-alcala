import { motion } from 'framer-motion'

export default function Historia() {
  return (
    <section
      id="historia"
      className="min-h-screen bg-stone-50 flex items-center py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                className="w-full h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                alt="Fachada exterior del bar y pizzería Nuevo Alcalá con su característico letrero iluminado"
                src="images/historia-fachada.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <motion.div
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium text-black">Tradición renovada</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 space-y-8 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-8">
                Nuestra Historia, Tu Lugar en La Aguada
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Nuevo Alcalá nace en el corazón del barrio La Aguada, un bar con mucha historia
                que se renueva para seguir siendo tu esquina preferida. Respetamos el legado que
                nos convirtió en un clásico por nuestras pizzas y fainá, y te invitamos a
                disfrutarlo en un ambiente moderno, cómodo y familiar.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                Somos la tradición y el futuro del buen comer.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-black to-stone-600 rounded-full" />
              <span className="text-sm font-medium text-stone-600 uppercase tracking-wider">
                Desde 1950
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
