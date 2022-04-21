<script>
//@ts-nocheck
import { getContext } from 'svelte'

import Project from '../../components/out/Project.svelte'

const data = getContext('out').out.data

</script>


{#each data.projects as p}
  <Project {p} />
{/each}
