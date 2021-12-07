import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
import path from 'path'


/** @type {import('@sveltejs/kit').Config} */
const config = {



  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),

    paths: {
      //uncomment these for github pages, add repo name if applicable
      //base: "/libresprite-svelte",
      //assets: "https://jemhop.github.io/libresprite-svelte"
    },

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
