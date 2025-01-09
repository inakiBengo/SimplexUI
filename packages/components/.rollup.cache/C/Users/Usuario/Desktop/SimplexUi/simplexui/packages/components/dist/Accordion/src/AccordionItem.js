import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useAccordionItem } from './useAccordionItem';
import './styles/AccordionItem.css';
const AccordionItem = forwardRef((props, ref) => {
    const { Element, title, subtitle, children, getButtonProps, getPropsBase, getContentProps, isDisabled, } = useAccordionItem(Object.assign(Object.assign({}, props), { ref }));
    return (_jsxs(Element, Object.assign({}, getPropsBase(), { children: [_jsxs("button", Object.assign({}, getButtonProps(), { children: [_jsxs("span", { className: 'sx-accordionItem-text', children: [title && _jsx("h3", { className: 'sx-accordionItem-title simplexui-themes', children: title }), subtitle && _jsx("span", { className: 'sx-accordionItem-subtitle simplexui-themes', children: subtitle })] }), _jsx("span", { className: 'sx-accordionItem-expandIcon', children: _jsx("svg", { viewBox: '0 0 100 55', preserveAspectRatio: 'xMaxYMax', children: _jsx("polyline", { fill: 'none', stroke: 'currentColor', strokeWidth: '8', strokeLinecap: 'round', points: '0 0 50 50 100 0' }) }) })] })), _jsx("div", Object.assign({}, getContentProps(), { children: isDisabled ? null : children }))] })));
});
AccordionItem.displayName = 'simplexui.accordion_item';
export default AccordionItem;
//# sourceMappingURL=AccordionItem.js.map