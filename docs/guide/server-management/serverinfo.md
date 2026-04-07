# Server Info

The `/serverinfo` command grabs properties, live online player counts, operators, world metadata, and gamerules.

### Usage

Run `/serverinfo` in your connected Discord Server.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/serverinfo"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Server Information" >
      <discord-embed-thumbnail
        slot="thumbnail"
        url="https://api.mcsrvstat.us/icon/play.example.com"
      ></discord-embed-thumbnail>
      <discord-embed-description slot="description">
        Server Name: **My Minecraft Server**
      </discord-embed-description>
      <discord-embed-fields slot="fields">
        <discord-embed-field field-title="Players Online" inline>
          12 / 100
        </discord-embed-field>
        <discord-embed-field field-title="Version" inline>
          1.20.4
        </discord-embed-field>
      </discord-embed-fields>
    </discord-embed>
  </discord-message>
</discord-messages>

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** None <DefaultBadge />
- **Minecraft:** None
:::