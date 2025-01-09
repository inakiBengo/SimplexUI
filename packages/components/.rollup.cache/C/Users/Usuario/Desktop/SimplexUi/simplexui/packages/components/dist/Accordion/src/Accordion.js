import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useAccordion } from './useAccordion';
import { AccordionProvider } from './accordion_context';
const Accordion = forwardRef((props, ref) => {
    const { Element, domRef, children, context, getBaseProps, } = useAccordion(Object.assign(Object.assign({}, props), { ref }));
    return (_jsx(AccordionProvider, { value: context, children: _jsx(Element, Object.assign({ ref: domRef }, getBaseProps(), { children: children })) }));
});
Accordion.displayName = 'simplexui.accordion';
export default Accordion;
//# sourceMappingURL=Accordion.js.map