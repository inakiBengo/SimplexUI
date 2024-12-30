import { createContext } from 'core'
import { AvatarContext } from './useAvatarGroup'

export const [AvatarProvider, useAvatarContext] = createContext<AvatarContext | undefined>({
  strict: false,
  errorMessage: 'useContext: `context` is not defined. It seems you forgot to include Avatar component inside AvatarGroup',
  name: 'avatarContext',
})
