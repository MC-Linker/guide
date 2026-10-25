---
seoTitle: "Discord-Linker plugin permission nodes"
---

# Plugin permissions

The in-game commands use these permission nodes.

| Permission | Command | Default |
|---|---|---|
| `discordlinker.linker` | [`/linker`](./commands.md#linker) | Operators only |
| `discordlinker.verify` | [`/verify`](./commands.md#verify) | Everyone |
| `discordlinker.discord` | [`/discord`](./commands.md#discord) | Everyone |
| `discordlinker.dm` | [`/dm`](./commands.md#dm) | Everyone |

## Paper, Spigot and Purpur

Change them with any permission plugin. With [LuckPerms](https://luckperms.net):

```
# Let the admin group use /linker without being OP
/lp group admin permission set discordlinker.linker true

# Stop default players from using /dm
/lp group default permission set discordlinker.dm false
```

## Fabric, Forge and NeoForge

Mods use Minecraft's permission levels instead of nodes:

| Command | Needs |
|---|---|
| `/linker` | Operator level 4 (`/op` gives this by default) |
| `/verify`, `/discord`, `/dm` | Every player |

## Discord permissions

Who can use the slash commands in Discord is set in Discord itself. See [Permissions](../getting-started/permissions.md).
