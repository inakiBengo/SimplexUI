import { render } from '@testing-library/react'
import { Button, ButtonGroup } from '../src'
import * as React from 'react'

describe('Button Group', () => {
  test('debería renderizar correctamente', () => {
    const { unmount } = render(
      <ButtonGroup>
        <Button />
      </ButtonGroup>,
    )

    expect(() => unmount()).not.toThrow()
  })

  test('ref debería ser referenciado correctamente', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <ButtonGroup ref={ref} isDisabled>
        <Button />
      </ButtonGroup>,
    )

    expect(ref.current).not.toBeNull()
  })

  test('deberia los hijos ser disabled cuando es padre es isDisabled', () => {
    const onPress = jest.fn()
    const { getByRole } = render(
      <ButtonGroup isDisabled>
        <Button onPress={onPress} />
      </ButtonGroup>,
    )

    expect(getByRole('button')).toBeDisabled()
  })

  test('Deberaia poder renderizar diferentes variantes', () => {
    const { unmount } = render(
      <ButtonGroup>
        <Button isIconOnly color='default' variant='solid'>Solid</Button>
        <Button isLoading='loading...' color='error' variant='outline'>outline</Button>
        <Button dark={true} color='primary' variant='light'>light</Button>
        <Button fullWidth color='secondary' variant='flat'>flat</Button>
      </ButtonGroup>,
    )

    expect(() => unmount()).not.toThrow()
  })
})
