import { motion } from 'framer-motion'
import { Clock, MapPin, Phone } from 'lucide-react'
import { direccion, horarios, delivery, mapaEmbedUrl } from '../data/contacto'

export default function Contacto() {
  return (
    <motion.section
      id="contacto"
      className="bg-stone-50 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Visítanos o Contáctanos
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-lg">Dirección</span>
                  <p className="text-gray-600">{direccion}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-lg">Horarios</span>
                  <div className="text-gray-600 space-y-1">
                    {horarios.map((linea) => (
                      <p key={linea}>{linea}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold text-lg">Delivery</span>
                  <p className="text-gray-600">{delivery}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-lg shadow-2xl h-[400px] lg:h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src={mapaEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Nuevo Alcalá"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
