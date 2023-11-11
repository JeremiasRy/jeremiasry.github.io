<main>
    <slot />
</main>
<style>
    :global(body) {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background: linear-gradient(to right, black 0%, black 35%, #333 40%, black 45%, black 100%);
        background-repeat: no-repeat;
        background-attachment: fixed;
        color: whitesmoke;
    }

    main {
        width: 100%;
        height: 100%;
    }
</style>