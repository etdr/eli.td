<script>
import { setContext } from "svelte";
import { page } from "$app/state";
import { parse } from "yaml";

let { children } = $props();

//@ts-ignore
import outYaml from "../../data/out.yaml?raw";

const out = parse(outYaml);

setContext("out", out);

let subout = $derived(page.url.pathname.split("/").at(-1));
let slashSub = $derived(subout !== "out" ? `/${subout}` : "");
</script>

<h1>out<span class="non-b">{slashSub}</span></h1>

{@render children()}
