import { NavLink } from "react-router-dom"
import { useTheme } from "../theme/hooks"

const baseLinkClasses = "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
const activeLinkClasses = "text-white bg-gradient-primary shadow-lg shadow-accent/25"
const inactiveLinkClasses = "text-primary hover:text-accent hover:bg-accent/5 hover:scale-105"

const linkClasses = ({ isActive }) =>
  `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`

export default function Navbar() {
  const { randomize } = useTheme()
  
  return (
    <header className="border-b border-secondary-30 sticky top-0 z-50 bg-page/80 backdrop-blur-lg">
      <nav className="container-default flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-xl font-bold tracking-wide text-gradient hover:scale-105 transition-transform duration-200"
        >
          Connor McGaughey
        </NavLink>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
          
          {/* Theme Randomizer */}
          <button
            onClick={randomize}
            className="ml-4 px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-primary hover:shadow-lg hover:shadow-accent/30 transform hover:scale-105 active:scale-95 transition-all duration-200"
          >
            🎨 New Theme
          </button>
        </div>
      </nav>
    </header>
  )
}