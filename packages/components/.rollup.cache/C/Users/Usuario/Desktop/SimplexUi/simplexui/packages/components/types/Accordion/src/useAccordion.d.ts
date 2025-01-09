import { type GenericStyles, type HTMLSimplexuiProps, type ReactRef } from 'core';
import { AccordionProps as SimplexAccordionProps, type AccordionState } from 'simplex_hook';
import './styles/Accordion.css';
export type AccordionRef = HTMLDivElement | null;
interface Props extends HTMLSimplexuiProps<'div', 'onChange'> {
    ref?: ReactRef<AccordionRef>;
    color?: GenericStyles.Color;
    radius?: GenericStyles.Radius;
    size?: GenericStyles.Size;
    variant?: 'light' | 'shadow' | 'outlined';
    split?: boolean;
    classItem?: string;
}
export interface AccordionContext extends AccordionState {
    variant?: GenericStyles.Variant;
    classItem?: string;
    split?: boolean;
}
export type AccordionProps = Props & SimplexAccordionProps;
export declare function useAccordion(props: AccordionProps): {
    Element: import("packages/core/src/types").As;
    domRef: import("react").RefObject<HTMLDivElement>;
    children: import("react").ReactNode;
    context: AccordionState;
    getBaseProps: () => {
        className: string;
        onKeyDown: (e: React.KeyboardEvent) => void;
    };
};
export {};
