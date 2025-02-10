// import { mdsvex } from 'mdsvex'
// import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte"],

  kit: {
    adapter: adapter(),
    // prerender: {
    //   default: true
    // }
  },

  preprocess: [
    preprocess(),
    // mdsvex(mdsvexConfig),
  ]
}

export default config;
