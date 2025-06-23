import createMDX from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkFootnotes from 'remark-footnotes';

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, [remarkFootnotes, { inlineNotes: true }]],
    rehypePlugins: [rehypeKatex],
  },
});

const finalConfig = withMDX({
  ...baseConfig,
  output: 'export',
});

export default finalConfig;
