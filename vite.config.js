import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' mantiene todas las rutas de assets relativas, de modo que el sitio
// funciona igual en nuevoalcala.jperez.pro, en un dominio propio del cliente
// o en cualquier *.pages.dev, sin tocar código.
export default defineConfig({
  plugins: [react()],
  base: './',
})
