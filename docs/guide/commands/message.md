---
seoTitle: "/message: whisper to Minecraft players from Discord"
---

# /message

Sends a private message from Discord to a player who is online on your server. It shows up in their chat as a whisper.

<CommandInfo discord="Everyone" where="Discord servers" needs="A connected server, and the player must be online" />

## Usage

```
/message user: Cubey message: dinner's ready!
```

| Option | Required | What it does |
|---|---|---|
| `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |
| `message` | Yes | What to send. [Colour codes](https://minecraft.wiki/w/Formatting_codes#Color_codes) like `&a` work. |

<SplitView>
  <template #discord>
    <BotReply command="/message user: Cubey message: dinner's ready!" title="Send Message" color="#3498db">Successfully sent message to player <strong>Cubey</strong></BotReply>
  </template>
  <template #minecraft>
    <McChat :lines="['&9&o&lDiscord &8&o| &7&oLianecx whispers to you: dinner\'s ready!']" />
  </template>
</SplitView>

You can change how the whisper looks with `private_message` in the plugin's [config.yml](../plugin/configuration.md).

## Good to know

If the player isn't online you get **Player Not Online**. Players can message Discord members back with [`/dm`](../features/direct-messages.md).

## Related

- [Direct messages](../features/direct-messages.md)
- [Chat bridge](../features/chat-bridge.md)
