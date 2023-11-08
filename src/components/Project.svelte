<script lang="ts">
    export let project: String;
</script>
<section id={`${project.toLowerCase().replaceAll(' ', '-')}`}>
    <div class="project-wrapper">
        <h2>{project}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus dolores odit qui a vel, aliquam, repellat numquam, adipisci fuga temporibus. Ex ipsa amet atque. Hic quo placeat eum at.</p>
    </div>
</section>

<style>
    .project-wrapper {
        height: 100vh;
        padding: 1em;
        box-sizing: border-box;
    }
    section {
        scroll-behavior: smooth;
    }
</style>