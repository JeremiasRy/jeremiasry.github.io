<script lang="ts">
    import { projects } from "../projects";
    import { onMount } from 'svelte';

    let sections:NodeListOf<HTMLElement> | null; 

    let activeLink: string = '';

    function handleAnchorClick (e: MouseEvent & { currentTarget: HTMLAnchorElement}) {
		const link = e.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
        activeLink = anchorId;
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor!.offsetTop,
			behavior: 'smooth'
		})
	}

    function handleScroll() {
        if (!sections) {
            return;
        }
        for (let i = 0; i < sections.length; i++) {
            const rect = sections[i].getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
                activeLink = sections[i].id;
                break;
            }
        }
    }

    onMount(() => {
        sections = document.querySelectorAll("section");
        window.addEventListener('scroll', handleScroll);

        handleScroll();
    })

</script>

<div class="navigation">
    <ul>
        <li><a href="/#about" on:click|preventDefault={handleAnchorClick} class:active={activeLink === 'about'}>About</a></li>
        {#each projects as project (project)}
            <li><a href={`/#${project.toLowerCase().replaceAll(' ', '-')}`} on:click|preventDefault={handleAnchorClick} class:active={project.toLowerCase().replaceAll(' ', '-') === activeLink}>{project}</a></li>
        {/each}
    </ul>
</div>
  
<style>
    .active {
        font-weight: bold;
        color: #0074d9; 
        transition: all 200ms ease;
    }
    .navigation {
        position: fixed;
        right: 0;
        top: 0;
        width: 15%;
        height: 100%;
        background-color: #333;
        color: #fff;
        padding: 20px;
        transition: all 200ms ease;
    }
  
    ul {
        list-style: none;
        padding: 0;
    }
  
    li {
        margin: 10px 0;
    }
  
    a {
        text-decoration: none;
        color: #fff;
    }
</style>