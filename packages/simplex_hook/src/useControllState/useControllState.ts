import React from 'react'

type State<T> = [T, (v: T) => void]

export function useControllState<T = {}>(controlledValue: T | undefined, defaultValue: T, onChange?: (v: T) => void, name?: string): State<T> 
export function useControllState<T = {}>(controlledValue: T, defaultValue: T, onChange?: (v: T) => void, name?: string) {
  const { current: isControlled } = React.useRef(controlledValue !== undefined)
  const [currentValue, setValueState] = React.useState(controlledValue || defaultValue)

  React.useEffect(() => {
    if (isControlled !== (controlledValue !== undefined)) {
      console.warn(`WARN: A state of component ${name} change from ${isControlled ? 'controlled to uncontrolled' : 'uncontrolled to controlled'}.`)
    }
  }, [controlledValue])

  const value = isControlled ? controlledValue : currentValue
  const setValue = React.useCallback((newValue: T) => {
    if (!isControlled) {
      setValueState(newValue)
    }
    if (onChange) {
      if (!Object.is(currentValue, newValue)) {
        onChange(newValue)
      }
    }
  }, [onChange, isControlled, currentValue])

  return [value, setValue]
}
