import { forwardRef } from 'react'
import { useAccordionItem, type AccordionItemProps, AccordionItemRef } from './useAccordionItem'
import './styles/AccordionItem.css'

const AccordionItem = forwardRef<AccordionItemRef, AccordionItemProps>((props, ref) => {
  const {
    Element,
    title,
    subtitle,
    children,
    getButtonProps,
    getPropsBase,
    getContentProps,
    isDisabled,
  } = useAccordionItem({ ...props, ref })

  return (
    <Element {...getPropsBase()}>
      <button {...getButtonProps()}>
        <span className='sx-accordionItem-text'>
          { title && <h3 className='sx-accordionItem-title simplexui-themes'>{title}</h3> }
          { subtitle && <span className='sx-accordionItem-subtitle simplexui-themes'>{subtitle}</span> }
        </span>
        <span className='sx-accordionItem-expandIcon'>
          <svg viewBox='0 0 100 55' preserveAspectRatio='xMaxYMax'>
            <polyline
              fill='none'
              stroke='currentColor'
              strokeWidth='8'
              strokeLinecap='round'
              points='0 0 50 50 100 0'
            >
            </polyline>
          </svg>
        </span>
      </button>
      <div {...getContentProps()}>
        { isDisabled ? null : children }
      </div>
    </Element>
  )
})

AccordionItem.displayName = 'simplexui.accordion_item'

export default AccordionItem
