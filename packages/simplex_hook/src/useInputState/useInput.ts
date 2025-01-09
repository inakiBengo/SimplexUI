import { useId } from 'core'
import React from 'react'
import { InputProps } from './types'

export default function useInput(props: InputProps) {
  const {
    helperText,
    onFocus,
    onBlur,
    onClick,
    invalid = false,
    disabled = false,
    required = false,
    placeholder,
    value,
    defaultValue,
    ref,
    type = 'text',
    autoComplete = 'off',
  } = props

  const idLabel = useId()
  const idInput = useId()
  const idHelper = useId()
  const inputRef = ref || React.useRef<HTMLInputElement | null>(null)
  const [isFocused, setIsFocused] = React.useState(false)
  const isFilled = Boolean(
    inputRef.current?.value
    || placeholder
    || ['color', 'date', 'datetime-local', 'file', 'image', 'month',
      'range', 'reset', 'submit', 'time', 'week'].includes(type))

  const handlerFocus = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }, [])

  const handlerBlur = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
  }, [])

  const handlerClick = React.useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(e)
  }, [])

  return {
    rootProps: {
      onClick: handlerClick,
    },
    labelProps: {
      id: idLabel,
      htmlFor: idInput,
    },
    inputProps: {
      ref: inputRef,
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
  }
}
