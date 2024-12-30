import { HTMLSimplexuiProps, ReactRef, useImage, classnames, type ImageProps, GenericStyles, useDOMRef } from 'core'
import { ReactNode, useCallback } from 'react'
import './styles/Avatar.css'
import { useAvatarContext } from './avatar_context'

export type AvatarRef = HTMLSpanElement | null

interface Props extends HTMLSimplexuiProps<'span'> {
  ref?: ReactRef<AvatarRef>
  alt?: string
  fallback?: ReactNode
  badge?: {
    color?: GenericStyles.Color
    value?: string
  }
  size?: GenericStyles.Size
  radius?: GenericStyles.Radius
  disabled?: boolean
}

export type AvatarProps = Props & ImageProps

export function useAvatar(props: AvatarProps) {
  const context = useAvatarContext()

  const {
    as,
    ref,
    src,
    alt,
    onLoad,
    onError,
    fallback,
    badge,
    size = 'md',
    radius = context?.radius || 'full',
    disabled = context?.disabled,
    ...otherPorps
  } = props

  const Element = as || 'span'

  const imageStatus = useImage({ src, onLoad, onError })
  const color = badge?.color || 'primary'
  const domRef = useDOMRef(ref)

  /* Root */
  const baseClasses = classnames({
    'sx-avatar-group': Boolean(context),
  },
  'sx-avatar',
  `sx-avatar-radius-${radius}`,
  `sx-avatar-size-${context?.size || size}`,
  'simplexui-themes',
  )

  const getBaseProps = useCallback(() => ({
    className: baseClasses,
    ref: domRef,
    'data-loading': imageStatus === 'loading' ? true : undefined,
    'data-disabled': disabled || undefined,
    ...otherPorps,
  }), [imageStatus])

  /* Image */
  const getImgProps = useCallback(() => ({
    src,
    alt,
    className: 'sx-avatar-image simplexui-themes',
  }), [src])

  /* Fallback */
  const getFallbackProps = useCallback(() => ({
    className: 'sx-avatar-fallback simplexui-themes',
  }), [])

  /* Badge */
  const badgeClasses = classnames({
    'sx-avatar-badge': Boolean(badge),
  },
  'sx-avatar-badge-' + color,
  'simplexui-themes',
  )

  const getBadgeProps = useCallback(() => ({
    className: badgeClasses,
  }), [badge])

  return {
    Element,
    getBaseProps,
    getImgProps,
    getFallbackProps,
    getBadgeProps,
    isBadge: Boolean(badge),
    badgeContent: badge?.value,
    imageStatus,
    src,
    fallback,
  }
}
