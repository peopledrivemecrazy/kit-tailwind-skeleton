import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  compilerOptions: {
    sourcemap: false,
  },
  kit: {},
};

export default config;
