---
seoTitle: "Troubleshooting: fix MC Linker connection problems"
---

# Troubleshooting

Find the message you see (or the problem you have) below. Still stuck? Ask on the [support server](https://discord.gg/rX36kZUGNK); turning on `/linker debug` and sharing the console output helps a lot.

## Connecting

**The code doesn't work in Minecraft**
- Codes are valid for 3 minutes. Run `/connect` again for a fresh one.
- Copy the whole code, including the numbers before the colon.
- Run it as an operator, or in the console without the slash.

**"The server is already connected!"**
The plugin is still linked to a Discord server. Run `/linker disconnect` in Minecraft, then `/connect` again in Discord.

**"Failed to connect to Discord!"**
The code was wrong or expired, or your server can't reach MC Linker. Check the code first. If it keeps happening, see [The plugin doesn't respond](#the-plugin-doesn-t-respond).

**Nothing happens when I type `/linker`**
The plugin isn't loaded. Make sure the `.jar` is in the right folder and matches your server software and version: [Installing the plugin](../getting-started/installing-the-plugin.md). Check the console for errors while the server starts.

## The plugin doesn't respond

You see **Plugin Does Not Respond**, **Server Not Connected** in a chat channel, or commands time out.

1. Is the Minecraft server running? MC Linker can only talk to it while it's online.
2. Is the plugin loaded? Run `linker` in the console.
3. Run `/linker reload`. It reconnects to Discord.
4. Some hosts block outgoing connections. The plugin needs to reach `api.mclinker.com` on port 80. Ask your host to allow it.
5. Did you set a custom `bot_port`? Unless you use a [custom bot](../features/custom-bot.md), it must be `80`: `/linker bot_port 80`.

While your server is offline, some commands show the last data they saw, marked **⚠ Cached Result**.

## Commands

**"Server Not Connected: Your server is not connected. Please use `/connect` first."**
This Discord server isn't linked yet. See [Connecting](../getting-started/connecting.md).

**"User Not Connected"**
You @mentioned someone who hasn't [linked their account](../features/account-linking.md). Type their Minecraft name instead, or ask them to link.

**"Could Not Fetch User"**
The name or UUID isn't a valid Minecraft account. On online-mode servers, only real premium accounts work. Bedrock names need your Floodgate prefix, like `.Steve`.

**"Could Not Download: The user most likely never joined the server."**
`/inventory`, `/stats`, `/advancements` and `/userinfo` read the player's saved data. The player has to have joined your server at least once.

**"No Permission"**
You don't have the permission the command needs. An admin can change that: [Permissions](../getting-started/permissions.md).

**"No response message!"**
The command ran, but the server didn't answer anything. Many commands are silent. It also happens right after `/reload`.

**"Unknown Plugin Error"**
Update Discord-Linker to the newest version and try again.

## Chat channels

| What you see | What to do |
|---|---|
| **No Webhook Permission** | Give MC Linker **Manage Webhooks** in the channel. |
| **Could not Create Webhook** | The channel has 15 webhooks already. Remove unused ones under **Edit Channel › Integrations**. |
| **Cannot Send Messages** | MC Linker needs **Send Messages** and **Embed Links** in the channel. |
| Discord messages don't show in Minecraft | Check `discord-to-minecraft` with `/chatchannel list`. |
| Commands with passwords show up | Hide them with [`/chatchannel filter-commands add`](../features/chat-bridge.md#hide-certain-commands). |

More in [Chat bridge](../features/chat-bridge.md#troubleshooting).

## Stat channels and role sync

- Stat channel names update at most twice every 10 minutes (a Discord limit). See [Stat channels](../features/stat-channels.md#good-to-know).
- **Role Not Editable**: move MC Linker's role above the synced role. See [Role sync](../features/role-sync.md#troubleshooting).

## Account linking

See [Account linking › Troubleshooting](../features/account-linking.md#troubleshooting).

## Still stuck?

Join the [support server](https://discord.gg/rX36kZUGNK) and tell us:

- what you ran and what you saw (a screenshot helps),
- your server software and Minecraft version,
- the console output with `/linker debug` turned on.
