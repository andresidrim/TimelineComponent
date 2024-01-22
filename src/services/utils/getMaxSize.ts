export const getMaxSize = (
  children: string[],
  alternateContent?: string[],
  description?: string[],
) => {
  const maxChildrenLength = Math.max(
    ...children.map((item) => (typeof item === 'string' ? item.length : 0)),
  )

  if (!alternateContent || !Array.isArray(alternateContent))
    return maxChildrenLength

  const maxAlternateLength = Math.max(
    ...alternateContent.map((item) =>
      typeof item === 'string' ? item.length : 0,
    ),
  )

  if (!description || !Array.isArray(description)) {
    const max = Math.max(maxChildrenLength, maxAlternateLength)
    return max
  }

  const maxDescriptionLength = Math.max(
    ...description.map((item) => (typeof item === 'string' ? item.length : 0)),
  )

  const max = Math.max(
    maxChildrenLength,
    maxAlternateLength,
    maxDescriptionLength,
  )
  return max
}
