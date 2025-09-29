export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-secondary-30 bg-page/80 backdrop-blur-sm mt-16">
      <div className="container-default py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-gradient mb-2">
              Connor McGaughey
            </div>
            <p className="text-sm text-secondary">
              Full Stack Software Developer
            </p>
          </div>
          
          {/* Center: Quick Links */}
          <div className="flex gap-8 text-sm">
            <a 
              href="/about" 
              className="text-secondary hover:text-accent hover:scale-105 transition-all duration-200"
            >
              About
            </a>
            <a 
              href="/projects" 
              className="text-secondary hover:text-accent hover:scale-105 transition-all duration-200"
            >
              Projects
            </a>
            <a 
              href="/contact" 
              className="text-secondary hover:text-accent hover:scale-105 transition-all duration-200"
            >
              Contact
            </a>
          </div>
          
          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-secondary">
              © {currentYear} Connor McGaughey
            </p>
            <p className="text-xs text-secondary mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}