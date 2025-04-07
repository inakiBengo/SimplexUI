import { useId } from 'core'
import React from 'react'
import { InputProps } from './types'

export default function useInput(props: InputProps, ref: React.RefObject<HTMLInputElement>) {
  const {
    helperText,
    errorMessage = ref.current?.validationMessage || '',
    invalid = ref.current?.checkValidity ? !ref.current?.checkValidity() : false,
    disabled = false,
    required = false,
    placeholder,
    value,
    defaultValue,
    type = 'text',
    autoComplete = 'off',
  } = props

  const idLabel = useId()
  const idInput = useId()
  const idHelper = useId()
  const [isFocused, setIsFocused] = React.useState(false)
  const [isFilled, setIsFilled] = React.useState(false)

  React.useEffect(() => {
    setIsFilled(Boolean(
      ref.current?.value
      || placeholder
      || ['color', 'date', 'datetime-local', 'file', 'image', 'month',
        'range', 'reset', 'submit', 'time', 'week'].includes(type)))
  }
  , [ref.current?.value, value, defaultValue, placeholder, type])

  const handlerFocus = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    props.onFocus?.(e)
  }, [ref])

  const handlerBlur = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    props.onBlur?.(e)
  }, [ref.current?.value])

  const handlerChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilled(Boolean(ref.current?.value))
    props.onChange?.(e)
  }, [ref.current?.value])

  return {
    rootProps: {
      onChange: handlerChange,
    },
    labelProps: {
      id: idLabel,
      htmlFor: idInput,
    },
    inputProps: {
      ref,
      onFocus: handlerFocus,
      onBlur: handlerBlur,
      placeholder,
      disabled,
      value,
      defaultValue,
      'aria-required': required || undefined,
      'aria-invalid': invalid || undefined,
      id: idInput,
      'aria-describedby': helperText ? idHelper : undefined,
      'aria-labelledby': idLabel,
      type,
      autoComplete,
    },
    helperProps: {
      id: idHelper,
      'aria-live': invalid ? 'assertive' : 'polite' as 'assertive' | 'polite',
    },
    isFocused,
    isFilled,
    isDisabled: disabled,
    isInvalid: invalid,
    errorMessage,
  }
}
