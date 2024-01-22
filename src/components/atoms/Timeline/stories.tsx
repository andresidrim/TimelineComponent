import { Meta, StoryObj } from '@storybook/react'
import Timeline from '.'
import { TimelineProps } from './types'
import { FaHamburger, FaBed } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'

const meta: Meta<TimelineProps> = {
  title: 'Components/Atoms/Timeline',
  component: Timeline,
  args: {
    children: ['Eat', 'Code', 'Sleep', 'Repeat'],
    dotColor: ['#fff', '#000', '#800080'],
    textAlign: undefined,
    icon: [
      <FaHamburger key="burger" />,
      <MdComputer key="computer" />,
      <FaBed key="bed" />,
    ],
    outlined: false,
    baseColor: undefined,
    alternateContent: ['Alternate Content', 'Alternate Content 2'],
    iconBackground: ['#65737e', '#ff0000'],
    description: ['Description', 'Description 2'],
    titleSize: undefined,
    alternateContentSize: undefined,
    descriptionSize: undefined,
    titleColor: ['#FFFF00'],
    alternateContentColor: ['#964B00'],
    descriptionColor: ['#FFA500'],
    titleWeight: undefined,
    alternateContentWeight: undefined,
    descriptionWeight: undefined,
    pathColor: ['#00FF00'],
    pathBaseColor: undefined,
    titleBaseColor: undefined,
    alternateContentBaseColor: undefined,
    descriptionBaseColor: undefined,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<TimelineProps>

export const Default: Story = {}
