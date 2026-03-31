import adapter from 'svelte-adapter-bun'
import smartquotes from './src/lib/smartquotes.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [smartquotes()],

  kit: {
    adapter: adapter()
  }
}

export default config
