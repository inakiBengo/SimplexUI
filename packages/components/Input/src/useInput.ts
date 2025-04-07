import { classnames, HTMLSimplexuiProps, useDOMRef } from 'core'
import { ForwardedRef, ReactNode, useCallback } from 'react'
import {
  useInput as useSimplexInput,
  InputProps,
} from 'simplex_hook'

export interface Props extends HTMLSimplexuiProps<'input'> {
  ref?: ForwardedRef<HTMLInputElement>
  helperText?: string
  labelText?: string
  startContent?: ReactNode | (() => ReactNode)
  endContent?: ReactNode | (() => ReactNode)
  variant?: 'light' | 'outline' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  prefix?: ReactNode | (() => ReactNode)
  suffix?: ReactNode | (() => ReactNode)
}

export type useInputProps = Props & InputProps

export const useInput = (props: useInputProps) => {
  const {
    as,
    ref,
    onFocus,
    onBlur,
    readOnly,
    invalid,
    disabled,
    placeholder,
    value,
    defaultValue,
    helperText,
    labelText,
    type,
    startContent,
    endContent,
    variant = 'outline',
    size = 'md',
    radius = 'md',
    autoComplete,
    prefix,
    suffix,
    className,
    errorMessage: userMessageError,
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
    errorMessage,
  } = useSimplexInput({
    onFocus,
    onBlur,
    readOnly,
    invalid,
    disabled,
    placeholder,
    value,
    defaultValue,
    type,
    autoComplete,
    errorMessage: userMessageError,
  }, domRef)

  const rootClasses = classnames({},
    'sx-variant-' + variant,
    'sx-size-' + size,
    'sx-radius-' + radius,
    'sx-textField',
    className,
  )

  const getRootProps = useCallback(() => ({
    ...rootProps,
    className: rootClasses,
    'data-disabled': isDisabled || undefined,
    'data-focused': isFocused || undefined,
    'data-invalid': isInvalid || undefined,
    'data-filled': isFilled || Boolean(startContent) || Boolean(prefix) || undefined,
  }), [rootProps, isFilled, isInvalid, isFocused, isDisabled, startContent, prefix])

  const getLabelProps = useCallback(() => ({
    ...labelProps,
    className: 'simplexui-themes sx-textField-label',
  }), [labelProps])

  const getWrapperProps = useCallback(() => ({
    className: 'simplexui-themes sx-textField-wrapper',
  }), [])

  const getInputProps = useCallback(() => ({
    ...inputProps,
    ...other,
    className: 'simplexui-themes sx-reset sx-textField-input',
  }), [inputProps, other])

  const getHelperProps = useCallback(() => ({
    ...helperProps,
    className: 'simplexui-themes sx-reset sx-textField-helper',
  }), [helperProps])

  const getPrefixAndSuffixProps = useCallback(() => ({
    onClick: (e: React.MouseEvent<HTMLInputElement>) => {
      domRef.current?.focus()
      other.onClick?.(e)
    },
  }), [])

  return {
    Element,
    getRootProps,
    getLabelProps,
    getWrapperProps,
    getInputProps,
    getHelperProps,
    getPrefixAndSuffixProps,
    helperText,
    labelText,
    startContent,
    endContent,
    prefix,
    suffix,
    errorMessage,
    isInvalid,
  }
}
