import { Autocomplete } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const config: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  title: 'Autocomplete',
}
export default config

type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {
  render: () => {
    const options = [{ title: 'Córdoba' }, { title: 'Juan' }, { title: 'Sebas' }, { title: 'Lulu' }, { title: 'sebastian' }]

    return (
      <>
        <Autocomplete
          options={options}
          getLabel={option => option.title}
        />
      </>
    )
  },
}
