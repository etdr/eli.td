import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import yaml from '@rollup/plugin-yaml'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
    vite: {
      server: {
        port: 3000
      },
      plugins: [
        yaml()
      ],
      // json: {
      //   stringify: true
      // }
    }
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ]
};

export default config;
