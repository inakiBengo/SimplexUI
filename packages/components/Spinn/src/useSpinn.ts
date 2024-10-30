import { classnames, HTMLSimplexuiProps, ReactRef } from '@simplexui/core'
import styles from './Spinner.module.css'
import { useCallback } from 'react'

export interface SpinProps extends HTMLSimplexuiProps<'div'> {
  ref: ReactRef<HTMLDivElement>
  color?: 'default' | 'primary' | 'secondary' | 'warning' | 'success' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

export function useSpinn(props: SpinProps) {
  const {
    ref,
    color,
    children,
    size = 'md',
    ...otherProps
  } = props

  const domRef = ref

  const classes = classnames({
  },
  'simplexui-themes',
  styles.base,
  styles[size],
  (color && styles[color]),
  )

  const getProps = useCallback(() => ({
    className: classes,
    ...otherProps,
  }), [
    classes,
  ])

  return {
    domRef,
    children,
    getProps,
  }
}
