---
seoTitle: "Quick start: link Minecraft and Discord in a minute"
---

# Quick start

Link your Minecraft server with Discord in three steps. It takes about a minute.

::: tip What you need
- A Discord server where you have the **Manage Server** permission (to add the bot and to run `/connect`).
- A Minecraft Java server where you can install plugins or mods, and OP rights or console access on it.
:::

## 1. Add the bot to Discord

[Add MC Linker to your server](https://mclinker.com/invite), pick the Discord server you want to link and confirm. You can also find MC Linker in the [App Directory](https://discord.com/application-directory/712759741528408064) or on [Top.gg](https://top.gg/bot/712759741528408064).

MC Linker posts a short welcome message in your server once it joins.

## 2. Install the plugin

Download **Discord-Linker** for your server software and put the file into the `plugins` folder (Paper, Spigot, Purpur) or the `mods` folder (Fabric, Forge, NeoForge). Then restart the server.

| Server software | Minecraft versions | Download |
|---|---|---|
| Paper, Spigot, Purpur | 1.8 – latest | [Modrinth](https://modrinth.com/plugin/discord-linker) · [Hangar](https://hangar.papermc.io/Lianecx/Discord-Linker) · [SpigotMC](https://www.spigotmc.org/resources/discord-linker.98749/) · [CurseForge](https://www.curseforge.com/minecraft/bukkit-plugins/discord-linker) |
| Fabric | 1.16.5 – 26.2 | [Modrinth](https://modrinth.com/plugin/discord-linker) · [CurseForge](https://www.curseforge.com/minecraft/mc-mods/discord-linker) |
| NeoForge | 1.21.1 – 26.2 | [Modrinth](https://modrinth.com/plugin/discord-linker) · [CurseForge](https://www.curseforge.com/minecraft/mc-mods/discord-linker) |
| Forge | 1.16.5 – 1.20.x | [Modrinth](https://modrinth.com/plugin/discord-linker) · [CurseForge](https://www.curseforge.com/minecraft/mc-mods/discord-linker) |

Fabric, Forge and NeoForge also need the [Architectury API](https://modrinth.com/mod/architectury-api) mod (and Fabric also needs [Fabric API](https://modrinth.com/mod/fabric-api)).

On Aternos, add Discord-Linker from the plugin list. More details: [Installing the plugin](./installing-the-plugin.md).

## 3. Connect

Run `/connect` in your Discord server. The bot replies with a command for Minecraft:

<BotReply command="/connect" type="step" title="Server Verification"><discord-custom-emoji name="step" url="/emoji/step.png" embed-emoji></discord-custom-emoji> Install the Discord-Linker plugin on your Minecraft server.<br>Then join your server as an operator and execute the following command: <discord-code multiline>/linker connect 803412896432:a8f3c</discord-code><strong>You have 3 minutes to run the command.</strong></BotReply>

Join your server as an operator and run that exact command in chat:

<McChat :lines="['> /linker connect 803412896432:a8f3c', '&eAttempting to connect to the Discord bot...', '&aSuccessfully connected to Discord!']" />

The message in Discord changes to:

<BotReply command="/connect" title="Connected to Server">Successfully connected to the plugin.</BotReply>

::: tip Running it from the console?
Leave out the slash: `linker connect 803412896432:a8f3c`.
:::

**That's it, your server is linked.** If the code doesn't work, see [Troubleshooting](../help/troubleshooting.md#connecting).

## What's next

- Bridge chat between Minecraft and Discord: [Chat bridge](../features/chat-bridge.md)
- Let players link their accounts: [Account linking](../features/account-linking.md)
- Show the player count in a channel: [Stat channels](../features/stat-channels.md)
- Decide who can use which command: [Permissions](./permissions.md)
- See everything MC Linker can do: [All commands](../commands/README.md)
