<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
  
    export let images:String[] = [""];
  
    let currentIndex = 0;
    let interval:number;
  
    onMount(() => {
      startAutoScroll();
    });

    onDestroy(() => {
        stopAutoScroll();
    });
  
    function startAutoScroll() {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
      }, 3000);
    }
  
    function stopAutoScroll() {
      clearInterval(interval);
    }
  </script>
  
  <style>
    .carousel {
      display: flex;
      overflow: hidden;
      transform: translateY(5em);
    }
  
    .carousel img {
      flex: 1;
      object-fit: cover;
      width: 100%;
      transition: transform 0.5s ease-in-out;
    }
  </style>
  
  <div class="carousel" on:mouseenter={stopAutoScroll} on:mouseleave={startAutoScroll}>
    {#each images as image, i (image)}
      <img src={image} alt={`Image ${i + 1}`} style={`transform: translateX(-${currentIndex * 100}%)`} />
    {/each}
  </div>