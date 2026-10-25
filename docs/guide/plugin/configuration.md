---
seoTitle: "Discord-Linker plugin configuration (config.yml)"
---

# Configuration

The plugin works without any configuration: everything important is set up with slash commands in Discord. The config file is only for fine-tuning how messages look and how often things are sent.

## Where it is

| Server software | File |
|---|---|
| Paper, Spigot, Purpur | `plugins/Discord-Linker/config.yml` |
| Fabric, Forge, NeoForge | `config/discordlinker/config.yml` |

After editing it, run `/linker reload` (or restart the server).

## The default config

```yaml
# The port to reach the discord bot. Never change this unless you are using a custom discord bot (https://discord.com/discovery/applications/712759741528408064)!
bot_port: 80

# The formatting of chat messages that are sent from discord to minecraft
message: "&l&9Discord &8| &l&7%username% &8>>&r %message%"
# The formatting of private chat messages that are sent from discord to minecraft using `/message`
private_message: "&9&o&lDiscord &8&o| &7&o%username% whispers to you: %message%"
# The formatting of chat messages from minecraft to discord that reply to another message
# %reply_message_reduced% is the message that was replied to, but reduced to 30 characters
# %reply_message% is the full message that was replied to
# %reply_username% is the username of the person who sent the message that was replied to
reply_message: "&l&7(replying to %reply_username%) &8->&r %reply_message_reduced% \n &l&9Discord &8| &l&7%username% &8>>&r %message%"

# The interval in seconds for polling team/group membership changes (used for synced roles)
sync_check_interval: 30

# Console forwarding buffer settings
# Flushes logs to discord either after chatconsole_flush_seconds or when the message buffer reaches chatconsole_max_chars
chatconsole_flush_seconds: 5
# Min: 100, Max: 2000
chatconsole_max_chars: 1000
```

## Settings

| Setting | Default | What it does |
|---|---|---|
| `bot_port` | `80` | The port used to reach MC Linker. Only change it for a [custom bot](../features/custom-bot.md). You can also use `/linker bot_port`. |
| `message` | see above | How Discord messages from a [chat channel](../features/chat-bridge.md) look in Minecraft. |
| `private_message` | see above | How [`/message`](../commands/message.md) and [DM replies](../features/direct-messages.md) look in Minecraft. |
| `reply_message` | see above | How Discord messages that reply to another message look in Minecraft. |
| `sync_check_interval` | `30` | How often, in seconds, teams and Vault groups are checked for [role sync](../features/role-sync.md). LuckPerms changes are picked up instantly anyway. |
| `chatconsole_flush_seconds` | `5` | How often, in seconds, collected [console](../features/console-channel.md) lines are sent. |
| `chatconsole_max_chars` | `1000` | Send console lines as soon as this many characters are collected (100 – 2000). |

### Placeholders for message formats

| Placeholder | Becomes |
|---|---|
| `%username%` | The Discord member's display name |
| `%message%` | The message |
| `%reply_username%` | Who wrote the message being replied to |
| `%reply_message%` | The message being replied to |
| `%reply_message_reduced%` | The message being replied to, cut to 30 characters |

Use `&` [colour and formatting codes](https://minecraft.wiki/w/Formatting_codes) like `&a` (green) or `&l` (bold). `\n` starts a new line.

### Example: a shorter chat format

```yaml
message: "&9[Discord] &f%username%&7: &r%message%"
```

<McChat :lines="['&9[Discord] &fTheAnnoying&7: &rme!! bringing sponges']" />

## The connection file

Next to `config.yml` there's a `connection.conn` file. It stores the link to your Discord server. Don't share it, and don't edit it. Deleting it disconnects the server; use `/linker disconnect` instead.
