import { HTMLSimplexuiProps, ReactRef, useDOMRef, GenericStyles, classnames } from '@simplexui/core'
import { ReactNode, useCallback } from 'react'
import {
  AriaCheckboxProps,
  mergeProps,
  useCheckbox as useCheckboxAria,
  useCheckboxGroupItem as useCheckboxGroupItemAria,
  useFocusRing,
  useHover,
} from 'react-aria'
import { useToggleState } from 'react-stately'
import styles from './styles/Checkbox.module.css'
import { useCheckboxGroupContext } from './checkGroupContext'

interface Props extends HTMLSimplexuiProps<'input'> {
  ref?: ReactRef<HTMLInputElement>
  children?: ReactNode
  dark?: boolean
  color?: GenericStyles.Color
  size?: GenericStyles.Size
  radius?: GenericStyles.Radius
}

export type CheckboxProps = Props & AriaCheckboxProps

export function useCheckbox(props: CheckboxProps) {
  const groupContext = useCheckboxGroupContext()

  const {
    as,
    children,
    value = '',
    ref,
    dark = groupContext?.dark,
    isDisabled = groupContext?.state.isDisabled,
    className,
    color = groupContext?.color ?? 'default',
    size = groupContext?.size ?? 'md',
    radius = groupContext?.radius ?? 'md',
    isIndeterminate = false,
    ...otherProps
  } = props
  const Element = as || 'label'
  const domRef = useDOMRef(ref)
  const disabled = otherProps.disabled || isDisabled
  const childrenIsString = typeof children === 'string'
  const CheckboxProps = {
    ...otherProps,
    isIndeterminate,
    'isDisabled': disabled,
    'aria-label': childrenIsString ? children : otherProps['aria-label'],
  }

  const toggleState = useToggleState({
    ...otherProps,
    isDisabled: disabled,
  })

  const {
    inputProps: inputAriaProps,
    labelProps: labelAriaProps,
    isSelected,
    isPressed,
    isInvalid,
  } = groupContext
    ? useCheckboxGroupItemAria({
      ...CheckboxProps,
      value,
    },
    groupContext.state,
    domRef,
    )
    : useCheckboxAria(
      CheckboxProps,
      toggleState,
      domRef,
    )

  /* INPUT */
  const { focusProps, isFocusVisible } = useFocusRing({
    autoFocus: otherProps.autoFocus,
  })

  const { hoverProps, isHovered } = useHover({
    isDisabled: disabled,
  })

  const getInputProps = useCallback(() => ({
    ...mergeProps(
      inputAriaProps,
      focusProps,
    ),
  }), [
    inputAriaProps,
  ])

  /* LABEL */
  const labelClasses = [
    'simplexui-themes',
    (dark ? 'dark' : ''),
    styles.base,
    styles[color],
    styles[size],
    styles['r-' + radius],
    className,
  ].join(' ')

  const getLabelProps = useCallback(() => ({
    'data-selected': isSelected || isIndeterminate || undefined,
    'data-disabled': disabled || undefined,
    'data-focus': isFocusVisible || undefined,
    'data-indeterminate': isIndeterminate || undefined,
    'data-press': isPressed || undefined,
    'data-hover': isHovered || undefined,
    'data-invalid': isInvalid || undefined,
    ...mergeProps(
      labelAriaProps,
      hoverProps,
    ),
    'className': labelClasses,
  }), [
    labelAriaProps,
    isSelected,
    isFocusVisible,
  ])

  /* ICON */

  const getIconProps = useCallback(() => ({
    className: styles.icon,
  }), [
    isSelected,
  ])

  return {
    Element,
    children,
    domRef,
    getInputProps,
    getLabelProps,
    getIconProps,
    isSelected,
    isIndeterminate,
  }
}
