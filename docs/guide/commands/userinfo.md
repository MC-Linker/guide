---
seoTitle: "/userinfo: look up Minecraft players in Discord"
---

# /userinfo

Shows information about a player, on three pages: general info, survival stats and (for admins) positions and moderation buttons.

<CommandInfo discord="Everyone (Admin Information: Administrator)" where="Discord servers" needs="A connected server" />

## Usage

```
/userinfo user: Lianecx
```

| Option | Required | What it does |
|---|---|---|
| `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |

## Example

Use the buttons to switch pages:

<UserInfo />

## Pages

| Page | Shows |
|---|---|
| **General Information** | Online status, banned, whitelisted, operator (and level), linked Discord account, UUID |
| **Survival Information** | Game mode, score, health, food and saturation, XP and level, first and last join, play time, effects, teams |
| **Admin Information** | Current position, spawn point and last death location, each with the dimension. Plus buttons to **Kick**, **Ban** / **Un-Ban**, **Whitelist** / **Un-Whitelist** and **OP** / **De-OP** the player. |

The **Admin Information** page and its buttons are only available to members with **Administrator**, whatever you set in [Permissions](../getting-started/permissions.md). The button replies are only visible to you.

## Good to know

- Works when your Minecraft server is offline too: MC Linker then shows the data it downloaded last time, marked **⚠ Cached Result** in the footer.

## Related

- [/inventory](./inventory.md)
- [/stats](./stats.md)
- [Moderation commands](./ban-unban.md)
