import React from 'react'

interface Controlled<T> {
  controlledValue?: T
  defaultValue: T
  name: string
  state?: string
  onChange?: (state: T) => {}
}

export default function useControlled<T = {}>({ controlledValue, defaultValue, onChange, name, state = 'value' }: Controlled<T>) {
  const { current: isControlled } = React.useRef(controlledValue !== undefined)
  const [currentValue, setValueState] = React.useState(controlledValue || defaultValue)

  React.useEffect(() => {
    if (isControlled !== (controlledValue !== undefined)) {
      console.warn(`WARN: A ${state} state of component ${name} change from ${isControlled ? 'controlled to uncontrolled' : 'uncontrolled to controlled'}.`)
    }
  }, [isControlled])

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
  }, [onChange, isControlled, value])

  return [value, setValue]
}
