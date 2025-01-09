import React from 'react'

export interface ImageProps {
  onLoad?: (e: Event) => void
  onError?: (e: string | Event) => void
  src?: string
}

export function useImage(props: ImageProps) {
  const {
    onLoad,
    onError,
    src,
  } = props

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'loaded' | 'error'>('loading')

  React.useEffect(() => {
    if (!src) return setStatus('idle')
    setStatus('loading')
    const img = new Image()
    img.src = src
    img.onload = (e: Event) => {
      onLoad?.(e)
      setStatus('loaded')
    }
    img.onerror = (e: string | Event) => {
      onError?.(e)
      setStatus('error')
    }
  }, [src, onLoad, onError])

  return status
}
