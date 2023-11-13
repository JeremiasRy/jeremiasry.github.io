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
                <div>
                <h1>About</h1>
                <p>Professionally I'm competent in <b>postgrSQL</b> - <b>.NET</b> - <b>React-Redux</b> stack. </p>
                <p>For practice and fun I have written some ASCII games.</p>
                <p>Current focus is on DSP and C++</p>
                <p>There's more different projects in my <a href="https://github.com/JeremiasRy" target="_blank"><b>gitHub</b></a> but I think these give already a good representation of my skills.</p>
                <p>I consider my strong suite to be the background logic of all things. Designing UX/UI needs work (as you can see from this page...)</p>
                <p>This page was built with svelte.</p>
                </div>
            </div>
            <div class="button-to-extra" on:click|preventDefault={onClick} on:keydown|preventDefault={() => {}} tabindex={1} role="button">
                <div class="arrow">
                {">   <"}
                </div>
            </div>
            <div class="header-element" id="EXTRA">
                <div>
                <h1>Jausers</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At optio dolorem perspiciatis recusandae ipsam dolores esse nobis modi mollitia corrupti illo voluptatibus consectetur rerum nisi sed, numquam culpa illum quo?</p>
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
                <div>
                <h1>Technologies</h1>
                </div>
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
        background-color: grey;
    }
    .button-to-extra:hover {
        cursor: pointer;
    }
    .button-to-extra:hover .arrow {
        transform: scale(1.5);
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
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-image: URL('/background-header.jpeg');
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0.2;
        z-index: -1;
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
        padding: 1em 1em 1em 6%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 1em;
        background-color:rgb(160, 159, 95);
    }

    .navigation {
        width: 80%;
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2em;
        gap: 0.5em;
        background-color:rgba(160, 159, 95, 0.2);
    }
</style>