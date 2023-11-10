<script lang="ts">
    import { projects } from "../projects";
    import Project from "../components/Project.svelte";
</script>
<div class="header">
    <h1>Jeremias Ryttäri</h1>
</div>
<div class="projects">
    {#each projects as project}
        <Project project={project} />
    {/each}
</div>
<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        top: 0;
        left: 0;
        background: linear-gradient(45deg, #2193b0, #6dd5ed);
        margin-bottom: 5em;
        height: 20vh;
        width: 100%;
        z-index: 1;
    }

    .header h1 {
        margin: 0;
        font-size: 2em;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    .projects {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
