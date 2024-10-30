import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../index'

const config: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    isDisabled: { control: 'boolean' },
    dark: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    as: { control: 'select', options: ['button', 'a', 'span'] },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'light'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
  },
}
export default config

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'hello world',
    isLoading: '',
  },
}
