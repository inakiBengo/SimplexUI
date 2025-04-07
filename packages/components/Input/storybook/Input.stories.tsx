import { Input } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof Input> = {
  title: 'Inputs/TextField',
  component: Input,
}
export default config

export const Default: StoryObj<typeof Input> = {
  args: {
    helperText: 'Helper text',
    labelText: 'Label text',
    disabled: false,
    invalid: false,
    defaultValue: 'Default value',
    placeholder: 'Placeholder',
    startContent: '',
    endContent: '',
    prefix: '$',
    suffix: 'US',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'light'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
  },
  render: args => (
    <form>
      <Input {...args} size='sm' required />
      <Input {...args} size='md' />
      <Input {...args} size='lg' />
      <input type='submit' value='pepe' />
    </form>
  ),
}
