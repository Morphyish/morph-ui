import { Toggle } from '../src'
import { withSlot } from './helpers'

export default {
    title: 'Toggle',
    argTypes: {
        content: 'text',
    },
}

const Template = ({ ...args }) => ({
    Component: withSlot,
    props: {
        ...args,
        component: Toggle,
    },
});

export const Default = Template.bind({})
Default.args = {
    content: 'Toggle me',
    checked: false,
}

export const Checked = Template.bind({})
Checked.args = {
    content: 'Toggle me',
    checked: true,
}
