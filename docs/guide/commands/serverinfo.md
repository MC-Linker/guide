---
seoTitle: "/serverinfo: Minecraft server info in Discord"
---

# /serverinfo

Shows information about your Minecraft server: name, MOTD, players, world settings and (for admins) plugins, mods and lists.

<CommandInfo discord="Everyone (Admin Information: Administrator)" where="Discord servers" needs="A connected server" />

## Usage

```
/serverinfo
```

## Example

<ServerInfo />

## Pages

| Page | Shows |
|---|---|
| **General Information** | Server icon, name, MOTD (also as a server-list preview), players online, difficulty, address and version |
| **World Information** | Spawn point, whether the Nether and End are enabled, difficulty, and every gamerule you changed from its default |
| **Admin Information** | Plugins, datapacks and mods, how many players are whitelisted, banned and op, banned IPs, whether the whitelist is on, and the world seed |

The **Admin Information** page is only available to members with **Administrator**, whatever you set in [Permissions](../getting-started/permissions.md).

## Good to know

The address in the footer is the `display-ip` you set with [`/connect`](../getting-started/connecting.md#options), or your server's IP if you didn't set one.

## Related

- [/userinfo](./userinfo.md)
- [Stat channels](../features/stat-channels.md)
