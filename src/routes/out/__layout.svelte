<script>
// @ts-nocheck
import { setContext } from 'svelte'
import { out } from '/static/content/out.yaml'

setContext('out', out)
</script>


<slot />

