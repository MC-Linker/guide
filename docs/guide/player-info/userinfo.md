# User Info

The `/userinfo` command displays detailed information about a connected Discord user or a Minecraft player character.

### Usage

Run `/userinfo` and provide either a Discord `user` mention, or a Minecraft `username`.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/userinfo"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="User Information" >
      <discord-embed-thumbnail
        slot="thumbnail"
        url="https://mc-heads.net/avatar/Lianecx/100"
      ></discord-embed-thumbnail>
      <discord-embed-description slot="description">
        Displaying information for user **Lianecx**.
      </discord-embed-description>
      <discord-embed-fields slot="fields">
        <discord-embed-field field-title="Discord Account" inline>
          <discord-mention type="user">Lianecx</discord-mention>
        </discord-embed-field>
        <discord-embed-field field-title="Minecraft Name" inline>
          Lianecx
        </discord-embed-field>
      </discord-embed-fields>
    </discord-embed>
  </discord-message>
</discord-messages>

### Arguments

* `user`: Limit search by Discord user mention. (Optional)
* `username`: Limit search by Minecraft username. (Optional)

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** None <DefaultBadge />
- **Minecraft:** None
:::