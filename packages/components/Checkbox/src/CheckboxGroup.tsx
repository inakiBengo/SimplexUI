import { forwardRef } from 'react'
import { CheckboxGroupPorps, useCheckboxGroup } from './useCheckboxGroup'
import { CheckboxGroupProvider } from './checkGroupContext'

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupPorps>((props, ref) => {
  const {
    children,
    Element,
    getGroupProps,
    getLabelProps,
    getDescriptionlProps,
    getErrorMessageProps,
    getWrapperProps,
    label,
    description,
    isInvalid,
    errorMessage,
    context,
  } = useCheckboxGroup({ ...props, ref })

  return (
    <Element {...getGroupProps()}>
      { label && <legend {...getLabelProps()}>{label}</legend> }
      <fieldset {...getWrapperProps()}>
        <CheckboxGroupProvider value={context}>
          {children}
        </CheckboxGroupProvider>
      </fieldset>
      {
        isInvalid && errorMessage
          ? (
              <div {...getErrorMessageProps()}>
                {errorMessage}
              </div>
            )
          : description
            ? (
                <div {...getDescriptionlProps()}>
                  {description}
                </div>
              )
            : null
      }
    </Element>
  )
})

CheckboxGroup.displayName = 'simplexui.checkbox-group'

export default CheckboxGroup
