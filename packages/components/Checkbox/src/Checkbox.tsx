import { forwardRef } from 'react'
import { CheckboxProps, useCheckbox } from './useCheckbox'
import { VisuallyHidden } from 'react-aria'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    Element,
    children,
    domRef,
    getInputProps,
    getLabelProps,
    getIconProps,
    isSelected,
    isIndeterminate,
  } = useCheckbox({ ...props, ref })

  return (
    <Element {...getLabelProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} ref={domRef} />
      </VisuallyHidden>
      <span {...getIconProps()}>
        <svg viewBox='0 0 100 100' preserveAspectRatio='xMaxYMax'>
          {
            isIndeterminate
              ? (
                  <polyline
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='10'
                    points='20 50 80 50'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                  </polyline>
                )
              : (
                  <polyline
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='10'
                    points='20 45 40 75 80 25'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeDasharray='180'
                    strokeDashoffset={isSelected ? '0' : '180'}
                    style={isSelected ? { transition: 'stroke-dashoffset 0.2s linear 0.2s' } : {}}
                  >
                  </polyline>
                )
          }
        </svg>
      </span>
      { children }
    </Element>
  )
})

Checkbox.displayName = 'simplexui.checkbox'

export default Checkbox
