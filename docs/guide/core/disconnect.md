# Disconnecting

Disconnecting your Minecraft server from the bot is very straightforward. 

### Usage

Run `/disconnect` in the connected Discord server. This will completely unlink the bot and remove any associated Discord configurations (chat channels, stat channels, etc.). 

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/disconnect"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Server Disconnected" >
      <discord-embed-description slot="description">
        Your server has successfully been disconnected.
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator <DefaultBadge />
- **Minecraft:** `discordlinker.disconnect`
:::