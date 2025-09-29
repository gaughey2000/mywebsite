import { useEffect, useMemo, useState } from "react"
import { generatePalette } from "./utils"
import { ThemeContext } from "./context"

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

  useEffect(() => { 
    setCSSVars(theme)
    localStorage.setItem("cm_theme", JSON.stringify(theme)) 
  }, [theme])

  const value = useMemo(() => ({ theme, randomize: () => setTheme(generatePalette()) }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}