<!-- <script>
// @ts-nocheck
import { page } from '$app/stores'
import { getContext } from 'svelte'

import Project from '/src/components/out/Project.svelte'

const subout = $page.params.subout

const sub = getContext('out')[subout]

console.log($page)
</script>

<h1>output<span class="non-b">/{subout}</span></h1>

{#if sub.type === 'projects'}
  {#each sub.projects as p}
    <Project {p} />
  {/each}
{/if}
 -->
