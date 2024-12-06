import { forwardRef, useMemo } from 'react'
import { useAvatar, type AvatarProps, AvatarRef } from './useAvatar'
import AvatarIcon from './AvatarIcon'

const Avatar = forwardRef<AvatarRef, AvatarProps>((props, ref) => {
  const {
    Element,
    imgProps,
    getBaseProps,
    imageStatus,
    src,
    fallback: fallbackComponent,
  } = useAvatar({ ...props, ref })

  console.log(imageStatus)

  const fallback = useMemo(() => {
    if (fallbackComponent) {
      return (
        <div>
          { fallbackComponent }
        </div>
      )
    }
    return <AvatarIcon />
  }, [src, imageStatus])

  return (
    <Element {...getBaseProps()}>
      {
        src && imageStatus === 'loaded'
          ? <img {...imgProps()} />
          : fallback
      }
    </Element>
  )
})

Avatar.displayName = 'simplexui.avatar'

export default Avatar
