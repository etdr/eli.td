import { defineMDSveXConfig as defineConfig } from 'mdsvex'

// import remarkMath from 'remark-math'
// import rehypeKatexSvelte from 'rehype-katex-svelte'



const config = defineConfig({
  extensions: ['.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [

  ],
  rehypePlugins: [

  ]
})

export default config;
