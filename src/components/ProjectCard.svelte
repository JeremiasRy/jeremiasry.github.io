<script lang="ts">
    import type { Project } from "../projects";
    import CodeLogo from "./CodeLogo.svelte";
    import GithubLink from "./GithubLink.svelte";
    import PictureCarousel from "./PictureCarousel.svelte";

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
        <GithubLink href={project.github}/> <br/>
        </div>
    </div>
    <div class="project-description">
        <p>
        {project.description}
        </p>
    </div>
    <div class="project-details-wrapper">
        <div class="project-details-wrapper__left">
            <div class="links">
                {#if project.liveLink}
                    <a href={project.liveLink}><span class="live-demo">&bullet;</span> Live Demo</a>
                {/if}
            </div>
            <div>
                <h1>Techs used</h1>
                {#each project.technologies as technology}
                    <p>- {technology}</p>
                {/each}
            </div>
        </div>
        <div class="project-details-wrapper__right">
            <PictureCarousel images={project.imgs}/>
        </div>
    </div>
</div>
<style>
    .live-demo {
        color: green;
        font-size: xx-large;
    }

    a {
        text-decoration: none;
    }
    .project-header__languages {
        display: flex;
        flex-direction: row;
        gap: 1em;
        align-items: center;
    }
    .project-header {
        display: flex;
        flex-direction: row;
        gap: 2em;
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
    .project-description {
        padding-left: 1em;
    }
    .project-details-wrapper {
        display: flex; 
        flex-direction: row;
    }

    .project-details-wrapper__left {
        width: 30%;
    }
    .project-details-wrapper__right {
        width: 70%;
    }

    .active {
        box-shadow: 0 4px 6px rgb(139, 139, 139), 0 6px 10px rgba(240, 239, 239);
    }
</style>