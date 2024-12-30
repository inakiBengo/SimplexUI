import { forwardRef } from 'react'
import { useAutocomplete, type AutocompleteProps } from './useAutocomplete'

const Autocomplete = forwardRef((props, ref) => {
  const {
    Element,
    filteredOptions,
    getLabel = (option: { label?: string } | string) => typeof option === 'string' ? option : option?.label,
    label,
    value,
    disableClear,
    getWrapperProps,
    getLabelProps,
    getInputRootProps,
    getInputProps,
    getOptionsProps,
    getOptionProps,
    getClearButtonProps,
    renderRoot,
    renderOption,
  } = useAutocomplete({ ...props, ref })

  const renderedRoot = () => {
    return renderRoot
      ? renderRoot(
        { ...getInputRootProps(), className: '' },
        { ...getInputProps(), className: '' },
        { ...getClearButtonProps(), className: '' })
      : (
          <div {...getInputRootProps()}>
            { label
              ? (
                  <label {...getLabelProps()}>
                    { label }
                  </label>
                )
              : null}
            <input {...getInputProps()} type='text' autoComplete='off' />
            { value && !disableClear
              ? (
                  <button {...getClearButtonProps()}>
                    <svg viewBox='0 0 100,100' strokeWidth='15' strokeLinecap='round'>
                      <polyline points='10,10 90,90' fill='none' stroke='currentColor' />
                      <polyline points='10,90 90,10' fill='none' stroke='currentColor' />
                    </svg>
                  </button>
                )
              : null }
          </div>
        )
  }

  const renderedOption = () => {
    return renderOption
      ? filteredOptions.map((option, index) => {
        const label = getLabel(option)
        if (!label) return
        return renderOption({ ...getOptionProps(label), className: '' }, option, index)
      })
      : filteredOptions.map((option) => {
        const label = getLabel(option)
        if (!label) return
        return (
          <li key={label} {...getOptionProps(label)}>
            { label }
          </li>
        )
      })
  }

  return (
    <>
      <Element {...getWrapperProps()}>
        { renderedRoot() }
        {
          filteredOptions.length > 0
            ? (
                <ul {...getOptionsProps()}>
                  {
                    renderedOption()
                  }
                </ul>
              )
            : null
        }
      </Element>
    </>
  )
}) as AutocompleComponent

interface AutocompleComponent {
  <T extends object | string>(
    props: AutocompleteProps<T>,
  ): React.ReactElement
  displayName: string
}

Autocomplete.displayName = 'simplexui.autcomplete'

export default Autocomplete
