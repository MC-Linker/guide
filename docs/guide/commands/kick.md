---
seoTitle: "/kick: kick Minecraft players from Discord"
---

# /kick

Kick an online player from your Minecraft server.

<CommandInfo discord="Members with Kick Members" where="Discord servers" needs="A connected server, and the player must be online" />

## Usage

```
/kick user: Griefer reason: No spamming please
```

| Option | Required | What it does |
|---|---|---|
| `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |
| `reason` | No | Shown to the player when they're kicked. Default: *Kicked by an operator.* |

## Example

<SplitView>
  <template #discord>
    <BotReply command="/kick user: Griefer reason: No spamming please" title="Kick Player" color="#e67e22">Successfully kicked player <strong>Griefer</strong>: <discord-code>No spamming please</discord-code><discord-code multiline>Kicked Griefer: No spamming please</discord-code></BotReply>
  </template>
  <template #minecraft>
    <McChat :lines="['&eGriefer left the game', '&7&o[Server: Kicked Griefer: No spamming please]']" />
  </template>
</SplitView>

## Related

- [/ban and /unban](./ban-unban.md)
- [/userinfo](./userinfo.md) (has a Kick button)
