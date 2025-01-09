import './styles/Input.css'
import { classnames, HTMLSimplexuiProps, ReactRef, useDOMRef } from 'core'
import { ReactNode, useCallback } from 'react'
import {
  useInput as useSimplexInput,
} from 'simplex_hook'

export interface InputProps extends HTMLSimplexuiProps<'input'> {
  ref?: ReactRef<HTMLInputElement | null>
  invalid?: boolean
  helperText?: string
  labelText?: string
  startContent?: ReactNode | (() => ReactNode)
  endContent?: ReactNode | (() => ReactNode)
  variant?: 'light' | 'outline' | 'filled'
}

export const useInput = (props: InputProps) => {
  const {
    as,
    ref,
    onFocus,
    onBlur,
    onClick,
    readOnly,
    invalid,
    disabled,
    required,
    placeholder,
    value,
    defaultValue,
    helperText,
    labelText,
    type,
    startContent,
    endContent,
    variant = 'outline',
    ...other
  } = props

  const Element = as || 'div'
  const domRef = useDOMRef(ref)

  const {
    rootProps,
    labelProps,
    inputProps,
    helperProps,
    isDisabled,
    isFilled,
    isFocused,
    isInvalid,
  } = useSimplexInput({
    ref: domRef,
    onFocus,
    onBlur,
    onClick,
    readOnly,
    invalid,
    disabled,
    required,
    placeholder,
    value,
    defaultValue,
    type,
  })

  const rootClasses = classnames({},
    'sx-textField-' + variant,
    'sx-textField-root',
  )

  const getRootProps = useCallback(() => ({
    ...rootProps,
    className: rootClasses,
    'data-disabled': isDisabled || undefined,
    'data-focused': isFocused || undefined,
    'data-invalid': isInvalid || undefined,
    'data-filled': isFilled || Boolean(startContent) || undefined,
  }), [rootProps])

  const getLabelProps = useCallback(() => ({
    ...labelProps,
    className: 'simplexui-themes sx-textField-label',
  }), [labelProps])

  const getWrapperProps = useCallback(() => ({
    className: 'simplexui-themes sx-textField-wrapper',
  }), [])

  const getInputProps = useCallback(() => ({
    ...other,
    ...inputProps,
    className: 'simplexui-themes sx-reset sx-textField-input',
  }), [inputProps])

  const getHelperProps = useCallback(() => ({
    ...helperProps,
    className: 'simplexui-themes sx-reset sx-textField-helper',
  }), [helperProps])

  return {
    Element,
    getRootProps,
    getLabelProps,
    getWrapperProps,
    getInputProps,
    getHelperProps,
    helperText,
    labelText,
    startContent,
    endContent,
  }
}
