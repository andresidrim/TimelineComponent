import { HTMLAttributes, ReactNode } from 'react'

export type TimelineProps = {
  children: string[]
  dotColor?: string[]
  textAlign?: 'left' | 'right' | 'alternating' | 'reversed-alternating'
  icon?: ReactNode[]
  outlined?: boolean
  dotBaseColor?: string
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
  titleWeight?: number
  alternateContentWeight?: number
  descriptionWeight?: number
  pathColor?: string[]
  pathBaseColor?: string
} & HTMLAttributes<HTMLDivElement>
