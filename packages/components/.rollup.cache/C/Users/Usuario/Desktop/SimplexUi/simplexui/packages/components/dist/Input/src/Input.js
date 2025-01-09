import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { useInput } from './useInput';
const Input = forwardRef((props, ref) => {
    const { Element, getRootProps, getLabelProps, getWrapperProps, getInputProps, getHelperProps, helperText, labelText, startContent, endContent, } = useInput(Object.assign(Object.assign({}, props), { ref }));
    return (_jsxs(Element, Object.assign({}, getRootProps(), { children: [_jsxs("span", Object.assign({}, getWrapperProps(), { children: [labelText ? _jsx("label", Object.assign({}, getLabelProps(), { children: labelText })) : null, typeof startContent === 'function' ? startContent() : startContent, _jsx("input", Object.assign({}, getInputProps())), typeof endContent === 'function' ? endContent() : endContent] })), helperText ? _jsx("p", Object.assign({}, getHelperProps(), { children: helperText })) : null] })));
});
Input.displayName = 'simplexui.input';
export default Input;
//# sourceMappingURL=Input.js.map