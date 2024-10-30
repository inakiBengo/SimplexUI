import { Button, Checkbox, CheckboxGroup } from '../../index'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { PressEvent } from 'react-aria'

const config: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: 'Checkbox group',
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
    isReadOnly: {
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

type Story = StoryObj<typeof CheckboxGroup>

export const Default: Story = {
  render: args => (
    <CheckboxGroup {...args}>
      <Checkbox>Value 1</Checkbox>
      <Checkbox>Value 2</Checkbox>
      <Checkbox>Value 3</Checkbox>
      <Checkbox>Value 4</Checkbox>
    </CheckboxGroup>
  ),
}

export const WhitLabel: Story = {
  args: {
    'label': 'Label example',
    'aria-label': 'checkbox',
    'dark': false,
    'size': 'md',
    'description': 'hola soy una descripcion',
    'validationBehavior': 'native',
  },
  render: (args) => {
    return (
      <CheckboxGroup {...args}>
        <Checkbox value='Element 1'>Element 1</Checkbox>
        <Checkbox value='Element 2'>Element 2</Checkbox>
        <Checkbox value='Element 3'>Element 3</Checkbox>
      </CheckboxGroup>
    )
  },
}

export const Control: Story = {
  args: {
    'label': 'Make your burger',
    'defaultValue': ['Tomatoes'],
    'isRequired': true,
    'errorMessage': 'Error message',
    'aria-label': 'Checkbox Controll',
  },
  render: (args) => {
    const [selected, setSelected] = React.useState(args.defaultValue)

    const validate = (e: string[]) => {
      if (e.length < 1) return 'You must choose at least 1 ingredient'
    }
    const validateLetter = () => {
      if (!selected?.includes('lettuce')) return 'lettuce is healthy'
    }

    return (
      <form>
        <CheckboxGroup
          {...args}
          validationBehavior='aria'
          value={selected}
          onChange={e => setSelected(e as string[])}
          validate={validate}
          description={selected?.join('/')}
        >
          <Checkbox value='lettuce' validate={validateLetter}>lettuce</Checkbox>
          <Checkbox value='Tomatoes'>Tomatoes</Checkbox>
          <Checkbox value='Meat'>Meat</Checkbox>
          <Checkbox value='Bread'>Bread</Checkbox>
        </CheckboxGroup>
        <Button style={{ marginTop: '10px' }} onPress={() => alert(selected)}>Send</Button>
      </form>
    )
  },
}
