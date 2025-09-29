import { NavLink } from "react-router-dom"
import { useTheme } from "../theme/hooks"
import { useState, useEffect } from "react"

const baseLinkClasses = "block px-6 py-3 text-base font-medium transition-all duration-200"
const activeLinkClasses = "text-white bg-gradient-primary shadow-lg shadow-accent/25 rounded-xl"
const inactiveLinkClasses = "text-primary hover:text-accent hover:bg-accent/10 rounded-xl"

const linkClasses = ({ isActive }) =>
  `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`

// Desktop link classes (smaller, horizontal)
const desktopLinkClasses = "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
const desktopActiveLinkClasses = "text-white bg-gradient-primary shadow-lg shadow-accent/25"
const desktopInactiveLinkClasses = "text-primary hover:text-accent hover:bg-accent/5 hover:scale-105"

const desktopLink = ({ isActive }) =>
  `${desktopLinkClasses} ${isActive ? desktopActiveLinkClasses : desktopInactiveLinkClasses}`

export default function Navbar() {
  const { randomize } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    // Handle scroll for navbar background opacity
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent scroll when menu open
    } else {
      document.body.style.overflow = 'unset'
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  return (
    <header className={`border-b border-secondary-30 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-page/95 backdrop-blur-xl shadow-lg shadow-accent/5' : 'bg-page/80 backdrop-blur-lg'
    }`}>
      <nav className="container-default relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-xl font-bold tracking-wide text-gradient hover:scale-105 transition-transform duration-200 z-50 relative"
            onClick={closeMenu}
          >
            <span className="hidden sm:inline">Connor McGaughey</span>
            <span className="sm:hidden">CM</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/projects" className={desktopLink}>
              Projects
            </NavLink>
            <NavLink to="/about" className={desktopLink}>
              About
            </NavLink>
            <NavLink to="/contact" className={desktopLink}>
              Contact
            </NavLink>
            
            {/* Theme Randomizer */}
            <button
              onClick={randomize}
              className="ml-4 px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-primary hover:shadow-lg hover:shadow-accent/30 transform hover:scale-105 active:scale-95 transition-all duration-200"
              title="Randomize theme colors"
            >
              🎨 Theme
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-2 rounded-xl hover:bg-accent/10 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 relative flex flex-col justify-center">
              {/* Hamburger Lines with Animation */}
              <span className={`block h-0.5 w-6 bg-primary transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`} />
              <span className={`block h-0.5 w-6 bg-primary transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`block h-0.5 w-6 bg-primary transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-2'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} />

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 right-0 bg-page border-b border-secondary-30 shadow-xl transform transition-all duration-300 ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}>
          <div className="container-default py-6 space-y-2">
            {/* Mobile Navigation Links */}
            <NavLink 
              to="/projects" 
              className={linkClasses}
              onClick={closeMenu}
            >
              <span className="flex items-center gap-3">
                🚀 Projects
              </span>
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={linkClasses}
              onClick={closeMenu}
            >
              <span className="flex items-center gap-3">
                👋 About
              </span>
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={linkClasses}
              onClick={closeMenu}
            >
              <span className="flex items-center gap-3">
                📧 Contact
              </span>
            </NavLink>

            {/* Mobile Theme Button */}
            <div className="pt-4 border-t border-secondary-30 mt-4">
              <button
                onClick={() => {
                  randomize()
                  closeMenu()
                }}
                className="w-full px-6 py-3 text-left rounded-xl text-base font-medium text-white bg-gradient-primary hover:shadow-lg hover:shadow-accent/30 transition-all duration-200"
              >
                <span className="flex items-center gap-3">
                  🎨 Randomize Theme
                </span>
              </button>
            </div>

            {/* Mobile Quick Actions */}
            <div className="pt-4 border-t border-secondary-30">
              <p className="text-xs text-secondary mb-3 px-6">Quick Actions</p>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="mailto:gaughey2000@protonmail.com"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-primary border border-secondary-30 rounded-xl hover:border-accent hover:bg-accent/5 transition-all duration-200"
                >
                  📧 Email
                </a>
                <a 
                  href="https://github.com/connormcgaughey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-primary border border-secondary-30 rounded-xl hover:border-accent hover:bg-accent/5 transition-all duration-200"
                >
                  🔗 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}