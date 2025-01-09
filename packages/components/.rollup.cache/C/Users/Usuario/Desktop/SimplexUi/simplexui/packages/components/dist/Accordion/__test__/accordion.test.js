import { __awaiter } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Accordion, AccordionItem } from '../../index';
function AccordionTest({ props, itemProps }) {
    return (_jsxs(Accordion, Object.assign({}, props, { children: [_jsx(AccordionItem, Object.assign({}, itemProps[0], { children: _jsx("p", { children: "Content 1" }) })), _jsx(AccordionItem, Object.assign({}, itemProps[1], { children: _jsx("p", { children: "Content 2" }) })), _jsx(AccordionItem, Object.assign({}, itemProps[2], { children: _jsx("p", { children: "Content 3" }) }))] })));
}
describe('Accordion', () => {
    const dataActive = '[data-active="true"]';
    const user = userEvent.setup();
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
    };
    test('Deberia renderizar correctamente', () => {
        const { unmount } = render(_jsx(AccordionTest, Object.assign({}, props)));
        expect(() => unmount()).not.toThrow();
    });
    test('Deberia tener los attributes de accesibilidad correctos', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getAllByRole } = render(_jsx(AccordionTest, Object.assign({}, props)));
        const buttons = getAllByRole('button');
        const contents = getAllByRole('region');
        expect(buttons.length).toBe(3);
        expect(contents.length).toBe(3);
        expect(buttons[0].id).toBe(contents[0].getAttribute('aria-labelledby'));
        expect(contents[0].id).toBe(buttons[0].getAttribute('aria-controls'));
        expect(buttons[1].id).toBe(contents[1].getAttribute('aria-labelledby'));
        expect(contents[1].id).toBe(buttons[1].getAttribute('aria-controls'));
        expect(buttons[2].id).toBe(contents[2].getAttribute('aria-labelledby'));
        expect(contents[2].id).toBe(buttons[2].getAttribute('aria-controls'));
        expect(buttons[0].getAttribute('aria-expanded')).toBe('false');
        expect(contents[0].getAttribute('aria-hidden')).toBe('false');
        yield user.click(buttons[0]);
        expect(buttons[0].getAttribute('aria-expanded')).toBe('true');
        expect(contents[0].getAttribute('aria-hidden')).toBe('true');
    }));
    test('Deberia cambiar el foco al apretar las teclas flechas', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getAllByRole } = render(_jsx(AccordionTest, Object.assign({}, props)));
        const buttons = getAllByRole('button');
        yield buttons[0].focus();
        expect(buttons[0]).toHaveFocus();
        yield user.keyboard('{ArrowDown}');
        expect(buttons[1]).toHaveFocus();
        yield user.keyboard('{ArrowUp}');
        expect(buttons[0]).toHaveFocus();
        yield user.keyboard('{ArrowUp}');
        expect(buttons[0]).toHaveFocus();
    }));
    test('No deberia poder abrir varios accordiones a la vez', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getAllByRole, container } = render(_jsx(AccordionTest, Object.assign({}, props)));
        const buttons = getAllByRole('button');
        yield user.click(buttons[0]);
        expect(container.querySelectorAll(dataActive).length).toBe(1);
        yield user.click(buttons[1]);
        expect(container.querySelectorAll(dataActive).length).toBe(1);
        yield user.click(buttons[1]);
        expect(container.querySelectorAll(dataActive).length).toBe(0);
    }));
    test('Deberia poder abrir varios accordiones a la vez', () => __awaiter(void 0, void 0, void 0, function* () {
        const customProps = {
            props: {
                multiple: true,
            },
            itemProps: Object.assign({}, props.itemProps),
        };
        const { getAllByRole, container } = render(_jsx(AccordionTest, Object.assign({}, customProps)));
        const buttons = getAllByRole('button');
        yield user.click(buttons[0]);
        yield user.click(buttons[1]);
        expect(container.querySelectorAll(dataActive).length).toBe(2);
    }));
    test('Deberia poder controlar el estado', () => __awaiter(void 0, void 0, void 0, function* () {
        let fackeState = new Set(['key2']);
        const customProps = {
            itemProps: [
                ...props.itemProps.map((obj, i) => (Object.assign({ itemKey: `key${i + 1}` }, obj))),
            ],
            props: {
                active: fackeState,
            },
        };
        const { getByTestId, getAllByRole } = render(_jsx(AccordionTest, Object.assign({}, customProps)));
        expect(getByTestId('item2').getAttribute('data-active')).toBe('true');
        user.click(getAllByRole('button')[1]);
        expect(getByTestId('item2').getAttribute('data-active')).toBe('true');
    }));
});
//# sourceMappingURL=accordion.test.js.map