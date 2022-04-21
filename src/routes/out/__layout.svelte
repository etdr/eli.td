<script>
import { setContext } from 'svelte'
//@ts-nocheck
import { page } from '$app/stores'
// //@ts-nocheck
// import { assets } from '$app/paths'
// import { parse } from 'yaml'


// const out = await import(`${assets}/texts/out.yaml`)
//@ts-ignore
import out from '../../data/out.yaml'

setContext('out', out)

let slashSub, subout
$: subout = $page.url.pathname.split('/').at(-1)
$: slashSub = subout !== 'out' ? `/${subout}` : ''

</script>

<h1>out<span class="non-b">{slashSub}</span></h1>

<slot />