<script>
    import About from '../components/About.svelte';
    import Project from '../components/Project.svelte';
    import { projects } from '../projects'
</script>

<About />
{#each projects as project(project)}
    <Project project={project}/>
{/each}