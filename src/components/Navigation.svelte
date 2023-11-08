<script lang="ts">
    let projects: string[] = ["Frisbee-Frans", "Elevator Sim", "Library System", "Space Shooter", "Tank Shooter", "Train Collision Problem", "Image to Ascii converter", ]
</script>

<div class="navigation">
    <ul>
        <li><a href={`#/about`}>About</a></li>
        {#each projects as project (project) }
            <li><a href={`#/${project}`}>{project}</a></li>
        {/each}
    </ul>
</div>