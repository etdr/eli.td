import adapter from 'svelte-adapter-bun'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // extensions: [".svelte"],

  kit: {
    adapter: adapter()
  }
}

export default config
