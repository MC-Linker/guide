---
seoTitle: "/advancements: Minecraft advancements in Discord"
---

# /advancements

Shows a player's advancements, tab by tab, like the advancement screen in Minecraft. Every advancement of the tab is drawn, earned or not: earned ones get the gold frame, just like in game.

<CommandInfo discord="Everyone" where="Discord servers" needs="A connected server. The player must have joined it at least once." />

## Usage

Pick a tab, then the player:

```
/advancements nether user: Cubey
```

## Example

Click an advancement button to see its details. Earned advancements have blue buttons.

<AdvancementsExample />

## Tabs

| Tab | Covers |
|---|---|
| `minecraft` | The story advancements |
| `nether` | The Nether |
| `end` | The End |
| `adventure` | Exploration and combat |
| `husbandry` | Animals, farming and food |

## Options

| Option | Required | What it does |
|---|---|---|
| `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |
| `show_details` | No | Adds a button for every advancement. Click one to see its description, requirements, when it was earned and its type. |

## Good to know

- Works when your Minecraft server is offline too: MC Linker then shows the data it downloaded last time, marked **⚠ Cached Result** in the footer.

## Related

- [/stats](./stats.md)
- [/userinfo](./userinfo.md)
