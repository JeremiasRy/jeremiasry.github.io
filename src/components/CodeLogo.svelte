<script lang="ts">
    import { codeLogos, type Languages } from "../projects";

    export let language:Languages;
</script>
<div>
    <img src={codeLogos[language]} alt=""/>
</div>
<style>
    div {
        height:48px;
        width: 48px;
    }

    img {
        height: 100%;
        width: auto;
    }
</style>