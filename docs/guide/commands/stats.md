---
seoTitle: "/stats: Minecraft player statistics in Discord"
---

# /stats

Shows a player's Minecraft statistics as an image: blocks mined, items crafted, mobs killed, distance walked and more.

<CommandInfo discord="Everyone" where="Discord servers" needs="A connected server. The player must have joined it at least once." />

## Usage

Pick a category, then the player:

```
/stats mined user: Cubey
/stats custom user: Cubey sort: Descending
```

## Categories

| Category | Shows |
|---|---|
| `custom` | General stats: play time, distance walked, jumps, deaths and [many more](https://minecraft.wiki/w/Statistics#Statistic_types_and_names) |
| `mined` | Blocks mined |
| `broken` | Tools and items worn out |
| `crafted` | Items crafted or smelted |
| `used` | Blocks placed and items used |
| `picked_up` | Items picked up |
| `dropped` | Items dropped |
| `killed` | Mobs killed |
| `killed_by` | What killed the player |

## Options

| Option | Required | What it does |
|---|---|---|
| `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |
| `sort` | No | **Descending** (default, highest first), **Ascending**, **Alphabetically** or **None**. |

Long lists are split into pages. Use the **Stats 1-…** buttons to flip through them.

## Good to know

If the player never did anything in a category, you get **Could Not Find Category**.

## Related

- [/advancements](./advancements.md)
- [/inventory](./inventory.md)
