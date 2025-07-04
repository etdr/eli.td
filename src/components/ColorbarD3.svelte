<script>
// @ts-nocheck
import getStopData from '$lib/huesha'
import { onDestroy, onMount } from 'svelte'
import { tweened } from 'svelte/motion'
import { cubicOut } from 'svelte/easing'

// Helper to parse a hex color string to an [r, g, b] array
function parseHex(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

// Helper to format an [r, g, b] array back to a hex string
function formatHex(rgb) {
    const r = Math.round(rgb[0]).toString(16).padStart(2, '0');
    const g = Math.round(rgb[1]).toString(16).padStart(2, '0');
    const b = Math.round(rgb[2]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

// The main interpolator for the tweened store
function interpolateStops(a, b) {
    // Create a map of the target array's stops by their stable ID
    const b_map = new Map(b.map(stop => [stop.id, stop]));

    // Create interpolators for each stop in the source array
    const interpolators = a.map(a_stop => {
        const b_stop = b_map.get(a_stop.id); // Find the matching stop in the target array

        const a_offset = a_stop.offset;
        const b_offset = b_stop.offset;
        
        const a_color_rgb = parseHex(a_stop.color);
        const b_color_rgb = parseHex(b_stop.color);

        return (t) => {
            const offset = a_offset * (1 - t) + b_offset * t;
            const color_rgb = [
                a_color_rgb[0] * (1 - t) + b_color_rgb[0] * t, // R
                a_color_rgb[1] * (1 - t) + b_color_rgb[1] * t, // G
                a_color_rgb[2] * (1 - t) + b_color_rgb[2] * t  // B
            ];
            
            return {
                id: a_stop.id, // Keep the ID
                offset: offset,
                color: formatHex(color_rgb)
            };
        };
    });

    return (t) => {
        return interpolators.map(fn => fn(t)).sort((x, y) => x.offset - y.offset);
    };
}

const stopData = tweened(getStopData(), {
  duration: 1000,
  easing: cubicOut,
  interpolate: interpolateStops
})

let updateInterval

onMount(() => {
  const update = () => {
    stopData.set(getStopData())
  }
  updateInterval = setInterval(update, 1000)
})

onDestroy(() => {
  clearInterval(updateInterval)
})
</script>

<div id="colorbar">
  <svg height="100%" width="100%">
    <defs>
      <linearGradient id="hg" x1="0%" x2="0%" y1="0%" y2="100%">
        {#each $stopData as s, i (i)}
          <stop 
            offset={s.offset} 
            stop-color={s.color}
          />
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