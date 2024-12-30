import { classnames, GenericStyles, HTMLSimplexuiProps, ReactRef, useDOMRef } from 'core'
import { useCallback, useMemo } from 'react'
import './styles/AvatarGroup.css'
import { AvatarProvider } from './avatar_context'

export type AvatarGroupRef = HTMLDivElement | null

export type AvatarContext = {
  size?: GenericStyles.Size
  radius?: GenericStyles.Radius
  disabled?: boolean
}

export interface AvatarGroupProps extends HTMLSimplexuiProps<'div'>, AvatarContext {
  ref?: ReactRef<HTMLDivElement>
  grid?: boolean
}

export const useAvatarGroup = (props: AvatarGroupProps) => {
  const {
    ref,
    as,
    children,
    size = 'md',
    radius,
    grid,
    disabled,
  } = props

  const Element = as || 'div'
  const domRef = useDOMRef(ref)

  const context = useMemo(() => ({
    size,
    radius,
    disabled,
  }), [size, radius])

  const baseClasses = classnames({
    'sx-grouÁccordion-grid': grid,
  },
  `sx-avatarGroup-size-${size}`,
  'sx-groupAccordion',
  'simplexui-themes',
  )

  const getBaseProps = useCallback(() => ({
    ref: domRef,
    className: baseClasses,
  }), [ref])

  return {
    Element,
    children,
    getBaseProps,
    AvatarProvider,
    context,
  }
}
