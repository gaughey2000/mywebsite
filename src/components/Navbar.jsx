import { NavLink } from "react-router-dom"

const base = "px-3 py-2 rounded-md text-sm font-medium"
const link = ({ isActive }) =>
  isActive ? `${base} bg-gray-900 text-white` : `${base} text-gray-700 hover:bg-gray-200`

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <nav className="container-default flex items-center justify-between h-14">
        <NavLink to="/" className="font-semibold tracking-tight">My Website</NavLink>
        <div className="flex items-center gap-1">
          <NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}