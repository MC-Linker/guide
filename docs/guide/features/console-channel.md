---
seoTitle: "Console channel: Minecraft console in Discord"
---

# Console channel

Stream your server console into a Discord channel, so your staff can keep an eye on the server from anywhere.

A console channel is a [chat channel](./chat-bridge.md) with the **Console Messages** type selected.

::: warning Keep it private
The console can show IP addresses, plugin errors and other things you don't want public. Use a channel only your staff can see.
:::

## Set it up

1. Create a private channel, for example `#console`.
2. Run `/chatchannel add channel: #console discord-to-minecraft: False`.
3. In the menu, select **⌨️ Console Messages**.

The console output now appears in the channel:

<discord-messages>
  <discord-message author="MC Linker Chat" avatar="/logo.png" bot>
    <discord-code multiline>[18:02:11 INFO]: Cubey joined the game
[18:02:15 INFO]: Cubey issued server command: /home base
[18:03:40 INFO]: Cubey has made the advancement [Monster Hunter]</discord-code>
  </discord-message>
</discord-messages>

::: tip Running console commands from Discord
The console channel is read-only. To run commands, use [`/command`](../commands/command.md).
:::

## How it's sent

The plugin collects console lines and sends them in batches, so a busy console doesn't flood Discord. A batch is sent every few seconds or when it gets long, whichever comes first. New lines are added to the last console message until it's full, which keeps the channel tidy. Console colours are kept where possible.

You can tune the batching in the plugin's [config.yml](../plugin/configuration.md):

| Setting | Default | What it does |
|---|---|---|
| `chatconsole_flush_seconds` | `5` | Send collected lines at least this often. |
| `chatconsole_max_chars` | `1000` | Send as soon as this many characters are collected (100 – 2000). |

## Related

- [Chat bridge](./chat-bridge.md)
- [/command](../commands/command.md)
