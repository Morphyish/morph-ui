import withSlot from '../../../.storybook/withSlot.svelte'
import Button from './Button.svelte'

export default {
    title: 'Button',
    argTypes: {
        content: 'text',
    },
}

const Template = ({ ...args }) => ({
    Component: withSlot,
    props: {
        ...args,
        component: Button,
    },
});

export const Default = Template.bind({})
Default.args = {
    content: 'Click me',
}
