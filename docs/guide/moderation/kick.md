# Kick

The `/kick` command enables you to immediately remove a connected player from the server while online.

### Usage

Run `/kick` alongside the target player's `username` or a linked Discord user.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/kick username: NaughtyPlayer reason: No swearing!"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Kick" >
      <discord-embed-description slot="description">
        **NaughtyPlayer** was successfully kicked from the server.
        Reason: No swearing!
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

### Arguments

* `username`: Target by Minecraft username. (Either `username` or `user` must be provided).
* `user`: Target by Discord user mention.
* `reason`: An optional reason to provide the player for kicking.

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator <DefaultBadge />
:::