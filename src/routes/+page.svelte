<script lang="ts">
    import { onMount } from "svelte";
    import NavButton from "$lib/Components/NavButton.svelte";
    import ProjectCard from "$lib/Components/ProjectCard.svelte";
    import About from '$lib/Components/About.svelte';
    import PictureAccordion from "$lib/Components/PictureAccordion.svelte";
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

    function onClick() {
        const headerElements = document.querySelectorAll(".header-element");
        let id;
        for (let i = 0; i < headerElements.length; i++) {
            if (!headerElements[i].id) {
                continue;
            }
            const rect = headerElements[i].getBoundingClientRect();
            if (rect.left >= 0 && rect.right <= window.innerWidth) {
                id = headerElements[i].id;
                break;
            }
        }
        let scrollTo = id === "MAIN" ? document.getElementById("EXTRA") : document.getElementById("MAIN")
        if (scrollTo) {
            scrollTo.scrollIntoView({
                behavior: "smooth"
            })
        }
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll)

        handleScroll();
    })
</script>

<div class="wrapper">
    <div class="header">
        <div class="header__extra-page">
            <div class="header-element" id="MAIN">
                <About />
            </div>
            <div class="button-to-extra" on:click|preventDefault={onClick} on:keydown|preventDefault={() => {}} tabindex={1} role="button">
                <div class="arrow">
                {">   <"}
                </div>
            </div>
            <div class="header-element" id="EXTRA">
                <div>
                    <h1>Technologies</h1>
                    <p class="tech-list">.NET | React | Redux | Svelte | postgreSQL | SQL | Powershell | Bash | node.js | LangChain | SCSS | Entity Framework | Dapper | ASP.NET Core | Axios | react-router | JUCE | MongoDB | ChromaDB | Docker | Azure |</p>
                </div>
            </div>
            <div class="header-element">
                <div class="navigation">
                    {#each projects as project}
                        <NavButton to={project} active={project.name.toLowerCase().replaceAll(' ', '-') === activeLink}/>
                    {/each}
                </div>
            </div>
            <div class="header-element">
                <PictureAccordion />
            </div>
        </div>
    </div>
    <div class="projects">
        {#each projects as project}
            <ProjectCard project={project} active={project.name.toLowerCase().replaceAll(' ', '-') === activeLink}/>
        {/each}
    </div>
</div>

<style>
    h1 {
        text-align: center;
    }

    .tech-list {
        font-weight: 700;
        font-size: large;
    }

    .arrow {
        font-weight: 700;
        font-size: large;
        scroll-behavior: smooth;
        transition: 100ms all ease-in;
    }

    .button-to-extra {
        width: 100%;
        grid-row: span 2;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 100ms all ease-in;
        color: rgba(0, 0, 0, 0.5);
    }
    .button-to-extra:hover {
        cursor: pointer;
    }
    .button-to-extra:hover .arrow {
        transform: scale(1.5);
        color: rgba(0, 0, 0, 1);
        letter-spacing: 0.25em;
    }
    .header__extra-page {
        width: 200%;
        height: 100%;
        display: grid;
        grid-template-columns: 47.5% 5% 47.5%;
        grid-template-rows: 50% 50%;
        scroll-behavior: smooth;
    }

    .header-element {
        max-height: 90%;
        box-sizing: border-box;
        padding: 2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .header::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        background-image: URL("/background-header.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        opacity: 0.1;
        width: 200%;
        height: 100vh;
    }

    .header {
        position: sticky;
        overflow-x: auto;
        scrollbar-color: transparent;
        left: 0;
        top: 0;
        width: 38%;
        height: 100vh;
        box-sizing: border-box;
        z-index: 1;
    }
    .header::-webkit-scrollbar {
        display: none;
    }

    .projects {
        width: 62%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 1em 1em 1em 6%;
        gap: 1em;
        background-color:rgb(160, 159, 95);
        z-index: 1;
    }

    .navigation {
        width: 80%;
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
    }
</style>