import { HTMLSimplexuiProps, ReactRef, useImage, type ImageProps } from 'core'
import { ReactNode, useCallback } from 'react'
import './styles/Avatar.css'
import AvatarIcon from './AvatarIcon'

export type AvatarRef = HTMLSpanElement | null

interface Props extends HTMLSimplexuiProps<'span'> {
  ref?: ReactRef<AvatarRef>
  alt?: string
  fallback?: ReactNode
}

export type AvatarProps = Props & ImageProps

export function useAvatar(props: AvatarProps) {
  const {
    as,
    src,
    alt,
    onLoad,
    onError,
    fallback,
    ...otherPorps
  } = props

  const Element = as || 'span'

  const imageStatus = useImage({ src, onLoad, onError })

  const getBaseProps = useCallback(() => ({
    className: 'sx-avatar',
    ...otherPorps,
  }), [])

  const imgProps = useCallback(() => ({
    src,
    alt,
  }), [src])

  return {
    Element,
    getBaseProps,
    imgProps,
    imageStatus,
    src,
    fallback,
  }
}
