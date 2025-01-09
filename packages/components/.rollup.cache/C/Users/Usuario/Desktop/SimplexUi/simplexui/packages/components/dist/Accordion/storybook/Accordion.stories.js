import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion } from '../../index';
import AccordionItem from '../src/AccordionItem';
import './style.css';
const config = {
    component: Accordion,
    title: 'Accordion',
};
export default config;
export const Default = {
    render: (args) => {
        const title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ullam nemo, facere et dicta expedita, nostrum molestiae nihil rem molestias, exercitationem enim debitis voluptate iste eum dolorum odio sunt ipsa!';
        return (_jsxs(Accordion, Object.assign({}, args, { variant: 'outlined', className: 'base', defaultActive: ['0'], children: [_jsx(AccordionItem, { title: 'Accordion 1', subtitle: 'Subtitle accordion 1', itemKey: '0', children: _jsx("p", { children: title }) }), _jsx(AccordionItem, { title: 'Accordion 2', subtitle: 'Subtitle accordion 1', children: _jsx("p", { children: "Este es el segundo Accordion" }) }), _jsx(AccordionItem, { title: 'Accordion 3', subtitle: 'Subtitle accordion 1', children: _jsx("p", { children: "Este es el segundo Accordion" }) })] })));
    },
};
//# sourceMappingURL=Accordion.stories.js.map