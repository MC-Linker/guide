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

const guide = 'https://guide.mclinker.com';
const site = 'https://mclinker.com';
const green = 0x6f9e2d;

// Images come from mclinker.com, where they are already live.
const logo = `${site}/logo.png`;
const images = {
  'inventory.png': `${site}/hero/inventory.png`,
  'profilecustomization.png': `${site}/hero/profilecustomization.png`,
  'statchannel.png': `${site}/showcase/statchannel.png`,
  'userinfo.png': `${site}/showcase/userinfo.png`,
  'serverinfo.png': `${site}/showcase/serverinfo.png`,
};

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
  quickStart: `${guide}/guide/getting-started/quick-start.html`,
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
  const url = guide + page.path;
  const home = page.path === '/';
  const crumb = page.path.split('/')[2];
  const label = sections[crumb] ? `MC Linker Guide › ${sections[crumb]}` : 'MC Linker Guide';

  const children = [
    section(`${home ? '' : `-# ${label}\n`}## [${home ? 'MC Linker Guide' : page.title}](${url})\n${description}`, thumbnail(logo)),
  ];

  // The front page shows off the bot; other pages show the images they use.
  const used = home ? ['inventory.png', 'userinfo.png', 'serverinfo.png', 'statchannel.png'] : [...new Set([...page.content.matchAll(/\/assets\/([a-z_]+\.png)/g)].map(m => m[1]))]
    .filter(f => images[f]).slice(0, 4);
  if (used.length) children.push({ type: 12, items: used.map(f => ({ media: { url: images[f] } })) });

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

export const linkPreviewPlugin = () => ({
  name: 'mc-linker-link-preview',
  extendsPage(page) {
    if (!page.path.endsWith('.html') && !page.path.endsWith('/')) return;
    const fm = page.frontmatter;
    const home = page.path === '/';
    if (page.path === '/404.html' || (!page.title && !home)) return;
    const title = home ? 'MC Linker Guide' : `${page.title} · MC Linker Guide`;
    const description = clip(fm.description || (home ? fm.tagline : firstParagraph(page.content)) || '', 300);
    if (description && !fm.description) fm.description = description;

    const json = JSON.stringify(embedFor(page, description)).replace(/</g, '\\u003c');
    const bytes = Buffer.byteLength(json);
    if (bytes > 3000) throw new Error(`${page.path}: component embed is ${bytes} bytes, Discord allows 3000`);

    fm.head = [
      ...(fm.head ?? []),
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: guide + page.path }],
      ['script', { id: 'discord:component-embed', type: 'application/json' }, json],
    ];
  },
});
