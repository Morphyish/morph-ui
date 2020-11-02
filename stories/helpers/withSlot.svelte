<script>
    export let component
    export let content
</script>

<svelte:component this={component} {...$$props}>
    {content}
</svelte:component>
