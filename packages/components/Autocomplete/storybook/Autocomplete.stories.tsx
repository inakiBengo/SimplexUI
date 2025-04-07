import { Autocomplete } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  title: 'Inputs/Autocomplete',
}
export default config

type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {
  args: {
    helperText: 'Helper Text',
    labelText: 'Label Text',
    fillOut: false,
    disableClear: false,
  },
  render: (args) => {
    const options = [
      { title: 'Córdoba' },
      { title: 'Juan' },
      { title: 'Sebas' },
      { title: 'Lulu' },
      { title: 'sebastian' },
      { title: 'Xixipin' },
      { title: 'Pepe' },
      { title: 'Mao' },
    ]

    return (
      <div style={{ height: '1000px', marginTop: '280px' }}>
        <Autocomplete
          {...args}
          labelText='Name user'
          size='sm'
          options={options}
          getLabel={option => option.title}
        />
        <Autocomplete
          {...args}
          size='md'
          options={options}
          getLabel={option => option.title}
        />
        <Autocomplete
          {...args}
          size='lg'
          options={options}
          getLabel={option => option.title}
        />
      </div>
    )
  },
}
