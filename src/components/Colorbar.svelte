<script>
// @ts-nocheck

import * as d3 from 'd3'

import getStopData from '$lib/huesha'
import { onDestroy, onMount } from 'svelte'

const stopData = getStopData()

let updateInterval
let resizeListener

onMount(() => {

  const cb = d3.select('#colorbar')

  const stops = cb.selectAll('stop')

  function update () {
    const t = d3.transition()
                .duration(1000)
                .ease(d3.easeExpInOut)

    const sD = getStopData()

    stops.data(sD)
    stops.transition(t)
      .attr('offset', d => d[1])
      .attr('stop-color', d => d[0])
  }

  updateInterval = setInterval(update, 1000)


})

onDestroy(() => {
  clearInterval(updateInterval)
})

function handleResize () {
  const hg = document.getElementById('hg')
  if (innerWidth <= 780) {
    hg.setAttribute('x2', '100%')
    hg.setAttribute('y2', '0%')
  } else {
    hg.setAttribute('x2', '0%')
    hg.setAttribute('y2', '100%')
  }
}

// onMount(() => {
//   sEls = [...document.getElementsByTagName('stop')]


//   function reStop () {
//     stops = getStops()

    
//   }

//   setInterval(reStop, 1000)
// })
</script>

<!-- <svelte:window on:resize={handleResize} /> -->


<div id="colorbar">
  <svg height="100%" width="100%">
    <defs>
      <linearGradient id="hg" x1="0%" x2="0%" y1="0%" y2="100%">
        {#each stopData as s, i (i)}
          <stop id={`hgs${i.toString().padStart(2,'0')}`} class="cb-stop" offset={s[1]} stop-color={s[0]} />
        {/each}
      </linearGradient>
    </defs>

    <rect id="hgrect" x="0" y="0" height="100%" width="100%" fill="url('#hg')" />
  </svg>
</div>


<style lang="postcss">
#colorbar {
  grid-area: colorbar;

}

</style>