export const handleAlternating = (index: number, textAlign: string) => {
  if (textAlign === 'alternating') {
    if (!(index % 2)) return 'justify-start'
    return 'justify-end'
  }
}

export const handleReversedAlternating = (index: number, textAlign: string) => {
  if (textAlign === 'reversed-alternating') {
    if (index % 2) return 'justify-start'
    return 'justify-end'
  }
}
