import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from 'react';
import { useAvatar } from './useAvatar';
import AvatarIcon from './AvatarIcon';
const Avatar = forwardRef((props, ref) => {
    const { Element, getImgProps, getBaseProps, getFallbackProps, getBadgeProps, imageStatus, src, isBadge, badgeContent, fallback: fallbackComponent, } = useAvatar(Object.assign(Object.assign({}, props), { ref }));
    const fallback = useMemo(() => {
        return (_jsx("div", Object.assign({}, getFallbackProps(), { children: fallbackComponent
                ? fallbackComponent
                : _jsx(AvatarIcon, {}) })));
    }, [src, imageStatus]);
    return (_jsxs(Element, Object.assign({}, getBaseProps(), { children: [src && imageStatus === 'loaded'
                ? _jsx("img", Object.assign({}, getImgProps()))
                : imageStatus === 'loading'
                    ? null
                    : fallback, isBadge
                ? (_jsx("span", Object.assign({}, getBadgeProps(), { children: badgeContent })))
                : null] })));
});
Avatar.displayName = 'simplexui.avatar';
export default Avatar;
//# sourceMappingURL=Avatar.js.map