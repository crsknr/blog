import createMDX from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkFootnotes from 'remark-footnotes';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export', // Enable static export for GitHub Pages
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, [remarkFootnotes, { inlineNotes: true }]],
    rehypePlugins: [rehypeKatex],
  },
});

export default withMDX(nextConfig);
