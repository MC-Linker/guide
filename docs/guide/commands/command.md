---
seoTitle: "/command: run Minecraft commands from Discord"
---

# /command

Runs any Minecraft command on your server, as if you typed it in the console. While you type, MC Linker suggests completions that come live from your server, so they always match your plugins and online players.

<CommandInfo discord="Administrator" where="Discord servers" needs="A connected server" />

## Usage

```
/command command: time set night
```

Type the command with or without the leading `/`. Pick suggestions from the list as you type, like you'd press Tab in Minecraft.

<SplitView>
  <template #discord>
    <BotReply command="/command command: give Cubey diamond 64" title="Command Executed" color="#3498db"><discord-code multiline>Gave 64 [Diamond] to Cubey</discord-code></BotReply>
  </template>
  <template #minecraft>
    <McChat :lines="['&7&o[Server: Gave 64 [Diamond] to Cubey]']" />
  </template>
</SplitView>

## Options

| Option | Required | What it does |
|---|---|---|
| `command` | Yes | The full command, for example `whitelist add Cubey`. |

## Shortcuts

| Write | Becomes |
|---|---|
| `@s` | Your own linked Minecraft name. For example `/command command: gamemode creative @s`. |
| An @mention of a member | That member's linked Minecraft name. For example `/command command: tp @Cubey 0 64 0`. |

You (or the member you mention) need a [linked account](../features/account-linking.md) for this.

## Good to know

- The reply shows what the server answered. Some commands don't answer anything; then you see *No response message!*. This also happens right after `/reload`.
- If you wait too long after picking a suggestion, you may see **Selection Expired**. Run the command again.
- `/command` is powerful. Keep it to admins, or limit it to a staff channel, in [Permissions](../getting-started/permissions.md).

## Related

- [Moderation commands](./ban-unban.md)
- [Console channel](../features/console-channel.md)
