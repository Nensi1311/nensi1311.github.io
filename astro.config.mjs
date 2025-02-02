import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdownConfig from "./markdown.config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  markdown: {
    ...markdownConfig,
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    mdx({
      ...markdownConfig,
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "one-dark-pro",
      },
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    robotsTxt({
      sitemap: [
        "https://nensipansuriya.github.io/sitemap-0.xml",
        "https://nensipansuriya.github.io/sitemap-index.xml",
      ],
    }),
    playformCompress(),
  ],
  site: "https://nensipansuriya.github.io/",
  output: "static",
  outDir: "./docs",
  build: {
    assets: "astro",
  },
});
