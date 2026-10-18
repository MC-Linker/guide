# MC Linker Guide

The official documentation for [MC Linker](https://mclinker.com), the Discord bot that links your Minecraft server with Discord. Live at [guide.mclinker.com](https://guide.mclinker.com).

## Development

```bash
npm install
npm run dev     # http://localhost:8889
npm run build   # output in docs/.vuepress/dist
```

The build reports broken internal links, so check its output before you push.

## Structure

```
docs/
  README.md                 Home page
  guide/
    README.md               Introduction
    getting-started/        Quick start, installing, connecting, permissions, disconnecting
    features/               One page per feature (chat bridge, stat channels, role sync, …)
    commands/               One page per command, plus an overview of all commands
    plugin/                 In-game commands, config.yml, plugin permissions, integrations
    help/                   Troubleshooting and FAQ
  .vuepress/
    components/             BotReply, McChat, SplitView, CommandInfo
    styles/                 Theme overrides (brand colours, fonts)
    public/                 Logo, the bot's emoji, screenshots
    config.js               Navbar, sidebar, redirects from old URLs
    client.js               Registers components and discord-components
```

Old URLs (like `/guide/core/connect.html`) redirect to their new pages. When you move a page, add a redirect in `config.js`.

## Writing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the page templates, components and style rules.
