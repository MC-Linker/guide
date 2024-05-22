# Using the Plugin

### 1. Downloading and Installing the Plugin

To be able to connect your server to the bot using the plugin, you'll first need to install
the [Discord-Linker](https://www.spigotmc.org/resources/discord-linker.98749/) plugin on your server. You can find the
latest version of the plugin on the [SpigotMC page](https://www.spigotmc.org/resources/discord-linker.98749/),
on [Modrinth](https://modrinth.com/plugin/discord-linker), on
the [GitHub releases page](https://github.com/MC-Linker/Discord-Linker/releases) or in
the [Aternos Plugin List](https://aternos.org/addons/a/spigot/98749).
Once you have the plugin downloaded, you can install it on your server by putting it in the `plugins` folder of your
server. Also make sure to restart your server after adding the plugin.

### 2. Connecting your Server

Now that you have the plugin ready, execute the `/connect plugin` slash-command in the Discord server you want to
connect your Minecraft server to. This will generate a command with a code that you need to execute in the console or in
the chat of your Minecraft server.<br>
Here's an example of what the command will look like:

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
        </discord-custom-emoji> Install the <a href="https://www.spigotmc.org/resources/discord-linker.98749/">Discord-Linker</a> plugin on your server.
        <br>Then join your server as an operator and execute the following command:
        <discord-code multiline>/linker connect 888888888888888888:af234</discord-code>
        <discord-bold>You have 3 minutes to run the command.</discord-bold>
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

You can copy the command and paste it in the console or in the chat of your Minecraft server.
Upon executing the command, the plugin will attempt to establish a connection with the bot. If the connection is
successful, you will get a response and the discord-message will be edited accordingly.

:::tip
Do not include the `/` prefix in the command when you are running the command from the console!
:::

::: warning

* To run the `/connect plugin` command, you need to be an Administrator in the Discord server.
* To run the generated command in the console or in the chat you need to have the `discordlinker.linker.connect`
  permission.
  :::

**Congratulations! You have successfully connected your server to the bot using the plugin!
Now you're ready to start using the bot and all of its features!**
