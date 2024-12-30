import { forwardRef } from 'react'
import { type AvatarGroupProps, type AvatarGroupRef, useAvatarGroup } from './useAvatarGroup'

const AvatarGroup = forwardRef<AvatarGroupRef, AvatarGroupProps>((props, ref) => {
  const {
    Element,
    children,
    getBaseProps,
    AvatarProvider,
    context,
  } = useAvatarGroup({ ...props, ref })

  return (
    <AvatarProvider value={context}>
      <Element {...getBaseProps()}>
        { children }
      </Element>
    </AvatarProvider>
  )
})

AvatarGroup.displayName = 'simplexui.avatar_group'

export default AvatarGroup
