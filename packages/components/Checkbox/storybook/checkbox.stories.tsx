import { Checkbox } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    children: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    dark: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'warning', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    isIndeterminate: {
      control: 'boolean',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}
export default config

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    children: 'Default Tag',
  },
}
