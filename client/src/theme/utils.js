// HSL → HEX
export const hslToHex = (h, s, l) => {
  s /= 100; l /= 100
  const k = n => (n + h/30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = n => l - a * Math.max(-1, Math.min(k(n)-3, Math.min(9-k(n), 1)))
  const toHex = x => Math.round(255 * x).toString(16).padStart(2, "0")
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`
}

export const generatePalette = () => {
  const H = Math.floor(Math.random() * 360)
  const primary   = hslToHex(H, 55, 32)          
  const secondary = hslToHex((H + 20) % 360, 40, 45) 
  const accent    = hslToHex((H + 210) % 360, 85, 55) 
  const page      = hslToHex(H, 40, 96)         
  return { primary, secondary, accent, page }
}