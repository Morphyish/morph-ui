<button
        {...$$props}
        class:primary
        class:secondary
        class:checked
        on:click={toggle}
        use:useActions={use}
        use:forwardEvents
>
    <slot />
</button>

<style>
    button {
        text-transform: uppercase;
        border-radius: 3px;
        background: transparent;
        border: 0;
        cursor: pointer;
        outline: 0;

        height: 2.25rem;
        min-width: 4rem;
        padding: 0 1rem;
        color: var(--default-text);
        transition: box-shadow .2s cubic-bezier(.25,.8,.25,1);
    }

    button.secondary {
        color: var(--secondary-text);
    }

    button.primary {
        color: var(--primary-text);
    }

    button:focus,
    button:hover {
        border: 1px solid var(--default-border);
    }

    button.primary:focus,
    button.primary:hover {
        border-color: var(--primary-border);
    }

    button.secondary:focus,
    button.secondary:hover {
        border-color: var(--secondary-border);
    }

    .checked {
        box-shadow: var(--box-shadow-inset);
    }

    button:disabled {
        color: var(--disabled-text);
    }
</style>

<script>
    import { get_current_component } from 'svelte/internal'
    import { forwardEventsBuilder, useActions } from '../../utils'

    export let primary = false
    export let secondary = false
    export let checked = false
    export let use = [];

    const forwardEvents = forwardEventsBuilder(get_current_component())

    const toggle = () => checked = !checked
</script>
