import { __rest } from "tslib";
import './styles/Input.css';
import { classnames, useDOMRef } from 'core';
import { useCallback } from 'react';
import { useInput as useSimplexInput, } from 'simplex_hook';
export const useInput = (props) => {
    const { as, ref, onFocus, onBlur, onClick, readOnly, invalid, disabled, required, placeholder, value, defaultValue, helperText, labelText, type, startContent, endContent, variant = 'outline' } = props, other = __rest(props, ["as", "ref", "onFocus", "onBlur", "onClick", "readOnly", "invalid", "disabled", "required", "placeholder", "value", "defaultValue", "helperText", "labelText", "type", "startContent", "endContent", "variant"]);
    const Element = as || 'div';
    const domRef = useDOMRef(ref);
    const { rootProps, labelProps, inputProps, helperProps, isDisabled, isFilled, isFocused, isInvalid, } = useSimplexInput({
        ref: domRef,
        onFocus,
        onBlur,
        onClick,
        readOnly,
        invalid,
        disabled,
        required,
        placeholder,
        value,
        defaultValue,
        type,
    });
    const rootClasses = classnames({}, 'sx-textField-' + variant, 'sx-textField-root');
    const getRootProps = useCallback(() => (Object.assign(Object.assign({}, rootProps), { className: rootClasses, 'data-disabled': isDisabled || undefined, 'data-focused': isFocused || undefined, 'data-invalid': isInvalid || undefined, 'data-filled': isFilled || Boolean(startContent) || undefined })), [rootProps]);
    const getLabelProps = useCallback(() => (Object.assign(Object.assign({}, labelProps), { className: 'simplexui-themes sx-textField-label' })), [labelProps]);
    const getWrapperProps = useCallback(() => ({
        className: 'simplexui-themes sx-textField-wrapper',
    }), []);
    const getInputProps = useCallback(() => (Object.assign(Object.assign(Object.assign({}, other), inputProps), { className: 'simplexui-themes sx-reset sx-textField-input' })), [inputProps]);
    const getHelperProps = useCallback(() => (Object.assign(Object.assign({}, helperProps), { className: 'simplexui-themes sx-reset sx-textField-helper' })), [helperProps]);
    return {
        Element,
        getRootProps,
        getLabelProps,
        getWrapperProps,
        getInputProps,
        getHelperProps,
        helperText,
        labelText,
        startContent,
        endContent,
    };
};
//# sourceMappingURL=useInput.js.map