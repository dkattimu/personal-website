import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
//import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx(), preact()],
    output: "server",
    adapter: vercel(),
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [[rehypeKatex, {}]],
    },
});
