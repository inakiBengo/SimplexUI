import React from 'react'
import { useControllState } from '../useControllState'
import { renderHook, act } from '@testing-library/react'

describe('use controll state', () => {
  test('The default state should be kept as false', () => {
    const { result } = renderHook(() => useControllState(undefined, false))
    expect(result.current[0]).toBeFalsy()
  })

  test('The status should change to true', () => {
    const { result } = renderHook(() => useControllState(undefined, false))
    const [, setState] = result.current
    act(() => {
      setState(true)
    })
    expect(result.current[0]).toBeTruthy()
  })

  test('If the state is controlled you should not change the value with set function', () => {
    const { result } = renderHook(() => useControllState('hello', ''))
    const [, setState] = result.current
    act(() => {
      setState('world')
    })
    expect(result.current[0]).not.toBe('world')
  })

  test('If the state is controlled it should change its value by using a local state set function', () => {
    const useTestHook = () => {
      const [state, setState] = React.useState('hello')
      const controlledState = useControllState(state, '')
      return { state, setState, controlledState }
    }
    const { result } = renderHook(() => useTestHook())

    expect(result.current.controlledState[0]).toBe('hello')
    act(() => {
      result.current.setState('world')
    })
    expect(result.current.controlledState[0]).toBe('world')
    expect(result.current.state).toBe('world')
  })
})
