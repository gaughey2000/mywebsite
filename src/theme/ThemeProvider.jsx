import { createContext, useContext, useEffect, useMemo, useState } from "react"

const ThemeContext = createContext(null)
export const useTheme = () => useContext(ThemeContext)

// HSL → HEX
const hslToHex = (h, s, l) => {
  s /= 100; l /= 100
  const k = n => (n + h/30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = n => l - a * Math.max(-1, Math.min(k(n)-3, Math.min(9-k(n), 1)))
  const toHex = x => Math.round(255 * x).toString(16).padStart(2, "0")
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`
}

const generatePalette = () => {
  const H = Math.floor(Math.random() * 360)
  const primary   = hslToHex(H, 55, 32)          
  const secondary = hslToHex((H + 20) % 360, 40, 45) 
  const accent    = hslToHex((H + 210) % 360, 85, 55) 
  const page      = hslToHex(H, 40, 96)         
  return { primary, secondary, accent, page }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cm_theme")) || generatePalette() }
    catch { return generatePalette() }
  })

  const setCSSVars = t => {
    const r = document.documentElement
    r.style.setProperty("--primary", t.primary)
    r.style.setProperty("--secondary", t.secondary)
    r.style.setProperty("--accent", t.accent)
    r.style.setProperty("--page", t.page)
    r.style.setProperty("--muted", "#F3F4F6") // keep muted stable
  }

  useEffect(() => { setCSSVars(theme) }, [])
  useEffect(() => { setCSSVars(theme); localStorage.setItem("cm_theme", JSON.stringify(theme)) }, [theme])

  const value = useMemo(() => ({ theme, randomize: () => setTheme(generatePalette()) }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}