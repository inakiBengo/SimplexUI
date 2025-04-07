import { forwardRef, ReactNode } from 'react'
import { useInput } from './useInput'
import { useInputProps } from './useInput'

const Input = forwardRef<HTMLInputElement, useInputProps>((props, ref) => {
  const {
    Element,
    getRootProps,
    getLabelProps,
    getWrapperProps,
    getInputProps,
    getHelperProps,
    getPrefixAndSuffixProps,
    helperText,
    labelText,
    startContent,
    endContent,
    prefix,
    suffix,
    errorMessage,
    isInvalid,
  } = useInput({ ...props, ref })

  const renderConditional = (content: ReactNode | (() => ReactNode), props: object) => {
    if (!content) return null
    return <span {...props}>{typeof content === 'function' ? content() : content}</span>
  }

  return (
    <Element {...getRootProps()}>
      <span {...getWrapperProps()}>
        { labelText ? <label {...getLabelProps()}>{ labelText }</label> : null }
        { renderConditional(startContent, { className: 'sx-textField-startContent' }) }
        { renderConditional(prefix, { ...getPrefixAndSuffixProps(), className: 'sx-textField-prefix' }) }
        <input {...getInputProps()} />
        { renderConditional(suffix, { ...getPrefixAndSuffixProps(), className: 'sx-textField-suffix' }) }
        { renderConditional(endContent, { className: 'sx-textField-endContent' }) }
      </span>
      {
        isInvalid
          ? <p {...getHelperProps()}>{ errorMessage }</p>
          : helperText
            ? <p {...getHelperProps()}>{ helperText }</p>
            : null
      }
    </Element>
  )
})

Input.displayName = 'simplexui.input'

export default Input
