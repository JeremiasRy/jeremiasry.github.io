<script lang="ts">
  import { onMount } from "svelte";
    import NavButton from "../Components/NavButton.svelte";
    import ProjectCard from "../Components/ProjectCard.svelte";
    import { projects } from "../projects";

    let activeLink:string ="";

    function handleScroll() {
        const projects = document.querySelectorAll(".project");
        for (let i = 0; i < projects.length; i++) {
            const rect = projects[i].getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                activeLink = projects[i].id;
                break;
            }
        }
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll)
    })
</script>
<div class="wrapper">
    <div class="header">
        <div class="about">
            <h1>Jausers</h1>
        </div>
        <div class="navigation">
            {#each projects as project}
                <NavButton to={project} active={project.name.toLowerCase().replaceAll(' ', '-') === activeLink}/>
            {/each}
        </div>
    </div>
    <div class="projects">
        {#each projects as project}
            <ProjectCard project={project}/>
        {/each}
    </div>
</div>
<style>
    .wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .header {
        position: sticky;
        left: 0;
        top: 0;
        width: 40%;
        height: 100vh;
        padding: 4%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .projects {
        width: 60%;
        padding: 1em 1em 1em 5%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1em
    }

    .navigation {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1em;
    }
</style>