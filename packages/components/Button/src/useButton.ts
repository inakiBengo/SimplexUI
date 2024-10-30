import { type HTMLSimplexuiProps, type GenericStyles, ReactRef, classnames } from '@simplexui/core'

import { useDOMRef } from '@simplexui/core'
import { ReactNode, useCallback } from 'react'
import styles from './styles/Button.module.css'
import { useButtonGroupContext } from './ButtonGroupContext'
import {
  AriaButtonProps,
  useButton as useButtonAria,
  useFocusRing,
  useHover,
  mergeProps,
} from 'react-aria'

interface Props extends HTMLSimplexuiProps<'button'> {
  ref?: ReactRef<HTMLButtonElement>
  isLoading?: boolean | string
  dark?: boolean
  fullWidth?: boolean
  color?: GenericStyles.Color
  size?: GenericStyles.Size
  radius?: GenericStyles.Radius
  variant?: GenericStyles.Variant
  spinner?: ReactNode
}

export type ButtonProps = Props & AriaButtonProps

export function useButton(props: ButtonProps) {
  const globalProps = useButtonGroupContext()

  const {
    as,
    ref,
    dark = false,
    children,
    className,
    isLoading,
    isDisabled = globalProps?.isDisabled,
    color = globalProps?.color ?? 'default',
    size = globalProps?.size ?? 'md',
    radius = globalProps ? 'none' : 'sm',
    variant = globalProps?.variant ?? 'solid',
    fullWidth = globalProps?.fullWidth ?? false,
    spinner,
    ...otherProps
  } = props

  const Element = as || 'button'
  const disabled = isDisabled || Boolean(isLoading) || otherProps.disabled
  const domRef = useDOMRef(ref)

  const { buttonProps: buttonAriaProps, isPressed } = useButtonAria({
    ...otherProps,
    isDisabled: disabled,
    preventFocusOnPress: true,
    elementType: as,
  }, domRef)

  const { hoverProps, isHovered } = useHover({ isDisabled: disabled })

  const { focusProps, isFocusVisible } = useFocusRing()

  const classes = classnames({
    'dark-theme': dark,
    [styles.fullWidth]: fullWidth,
  },
  'simplexui-themes',
  styles.base,
  styles[variant],
  styles[color],
  styles[size],
  styles['r-' + radius],
  className,
  )

  const getProps = useCallback(
    () => ({
      'data-load': isLoading || undefined,
      'data-hover': isHovered || undefined,
      'data-press': isPressed || undefined,
      'data-focus': isFocusVisible || undefined,
      ...mergeProps(
        buttonAriaProps,
        hoverProps,
        focusProps,
      ),
      'className': classes,
      'style': otherProps.style,
    }),
    [
      buttonAriaProps,
      hoverProps,
      focusProps,
      isFocusVisible,
      classes,
    ],
  )

  return {
    Element,
    children,
    spinner,
    size,
    isLoading,
    domRef,
    getProps,
  }
}
