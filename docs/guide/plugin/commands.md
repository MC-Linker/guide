---
seoTitle: "Discord-Linker in-game commands"
---

# In-game commands

The Discord-Linker plugin adds four commands to your Minecraft server. In the server console, type them without the slash.

| Command | Who can use it | What it does |
|---|---|---|
| [`/linker`](#linker) | Operators | Connects and configures the plugin |
| [`/verify`](#verify) | Every player | Finishes linking your account |
| [`/discord`](#discord) | Every player | Shows an invite to the linked Discord server |
| [`/dm`](#dm) | Every player | Sends a DM to someone on Discord |

You can change who may use them with a permission plugin. See [Plugin permissions](./permissions.md).

## /linker

Connects the plugin to Discord and changes its settings.

| Subcommand | What it does |
|---|---|
| `/linker connect <code>` | Finishes [`/connect`](../getting-started/connecting.md). Paste the code the bot gave you. |
| `/linker disconnect` | Removes the link to Discord. See [Disconnecting](../getting-started/disconnecting.md). |
| `/linker reload` | Reloads `config.yml` and reconnects to Discord. |
| `/linker bot_port [port]` | Shows or sets the port used to reach the bot. Only change it for a [custom bot](../features/custom-bot.md). The default is `80`. |
| `/linker debug` | Turns detailed logging on or off. Useful when the support team asks for logs. It can spam the console, so only turn it on for a short time. |

<McChat :lines="['> /linker reload', '&aSuccessfully reloaded the configuration and reconnected to Discord!']" />

## /verify

```
/verify <code>
```

Finishes [account linking](../features/account-linking.md). Run `/account connect` in Discord first; it gives you the code. Only players can use it, not the console.

<McChat :lines="['> /verify a8f3c', '&aYou have been verified successfully.']" />

## /discord

Shows a clickable invite to the Discord server your Minecraft server is linked to. MC Linker uses your vanity URL or an existing invite, or creates one.

<McChat :lines="['> /discord', '&aClick the following link to join the Discord server: &9https://discord.gg/linker-smp']" />

## /dm

```
/dm <user> <message>
```

Sends a Discord DM to a member of the linked Discord server. `<user>` is a Discord username or ID, or the Minecraft name of a linked player. See [Direct messages](../features/direct-messages.md).

<McChat :lines="['> /dm TheAnnoying meet me at spawn?', '&aDM sent to TheAnnoying: meet me at spawn?']" />

## Good to know

On Fabric, Forge and NeoForge, `/verify`, `/discord` and `/dm` only show up while the server is connected to Discord.
