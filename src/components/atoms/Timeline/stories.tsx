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
    titleSize: undefined,
    titleWeight: undefined,
    titleColor: ['#FFFF00'],
    titleBaseColor: undefined,

    alternateContent: ['Alternate Content', 'Alternate Content 2'],
    alternateContentSize: undefined,
    alternateContentWeight: undefined,
    alternateContentColor: ['#964B00'],
    alternateContentBaseColor: undefined,

    description: ['Description', 'Description 2'],
    descriptionSize: undefined,
    descriptionWeight: undefined,
    descriptionColor: ['#FFA500'],
    descriptionBaseColor: undefined,

    textAlign: undefined,

    dotColor: ['#fff', '#000', '#800080'],
    icon: [
      <FaHamburger key="burger" />,
      <MdComputer key="computer" />,
      <FaBed key="bed" />,
    ],
    outlined: false,
    dotBaseColor: undefined,
    iconBackground: ['#65737e', '#ff0000'],

    pathColor: ['#00FF00'],
    pathBaseColor: undefined,
  },

  argTypes: {
    children: {
      description: 'Main title of each item.<br/><br/>**Type:*`string[]`***',
    },
    dotColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls de individual color of each dot.<br/><br/>**Type *`string[] || undefined`***<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)*<br/><br/>The colors selected will overwrite the base color for as many values as you add**',
    },
    textAlign: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls the side that **`children`** will appear.<br/><br/>**Type *`string || undefined`***<br/><br/>**Options:**',
    },
    icon: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls the icon for each item.<br/><br/>**Type *`ReactNode[] || undefined`***',
    },
    outlined: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls wether the icon is outlined or not.<br/><br/>**Type *`boolean[] || undefined`***<br/><br/>**Options:**<br/>***`true || false`***<br/><br/>**OBS:<br/>Option only works with the default icons**',
    },
    dotBaseColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls the base color of the icons.<br/><br/>**Type *`string || undefined`<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)*<br/><br/>The colors selected will overwrite the base color for as many values as you add**',
    },
    alternateContent: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Extra info for the items.<br/>Shows up on the opposite side of the main title.<br/><br/>**Type *`string[] || undefined`***',
    },
    iconBackground: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls the background of each icon.<br/><br/>**Type *`string[] || undefined`<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)*<br/><br/>The colors selected will overwrite the base color for as many values as you add**',
    },
    description: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Adds description for each item.<br/>Shows up under the main title.<br/><br/>**Type *`string[] || undefined`***',
    },
    titleSize: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Changes the font size of the main title.<br/><br/>**Type *`number || string || undefined`***<br/><br/>**OBS:<br/>If your input is of type `number`, it will always be in *px*<br/>If your input is of type `string`, you have to explicitly state the unit**',
    },
    alternateContentSize: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Changes the font size of the alternate content.<br/><br/>**Type *`number || string || undefined`***<br/><br/>**OBS:<br/>If your input is of type `number`, it will always be in *px*<br/>If your input is of type `string`, you have to explicitly state the unit**',
    },
    descriptionSize: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Changes the font size of the description.<br/><br/>**Type *`number || string || undefined`***<br/><br/>**OBS:<br/>If your input is of type `number`, it will always be in *px*<br/>If your input is of type `string`, you have to explicitly state the unit**',
    },
    titleColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Changes the color of each title.<br/><br/>**Type *`string[] || undefined`***<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)*<br/><br/>The colors selected will overwrite the base color for as many values as you add**',
    },
    alternateContentColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Changes the color of each alternate content.<br/><br/>**Type *`string[] || undefined`***<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)*<br/><br/>The colors selected will overwrite the base color for as many values as you add**',
    },
    descriptionColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Changes the color of each description.<br/><br/>**Type *`string[] || undefined`***<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)*<br/><br/>The colors selected will overwrite the base color for as many values as you add**',
    },
    titleWeight: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Changes the font weight of the title.<br/><br/>**Type *`number || undefined`***',
    },
    alternateContentWeight: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Changes the font weight of the alternate content.<br/><br/>**Type *`number || undefined`***',
    },
    descriptionWeight: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Changes the font weight of the description.<br/><br/>**Type *`number || undefined`***',
    },
    pathColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls the color of each individual path.<br/><br/>**Type *`string[] || undefined`***<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)*<br/><br/>The colors selected will overwrite the base color for as many values as you add**',
    },
    pathBaseColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls the base color of the paths.<br/><br/>**Type *`string || undefined`***<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)***',
    },
    titleBaseColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls the base color of all titles.<br/><br/>**Type *`string || undefined`***<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)***',
    },
    alternateContentBaseColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls the base color of all alternate contents.<br/><br/>**Type *`string || undefined`***<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)*<br/><br/>The colors selected will overwrite the base color for as many values as you add**',
    },
    descriptionBaseColor: {
      description:
        '***<em style="color: #CC5500">OPTIONAL PROPERTY</em>***<br/>Controls the base color of all descriptions.<br/><br/>**Type *`string || undefined`***<br/><br/>**OBS:<br/>Color values *must* be in HEX code<br/>*(ex: #65737E)*<br/><br/>The colors selected will overwrite the base color for as many values as you add**',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<TimelineProps>

export const Default: Story = {}
