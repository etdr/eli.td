<script>
// @ts-nocheck

import getStops from '$lib/huesha'
import { onMount } from 'svelte';

let stops = getStops()

let sEls

onMount(() => {
  sEls = [...document.getElementsByTagName('stop')]


  function reStop () {
    stops = getStops()

    stops.forEach((stop, i) => {
      sEls[i].style.offset = `${stop[1]}`
      sEls[i].style.stopColor= `${stop[0]}`
      
    })
  }

  setInterval(reStop, 1000)
})
</script>



<div id="colorbar">
  <svg height="100%" width="100%">
    <defs>
      <linearGradient id="hg" x1="0%" x2="0%" y1="0%" y2="100%">
        {#each stops as s, i (i)}
          <stop id={`hgs${i.toString().padStart(2,'0')}`} offset={s[1]} stop-color={s[0]} />
        {/each}
      </linearGradient>
    </defs>

    <rect id="hgrect" x="0" y="0" height="100%" width="100%" fill="url('#hg')" />
  </svg>
</div>


<style lang="postcss">
#colorbar {
  grid-area: colorbar;

  svg {
    transition: all 1s ease-out;
  }

  stop {
    transition: all 1s ease-out;
  }
}
</style>