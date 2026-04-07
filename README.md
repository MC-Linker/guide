# MC Linker Guide

The official documentation for [MC Linker](https://mclinker.com) — a Discord bot that links your Minecraft server to Discord.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The output is generated in `docs/.vuepress/dist`.

## Structure

```
docs/
  guide/
    core/          # Account linking, connecting, permissions
    moderation/    # Ban, kick, gamemode, op/deop
    player-info/   # Stats, inventory, advancements, messages
    plugin/        # Plugin config and linker command
    server-management/  # Chat channels, stat channels, rolesync
  .vuepress/
    components/    # Vue components (DefaultBadge)
    layouts/       # Layout overrides (WIP banner)
    styles/        # Global SCSS overrides
    public/        # Static assets
    config.js      # VuePress config
    client.js      # Client-side config
```
