<script lang="ts">
    import Navigation from "../components/Navigation.svelte";
</script>

<div class="app">
    <Navigation />
    <main>
        <slot />
    </main>
    <footer>

    </footer>
</div>

<style>
    main {
        scroll-behavior: smooth !important;
    }
</style>