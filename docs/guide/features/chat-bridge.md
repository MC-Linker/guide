---
seoTitle: "Chat bridge: Minecraft chat in a Discord channel"
---

# Chat bridge

A chat channel connects your Minecraft chat with a Discord channel. Messages go both ways, players show up with their own name and skin, and you choose which events come along: joins, deaths, advancements, commands and more.

<SplitView>
  <template #discord>
    <discord-messages>
      <discord-message author="Cubey" avatar="https://mc-heads.net/avatar/Cubey/64" bot>who wants to raid the ocean monument?</discord-message>
      <discord-message author="TheAnnoying" avatar="/assets/you.svg" role-color="#f47b67">me!! bringing sponges</discord-message>
    </discord-messages>
  </template>
  <template #minecraft>
    <McChat :lines="['&eCubey joined the game', '<Cubey> who wants to raid the ocean monument?', '&l&9Discord &8| &l&7TheAnnoying &8>>&r me!! bringing sponges']" />
  </template>
</SplitView>

::: tip Before you start
- Your server is [connected](../getting-started/connecting.md).
- MC Linker can **Manage Webhooks**, **Send Messages** and **Embed Links** in the channel. It sends Minecraft messages through a webhook called *MC Linker Chat*.
:::

## Set it up

1. Run `/chatchannel add` and pick the channel, for example `#minecraft-chat`.
2. A menu opens. Select every message type you want in this channel, then close the menu.
3. Done:

<BotReply command="/chatchannel add channel: #minecraft-chat" title="Added Chat Channel">Successfully added the chat channel.</BotReply>

Write something in the channel and it appears in Minecraft. Chat in Minecraft and it appears in the channel.

## Message types

| Type | Sends a message when… |
|---|---|
| 💬 Chat Messages | a player chats |
| ⌨️ Console Messages | the server console prints something (see [Console channel](./console-channel.md)) |
| 👋 Join Messages | a player joins |
| 👋 Quit Messages | a player leaves |
| 🏆 Advancement Messages | a player completes an advancement |
| 💀 Death Messages | a player dies |
| ⚡ Player Command Messages | a player runs a command |
| 🖥️ Console Command Messages | the console runs a command |
| 🧱 Block Command Messages | a command block runs |
| 🟢 Startup Messages | the server starts |
| 🔴 Shutdown Messages | the server stops |

## Options

| Option | Required | What it does |
|---|---|---|
| `channel` | Yes | Where messages go. Text and announcement channels, threads, and the text chat of voice and stage channels all work. |
| `discord-to-minecraft` | No | Whether messages written in this channel are sent to Minecraft. Default: `True`. Set it to `False` for log-only channels. |

You can add as many chat channels as you like, each with its own message types. A common setup is one public `#minecraft-chat` with chat, joins, quits and deaths, and one private `#server-log` with the console.

## How messages look

**Minecraft → Discord**

- Chat messages use the player's name and skin as the webhook name and avatar. Several messages from the same player in a row are combined into one Discord message.
- Events (joins, deaths, advancements, commands, starts and stops) are sent as small embeds.
- Mentions like `@name` written in Minecraft are turned into the matching Discord mention, but nobody gets pinged.

**Discord → Minecraft**

- Messages appear as `Discord | name >> message`. You can change this format in the plugin's [config.yml](../plugin/configuration.md).
- Replies show what they reply to. Attachments are sent as links, and emoji become `:shortcodes:`.
- Discord formatting like **bold** and *italic* is turned into Minecraft formatting.

## Hide certain commands

Player and console command messages can leak things you'd rather keep private, like passwords typed into `/login`. Filter commands by how they start:

```
/chatchannel filter-commands add command: /login
```

<BotReply command="/chatchannel filter-commands add" title="Successfully Filtered">Successfully filtered chat commands <strong>/login</strong> for the Minecraft → Discord bridge. Messages are filtered when the command starts with this value.</BotReply>

Filters apply to every chat channel in your Discord server. Remove one with `/chatchannel filter-commands remove`.

## Manage it

| Command | What it does |
|---|---|
| `/chatchannel list` | Shows your chat channels, their message types and whether Discord → Minecraft is on. Use the buttons to flip between channels. |
| `/chatchannel remove channel: #minecraft-chat` | Removes a chat channel. |

To change the message types of a channel, run `/chatchannel add` for the same channel again.

## Troubleshooting

| What you see | What to do |
|---|---|
| **No Webhook Permission** | Give MC Linker the **Manage Webhooks** permission in that channel. |
| **Could not Create Webhook** | The channel already has 15 webhooks (Discord's limit). Delete unused ones in **Edit Channel › Integrations › Webhooks**. |
| **Cannot Send Messages** | MC Linker can't send messages or embeds in the channel. Check the channel's permissions. |
| **Server Disconnected** in the channel | The plugin lost its connection. Messages resume once the server is back. See [Troubleshooting](../help/troubleshooting.md#the-plugin-doesn-t-respond). |
| **High Server Load: … messages skipped** | A lot happened at once (for example, a command block spamming). MC Linker skipped some messages to keep up. |
| Discord messages don't reach Minecraft | Check that `discord-to-minecraft` is on with `/chatchannel list`. |

## Related

- [Console channel](./console-channel.md)
- [Plugin configuration](../plugin/configuration.md) (message formats)
- [Direct messages](./direct-messages.md)
