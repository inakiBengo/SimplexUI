import { __rest } from "tslib";
import { classnames, useDOMRef } from 'core';
import { useAccordionItem as useSimplexAccordionItem, } from 'simplex_hook';
import './styles/AccordionItem.css';
import { useCallback } from 'react';
import { useAccordionContext } from './accordion_context';
export function useAccordionItem(props) {
    const context = useAccordionContext();
    const { variant, classItem, split } = context;
    const { as, ref, title, dark = false, subtitle, children, className } = props, otherProps = __rest(props, ["as", "ref", "title", "dark", "subtitle", "children", "className"]);
    const Element = as || 'div';
    const domRef = useDOMRef(ref);
    const { baseProps, buttonProps, contentProps, isDisabled, isActive, key, } = useSimplexAccordionItem(otherProps, context, domRef);
    const baseClasses = classnames({
        dark: dark,
        ['sx-accordionItem-' + variant]: split,
        'sx-accordionItem-divider': !split,
    }, 'simplexui-themes', 'sx-accordionItem', classItem, className);
    const getPropsBase = useCallback(() => (Object.assign({ 'className': baseClasses, 'data-active': isActive || undefined, 'data-disabled': isDisabled || undefined, id: key }, baseProps)), [
        domRef,
        isActive,
        isDisabled,
        baseClasses,
    ]);
    const buttonClasses = classnames({}, 'simplexui-themes', 'sx-accordionItem-header');
    const getButtonProps = useCallback(() => (Object.assign(Object.assign({}, buttonProps), { className: buttonClasses })), [
        buttonProps,
        buttonClasses,
        domRef,
    ]);
    const contentClasses = classnames({}, 'simplexui-themes', 'sx-accordionItem-content');
    const getContentProps = useCallback(() => (Object.assign(Object.assign({}, contentProps), { className: contentClasses })), [
        isActive,
    ]);
    return {
        Element,
        title,
        subtitle,
        children,
        getPropsBase,
        getButtonProps,
        getContentProps,
        isActive,
        isDisabled,
    };
}
//# sourceMappingURL=useAccordionItem.js.map