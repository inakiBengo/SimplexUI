import { ButtonGroup, Button } from '../../index'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const config: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Button Group',
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'warning', 'success', 'error'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'flat', 'outline', 'light'],
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

type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: args => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
}
