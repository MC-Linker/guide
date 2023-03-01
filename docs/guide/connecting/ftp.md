# Using FTP/SFTP

### 1. Obtaining the FTP credentials

To connect your server to the bot using FTP, you'll first need to obtain the FTP credentials of your server. If your
server host supports it, you can find the FTP credentials in the control panel of your server. If you are hosting your
server privately, you can create an ftp server using programs, like [FileZilla](https://filezilla-project.org/).

### 2. Connecting your Server

Now that you have the FTP credentials, execute the `/connect ftp` slash-command in the Discord server you want to
connect your Minecraft server to. You'll also need to provide the FTP credentials in the command. Here's an example of
what the command will look like (here the default port `21` is used):

![connect-ftp.png](/assets/connect-ftp.png)

There are also three optional parameters that you can use in the command:

* `port` - The port of the FTP server. If not provided, the default port `21` will be used.
* `path` - The path to the folder where the Minecraft server files are located. If not provided, the bot will try to
  find the folder automatically.
* `version` - The version of the Minecraft server. If not provided, the bot will try to detect the version
  automatically.

::: tip

* Your server panel might show the FTP credentials in the format: `(s)ftp://username:password@host:port`. In this case,
  you'll need to remove the `(s)ftp://` part from the command and extract the username, password, host and port from the
  URL.<br>
* The `host` field might also be called `server`, `address` or `ip`.
* SFTP will work the same way as FTP
  :::

Upon executing the command, the bot will attempt to establish a connection with the FTP server.
If the connection is successful, the embed will be edited accordingly.

::: warning
The connection or the automatic detection of the path and version might take up to a few minutes in the worst case.
:::

**Congratulations! You have successfully connected your server to the bot using FTP!
Now you're ready to start using the bot and all of its features!**
