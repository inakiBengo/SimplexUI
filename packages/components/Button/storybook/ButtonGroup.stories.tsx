import { Button, ButtonGroup } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof ButtonGroup> = {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
}
export default config

type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    loading: false,
    vertical: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'light'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'error', 'success', 'gray'],
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
  render: args => (
    <ButtonGroup {...args}>
      <Button>HELLO</Button>
      <Button>WORLD</Button>
      <Button>: )</Button>
    </ButtonGroup>
  ),
}
