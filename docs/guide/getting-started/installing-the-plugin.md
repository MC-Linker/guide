---
seoTitle: "Install the Discord-Linker plugin or mod"
---

# Installing the plugin

The Discord-Linker plugin (or mod) runs on your Minecraft server and talks to the MC Linker bot. It works out of the box: there is nothing to configure before you [connect](./connecting.md).

## Pick the right file

| Server software | Minecraft versions | Folder |
|---|---|---|
| Paper, Spigot, Purpur and other Bukkit-based servers | 1.8 – latest | `plugins` |
| Fabric | 1.16.5 – 26.2 | `mods` |
| NeoForge | 1.21.1 – 26.2 | `mods` |
| Forge | 1.16.5 – 1.20.x | `mods` |
| Hybrid servers (MohistMC, Magma, Arclight) | Use the Forge or NeoForge build for your version | `mods` |

Download it from [Modrinth](https://modrinth.com/plugin/discord-linker) or CurseForge (the [plugin](https://www.curseforge.com/minecraft/bukkit-plugins/discord-linker) for Paper and Spigot, the [mod](https://www.curseforge.com/minecraft/mc-mods/discord-linker) for Fabric, Forge and NeoForge). The Paper and Spigot build is also on [Hangar](https://hangar.papermc.io/Lianecx/Discord-Linker) and [SpigotMC](https://www.spigotmc.org/resources/discord-linker.98749/). Pick the file that matches both your server software and your Minecraft version.

::: warning Mods need Architectury API
The Fabric, Forge and NeoForge builds need the **Architectury API** mod. Download it from [Modrinth](https://modrinth.com/mod/architectury-api) or [CurseForge](https://www.curseforge.com/minecraft/mc-mods/architectury-api), pick the file for the same loader and Minecraft version, and put it into the `mods` folder next to Discord-Linker. Discord-Linker lists it as a required dependency, so without it the mod loader stops the server during startup with a missing dependency error.
:::

::: tip Fabric
The Fabric build also needs the [Fabric API](https://modrinth.com/mod/fabric-api) mod, like most Fabric mods.
:::

## Install it

1. Stop your server.
2. Put the downloaded `.jar` file into the `plugins` or `mods` folder (see the table above). On Fabric, Forge and NeoForge, also add Architectury API (and Fabric API on Fabric).
3. Start your server again.
4. Check that it loaded: run `/linker` in the console (without the slash) or in-game as an operator. If it answers with a usage message, the plugin is running.

## On a server host

Most hosts let you upload the file through their file manager or install it from a plugin browser.

- **Aternos:** open **Plugins** (or **Mods**), search for **Discord-Linker** and install it. Then restart the server.
- **Other hosts:** upload the file to the `plugins` or `mods` folder with the host's file manager or FTP, then restart.

The plugin connects *out* to the MC Linker bot, so you don't need to open any ports.

## Updating

Replace the old `.jar` with the new one and restart the server. Your connection stays saved: you don't need to run `/connect` again.

## Next step

[Connect your server](./connecting.md) with `/connect`.
