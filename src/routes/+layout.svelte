<script>
export const prerender = true;
</script>

<main>
    <slot />
</main>
<style>
    :global(body) {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background-color: white;
        background-repeat: no-repeat;
        background-attachment: fixed;
        color: black
    }

    main {
        width: 100%;
        height: 100%;
    }
</style>