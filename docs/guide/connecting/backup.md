# Backup Connection Method

### When to use?

The backup connection method is a fallback method that you can use if you are having trouble connecting your server to
the bot using the [recommended method](/guide/connecting/plugin.md).
It also requires you to have the plugin installed on your server as well as have an extra forwarded/added port for the
plugin on your server. As this is something not all server hosts provide, we recommend using
the [plugin](/guide/connecting/plugin.md) instead if possible.

### 1. Downloading and Installing the Plugin

Please make sure to follow
the [installation instructions](/guide/connecting/plugin.html#_1-downloading-and-installing-the-plugin) for the plugin
before continuing.

### 2. Adding the Port

If you are using a server host, you will most likely be able to find an option to add a port for plugins somewhere on
your control panel. You can also refer to the documentation of your server host or contact their support if you are
unsure how to do this.

If you are hosting your server yourself, you'll need to head over to your router settings and port-forward the port you
want to use for the plugin (default: `11111`).

### 3. Configuring the Plugin

You will now have to tell the plugin which port to use. To do this, execute the `/linker port <port>` command in-game (
replacing `<port>` with the port you added in the last step) or edit the `port` field in the `config.yml` file of the
plugin. When editing the config file, make sure to restart or reload the server after saving the changes.

::: warning

* To run the `/linker port <port>` command, you need to have the `discordlinker.linker.port` permission.
  :::

### 4. Connecting your Server

Now that you have the plugin ready and have added the port, execute the `/connect plugin` in the Discord server you want
to connect your Minecraft server to.<br>
**You have to set the `backup_connection_method` option to `true` in the command.**

Here's an example of what the command will look like:

![connect-backup.png](/assets/connect-backup.png)

### 5. Filling out the Modal

After executing the command, you will be prompted with a modal that will ask you for an IP address and a port. You will
have to fill out the IP address of your server (that you use to join it) and the port you added
in [step 2](#_2-adding-the-port). If you are using the default port, you can leave the port field empty.

![connect-backup-modal.png](/assets/connect-backup-modal.png)

**Congratulations! You have successfully connected your server to the bot using the backup connection method!
Now you're ready to start using the bot and all of its features!**
