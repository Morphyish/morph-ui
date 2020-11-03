<button
        {...$$props}
        use:useActions={use}
        use:forwardEvents
        on:click={toggle}
        class:checked
>
    <slot />
</button>

<style>
    button {
        text-transform: uppercase;
        border-radius: 3px;
        cursor: pointer;
    }

    button:focus,
    button:hover {
    }

    .checked {
    }
</style>

<script>
    import { get_current_component } from 'svelte/internal'
    import { forwardEventsBuilder, useActions } from '../../utils'

    export let use = [];
    export let checked = false

    const forwardEvents = forwardEventsBuilder(get_current_component())

    const toggle = () => checked = !checked
</script>
