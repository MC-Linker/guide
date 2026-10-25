---
seoTitle: "/op and /deop: Minecraft operators from Discord"
---

# /op and /deop

Make a player a server operator, or take it away.

<CommandInfo discord="Administrator" where="Discord servers" needs="A connected server" />

## Usage

```
/op user: Cubey
/deop user: Cubey
```

| Option | Required | What it does |
|---|---|---|
| `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |

## Example

<SplitView>
  <template #discord>
    <BotReply command="/op user: Cubey" title="OP Player" color="#3498db">Successfully oped player <strong>Cubey</strong><discord-code multiline>Made Cubey a server operator</discord-code></BotReply>
  </template>
  <template #minecraft>
    <McChat :lines="['&7&o[Server: Made Cubey a server operator]']" />
  </template>
</SplitView>

## Good to know

Operators can run every command on your server. If you use a permission plugin like LuckPerms, consider giving permissions through groups instead, for example with [role sync](../features/role-sync.md).

## Related

- [/gamemode](./gamemode.md)
- [Role sync](../features/role-sync.md)
