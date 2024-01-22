import { HTMLAttributes, ReactNode } from 'react'

export type TimelineProps = {
  children: string[]
  dotColor?: string[]
  textAlign?: 'left' | 'right' | 'alternating' | 'reversed-alternating'
  icon?: ReactNode[]
  outlined?: boolean
  baseColor?: string
  alternateContent?: string[]
  iconBackground?: string[]
  description?: string[]
  titleSize?: string | number
  alternateContentSize?: string | number
  descriptionSize?: string | number
  titleColor?: string[]
  titleBaseColor?: string
  alternateContentColor?: string[]
  alternateContentBaseColor?: string
  descriptionColor?: string[]
  descriptionBaseColor?: string
  titleWeight?: string
  alternateContentWeight?: string
  descriptionWeight?: string
  pathColor?: string[]
  pathBaseColor?: string
} & HTMLAttributes<HTMLDivElement>
