# Connect

### 1. Invite the Bot

Invite the MC Linker Discord bot from the [App Directory](https://discord.com/application-directory/712759741528408064) or from [Top.gg](https://top.gg/bot/712759741528408064). Install it to the Discord server you want to connect to your Minecraft server.

### 2. Download and Install the Plugin / Mod

To connect your server to the bot, you first need to install the **Discord-Linker** plugin/mod on your server. The mod supports Spigot (1.8+), Fabric (1.16.5+), Forge (1.16.5+), and NeoForge (1.21.11+). 

You can download it from:
- [Modrinth](https://modrinth.com/plugin/discord-linker)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/discord-linker)
- [Paper Hangar](https://hangar.papermc.io/Lianecx/Discord-Linker)
- [SpigotMC](https://www.spigotmc.org/resources/discord-linker.98749/)
- or [Aternos](https://aternos.org/addons/a/spigot/98749).

Once downloaded, place it in your `plugins` (Spigot/Paper) or `mods` (Fabric/Forge) folder. Restart your server.

### 3. Connecting your Server

Now execute `/connect plugin` slash-command in the Discord server you want to connect. This will give you a pairing command you need to execute in your Minecraft server's console or chat (as an OP).

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/connect plugin"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Server Verification" >
      <discord-embed-description slot="description">
        <discord-custom-emoji
          name="step"
          url="https://cdn.discordapp.com/emojis/1084904567961034803.webp"
          embed-emoji >
        </discord-custom-emoji> Install the <a href="https://modrinth.com/plugin/discord-linker">Discord-Linker</a> plugin on your server.
        <br>Then join your server as an operator and execute the following command:
        <discord-code multiline>/linker connect 888888888888888888:af234</discord-code>
        <discord-bold>You have 3 minutes to run the command.</discord-bold>
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

Upon executing `/linker connect ...` in your server, the plugin will finalize establishing the connection and the message inside Discord will be updated.

:::tip
If running from the console, do not include the `/` prefix! Example: `linker connect ...`
:::

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator <DefaultBadge />
- **Minecraft:** `discordlinker.linker.connect`
:::

**Congratulations! You have successfully connected your server to the bot using the plugin!
Now you're ready to start using the bot and all of its features!**
