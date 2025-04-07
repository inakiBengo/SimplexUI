import { GenericStyles, HTMLSimplexuiProps, useDOMRef, classnames } from 'core'
import { ForwardedRef, ReactNode, useCallback } from 'react'
import {
  useButton as useSimplexButton,
} from 'simplex_hook'
import { useButtonContext } from './button_context'
import './styles/Button.css'

export interface useButtonProps extends HTMLSimplexuiProps<'button'> {
  ref?: ForwardedRef<HTMLButtonElement>
  children?: ReactNode
  color?: GenericStyles.Color
  size?: GenericStyles.Size
  radius?: GenericStyles.Radius
  disabled?: boolean
  fullWidth?: boolean
  href?: string
  loading?: boolean
  variant?: 'solid' | 'light' | 'outline'
  icon?: ReactNode | (() => ReactNode)
  iconEnd?: boolean
}

export const useButton = (props: useButtonProps) => {
  const context = useButtonContext()

  const {
    as,
    ref,
    children,
    href,
    icon,
    iconEnd = false,
    variant = context.variant ?? 'solid',
    color = context.color ?? 'primary',
    size = context.size ?? 'md',
    radius = context.radius ?? 'md',
    fullWidth = false,
    loading = context.loading,
    disabled = context.disabled,
    ...other
  } = props

  const Element = as || (href ? 'a' : 'button')
  const domRef = useDOMRef(ref)

  const {
    isFocused,
    props: buttonProps,
  } = useSimplexButton(other, domRef)

  const ButtonClasses = classnames({
    'sx-fullWidth': fullWidth,
    'sx-resetTransition': !disabled,
  },
  'sx-reset',
  'sx-button',
  'sx-variant-' + variant,
  'sx-color-' + color,
  'sx-size-' + size,
  'sx-radius-' + radius,
  )

  const getRootProps = useCallback(() => ({
    ...buttonProps,
    ref: domRef,
    className: ButtonClasses,
    disabled: disabled || loading || undefined,
    'data-icononly': (!children && (Boolean(icon) || Boolean(icon))) || undefined,
    'data-disabled': disabled || undefined,
    'data-color': color,
    href,
    ...other,
  }), [buttonProps, isFocused, other, disabled])

  const contentClasses = classnames({
    'sx-button-startContent': !iconEnd && Boolean(icon),
    'sx-button-endContent': iconEnd && Boolean(icon),
    'sx-button-content-absolute': loading && !icon,
  }, 'sx-button-content')

  const contetnProps = useCallback(() => ({
    className: contentClasses,
  }), [contentClasses])

  return {
    Element,
    children,
    icon,
    iconEnd,
    loading,
    getRootProps,
    contetnProps,
  }
}
