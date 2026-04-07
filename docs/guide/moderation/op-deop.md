# Op and DeOp

The `/op` and `/deop` commands grant or revoke administrative status for a Minecraft player, avoiding needing console access.

### Usage

Run `/op` or `/deop` alongside the target player.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/op username: TrustworthyAdmin"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Op" >
      <discord-embed-description slot="description">
        **TrustworthyAdmin** was successfully made a server operator.
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

### Arguments

* `username`: Limit ban target by Minecraft username. (Either `username` or `user` must be provided).
* `user`: Limit ban target by Discord user mention.

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator <DefaultBadge />
:::