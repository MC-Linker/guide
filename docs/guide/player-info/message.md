# Message Players

The `/message` command allows you to privately message online players currently active on your Minecraft server directly from a Discord server or DM.

### Usage

Run `/message` and supply a connected player's `username` and your `message`.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/message username: Lianecx message: Hey! Can you come back to base?"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Message Sent" >
      <discord-embed-description slot="description">
        Message successfully sent to **Lianecx**.
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

### Arguments

* `username`: A Minecraft username of an online player. 
* `message`: The text contents of the message to display.

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** None <DefaultBadge />
- **Minecraft:** None
:::