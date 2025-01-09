import { forwardRef } from 'react'
import { useInput } from './useInput'
import { InputProps } from './useInput'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
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
  } = useInput({ ...props, ref })

  return (
    <Element {...getRootProps()}>
      <span {...getWrapperProps()}>
        { labelText ? <label {...getLabelProps()}>{ labelText }</label> : null }
        { typeof startContent === 'function' ? startContent() : startContent }
        <input {...getInputProps()} />
        { typeof endContent === 'function' ? endContent() : endContent }
      </span>
      { helperText ? <p {...getHelperProps()}>{ helperText }</p> : null}
    </Element>
  )
})

Input.displayName = 'simplexui.input'

export default Input
