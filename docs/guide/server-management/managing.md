# Managing Chat Channels

You can list and remove existing chat channels using the `list` and `remove` subcommands.

### Listing Chat Channels

Run `/chatchannel list` in Discord. This will send an embed containing one of the chat channels on your server. You can then navigate through all the chat channels by clicking the buttons at the bottom of the embed.

### Removing Chat Channels

Run `/chatchannel remove channel: #server-chat` in Discord to delete an existing chat bridge.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/chatchannel remove channel: #server-chat"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Chat Channel Setup" >
      <discord-embed-description slot="description">
        Successfully removed chat channel <discord-mention type="channel">server-chat</discord-mention>.
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator <DefaultBadge />
:::