import { classnames, GenericStyles, HTMLSimplexuiProps, ReactRef, useDOMRef } from 'core'
import { useCallback, useMemo } from 'react'
import {
  AriaCheckboxGroupProps,
  useCheckboxGroup as useAriaCheckboxGroup,
} from 'react-aria'
import styles from './styles/CheckboxGroup.module.css'
import { CheckboxGroupState, useCheckboxGroupState } from 'react-stately'

export type ContextType = {
  state: CheckboxGroupState
  isInvalid?: AriaCheckboxGroupProps['isInvalid']
  size?: GenericStyles.Size
  color?: GenericStyles.Color
  radius?: GenericStyles.Radius
  dark?: boolean
}

interface Props extends HTMLSimplexuiProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  size?: GenericStyles.Size
  color?: GenericStyles.Color
  radius?: GenericStyles.Radius
  dark?: boolean
}

export type CheckboxGroupPorps = Props & AriaCheckboxGroupProps

export const useCheckboxGroup = (props: CheckboxGroupPorps) => {
  const {
    as,
    ref,
    children,
    dark = false,
    size,
    color,
    radius,
    label,
    description,
    ...otherProps
  } = props

  const Element = as || 'div'
  const domRef = useDOMRef(ref)
  const errorMessage = otherProps.errorMessage

  const state = useCheckboxGroupState(otherProps)
  const {
    groupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails,
  } = useAriaCheckboxGroup(otherProps, state)

  const context = useMemo<ContextType>(() => ({
    dark,
    size,
    color,
    radius,
    isInvalid,
    state,
  }), [
    size,
    color,
    radius,
    isInvalid,
    state,
  ])

  /* Group */
  const classesGroup = classnames({
    dark: dark,
  },
  styles.base,
  'simplexui-themes',
  )

  const getGroupProps = useCallback(() => ({
    ref: domRef,
    className: classesGroup,
    ...groupProps,
  }), [
    domRef,
    groupProps,
  ])

  /* Label */
  const getLabelProps = useCallback(() => ({
    className: styles.label,
    ...labelProps,
  }), [
    labelProps,
  ])

  /* Description */
  const getDescriptionlProps = useCallback(() => ({
    className: styles.description,
    ...descriptionProps,
  }), [
    descriptionProps,
  ])

  /* Error */
  const getErrorMessageProps = useCallback(() => ({
    className: styles.error,
    ...errorMessageProps,
  }), [
    errorMessageProps,
  ])

  /* Wrapper */
  const getWrapperProps = useCallback(() => ({
    className: styles.wrapper,
  }), [])

  return {
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
    errorMessage:
      typeof errorMessage === 'function'
        ? errorMessage({ isInvalid: state.isInvalid, validationErrors, validationDetails })
        : validationErrors?.join(' ') || errorMessage,
    context,
  }
}
