import Input from '../src/Input'
import { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
}
export default config

export const Default: StoryObj<typeof Input> = {
  args: {
    helperText: 'No debe tener caracteres especiales',
    labelText: 'Username pls',
    variant: 'light',
  },
}
