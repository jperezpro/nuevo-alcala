export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-stone-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Nuevo Alcalá.
          </p>
        </div>
      </div>
    </footer>
  )
}
