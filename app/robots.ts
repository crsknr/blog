import { WEBSITE_URL } from '@/lib/constants'

export default function robots() {
  return new Response(
    `User-agent: *\nAllow: /\nDisallow: /private/\nSitemap: ${WEBSITE_URL}/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
