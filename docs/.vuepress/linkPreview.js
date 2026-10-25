/**
 * Link previews for every guide page: Open Graph tags plus a Discord "component embed",
 * a custom preview with formatted text, images and link buttons.
 * https://docs.discord.com/developers/link-previews/component-embeds
 *
 * Discord drops the whole preview if the payload breaks a rule: one Container (17) at the
 * root; only types 1, 2, 9, 10, 11, 12, 14 and 17; buttons are link buttons (style 5) with
 * no extra keys; at most 40 components, 10 media items and 3000 bytes; absolute URLs.
 * It doesn't run JavaScript, so the payload goes into the prerendered head.
 * Same format as mclinker.com (src/lib/linkPreview.ts in the main-page repo).
 */
import fs from 'node:fs';
import { redirects } from './redirects.js';

const guide = 'https://guide.mclinker.com';
const site = 'https://mclinker.com';
const green = 0x6f9e2d;

// The guide's own copies (public/assets), so a move on mclinker.com can't break the previews.
const logo = `${site}/logo.png`;
const images = Object.fromEntries(
  ['inventory.png', 'profilecustomization.png', 'statchannel.png', 'userinfo.png', 'serverinfo.png']
    .map(f => [f, `${guide}/assets/${f}`]),
);

/** Cloudflare Pages serves every page without `.html` (it 308-redirects the `.html` URL), so that's the address to give out. */
const clean = path => path.replace(/\.html$/, '');

const sections = {
  'getting-started': 'Getting started',
  features: 'Features',
  commands: 'Commands',
  plugin: 'Plugin',
  help: 'Help',
};

const links = {
  invite: `${site}/invite`,
  support: 'https://discord.gg/rX36kZUGNK',
  quickStart: `${guide}/guide/getting-started/quick-start`,
  commands: `${guide}/guide/commands/`,
};

const text = content => ({ type: 10, content });
const button = (label, url) => ({ type: 2, style: 5, label, url });
const row = (...components) => ({ type: 1, components });
const section = (content, accessory) => ({ type: 9, components: [text(content)], accessory });
const thumbnail = url => ({ type: 11, media: { url } });

/** The first paragraph of the page as plain text, for the description. */
function firstParagraph(markdown) {
  const body = markdown.replace(/^---[\s\S]*?---/, '');
  for (const block of body.split(/\n\s*\n/)) {
    const b = block.trim();
    if (!b || /^(#|<|```|\||!\[|:::|>|-\s|\d+\.)/.test(b)) continue;
    return b
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '')
      .replace(/\s+/g, ' ');
  }
  return '';
}

const clip = (s, n) => (s.length > n ? `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…` : s);

function embedFor(page, description) {
  const url = guide + clean(page.path);
  const home = page.path === '/';
  const crumb = page.path.split('/')[2];
  const label = sections[crumb] ? `MC Linker Guide › ${sections[crumb]}` : 'MC Linker Guide';

  const children = [
    section(`${home ? '' : `-# ${label}\n`}## [${home ? 'MC Linker Guide' : page.title}](${url})\n${description}`, thumbnail(logo)),
  ];

  // One image only: Discord crops gallery images into a mosaic, and ours all have
  // different shapes. A single image is shown whole. The front page shows /userinfo,
  // other pages show the first image they use.
  const image = home ? 'userinfo.png' : [...page.content.matchAll(/\/assets\/([a-z_]+\.png)/g)].map(m => m[1]).find(f => images[f]);
  if (image) children.push({ type: 12, items: [{ media: { url: images[image] } }] });

  const headings = (page.headers ?? []).map(h => h.title).filter(Boolean);
  if (headings.length) children.push(text(`-# On this page: ${clip(headings.join(' · '), 200)}`));

  children.push({ type: 14 });
  children.push(home
    ? row(button('Quick start', links.quickStart), button('All commands', links.commands),
        button('Add to Discord', links.invite), button('Support server', links.support))
    : row(button('Read this page', url), button('Quick start', links.quickStart),
        button('Add to Discord', links.invite), button('Support server', links.support)));

  return { component: { type: 17, accent_color: green, components: children } };
}

/** Structured data for search engines: the site on the front page, an article with breadcrumbs elsewhere. */
function jsonLd(page, title, description, url) {
  const publisher = { '@type': 'Organization', name: 'MC Linker', url: site, logo };
  const crumb = page.path.split('/')[2];
  const data = page.path === '/'
    ? { '@context': 'https://schema.org', '@type': 'WebSite', name: 'MC Linker Guide', url: `${guide}/`, description, publisher }
    : {
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'TechArticle', headline: page.title, description, url, inLanguage: 'en', publisher },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'MC Linker Guide', item: `${guide}/` },
            ...(sections[crumb] ? [{ '@type': 'ListItem', position: 2, name: sections[crumb] }] : []),
            { '@type': 'ListItem', position: sections[crumb] ? 3 : 2, name: page.title },
          ] },
        ],
      };
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const linkPreviewPlugin = () => ({
  name: 'mc-linker-link-preview',
  extendsPage(page) {
    if (!page.path.endsWith('.html') && !page.path.endsWith('/')) return;
    const fm = page.frontmatter;
    const home = page.path === '/';
    if (page.path === '/404.html' || (!page.title && !home)) return;
    const title = home ? 'MC Linker Guide' : `${page.title} · MC Linker Guide`;
    // Discord shows the longer text; search results cut off around 155 characters.
    const description = clip(fm.description || (home ? fm.tagline : firstParagraph(page.content)) || '', 300);
    if (description && !fm.description) fm.description = clip(description, 155);
    const url = guide + clean(page.path);

    const json = JSON.stringify(embedFor(page, description)).replace(/</g, '\\u003c');
    const bytes = Buffer.byteLength(json);
    if (bytes > 3000) throw new Error(`${page.path}: component embed is ${bytes} bytes, Discord allows 3000`);

    fm.head = [
      ...(fm.head ?? []),
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:type', content: home ? 'website' : 'article' }],
      ['link', { rel: 'canonical', href: url }],
      ['script', { type: 'application/ld+json' }, jsonLd(page, title, description, url)],
      ['script', { id: 'discord:component-embed', type: 'application/json' }, json],
    ];
  },
  // A sitemap with the clean URLs, and real 301s for the old URLs (both the .html and clean form).
  onGenerated(app) {
    const urls = app.pages
      .filter(p => p.path !== '/404.html' && (p.path.endsWith('.html') || p.path.endsWith('/')))
      // No lastmod: Cloudflare's shallow clone would give every page the build date.
      .map(p => `  <url><loc>${guide}${clean(p.path)}</loc></url>`);
    fs.writeFileSync(app.dir.dest('sitemap.xml'),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
    fs.writeFileSync(app.dir.dest('_redirects'), Object.entries(redirects)
      .flatMap(([from, to]) => [`${from} ${clean(to)} 301`, ...(from.endsWith('.html') ? [`${clean(from)} ${clean(to)} 301`] : [])])
      .join('\n') + '\n');
  },
});
