---
seoTitle: "Integrations: LuckPerms, Vault, Geyser and proxies"
---

# Integrations

Discord-Linker works on its own, and picks up these plugins automatically when they're installed. There's nothing to configure.

## LuckPerms

**Platforms:** all (Paper, Spigot, Fabric, Forge, NeoForge)

[LuckPerms](https://luckperms.net) groups can be used for [role sync](../features/role-sync.md). Changes to a player's groups are picked up instantly.

## Vault

**Platforms:** Paper, Spigot, Purpur

With [Vault](https://www.spigotmc.org/resources/vault.34315/) and a Vault-compatible permission plugin, that plugin's groups can be used for [role sync](../features/role-sync.md). Group changes are checked every 30 seconds (`sync_check_interval` in [config.yml](./configuration.md)).

If both LuckPerms and Vault are installed, LuckPerms is used. Without either, role sync works with vanilla teams.

## Geyser and Floodgate (Bedrock players)

If [Floodgate](https://geysermc.org/wiki/floodgate/) is installed on the same server, Discord-Linker reads its username prefix (for example `.`) automatically. Bedrock players can then [link their accounts](../features/account-linking.md): they type their name with the prefix, like `.Steve`, in `/account connect`, and you can use those names in commands like `/inventory` or `/ban`.

## Hybrid servers

**MohistMC, Magma, Arclight** and other servers that run Forge or NeoForge mods together with Bukkit plugins are supported. Both builds of Discord-Linker work, but we recommend the **plugin** (the Paper and Spigot build) in the `plugins` folder. The Forge or NeoForge build for your Minecraft version in the `mods` folder works too.

## Proxies (BungeeCord, Velocity)

There's no proxy version of Discord-Linker yet. Install it on the backend server you want to link (for example your survival server), and when you run [`/connect`](../getting-started/connecting.md#options), set `online: True`: backend servers run in offline mode, but your players use premium accounts.

Each Discord server links to one Minecraft server.

## Server hosts

Discord-Linker works on hosted servers, including Aternos (install it from the plugin or mod list). It connects *out* to MC Linker, so you don't need to open ports. If your host blocks outgoing connections, ask them to allow `api.mclinker.com` on port 80.
