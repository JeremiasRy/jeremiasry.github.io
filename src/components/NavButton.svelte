<script lang="ts">
    import type { Project } from "../projects";

    export let to:Project;

    export let active:boolean;

    function handleClick(event: {currentTarget: HTMLAnchorElement }):void {
        const link = event.currentTarget;
        const anchorId = new URL(link.href).hash.replace("#", '');
        const project = document.getElementById(anchorId);
        window.scrollTo({
            top: project?.offsetTop as number - 75,
            behavior: "smooth"
        })
    }
</script>
<div class="nav-wrapper" class:divactive={active}>
    <a href={`#${to.name.toLowerCase().replaceAll(' ', '-')}`} on:click|preventDefault={handleClick} class:active={active}>{to.name}</a>
</div>
<style>
    .nav-wrapper {
        background-color: #3498db;
        width: 80%;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 0.5em;
        display: flex;
        overflow: hidden;
        flex-shrink: 0;
    }

    .nav-wrapper:hover {
        background-color: #1888db;
    }

    a {
        width: 100%;
        height: 3em;
        margin: auto auto;
        letter-spacing: 0.2em;
        text-decoration: none;
        text-align: center;
        color: white;
        line-height: 3em;
        transition: all 200ms ease;
    }

    .active {
        font-weight: bold;
        transition: all 200ms ease;
        transform: translateX(10%);
    }
</style>