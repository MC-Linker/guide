---
seoTitle: "Disconnect your Minecraft server from Discord"
---

# Disconnecting

Disconnecting removes the link between your Discord server and your Minecraft server. You can do it from either side.

## From Discord

```
/disconnect
```

<CommandInfo discord="Administrator" where="Discord servers" needs="A connected server" />

<BotReply command="/disconnect" title="Disconnected From Plugin">The plugin connection was successfully disconnected.</BotReply>

## From Minecraft

Run this in-game as an operator, or in the console without the slash:

<McChat :lines="['> /linker disconnect', '&aSuccessfully disconnected from Discord!']" />

## What gets removed

- The connection itself, on both sides.
- Your [chat channel](../features/chat-bridge.md) setup and the webhooks MC Linker created for it.
- Your [stat channels](../features/stat-channels.md) and [synced roles](../features/role-sync.md) settings.

Your Discord channels, roles and messages stay. Stat channels simply stop updating. Players' [linked accounts](../features/account-linking.md) belong to the players, not to the server, so they also stay.

## Connecting again

Run [`/connect`](./connecting.md) again. You will have to set up chat channels, stat channels and synced roles again.
