import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Accordion, AccordionItem, type AccordionProps, type AccordionItemProps } from '../../index'

function AccordionTest(
  { props, itemProps }: { props: AccordionProps, itemProps: AccordionItemProps[] }) {
  return (
    <Accordion {...props}>
      <AccordionItem {...itemProps[0]}>
        <p>Content 1</p>
      </AccordionItem>
      <AccordionItem {...itemProps[1]}>
        <p>Content 2</p>
      </AccordionItem>
      <AccordionItem {...itemProps[2]}>
        <p>Content 3</p>
      </AccordionItem>
    </Accordion>
  )
}

describe('Accordion', () => {
  const dataActive = '[data-active="true"]'
  const user = userEvent.setup()
  const props = {
    itemProps: [
      {
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        'data-testid': 'item1',
      },
      {
        title: 'Title 2',
        subtitle: 'Subtitle 2',
        'data-testid': 'item2',
      },
      {
        title: 'Title 3',
        subtitle: 'Subtitle 3',
        'data-testid': 'item3',
      },
    ],
    props: {},
  }

  test('Deberia renderizar correctamente', () => {
    const { unmount } = render(<AccordionTest {...props} />)
    expect(() => unmount()).not.toThrow()
  })

  test('Deberia tener los attributes de accesibilidad correctos', async () => {
    const { getAllByRole } = render(<AccordionTest {...props} />)
    const buttons = getAllByRole('button')
    const contents = getAllByRole('region')

    expect(buttons.length).toBe(3)
    expect(contents.length).toBe(3)

    expect(buttons[0].id).toBe(contents[0].getAttribute('aria-labelledby'))
    expect(contents[0].id).toBe(buttons[0].getAttribute('aria-controls'))
    expect(buttons[1].id).toBe(contents[1].getAttribute('aria-labelledby'))
    expect(contents[1].id).toBe(buttons[1].getAttribute('aria-controls'))
    expect(buttons[2].id).toBe(contents[2].getAttribute('aria-labelledby'))
    expect(contents[2].id).toBe(buttons[2].getAttribute('aria-controls'))

    expect(buttons[0].getAttribute('aria-expanded')).toBe('false')
    expect(contents[0].getAttribute('aria-hidden')).toBe('false')

    await user.click(buttons[0])

    expect(buttons[0].getAttribute('aria-expanded')).toBe('true')
    expect(contents[0].getAttribute('aria-hidden')).toBe('true')
  })

  test('Deberia cambiar el foco al apretar las teclas flechas', async () => {
    const { getAllByRole } = render(<AccordionTest {...props} />)
    const buttons = getAllByRole('button')

    await buttons[0].focus()
    expect(buttons[0]).toHaveFocus()

    await user.keyboard('{ArrowDown}')
    expect(buttons[1]).toHaveFocus()

    await user.keyboard('{ArrowUp}')
    expect(buttons[0]).toHaveFocus()

    await user.keyboard('{ArrowUp}')
    expect(buttons[0]).toHaveFocus()
  })

  test('No deberia poder abrir varios accordiones a la vez', async () => {
    const { getAllByRole, container } = render(
      <AccordionTest {...props} />,
    )
    const buttons = getAllByRole('button')

    await user.click(buttons[0])
    expect(container.querySelectorAll(dataActive).length).toBe(1)

    await user.click(buttons[1])
    expect(container.querySelectorAll(dataActive).length).toBe(1)

    await user.click(buttons[1])
    expect(container.querySelectorAll(dataActive).length).toBe(0)
  })

  test('Deberia poder abrir varios accordiones a la vez', async () => {
    const customProps = {
      props: {
        multiple: true,
      },
      itemProps: {
        ...props.itemProps,
      },
    }
    const { getAllByRole, container } = render(<AccordionTest {...customProps} />)

    const buttons = getAllByRole('button')

    await user.click(buttons[0])
    await user.click(buttons[1])
    expect(container.querySelectorAll(dataActive).length).toBe(2)
  })

  test('Deberia poder controlar el estado', async () => {
    let fackeState = new Set(['key2'])
    const customProps = {
      itemProps: [
        ...props.itemProps.map((obj, i) => ({
          itemKey: `key${i + 1}`,
          ...obj,
        })),
      ],
      props: {
        active: fackeState,
      },
    }
    const { getByTestId, getAllByRole } = render(<AccordionTest {...customProps} />)
    expect(getByTestId('item2').getAttribute('data-active')).toBe('true')
    user.click(getAllByRole('button')[1])
    expect(getByTestId('item2').getAttribute('data-active')).toBe('true')
  })
})
