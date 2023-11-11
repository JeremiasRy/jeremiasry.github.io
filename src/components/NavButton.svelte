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
<div class:divactive={active}>
    <div class="beam" class:beamactive={active}></div>
    <a href={`#${to.name.toLowerCase().replaceAll(' ', '-')}`} on:click|preventDefault={handleClick} class:active={active}>{to.name}</a>
</div>
<style>
    div {
        background-color: gray;
        box-shadow: 0 2px 4px rgba(241, 240, 240, 0.1), 0 4px 8px rgba(240, 239, 239, 0.1);
        border-radius: 1em;
        display: flex;
        overflow: hidden;
    }

    .divactive {
        box-shadow: 0 2px 4px rgba(241, 240, 240, 0.5), 0 4px 8px rgba(240, 239, 239, 0.1);
    }

    .beamactive {
        display:block !important;
        box-shadow: none;
    }

    .beam {
        display: none;
        position: absolute;
        width: 15em; 
        height: 3em;
        background: linear-gradient(to right, transparent 0%, rgba(128, 128, 128, 0.062) 45%, rgba(255, 255, 255, 0.445) 50%, rgba(128, 128, 128, 0.055) 55%, transparent 100%);
        background-repeat: no-repeat;
        background-attachment: fixed;
        animation: beamAnimation 10s linear infinite;
    }
    
    @keyframes beamAnimation {
      0%, 100% {
        transform: translateX(calc(-15em / 2));
      }
      50% {
        transform: translateX(calc(15em / 2));
      }
    }

    a {
        width: 17em;
        height: 3em;
        margin: auto auto;
        color: black;
        letter-spacing: 0.2em;
        text-decoration: none;
        text-align: center;
        line-height: 3em;
    }

    .active {
        color: #fff;
        font-weight: bold;
        transition: all 200ms ease;
    }

    div:hover {
        box-shadow: 0 2px 4px rgba(241, 240, 240, 0.5), 0 4px 8px rgba(240, 239, 239, 0.1);
    }
</style>