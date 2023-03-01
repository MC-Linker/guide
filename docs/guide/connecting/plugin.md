# Using the Plugin

### 1. Downloading and Installing the Plugin

To be able to connect your server to the bot using the plugin, you'll first need to install
the [Discord-Linker](https://www.spigotmc.org/resources/discord-linker.98749/) plugin on your server. You can find the
latest version of the plugin on the [SpigotMC page](https://www.spigotmc.org/resources/discord-linker.82468/),
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

![connect-plugin.png](/assets/connect-plugin.png)

*TODO: Make this use discord-components*

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
