# Creating Chat Channels

Chat channels sync your Minecraft server chat bidirectionally with Discord. Webhooks are used to replicate player avatars and usernames!

### Adding a Chatchannel

To create a chatchannel, execute the `/chatchannel add` command in Discord. It will prompt you with the Discord channel you want the messages to stream to. You will then be able to configure which filters and events appear:

- **Chat Messages**: Player chat
- **Join/Quit Messages**: Network events
- **Advancement Messages**: Player achievements
- **Death Messages**: Deaths
- **Command Messages**: Player/Console/Block execution events
- **Server Starts/Stops**: Lifecycle events

### Command Options

There are also optional parameters that you can set when executing `/chatchannel add channel: #general`:

- `discord-to-minecraft`: Enable or disable Discord users sending messages *into* the server game chat.
- `webhooks`: Utilize webhooks to mirror Minecraft skins as avatars and usernames dynamically. (Highly Recommended).

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/chatchannel add channel: #server-chat"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Chat Channel Setup" >
      <discord-embed-description slot="description">
        Successfully linked server chat to <discord-mention type="channel">server-chat</discord-mention> with Webhooks enabled.
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator, Manage Webhooks <DefaultBadge />
:::