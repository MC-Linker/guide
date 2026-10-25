---
seoTitle: "Custom bot: run MC Linker as your own Discord bot"
---

# Custom bot <Badge text="Premium" type="tip" />

With the **Customize MC Linker** subscription, MC Linker runs as your own Discord bot. It has every feature of MC Linker, but with your bot's name, avatar, banner, status and *About Me*. We host it for you.

## What you get

- Your own **bot name, profile picture and banner**
- A **custom status and activity**, like *Playing on testing.mclinker.com*
- Your own ***About Me*** text
- **Emoji** used by the bot
- **All MC Linker features**, hosted by us

## Set it up

1. **Subscribe.** Run `/customize` and click the subscription button, or open MC Linker's profile and go to its **Store**.
2. Run `/customize` again. MC Linker walks you through the rest:
3. **Create a bot.** In the [Discord Developer Portal](https://discord.com/developers/applications?new_application=true), enter a name and click **Create**.
4. **Make it private** so nobody else can add it:
   - In **Installation**, set **Install Link** to **None**.
   - In **Bot**, turn off **Public Bot**.
5. **Enter the token.** In **Bot**, click **Reset Token**, copy it and paste it into the form that opens with **Enter Token**. Never share this token with anyone else.
6. MC Linker logs in, deploys the slash commands and starts your bot. It then shows you a **port**.
7. **Point your Minecraft server at your bot.** Run this in Minecraft (or in the console without the slash), using the port you were given:

<McChat :lines="['> /linker bot_port 25590', '&aSuccessfully set bot_port to &325590&a.']" />

   You can also set `bot_port` in the plugin's [config.yml](../plugin/configuration.md) and reload.

8. **Invite your bot** with the button MC Linker shows you, then use `/connect` and the other commands as usual. Make sure you pick the commands of *your* bot.

Change your bot's name, avatar and banner any time in the Developer Portal under **General Information** and **Bot**.

## Manage your bot

Run `/customize` to open **Manage Custom MC Linker**. It shows your bot's status and port, with buttons to:

| Button | What it does |
|---|---|
| 🟢 **Start** / 🛑 **Stop** | Start or stop your bot. |
| **Change Presence** | Set the status (Online, Idle, Do Not Disturb, Invisible) and activity (Playing, Streaming, Listening to, Watching, Custom). |
| **Invite Bot** | Get your bot's invite link again. |
| 💀 **Delete** | Delete your custom bot. Type `delete` to confirm. You can create a new one later with `/customize`. |

## Good to know

- The port only matters for the custom bot. If you go back to the normal MC Linker, set `bot_port` back to `80` with `/linker bot_port 80`.
- Need help with the setup? Ask on the [support server](https://discord.gg/rX36kZUGNK).

## Related

- [Customization](./customization.md) (free appearance changes)
- [Plugin configuration](../plugin/configuration.md)
