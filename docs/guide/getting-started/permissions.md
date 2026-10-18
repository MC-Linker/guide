# Permissions

MC Linker uses Discord's own command permissions. Every command has a sensible default, and you can change who may use it in your server settings, down to single roles, members and channels.

## Default permissions

| Command | Who can use it by default |
|---|---|
| `/inventory`, `/stats`, `/advancements`, `/userinfo`, `/serverinfo`, `/message`, `/account`, `/help` | Everyone |
| `/ban`, `/unban` | Members with **Ban Members** |
| `/kick` | Members with **Kick Members** |
| `/command`, `/op`, `/deop`, `/gamemode` | **Administrators** |
| `/connect`, `/disconnect`, `/chatchannel`, `/statchannel`, `/rolesync` | **Administrators** |
| `/customize` | Everyone can open it. Changing the bot's look in a server needs **Administrator** or **Manage Server**. |

Two parts always need **Administrator**, whatever you configure: the **Admin Information** pages and buttons of [`/userinfo`](../commands/userinfo.md) and [`/serverinfo`](../commands/serverinfo.md).

## Change who can use a command

1. Open **Server Settings › Integrations**.
2. Click **MC Linker**.
3. Pick a command, for example `/kick`.
4. Under **Roles & Members**, add the roles or members who should (or shouldn't) be able to use it.
5. Under **Channels**, limit where it can be used, if you like.
6. Save.

Example: to let your moderators use `/kick` and `/ban` without making them administrators, add your **Moderator** role to both commands.

::: tip Hide commands in a channel
Turning a command off for `@everyone` in a channel hides it from the command list there. Handy for keeping `/command` out of public channels.
:::

## Permissions the bot needs

Some features need the bot itself to have certain permissions in your Discord server:

| Feature | Bot permission |
|---|---|
| [Chat bridge](../features/chat-bridge.md) | **Manage Webhooks**, **Send Messages** and **Embed Links** in the chat channel |
| [Stat channels](../features/stat-channels.md) | **Manage Channels** on the stat channel |
| [Role sync](../features/role-sync.md) to Discord | **Manage Roles**, and MC Linker's role must be **above** the synced role |
| [Join requirements](../features/join-requirements.md) and role sync | Nothing extra: the bot reads members and roles by itself |

If you added the bot with its default invite, it already has these.

## Minecraft permissions

The in-game commands (`/linker`, `/verify`, `/discord`, `/dm`) have their own permission nodes. See [Plugin permissions](../plugin/permissions.md).

## Related

- [All commands](../commands/README.md)
- [Plugin permissions](../plugin/permissions.md)
