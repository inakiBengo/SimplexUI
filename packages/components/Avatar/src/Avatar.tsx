import { forwardRef, useMemo } from 'react'
import { useAvatar, type AvatarProps, AvatarRef } from './useAvatar'
import AvatarIcon from './AvatarIcon'

const Avatar = forwardRef<AvatarRef, AvatarProps>((props, ref) => {
  const {
    Element,
    getImgProps,
    getBaseProps,
    getFallbackProps,
    getBadgeProps,
    imageStatus,
    src,
    isBadge,
    badgeContent,
    fallback: fallbackComponent,
  } = useAvatar({ ...props, ref })

  const fallback = useMemo(() => {
    return (
      <div {...getFallbackProps()}>
        {
          fallbackComponent
            ? fallbackComponent
            : <AvatarIcon />
        }
      </div>
    )
  }, [src, imageStatus])

  return (
    <Element {...getBaseProps()}>
      {
        src && imageStatus === 'loaded'
          ? <img {...getImgProps()} />
          : imageStatus === 'loading'
            ? null
            : fallback
      }
      {
        isBadge
          ? (
              <span {...getBadgeProps()}>
                { badgeContent }
              </span>
            )
          : null
      }
    </Element>
  )
})

Avatar.displayName = 'simplexui.avatar'

export default Avatar
