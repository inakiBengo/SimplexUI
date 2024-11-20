import { forwardRef } from 'react'
import { useAccordionItem, type AccordionItemProps } from './useAccordionItem'
import styles from './styles/AccordionItem.module.css'

const AccordionItem = forwardRef<HTMLButtonElement, AccordionItemProps>((props, ref) => {
  const {
    Element,
    title,
    subtitle,
    children,
    getHeaderProps,
    getPropsBase,
  } = useAccordionItem({ ...props, ref })

  return (
    <Element {...getPropsBase()}>
      <button {...getHeaderProps()}>
        <div className={styles.wrapTitle}>
          { title && <span className={styles.title}>{title}</span> }
          { subtitle && <span className={styles.subtitle}>{subtitle}</span> }
        </div>
        <div className={styles.expandIcon}>
          <svg viewBox='0 0 100 50' preserveAspectRatio='xMaxYMax'>
            <polyline
              fill='none'
              stroke='currentColor'
              strokeWidth='8'
              strokeLinecap='round'
              points='0 0 50 50 100 0'
            >
            </polyline>
          </svg>
        </div>
      </button>
      <div>
        { children }
      </div>
    </Element>
  )
})

AccordionItem.displayName = 'simplexui.accordion_item'

export default AccordionItem
