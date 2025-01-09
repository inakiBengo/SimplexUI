import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useAvatarGroup } from './useAvatarGroup';
const AvatarGroup = forwardRef((props, ref) => {
    const { Element, children, getBaseProps, AvatarProvider, context, } = useAvatarGroup(Object.assign(Object.assign({}, props), { ref }));
    return (_jsx(AvatarProvider, { value: context, children: _jsx(Element, Object.assign({}, getBaseProps(), { children: children })) }));
});
AvatarGroup.displayName = 'simplexui.avatar_group';
export default AvatarGroup;
//# sourceMappingURL=AvatarGroup.js.map