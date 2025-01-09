import { __rest } from "tslib";
import { useImage, classnames, useDOMRef } from 'core';
import { useCallback } from 'react';
import './styles/Avatar.css';
import { useAvatarContext } from './avatar_context';
export function useAvatar(props) {
    const context = useAvatarContext();
    const { as, ref, src, alt, onLoad, onError, fallback, badge, size = 'md', radius = (context === null || context === void 0 ? void 0 : context.radius) || 'full', disabled = context === null || context === void 0 ? void 0 : context.disabled } = props, otherPorps = __rest(props, ["as", "ref", "src", "alt", "onLoad", "onError", "fallback", "badge", "size", "radius", "disabled"]);
    const Element = as || 'span';
    const imageStatus = useImage({ src, onLoad, onError });
    const color = (badge === null || badge === void 0 ? void 0 : badge.color) || 'primary';
    const domRef = useDOMRef(ref);
    const baseClasses = classnames({
        'sx-avatar-group': Boolean(context),
    }, 'sx-avatar', `sx-avatar-radius-${radius}`, `sx-avatar-size-${(context === null || context === void 0 ? void 0 : context.size) || size}`, 'simplexui-themes');
    const getBaseProps = useCallback(() => (Object.assign({ className: baseClasses, ref: domRef, 'data-loading': imageStatus === 'loading' ? true : undefined, 'data-disabled': disabled || undefined }, otherPorps)), [imageStatus]);
    const getImgProps = useCallback(() => ({
        src,
        alt,
        className: 'sx-avatar-image simplexui-themes',
    }), [src]);
    const getFallbackProps = useCallback(() => ({
        className: 'sx-avatar-fallback simplexui-themes',
    }), []);
    const badgeClasses = classnames({
        'sx-avatar-badge': Boolean(badge),
    }, 'sx-avatar-badge-' + color, 'simplexui-themes');
    const getBadgeProps = useCallback(() => ({
        className: badgeClasses,
    }), [badge]);
    return {
        Element,
        getBaseProps,
        getImgProps,
        getFallbackProps,
        getBadgeProps,
        isBadge: Boolean(badge),
        badgeContent: badge === null || badge === void 0 ? void 0 : badge.value,
        imageStatus,
        src,
        fallback,
    };
}
//# sourceMappingURL=useAvatar.js.map