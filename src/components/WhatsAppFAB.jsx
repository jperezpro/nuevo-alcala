import { motion } from 'framer-motion'
import { whatsappUrl } from '../data/contacto'

const WhatsAppIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.35 3.48 16.84L2.24 21.76L7.32 20.55C8.76 21.33 10.37 21.8 12.04 21.8H12.05C17.5 21.8 21.95 17.35 21.95 11.9C21.95 6.45 17.5 2 12.04 2ZM16.57 15.31C16.31 15.83 15.32 16.33 14.87 16.38C14.49 16.42 13.81 16.23 13.22 16.01C11.89 15.52 10.75 14.72 9.8 13.64C8.86 12.58 8.23 11.31 8.06 10.93C7.89 10.55 7.29 8.94 7.55 8.42C7.8 7.9 8.13 7.78 8.36 7.78C8.58 7.78 8.79 7.78 8.96 7.78C9.13 7.78 9.34 7.82 9.55 8.25C9.77 8.68 10.29 9.92 10.38 10.08C10.47 10.25 10.52 10.41 10.43 10.58C10.34 10.74 10.29 10.82 10.12 11.01C9.95 11.2 9.82 11.32 9.69 11.47C9.57 11.62 9.44 11.76 9.59 12.01C9.74 12.26 10.24 13.01 10.97 13.67C11.88 14.49 12.71 14.78 13.04 14.91C13.37 15.04 13.61 15.02 13.78 14.85C13.98 14.65 14.22 14.32 14.45 14.04C14.71 13.73 14.97 13.67 15.26 13.76C15.55 13.85 16.43 14.32 16.64 14.52C16.86 14.72 16.98 14.91 17.03 15.04C17.07 15.17 16.82 14.78 16.57 15.31Z"
      fill="white"
    />
  </svg>
)

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-3xl shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
      whileHover={{ scale: 1.1, boxShadow: '0 10px 25px rgba(34, 197, 94, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 200 }}
    >
      <WhatsAppIcon />
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-3xl -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.a>
  )
}
