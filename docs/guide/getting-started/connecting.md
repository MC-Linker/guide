# Connecting your server

`/connect` links your Discord server with your Minecraft server. You only do this once: the connection is saved on both sides and comes back by itself after restarts.

<CommandInfo discord="Administrator" minecraft="discordlinker.linker (OP by default)" where="Discord servers" needs="The Discord-Linker plugin on your Minecraft server" />

## Usage

```
/connect
```

Run it in the Discord server you want to link. The bot answers with a command like `/linker connect 803412896432:a8f3c`. Join your Minecraft server as an operator and run that command within **3 minutes**. In the server console, leave out the slash.

<SplitView>
  <template #discord>
    <BotReply command="/connect" title="Connected to Server">Successfully connected to the plugin.</BotReply>
  </template>
  <template #minecraft>
    <McChat :lines="['> /linker connect 803412896432:a8f3c', '&eAttempting to connect to the Discord bot...', '&aSuccessfully connected to Discord!']" />
  </template>
</SplitView>

## Options

All options are optional. Most servers don't need any of them.

| Option | What it does |
|---|---|
| `join-requirement` | Decides who may join your Minecraft server. **None** (default) lets everyone in. **Require Linked Account** only lets in players who linked their Discord account. **Require Role(s)** only lets in players who linked their account *and* have certain Discord roles. See [Join requirements](../features/join-requirements.md). |
| `display-ip` | The address shown in some replies, for example the `/serverinfo` footer, the `%ip%` placeholder in [stat channels](../features/stat-channels.md) and the [account linking](../features/account-linking.md) message. Use your public address, like `play.example.net`. |
| `online` | Overrides whether the bot treats your server as online mode (premium accounts only) or offline mode. The plugin detects this by itself. Behind a **BungeeCord or Velocity proxy**, set it to `True`: the backend servers run in offline mode, but your players use premium accounts. |

### Requiring roles

If you pick **Require Role(s)**, the bot first asks you to choose:

1. **Any** or **All**: whether a player needs one of the roles or every one of them.
2. The roles themselves (up to 25).

Once both are picked, the verification code appears.

## Connecting a different server

A Discord server can be linked to **one** Minecraft server at a time. If you run `/connect` again, the bot warns you:

<BotReply command="/connect" type="warning" title="Already Connected">Already connected with another server (<strong>play.example.net</strong>). If you proceed to connect, that server will be automatically disconnected!</BotReply>

Run the new code on the new server and the link moves over. The new connection starts fresh, so set up your [chat channels](../features/chat-bridge.md), [stat channels](../features/stat-channels.md) and [synced roles](../features/role-sync.md) again.

### Changing options later

`join-requirement`, `display-ip` and `online` are set when you connect. To change them:

1. Run `/linker disconnect` in Minecraft (as an operator or from the console).
2. Run `/connect` in Discord with the new options.
3. Run the new code in Minecraft.

This is a fresh connection too, so you'll need to set up chat channels, stat channels and synced roles again.

## If it doesn't work

| What you see | What to do |
|---|---|
| **Verification Failed: You did not reply in time!** | The code expired after 3 minutes. Run `/connect` again. |
| **Failed to connect to Discord! Please validate the code and try again.** (in Minecraft) | Copy the whole code including the part before the colon, and make sure you use the newest one. |
| **The server is already connected!** (in Minecraft) | The plugin is still linked to a Discord server. Run `/linker disconnect` in Minecraft first, then `/connect` again. |
| **You do not have permission to use this command!** (in Minecraft) | Run it as an operator or from the console. See [plugin permissions](../plugin/permissions.md). |
| Nothing happens in Minecraft | The plugin isn't loaded. Check that the `.jar` is in the right folder and matches your version: [Installing the plugin](./installing-the-plugin.md). |

More fixes are in [Troubleshooting](../help/troubleshooting.md#connecting).

## Related

- [Disconnecting](./disconnecting.md)
- [Join requirements](../features/join-requirements.md)
- [Plugin commands](../plugin/commands.md)
