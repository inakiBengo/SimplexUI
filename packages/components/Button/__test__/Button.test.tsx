import { act, render, screen } from '@testing-library/react'
import { Button } from '../src'
import * as React from 'react'

describe('Button', () => {
  test('debería renderizar correctamente', () => {
    const { unmount } = render(<Button />)

    expect(() => unmount()).not.toThrow()
  })

  test('ref debería ser referenciado correctamente', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref} />)

    expect(ref.current).not.toBeNull()
  })

  test('debería llamar la funcion', () => {
    const onPress = jest.fn()
    const { getByRole } = render(<Button onPress={onPress} />)
    const buttonElement = getByRole('button')

    act(() => {
      buttonElement.click()
    })

    expect(onPress).toHaveBeenCalled()
  })

  test('No debeía llamar a la funcion', () => {
    const onPress = jest.fn()
    render(<Button disabled onPress={onPress} />)
    render(<Button isDisabled onPress={onPress} />)
    render(<Button isLoading onPress={onPress} />)

    const [button1, button2, button3] = screen.getAllByRole('button')

    act(() => {
      button1.click()
      button2.click()
      button3.click()
    })

    expect(onPress).not.toHaveBeenCalled()
  })

  test('Debería ser disabled', () => {
    render(
      <>
        <Button disabled />
        <Button isDisabled />
        <Button isLoading />
      </>,
    )
    const [button1, button2, button3] = screen.getAllByRole('button')

    expect(button1).toBeDisabled()
    expect(button2).toBeDisabled()
    expect(button3).toBeDisabled()
  })

  test('Deberia el boton tener la clase isIconOnly', () => {
    const { getByRole } = render(<Button isIconOnly />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toHaveClass('iconOnly')
  })
})
