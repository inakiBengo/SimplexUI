import IconButton from './src/IconButton'
import { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Icon Button',
  argTypes: {
    isDisabled: { control: 'boolean' },
    dark: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    as: { control: 'select', options: ['button', 'a', 'span'] },
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
  },
}
export default config

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    children: (
      <svg fill='currentColor' height='100%' width='100%' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' enable-background='new 0 0 512 512'>
        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
        <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          {' '}
          <g>
            {' '}
            <g>
              {' '}
              <path d='m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z'></path>
              {' '}
            </g>
            {' '}
          </g>
          {' '}
        </g>
      </svg>
    ),
  },
}
