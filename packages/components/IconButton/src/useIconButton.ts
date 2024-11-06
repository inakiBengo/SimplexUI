import { HTMLSimplexuiProps, GenericStyles, ReactRef, useDOMRef, classnames } from 'core'
import { ReactNode, useCallback } from 'react'

import styles from './styles/IconButton.module.css'
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
  useHover,
} from 'react-aria'

interface Props extends HTMLSimplexuiProps<'button'> {
  ref?: ReactRef<HTMLButtonElement>
  children?: ReactNode
  dark?: boolean
  isLoading?: boolean
  color?: GenericStyles.Color
  size?: GenericStyles.Size
  radius?: GenericStyles.Radius
  variant?: GenericStyles.Variant
  spinner?: ReactNode
}

export type IconButtonProps = Props & AriaButtonProps

export const useIconButton = (props: IconButtonProps) => {
  const {
    as,
    ref,
    children,
    dark,
    isLoading,
    color = 'default',
    size = 'md',
    radius = 'full',
    variant = 'solid',
    spinner,
    ...otherProps
  } = props
  const Element = as || 'button'
  const domRef = useDOMRef(ref)
  const disabled = otherProps.isDisabled || otherProps.disabled || isLoading

  const { buttonProps, isPressed } = useButton({
    ...otherProps,
    isDisabled: disabled,
    preventFocusOnPress: true,
    elementType: as,
  }, domRef)

  const { hoverProps, isHovered } = useHover({ isDisabled: disabled })
  const { focusProps, isFocusVisible } = useFocusRing()

  const classes = classnames({
    dark: dark,
  },
  'simplexui-themes',
  styles[color],
  styles[size],
  styles[variant],
  styles['r-' + radius],
  styles.base,
  )

  const getProps = useCallback(() => ({
    'data-press': isPressed || undefined,
    'data-hover': isHovered || undefined,
    'data-focus': isFocusVisible || undefined,
    ...mergeProps(
      buttonProps,
      hoverProps,
      focusProps,
    ),
    'className': classes,
  }), [
    buttonProps,
    hoverProps,
    focusProps,
  ])

  return {
    Element,
    getProps,
    children,
    spinner,
    domRef,
    size,
    isLoading,
  }
}
