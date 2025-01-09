import { classnames, useDOMRef } from 'core';
import { useCallback, useMemo } from 'react';
import './styles/AvatarGroup.css';
import { AvatarProvider } from './avatar_context';
export const useAvatarGroup = (props) => {
    const { ref, as, children, size = 'md', radius, grid, disabled, } = props;
    const Element = as || 'div';
    const domRef = useDOMRef(ref);
    const context = useMemo(() => ({
        size,
        radius,
        disabled,
    }), [size, radius]);
    const baseClasses = classnames({
        'sx-grouÁccordion-grid': grid,
    }, `sx-avatarGroup-size-${size}`, 'sx-groupAccordion', 'simplexui-themes');
    const getBaseProps = useCallback(() => ({
        ref: domRef,
        className: baseClasses,
    }), [ref]);
    return {
        Element,
        children,
        getBaseProps,
        AvatarProvider,
        context,
    };
};
//# sourceMappingURL=useAvatarGroup.js.map