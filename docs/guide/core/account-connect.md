# Connecting your Account

The `/account connect` command allows players to link their Discord account with their Minecraft account on your server. This powers features like Syncing Roles, Linked Roles, and displaying connected profiles.

### Usage

Run `/account connect` in a server channel where the bot is present, or in Direct Messages with the bot.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/account connect"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Account Verification" >
      <discord-embed-description slot="description">
        <discord-custom-emoji
          name="step"
          url="https://cdn.discordapp.com/emojis/1084904567961034803.webp"
          embed-emoji >
        </discord-custom-emoji> Join the Minecraft server and execute the following command:
        <discord-code multiline>/verify 888888888888888888:af234</discord-code>
        <discord-bold>You have 3 minutes to run the command.</discord-bold>
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

You can copy the command and paste it in the chat of the Minecraft server to complete the linking process.

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** None <DefaultBadge />
- **Minecraft:** `discordlinker.verify`
:::