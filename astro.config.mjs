import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { prettyCodeOptions } from './plugins/rehype-pretty-code-config';
import { rehypeAutolinkHeadingsOptions } from './plugins/rehype-autolink-headings-config';
import { remarkProcessShowLineNumbers } from './plugins/remark-process-show-line-numbers';
import { rehypeAddLineNumbers } from './plugins/rehype-add-line-numbers';

const markdownConfig = {
  remarkPlugins: [
    remarkProcessShowLineNumbers,
  ],
  rehypePlugins: [
    rehypeSlug,
    [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    [rehypePrettyCode, prettyCodeOptions],
    rehypeAddLineNumbers,
  ],
  syntaxHighlight: false,
};

// https://astro.build/config
export default defineConfig({
  site: 'https://ifpb.github.io',
  base: '/pw2',
  markdown: markdownConfig,
  integrations: [react(), tailwind(), mdx()],
});
