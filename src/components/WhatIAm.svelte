<script>
import { onMount, onDestroy } from "svelte";

import whats from "../data/whats.json";

function prefix(word) {
  if (typeof word === "object") {
    return `${word.asuffix} ${word.word}`;
  }
  return ["a", "e", "i", "o"].includes(word[0].toLowerCase())
    ? `n ${word}`
    : ` ${word}`;
}

function getRandomWhat() {
  return prefix(whats[Math.floor(Math.random() * whats.length)]);
}

let what = $state([]);
let visible = $state(true);
let interval;

onMount(() => {
  what = getRandomWhat();

  interval = setInterval(() => {
    visible = false;
    setTimeout(() => {
      what = getRandomWhat();
      visible = true;
    }, 400);
  }, 3600);
});

onDestroy(() => {
  clearInterval(interval);
});
</script>

<span class="what" class:visible>{what}.</span>

<style>
.what {
  opacity: 0;
  filter: blur(4px);
  transition:
    opacity 0.4s ease,
    filter 0.4s ease;
}
.what.visible {
  opacity: 1;
  filter: blur(0px);
}
</style>
