<script lang="ts">
    import type { Project } from "../projects";
    import CodeLogo from "./CodeLogo.svelte";

    export let project:Project;

    export let active:boolean;
</script>
<div id={project.name.toLowerCase().replaceAll(' ', '-')} class="project-wrapper project" class:active={active}>
    <div class="project-header">
        <h1>{project.name}</h1>
        <div class="project-header__languages">
        {#each project.languages as language}
            <CodeLogo language={language}/>
        {/each}
    </div>
    </div>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Numquam consequuntur, officiis non odit ratione aspernatur maxime, 
        corporis rem a corrupti, recusandae quisquam ipsam molestias magni tempora quae? Illum, 
        iste reprehenderit!
    </p>
</div>
<style>
    .project-header__languages {
        display: flex;
        flex-direction: row;
        gap: 1em;
        align-items: center;
    }
    .project-header {
        display: flex;
        flex-direction: row;
        gap: 2em
    }
    .project-wrapper {
        margin: 2em;
        padding: 2em;
        box-sizing: border-box;
        background-color: white;
        height: 85vh;
        border-radius: 0.8em;
        box-shadow: 0 2px 4px rgba(241, 240, 240), 0 4px 8px rgba(240, 239, 239);
        transition: all 200ms ease;
    }

    .active {
        box-shadow: 0 4px 6px rgb(139, 139, 139), 0 6px 10px rgba(240, 239, 239);
    }
</style>