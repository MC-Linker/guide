---
seoTitle: "/inventory: see Minecraft inventories in Discord"
---

# /inventory

Shows a player's inventory as an image: armor, offhand, hotbar and backpack, with their skin.

<CommandInfo discord="Everyone" where="Discord servers" needs="A connected server. The player must have joined it at least once." />

## Usage

```
/inventory user: Cubey
```

## Options

| Option | Required | What it does |
|---|---|---|
| `user` | Yes | A Minecraft username, UUID, or @mention of a linked member. |
| `show_details` | No | Adds a button for every item. Click one to see its details, or to open a shulker box. |

## Example

<BotReply command="/inventory user: TheAnnoying" title="Player Inventory" image="/assets/inventory.png">Here's the inventory of <strong>TheAnnoying</strong>:</BotReply>

## Item details

With `show_details: True`, each item gets a button. Clicking it shows the item's name, count, slot and ID, plus whatever applies:

- Durability
- Enchantments
- Custom name and lore
- Potion effects

Shulker boxes open and show their contents, and their items have buttons too.

## Good to know

- Works for offline players too: MC Linker reads the player's saved data from your server.
- Items are rendered with your server's own Minecraft version, so new blocks and items always look right. The first time a version is used you may see **Preparing Minecraft Assets** for a moment.
- Items added by mods aren't supported yet and may not show correctly.

## Related

- [/stats](./stats.md)
- [/advancements](./advancements.md)
- [/userinfo](./userinfo.md)
