import { render } from '@testing-library/react'
import { Checkbox, CheckboxGroup } from '../src'

describe('Button Group', () => {
  test('deberia renderizar', () => {
    const { unmount } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>,
    )

    expect(() => unmount()).not.toThrow()
  })
})
