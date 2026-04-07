# Ban and Unban

The `/ban` and `/unban` commands let you manage your server bans easily via Discord.

### Usage

Run `/ban` or `/unban` alongside the target player's `username` or a linked Discord user.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/ban username: UnwantedPlayer reason: Griefing"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Ban" >
      <discord-embed-description slot="description">
        **UnwantedPlayer** was successfully banned from the server.
        Reason: Griefing
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

### Arguments

* `username`: Limit ban target by Minecraft username. (Either `username` or `user` must be provided).
* `user`: Limit ban target by Discord user mention.
* `reason`: An optional reason to provide for the ban logic.

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator <DefaultBadge />
:::