# Stat Channel

The `/statchannel` command adds auto-updating Discord channels displaying online player counts or the server's running status.

### Usage

Run `/statchannel` and configure either a `voice` or `text` channel to display live statistics.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/statchannel"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Stat Channel Created" >
      <discord-embed-description slot="description">
        Created a new Stat Channel: <discord-mention type="voice">🟢 Online: 12</discord-mention>
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator, Manage Channels <DefaultBadge />
:::