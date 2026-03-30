<script>
import getStopData from '$lib/huesha'
import { onMount, onDestroy } from 'svelte'

const N = 16
const DURATION = '1s'
const EASING = 'cubic-bezier(0.33, 1, 0.68, 1)' // ~cubicOut

const gradient = `linear-gradient(to bottom, ${
  Array.from({length: N}, (_, i) => `var(--c${i}) var(--o${i})`).join(', ')
})`

const transition = Array.from({length: N}, (_, i) =>
  `--c${i} ${DURATION} ${EASING}, --o${i} ${DURATION} ${EASING}`
).join(', ')

let el
let interval

function applyStops() {
  const stops = getStopData()
  for (let i = 0; i < stops.length; i++) {
    el.style.setProperty(`--c${i}`, stops[i].color)
    el.style.setProperty(`--o${i}`, `${(stops[i].offset * 100).toFixed(1)}%`)
  }
}

onMount(() => {
  for (let i = 0; i < N; i++) {
    try {
      CSS.registerProperty({ name: `--c${i}`, syntax: '<color>', inherits: false, initialValue: '#000000' })
      CSS.registerProperty({ name: `--o${i}`, syntax: '<percentage>', inherits: false, initialValue: '0%' })
    } catch (e) {
      // Already registered (e.g. HMR reload)
    }
  }

  applyStops()
  interval = setInterval(applyStops, 1000)
})

onDestroy(() => {
  clearInterval(interval)
})
</script>

<div id="colorbar" bind:this={el}
  style="background: {gradient}; transition: {transition};">
</div>

<style >
#colorbar {
  grid-column-start: cbleft;
  grid-column-end: sideright;
  grid-row-start: pagetop;
  grid-row-end: pagebottom;
  --_fade: linear-gradient(to right,
    black 10%,
    rgba(0,0,0,0.98) 14%,
    rgba(0,0,0,0.94) 18%,
    rgba(0,0,0,0.88) 22%,
    rgba(0,0,0,0.80) 26%,
    rgba(0,0,0,0.71) 30%,
    rgba(0,0,0,0.61) 34%,
    rgba(0,0,0,0.50) 38%,
    rgba(0,0,0,0.39) 42%,
    rgba(0,0,0,0.29) 46%,
    rgba(0,0,0,0.20) 50%,
    rgba(0,0,0,0.13) 54%,
    rgba(0,0,0,0.07) 58%,
    rgba(0,0,0,0.03) 62%,
    transparent 66%
  );
  mask-image: var(--_fade);
  -webkit-mask-image: var(--_fade);
  pointer-events: none;
}

@media (max-width: 780px) {
  #colorbar {
    grid-column: cbleft / cbright;
    grid-row: pagetop / pagebottom;
    mask-image: none;
    -webkit-mask-image: none;
  }
}
</style>