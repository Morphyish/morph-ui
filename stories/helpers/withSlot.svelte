<script>
    import { get_current_component } from 'svelte/internal'
    import { forwardEventsBuilder } from '../../src/utils'

    export let component
    export let content

    const forwardEvents = forwardEventsBuilder(get_current_component())
</script>

<svelte:component {...$$props} this={component} use={[forwardEvents]}>
    {content}
</svelte:component>
