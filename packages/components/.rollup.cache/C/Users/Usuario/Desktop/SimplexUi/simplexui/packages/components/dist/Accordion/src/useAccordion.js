import { __rest } from "tslib";
import { classnames, useDOMRef } from 'core';
import { useCallback, useMemo } from 'react';
import { useAccordion as useSimplexAccordion, } from 'simplex_hook';
import './styles/Accordion.css';
export function useAccordion(props) {
    const { as, ref, children, variant = 'light', split = false, className, classItem } = props, otherProps = __rest(props, ["as", "ref", "children", "variant", "split", "className", "classItem"]);
    const Element = as || 'div';
    const { state, baseProps } = useSimplexAccordion(otherProps);
    const domRef = useDOMRef(ref);
    const context = useMemo(() => (Object.assign({ variant,
        split,
        classItem }, state)), [state]);
    const classes = classnames({
        'sx-accordion-split': split,
        ['sx-accordion-' + variant]: !split,
    }, 'simplexui-themes', 'sx-accordion', className);
    const getBaseProps = useCallback(() => (Object.assign(Object.assign({}, baseProps), { className: classes })), [baseProps, className]);
    return {
        Element,
        domRef,
        children,
        context,
        getBaseProps,
    };
}
//# sourceMappingURL=useAccordion.js.map