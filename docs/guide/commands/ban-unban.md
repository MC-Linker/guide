---
seoTitle: "/ban and /unban: ban Minecraft players from Discord"
---

# /ban and /unban

Ban a player from your Minecraft server, or lift a ban, without opening the console.

<CommandInfo discord="Members with Ban Members" where="Discord servers" needs="A connected server" />

## Usage

```
/ban user: Griefer reason: Too much TNT
/unban user: Griefer
```

| Command | Option | Required | What it does |
|---|---|---|---|
| `/ban` | `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |
| `/ban` | `reason` | No | Shown to the player and saved with the ban. Default: *Banned by an operator.* |
| `/unban` | `user` | Yes | The player to unban. |

## Example

<SplitView>
  <template #discord>
    <BotReply command="/ban user: Griefer reason: Too much TNT" title="Ban Player" color="#e67e22">Successfully banned player <strong>Griefer</strong>: <discord-code>Too much TNT</discord-code><discord-code multiline>Banned Griefer: Too much TNT</discord-code></BotReply>
  </template>
  <template #minecraft>
    <McChat :lines="['&eGriefer left the game', '&7&o[Server: Banned Griefer: Too much TNT]']" />
  </template>
</SplitView>

## Good to know

- The player doesn't have to be online.
- These use your server's normal `/ban` and `/pardon` commands, so plugins that change banning (like ban managers) still apply.
- Banning the Minecraft player doesn't touch their Discord account.

## Related

- [/kick](./kick.md)
- [/userinfo](./userinfo.md) (has Ban and Un-Ban buttons)
- [Permissions](../getting-started/permissions.md)
