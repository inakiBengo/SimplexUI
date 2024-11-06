import { HTMLSimplexuiProps, ReactRef } from 'core'
import styles from './styles/ButtonGroup.module.css'
import { useCallback, useMemo } from 'react'

interface Props extends HTMLSimplexuiProps<'div'> {
  ref: ReactRef<HTMLDivElement | null>
}

export type contextType = {
  fullWidth?: boolean
  isDisabled?: boolean
  color?: 'default' | 'primary' | 'secondary' | 'warning' | 'error' | 'success'
  size?: 'sm' | 'md' | 'lg'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  variant?: 'solid' | 'flat' | 'outline' | 'light'
}

export type PorpsButtonGroup = Props & contextType

export function useButtonGroup(props: PorpsButtonGroup) {
  const {
    as,
    ref,
    children,
    isDisabled,
    color = 'default',
    size = 'sm',
    radius = 'sm',
    variant = 'solid',
    fullWidth,
  } = props

  const Element = as || 'div'
  const domRef = ref

  const classes = [
    styles['base'],
    styles['fullWidth'],
    styles['r-' + radius],
  ].join(' ')

  const getProps = useCallback(() => ({
    className: classes,
  }), [classes])

  const context = useMemo<contextType>(() => ({
    color,
    size,
    variant,
    fullWidth,
    isDisabled,
  }), [
    color,
    size,
    variant,
    fullWidth,
    isDisabled,
  ])

  return {
    Element,
    domRef,
    children,
    getProps,
    context,
  }
}
