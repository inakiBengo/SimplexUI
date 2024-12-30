import React from 'react'

type State<T> = [T, (v: T) => void]

export function useControllState<T = {}>(controlledValue: T | undefined, defaultValue: T, onChange?: (v: T) => void, name?: string): State<T>
export function useControllState<T = {}>(controlledValue: T, defaultValue: T, onChange?: (v: T) => void, name?: string) {
  const { current: isControlled } = React.useRef(controlledValue !== undefined)
  const [currentValue, setValueState] = React.useState(controlledValue || defaultValue)
  const { current: currentChange } = React.useRef(onChange)

  React.useEffect(() => {
    if (isControlled !== (controlledValue !== undefined)) {
      console.warn(`WARN: A state of component ${name} change from ${isControlled ? 'controlled to uncontrolled' : 'uncontrolled to controlled'}.`)
    }
  }, [controlledValue])

  let value = isControlled ? controlledValue : currentValue
  const setValue = React.useCallback((newValue: T) => {
    const onChangeCall = () => {
      if (currentChange) {
        currentChange(newValue)
      }
      if (!isControlled) {
        value = newValue
      }
    }
    if (!isControlled) {
      setValueState(newValue)
    }
    onChangeCall()
  }, [onChange, isControlled])

  return [value, setValue]
}
