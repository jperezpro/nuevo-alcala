import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import Historia from './components/Historia'
import Especialidades from './components/Especialidades'
import Barrio from './components/Barrio'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Nuevo Alcalá - Bar y Pizzería | Historia Renovada</title>
        <meta
          name="description"
          content="Nuevo Alcalá, bar y pizzería donde la historia se renueva. Disfruta de nuestra exquisita gastronomía en un ambiente elegante que fusiona lo clásico con lo moderno."
        />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
        <Header />
        <main className="overflow-x-hidden">
          <Hero />
          <Historia />
          <Especialidades />
          <Barrio />
          <Contacto />
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </>
  )
}
