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

Click an item button to see its details:

<InventoryExample />

## Item details

With `show_details: True`, each item gets a button. Clicking it shows the item's name, count, slot and ID, plus whatever applies:

- Durability
- Enchantments
- Custom name and lore
- Potion effects

Shulker boxes open and show their contents, and their items have buttons too.

## Good to know

- Works for offline players too: MC Linker reads the player's saved data from your server.
- Works when your Minecraft server is offline too: MC Linker then shows the data it downloaded last time, marked **⚠ Cached Result** in the footer.
- Items are rendered with your server's own Minecraft version, so new blocks and items always look right. The first time a version is used you may see **Preparing Minecraft Assets** for a moment.
- Items added by mods don't have pictures yet, so their slot shows the item's name or ID instead.

## Related

- [/stats](./stats.md)
- [/advancements](./advancements.md)
- [/userinfo](./userinfo.md)
