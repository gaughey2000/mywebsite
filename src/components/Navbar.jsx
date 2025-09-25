import { NavLink } from "react-router-dom"
import { useTheme } from "../theme/ThemeProvider"

const base = "px-3 py-2 rounded-md text-sm font-medium"
const link = ({ isActive }) =>
  isActive ? `${base} text-white bg-primary` : `${base} text-primary hover:bg-muted`

export default function Navbar() {
  const { randomize } = useTheme()
  return (
    <header className="border-b sticky top-0 z-50 bg-page border-secondary-30">
      <nav className="container-default flex items-center justify-between h-14">
        <NavLink to="/" className="font-semibold tracking-[0.14em] text-primary">My Website</NavLink>
        <div className="flex items-center gap-2">
          <NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
          <button
            onClick={randomize}
            className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-accent hover:opacity-90 active:opacity-80"
          >
            Change theme
          </button>
        </div>
      </nav>
    </header>
  )
}