# Stats

The `/stats` command lets you instantly review any player's in-game Minecraft statistics in Discord. This extracts vanilla statistcs directly from the server.

### Usage

Run `/stats` alongside the Minecraft `username` or a linked Discord `user`.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png">
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/stats username: Lianecx"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Minecraft Statistics for Lianecx">
      <discord-embed-thumbnail
        slot="thumbnail"
        url="https://mc-heads.net/avatar/Lianecx/100"
      ></discord-embed-thumbnail>
      <discord-embed-description slot="description">
        **⛏️ Mined Blocks**<br>
        Iron Gold: 154<br>
        Diamond Ore: 12<br>
        Stone: 812<br>
        <br>
        **⚔️ Combat**<br>
        Mob Kills: 86<br>
        Damage Taken: 1205<br>
      </discord-embed-description>
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