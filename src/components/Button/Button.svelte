<button
        {...$$props}
        use:useActions={use}
        use:forwardEvents
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

    button:not(:disabled):active {
    }

    button:disabled {
    }
</style>

<script>
    import { get_current_component } from 'svelte/internal'
    import { forwardEventsBuilder, useActions } from '../../utils'

    export let use = [];

    const forwardEvents = forwardEventsBuilder(get_current_component())
</script>
