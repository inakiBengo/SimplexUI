import { render } from '@testing-library/react'
import Spinn from './src'
import * as React from 'react'

describe('Spinner', () => {
  test('deberia renderizarse correctamente', () => {
    const { unmount } = render(<Spinn />)

    expect(() => unmount()).not.toThrow()
  })

  test('ref debería ser referenciado correctamente', () => {
    const ref = React.createRef<HTMLDivElement>()
    const { unmount } = render(<Spinn ref={ref} />)

    expect(() => unmount()).not.toThrow()
  })
})
