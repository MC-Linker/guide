---
seoTitle: "/advancements: Minecraft advancements in Discord"
---

# /advancements

Shows which advancements a player has, tab by tab, like the advancement screen in Minecraft.

<CommandInfo discord="Everyone" where="Discord servers" needs="A connected server. The player must have joined it at least once." />

## Usage

Pick a tab, then the player:

```
/advancements nether user: Cubey
```

## Tabs

| Tab | Covers |
|---|---|
| `minecraft` | The story advancements |
| `nether` | The Nether |
| `end` | The End |
| `adventure` | Exploration and combat |
| `husbandry` | Animals, farming and food |

Newer advancements, like the Trial Chamber, Happy Ghast and Creaking ones, are included.

## Options

| Option | Required | What it does |
|---|---|---|
| `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |
| `show_details` | No | Adds a button for every advancement. Click one to see its description, requirements, when it was earned and its type. |

## Related

- [/stats](./stats.md)
- [/userinfo](./userinfo.md)
