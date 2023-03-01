# Disconnecting

Disconnecting your server from the bot is very straightforward. You can disconnect your server from any connection
method by executing the `/disconnect` slash-command in the Discord server you want to disconnect your server from.
That's it!

::: warning
If your server is currently not online and you are connected using either the [plugin](/guide/connecting/plugin.md) or
the [backup method](/guide/connecting/backup.md), you will not be able to disconnect your server from the bot using
the `/disconnect` command. This is to prevent issues from occuring once your server starts up again.<br>
However, you are still able to connect a new server using the `/connect` command. This will automatically disconnect
your old server (forcefully).
:::