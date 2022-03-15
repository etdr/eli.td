// shamelessly ripped from
// https://svelte.dev/repl/ccaef6f825904b33ae204ab74c8ca675?version=3.46.4

import katex from 'katex'

export default function katexify (m, displayMode) {
  return katex.renderToString(m, {
    displayMode,
    throwOnError: false
  })
}