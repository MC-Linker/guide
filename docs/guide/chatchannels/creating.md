# Creating Chat Channels

Chatchannels are a way to send messages from your Minecraft server to a Discord channel and vice versa. You can create
as many chatchannels as you want and they can be configured to send specific types of messages to specific channels.

### Adding a Chatchannel

To create a chatchannel, execute the `/chatchannel add` command in Discord. It has one required option that lets you
choose the channel you want the messages to be sent to. You will then be presented with a select menu where you can
choose all the message types that you want the bot to send to the channel.
The message types are:

- Chat Messages: Messages sent by players in the Minecraft server
- Join Messages: Messages sent when a player joins the Minecraft server
- Quit Messages: Messages sent when a player leaves the Minecraft server
- Advancement Messages: Messages sent when a player completes an advancement
- Death Messages: Messages sent when a player dies
- Player Command Messages: Messages sent when a player executes a command
- Console Command Messages: Messages sent when the console executes a command
- Block Command Messages: Messages sent when a command block executes a command
- Startup Messages: Messages sent when the Minecraft server starts
- Shutdown Messages: Messages sent when the Minecraft server stops

You can choose as many message types as you want. Once you have selected all the message types you want, click anywhere
outside the select menu to confirm your selection and create the chatchannel.

### Command Options

There are also two (optional) options that you can set when executing the `/chatchannel add` command:

- `discord-to-minecraft`: If set to `true`, the bot will send messages from the Discord channel to the Minecraft server.
  If set to `false`, the bot will not send messages from the Discord channel to the Minecraft server. Default
  value: `true`
- `webhooks`: If set to `true`, the bot will send messages from the Minecraft server to the Discord channel using a
  webhooks which make the messages look like they were sent by a real user. If set to `false`, the bot will send
  messages from the Minecraft server to the Discord channel using an embed. Default value: `true`
