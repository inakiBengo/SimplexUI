import { Button } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
}
export default config

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    href: '',
    disabled: false,
    fullWidth: false,
    loading: false,
    icon: () => (
      <svg className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt' focusable='false' aria-hidden='true' viewBox='0 0 24 24' data-testid='AddShoppingCartIcon'><path d='M11 9h2V6h3V4h-3V1h-2v3H8v2h3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25'></path></svg>
    ),
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
    <>
      <Button {...args} data-accent-color='error'>
        HELLO WORLD
      </Button>
    </>
  ),
}
