<script lang="ts">
    import type { Project } from "../projects";

    export let project:Project;
</script>
<div id={project.name.toLowerCase().replaceAll(' ', '-')} class="project-wrapper project">
    <h1>{project.name}</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Numquam consequuntur, officiis non odit ratione aspernatur maxime, 
        corporis rem a corrupti, recusandae quisquam ipsam molestias magni tempora quae? Illum, 
        iste reprehenderit!
    </p>
</div>
<style>
    .project-wrapper {
        background-color: #33333341;
        margin: 2em;
        padding: 2em;
        box-sizing: border-box;
        height: 85vh;
        box-shadow: 0 2px 4px rgba(241, 240, 240, 0.1), 0 4px 8px rgba(240, 239, 239, 0.1);
    }
</style>