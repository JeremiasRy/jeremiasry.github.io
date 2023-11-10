<script lang="ts">
    import { technologyLogos, type Technologies } from "../projects";

    export let technology:Technologies;
</script>
<div class="wrapper">
    <div>
        <img src={technologyLogos[technology]} alt=""/>
    </div>
    <h4>{technology}</h4>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }

    div {
        height: 48px;
        width: 48px;
    }

    img {
        height: auto;
        width: 100%;
    }
</style>