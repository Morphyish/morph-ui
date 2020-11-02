<button on:click>
    <slot />
</button>

<style>
    button {
        cursor: pointer;
        color: #333;
        font-family: inherit;
        font-size: inherit;
        padding: 0.4em;
        margin: 0 .5rem 0.5rem .5rem;
        box-sizing: border-box;
        border-radius: 2px;
        outline: none;
        border: 1px solid #ccc;
        background-color: #f4f4f4;
        text-transform: uppercase;
    }

    button:focus,
    button:hover {
        border-color: #666;
    }

    button:not(:disabled):active {
        background-color: #ddd;
    }

    button:disabled {
        color: #999;
    }
</style>
