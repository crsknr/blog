# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About This Repository

This is Christoph Kiener's personal blog and portfolio, built using a modified version of the [Nim template](https://github.com/ibelick/nim) by [@ibelick](https://github.com/ibelick). The template has been customized for technical content focusing on acoustics, DSP, and embedded systems.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build the application for production (exports static site)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js and Prettier rules

## Architecture Overview

This is a Next.js 15 personal blog/portfolio built with React 19, Tailwind CSS v4, and MDX. The site is configured for static export with GitHub Pages deployment using a `/blog` base path.

### Core Structure

- **App Router**: Uses Next.js 15 app directory structure
- **Static Export**: Configured for static site generation (`output: 'export'`)
- **Base Path**: Set to `/blog` for GitHub Pages deployment
- **MDX Integration**: Blog posts are written in MDX with math support (KaTeX) and footnotes

### Key Files

- `app/data.ts` - Central data store for projects, blog posts, work experience, education, and social links
- `app/page.tsx` - Main portfolio page with animated sections
- `app/blog/*/page.mdx` - Individual blog posts in MDX format
- `mdx-components.tsx` - Custom MDX components including syntax highlighting
- `next.config.mjs` - Next.js configuration with MDX and static export setup

### Data Management

All content is managed through `app/data.ts` with TypeScript interfaces for:
- Projects with video demonstrations
- Blog posts with metadata and descriptions
- Work experience and education timelines
- Technical skills categorized by domain
- Social links and contact information

### Styling & Components

- **Tailwind CSS v4** with custom design system
- **Motion Primitives** for animations (motion library)
- **Custom UI Components** in `components/ui/` including:
  - Animated backgrounds and magnetic interactions
  - Morphing dialogs for video playback
  - Text effects and scroll progress indicators
  - Spotlight effects for experience cards

### MDX Configuration

Blog posts support:
- Math expressions via remark-math and rehype-katex
- Footnotes via remark-footnotes
- Syntax highlighting via sugar-high
- Custom components like `<Cover>` for images

### Theme System

- Dark/light mode support via next-themes
- System preference detection
- Consistent color palette using Zinc color scale

## Blog Post Structure

Create new blog posts as `app/blog/[slug]/page.mdx`:
1. Add entry to `BLOG_POSTS` array in `app/data.ts`
2. Create corresponding directory and MDX file
3. Include images in `public/blog/[slug]/` directory
4. Use math expressions with `$$` for display math, `$` for inline

## Development Notes

- Site is configured for GitHub Pages deployment with basePath
- All images are unoptimized for static export compatibility
- TypeScript strict mode enabled with path aliases (`@/*`)
- ESLint includes Next.js rules, TypeScript support, and Prettier integration
- Uses Geist font family for typography