import { ReactNode } from 'react'

export const handleIcons = (
  index: number,
  outlined: boolean,
  fillIcon: ReactNode,
  outlinedIcon: ReactNode,
  icon?: ReactNode[],
) => {
  if (icon && icon[index] !== undefined) return icon[index]

  if (!outlined) return fillIcon
  return outlinedIcon
}
