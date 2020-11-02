<script>
    export let checked = false
</script>

<button class:checked on:click>
    <slot />
</button>

<style>
    button {
        cursor: pointer;
        color: #333;
        font-family: inherit;
        font-size: inherit;
        margin: 0 .5rem 0.5rem .5rem;
        box-sizing: border-box;
        border-radius: 2px;
        outline: none;
        background: none;
        text-transform: uppercase;
        border: 1px solid transparent;
    }

    button:focus,
    button:hover {
        border-color: #666;
    }

    .checked {
        color: #ff3e00;
    }
</style>
