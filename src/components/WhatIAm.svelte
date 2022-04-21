<script>
// @ts-nocheck
import { blur } from 'svelte/transition'
import { onMount } from 'svelte'

import { assets } from '$app/paths'

import whats from '../data/whats.json'

function prefix (word) {
  if (typeof word === 'object') {
    return `${word.asuffix} ${word.word}`
  }
  return ['a', 'e', 'i', 'o'].includes(word[0].toLowerCase())
    ? `n ${word}`
    : ` ${word}`
}

function getRandomWhat () {
  return prefix(whats[Math.floor(Math.random() * whats.length)])
}

let what = []

onMount(() => {
  what = getRandomWhat()

  setInterval(() => {
    what = getRandomWhat()
  }, 2000)
})

</script>

{#key what}
<span in:blur="{{delay: 300, duration: 500}}" out:blur>{what}.</span>
{/key}