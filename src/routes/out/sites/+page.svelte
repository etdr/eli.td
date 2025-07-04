<script>
  //@ts-nocheck
  import { getContext } from 'svelte'
  
  import Project from '../../components/out/Project.svelte'
  
  const sites = getContext('out').out.sites
  
  </script>
  
  
  {#each sites.projects as p}
    <Project {p} />
  {/each}
  