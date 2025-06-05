import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Cloud Infrastructure and Technology Blog | Krzysztof Szyper',
    description: 'Explore my latest insights and tutorials on cloud infrastructure, and DevOps practices.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}