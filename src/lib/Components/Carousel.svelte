<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    export let images:string[] = [];
    let currentIndex = 0;
    let interval:number;
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    function startAutoPlay() {
      interval = setInterval(nextSlide, 3000);
    }
  
    function stopAutoPlay() {
      clearInterval(interval);
    }
  
    onMount(startAutoPlay);
  
    onDestroy(stopAutoPlay);
  </script>
  
  <div class="carousel" role="list" on:mouseenter={stopAutoPlay} on:mouseleave={startAutoPlay}>
      {#if images.length > 0}
          <div class="slide" style="background-image: url({images[currentIndex]})" />
      {/if}
  </div>
  
  <style>
    .carousel {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .slide {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        transition: transform 0.5s ease;
        z-index: 1;
    }

    .slide:hover {
        cursor: pointer;
    }

    .slide:active {
        transform: translateX(-50%) scale(2); 
    }

  </style>