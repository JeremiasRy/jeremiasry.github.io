<script lang="ts">
    import type { Project } from "../projects";
    import Carousel from "./Carousel.svelte";
    import CodeLogo from "./CodeLogo.svelte";
    import GithubLink from "./GithubLink.svelte";
  import TechLogo from "./TechLogo.svelte";

    export let project:Project;
</script>
<section class="project-wrapper">
    <div class="project-header">
        <h1>{project.name}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione nisi libero cumque, repudiandae explicabo molestias excepturi? Obcaecati praesentium esse, modi quas reiciendis asperiores corporis nisi, quia officiis, saepe animi!</p>
        <div class="project-header__languages">
            {#each project.languages as language}
                <CodeLogo language={language}/>
            {/each}
        </div>
    </div>
    <div class="project-technologies">
        {#each project.technologies as technology }
            <TechLogo technology={technology}/>
        {/each}
    </div>
    <div class="project-carousel">
        <Carousel images={project.imgs}/>
    </div>
    <div class="project-links">
        <GithubLink href={project.github}/>
        {#if (project.liveLink)}
            <a href={project.liveLink}>Live demo</a>
        {/if }
    </div>
</section>
<style>
    .project-technologies {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 2em;
    }
    .project-header__languages {
        display: flex;
        flex-direction: row;
        gap: 1em;
        
    }
    .project-wrapper div {
        height: 50%;
        width: 50%;
        padding: 2em;
        box-sizing: border-box;
    }
    .project-wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 80vh;
        width: 90%;
        margin-bottom: 5em;
        border-radius: 1em;
        box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.1),
        0 4px 8px rgba(0, 0, 0, 0.1),
        0 8px 16px rgba(0, 0, 0, 0.1);
    }
</style>