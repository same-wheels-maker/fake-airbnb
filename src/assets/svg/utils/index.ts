export const styleStrToObject = (styleStr: string): any => {
  const obj = {}
  const s = styleStr
    ?.toLowerCase?.()
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase()
    })
    .replace(//, ')
}
