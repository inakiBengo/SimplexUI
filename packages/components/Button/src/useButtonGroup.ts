import { ForwardedRef, ReactNode, useCallback, useMemo } from 'react'
import type { useButtonProps } from './useButton'
import './styles/ButtonGroup.css'
import { classnames, GenericStyles } from 'core'

export interface useButtonGroupProps extends Omit<useButtonProps, 'ref' | 'href' | 'icon'> {
  children?: ReactNode
  ref?: ForwardedRef<HTMLDivElement>
  vertical?: boolean
}

export interface ButtonContextType {
  radius?: GenericStyles.Radius
  color?: GenericStyles.Color
  variant?: 'solid' | 'light' | 'outline'
  size?: GenericStyles.Size
  disabled?: boolean
  loading?: boolean
}

export const useButtonGroup = (props: useButtonGroupProps) => {
  const {
    children,
    ref,
    color,
    variant,
    size,
    disabled,
    loading,
    radius = 'md',
    vertical = false,
  } = props

  const context = useMemo<ButtonContextType>(() => ({
    radius: 'none',
    color,
    variant,
    size,
    disabled,
    loading,
  }), [color, variant, size, disabled, loading])

  const rootClasses = classnames({
    'sx-orientation-vertical': vertical,
  },
  'sx-radius-' + radius,
  'sx-buttonGroup',
  )

  const getRootProps = useCallback(() => ({
    ref,
    className: rootClasses,
  }), [radius, vertical])

  return {
    children,
    getRootProps,
    context,
  }
}
