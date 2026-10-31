---
seoTitle: "/gamemode: change game mode from Discord"
---

# /gamemode

Change a player's game mode from Discord.

<CommandInfo discord="Manage Server" where="Discord servers" needs="A connected server, and the player must be online" />

## Usage

```
/gamemode user: Cubey gamemode: Creative
```

| Option | Required | What it does |
|---|---|---|
| `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |
| `gamemode` | Yes | **Survival**, **Creative**, **Adventure** or **Spectator**. |

## Example

<SplitView>
  <template #discord>
    <BotReply command="/gamemode user: Cubey gamemode: Creative" title="Change Gamemode" color="#e67e22">Successfully changed gamemode of <strong>Cubey</strong> to <strong>creative</strong><discord-code multiline>Set Cubey's game mode to Creative Mode</discord-code></BotReply>
  </template>
  <template #minecraft>
    <McChat :lines="['&7&o[Server: Set Cubey\'s game mode to Creative Mode]']" />
  </template>
</SplitView>

## Related

- [/op and /deop](./op-deop.md)
- [/command](./command.md)
