import { Spinn } from '../index'
import type { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof Spinn> = {
  component: Spinn,
  title: 'Spinner',
}
export default config

type Story = StoryObj<typeof Spinn>

export const Default: Story = {
  args: {
    children: 'Hola mundo',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['', 'default', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
    },
  },
}
