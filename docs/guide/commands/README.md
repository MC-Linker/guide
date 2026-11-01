---
seoTitle: "All Discord commands for your Minecraft server"
---

# All commands

Every MC Linker command, what it does and who can use it by default. You can change who may use each command in [Permissions](../getting-started/permissions.md).

::: tip Mention instead of typing names
Wherever a command asks for a `user`, you can type a Minecraft username, a UUID, or @mention a Discord member who [linked their account](../features/account-linking.md).
:::

## Player info

| Command | What it does | Default | Docs |
|---|---|---|---|
| `/inventory` | Shows a player's inventory as an image | Everyone | [/inventory](./inventory.md) |
| `/stats` | Shows a player's statistics | Everyone | [/stats](./stats.md) |
| `/advancements` | Shows a player's advancements | Everyone | [/advancements](./advancements.md) |
| `/userinfo` | Shows a player's status, health, XP and more | Everyone | [/userinfo](./userinfo.md) |

## Server

| Command | What it does | Default | Docs |
|---|---|---|---|
| `/serverinfo` | Shows info about your Minecraft server | Everyone | [/serverinfo](./serverinfo.md) |
| `/command` | Runs any Minecraft command | Manage Server | [/command](./command.md) |
| `/message` | Sends a private message to an online player | Everyone | [/message](./message.md) |

## Moderation

| Command | What it does | Default | Docs |
|---|---|---|---|
| `/ban`, `/unban` | Bans or unbans a player | Ban Members | [/ban and /unban](./ban-unban.md) |
| `/kick` | Kicks an online player | Kick Members | [/kick](./kick.md) |
| `/op`, `/deop` | Gives or takes operator status | Manage Server | [/op and /deop](./op-deop.md) |
| `/gamemode` | Changes a player's game mode | Manage Server | [/gamemode](./gamemode.md) |

## Setup and settings

| Command | What it does | Default | Docs |
|---|---|---|---|
| `/connect` | Links your Minecraft server | Manage Server | [Connecting](../getting-started/connecting.md) |
| `/disconnect` | Unlinks your Minecraft server | Manage Server | [Disconnecting](../getting-started/disconnecting.md) |
| `/chatchannel` | Sets up the chat bridge and console channels | Manage Server | [Chat bridge](../features/chat-bridge.md) |
| `/statchannel` | Sets up channels that show live server stats | Manage Server | [Stat channels](../features/stat-channels.md) |
| `/rolesync` | Syncs Discord roles with Minecraft teams or groups | Manage Server | [Role sync](../features/role-sync.md) |
| `/account` | Links your Minecraft account, manages links and DMs | Everyone | [Account linking](../features/account-linking.md) |
| `/customize` | Changes MC Linker's look in your server | Manage Server | [Customization](../features/customization.md) |
| `/help` | Explains every command | Everyone | [/help](./help.md) |

## In Minecraft

These run on your Minecraft server, not in Discord:

| Command | What it does | Docs |
|---|---|---|
| `/linker` | Connects, disconnects and configures the plugin | [Plugin commands](../plugin/commands.md#linker) |
| `/verify` | Finishes linking your account | [Plugin commands](../plugin/commands.md#verify) |
| `/discord` | Shows an invite to the linked Discord server | [Plugin commands](../plugin/commands.md#discord) |
| `/dm` | Sends a DM to someone on Discord | [Direct messages](../features/direct-messages.md) |
