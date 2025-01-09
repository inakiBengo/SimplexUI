import { createContext } from 'core';
export const [AvatarProvider, useAvatarContext] = createContext({
    strict: false,
    errorMessage: 'useContext: `context` is not defined. It seems you forgot to include Avatar component inside AvatarGroup',
    name: 'avatarContext',
});
//# sourceMappingURL=avatar_context.js.map