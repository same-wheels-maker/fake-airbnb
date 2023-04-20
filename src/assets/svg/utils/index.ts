export const styleStrToObject = (styleStr: string) => {
  const obj = {}
  const s = styleStr
    ?.toLowerCase?.()
    .replace(/-(.)/g, function (_, g) {
      return g.toUpperCase()
    })
    .replace(/;\s?$/, '')
}
