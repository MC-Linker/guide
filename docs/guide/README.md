# Introduction

MC Linker links a Minecraft server with a Discord server. Chat flows both ways, you can look up players and moderate your server from Discord, and Discord roles can sync with Minecraft groups. You don't host a bot and you don't edit config files: everything is set up with slash commands.

## How it works

MC Linker has two halves that talk to each other:

| | Where it runs | What it does |
|---|---|---|
| **MC Linker** | Discord (hosted by us) | The Discord bot. You add it to your Discord server and use its slash commands. |
| **Discord-Linker** | Your Minecraft server | A plugin or mod. It sends chat and events to the bot and runs what the bot asks for. |

Once both are installed, you link them once with [`/connect`](/guide/getting-started/connecting.md). From then on they stay connected, even after restarts.

<SplitView>
  <template #discord>
    <BotReply command="/serverinfo" title="Server Information" color="#729e34" image="/assets/serverlist.png" :fields="[{ name: 'Name', value: 'Linker SMP', inline: true }, { name: 'MOTD', value: 'A cozy survival server', inline: true }, { name: 'Players', value: '4/20', inline: true }]" footer="Server IP: testing.mclinker.com (26.2)" :buttons="[{ label: 'World Information' }, { label: 'Admin Information', style: 'danger' }]" />
  </template>
  <template #minecraft>
    <McChat :lines="['&eCubey joined the game', '<Cubey> hi from Minecraft!', '&9Discord &8| &7Lianecx &8>>&r hi from Discord!']" />
  </template>
</SplitView>

## What you need

- A **Discord server** where you can add bots (the **Manage Server** permission) and are an **Administrator**.
- A **Minecraft Java Edition server** that runs Paper, Spigot, Purpur, Fabric, Forge or NeoForge, where you can install plugins or mods. See [Installing the plugin](/guide/getting-started/installing-the-plugin.md) for versions.
- Operator (OP) rights or console access on that server, once, to confirm the connection.

Bedrock players can join through Geyser and Floodgate and still link their accounts.

## Where to go next

1. Follow the [Quick start](/guide/getting-started/quick-start.md). It takes about a minute.
2. Set up the [chat bridge](/guide/features/chat-bridge.md) with `/chatchannel add`.
3. Decide who may use which command in [Permissions](/guide/getting-started/permissions.md).
4. Browse [all commands](/guide/commands/README.md) and [features](/guide/features/chat-bridge.md).
