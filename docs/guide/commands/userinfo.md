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

<BotReply command="/userinfo user: Lianecx" title="User Information" :fields="[{ name: 'Gamemode', value: 'Survival', inline: true }, { name: 'Health', value: '10.0 ❤️', inline: true }, { name: 'Food Level', value: '20 🍗 (Saturation: 5)', inline: true }, { name: 'XP', value: '2248 ✨ (Level: 36)', inline: true }, { name: 'Play Time', value: '50h 29m 51s', inline: true }, { name: 'Teams', value: 'builders', inline: true }]" :buttons="[{ label: 'General Information' }, { label: 'Survival Information' }, { label: 'Admin Information', style: 'danger' }]" />

## Pages

| Page | Shows |
|---|---|
| **General Information** | Online status, banned, whitelisted, operator (and level), linked Discord account, UUID |
| **Survival Information** | Game mode, score, health, food and saturation, XP and level, first and last join, play time, effects, teams |
| **Admin Information** | Current position, spawn point and last death location, each with the dimension. Plus buttons to **Kick**, **Ban** / **Un-Ban**, **Whitelist** / **Un-Whitelist** and **OP** / **De-OP** the player. |

The **Admin Information** page and its buttons are only available to members with **Administrator**, whatever you set in [Permissions](../getting-started/permissions.md). The button replies are only visible to you.

## Related

- [/inventory](./inventory.md)
- [/stats](./stats.md)
- [Moderation commands](./ban-unban.md)
