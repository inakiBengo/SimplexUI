import { forwardRef } from 'react'
import { useAutocomplete, type useAutocompleteProps } from './useAutocomplete'
import { Input } from '../../Input/src/index'

const Autocomplete = forwardRef((props, ref) => {
  const {
    Element,
    filteredOptions,
    getLabel = (option: { label?: string } | string) => typeof option === 'string' ? option : option?.label,
    disableClear,
    getClearButtonProps,
    getRootProps,
    getInputProps,
    getListOptionsProps,
    getOptionProps,
  } = useAutocomplete({ ...props, ref })

  return (
    <>
      <Element {...getRootProps()}>
        <Input
          suffix={() => (
            disableClear
              ? null
              : (
                  <button {...getClearButtonProps()}>
                    <svg viewBox='0 0 100,100' strokeWidth='15' strokeLinecap='round'>
                      <polyline points='10,10 90,90' fill='none' stroke='currentColor' />
                      <polyline points='10,90 90,10' fill='none' stroke='currentColor' />
                    </svg>
                  </button>
                )
          )}
          {...getInputProps()}
        />
        {
          filteredOptions.length > 0
            ? (
                <ul {...getListOptionsProps()}>
                  {
                    filteredOptions.map((option, index) => {
                      const label = getLabel(option)
                      if (!label) return
                      return (
                        <li key={index} {...getOptionProps(index)}>
                          { label }
                        </li>
                      )
                    })
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
    props: useAutocompleteProps<T>,
  ): React.ReactElement
  displayName: string
}

Autocomplete.displayName = 'simplexui.autcomplete'

export default Autocomplete
