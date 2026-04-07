# Advancements

The `/advancements` command lets you instantly review any player's in-game Minecraft advancements in Discord.

### Usage

Run `/advancements` alongside the Minecraft `username` or a linked Discord `user`.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/advancements username: Lianecx"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Minecraft Advancements for Lianecx" >
      <discord-embed-thumbnail
        slot="thumbnail"
        url="https://mc-heads.net/avatar/Lianecx/100"
      ></discord-embed-thumbnail>
      <discord-embed-field field-title="Story" inline>
        `Stone Age`, `Getting an Upgrade`, `Acquire Hardware`
      </discord-embed-field>
      <discord-embed-field field-title="Nether" inline>
        `We Need to Go Deeper`
      </discord-embed-field>
    </discord-embed>
  </discord-message>
</discord-messages>

### Arguments

* `username`: Limit search by Minecraft username. (Either a `username` or `user` must be provided).
* `user`: Limit search by Discord user mention. (Requires their account to be linked).

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** None <DefaultBadge />
- **Minecraft:** None
:::