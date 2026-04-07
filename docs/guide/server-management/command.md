# Executing Commands

The `/command` system allows you to remotely execute Minecraft server commands straight from Discord. The system automatically fetches choices like players and entities and even provides real-time Tab Completions. 

### Usage

Run `/command` in your Discord server accompanied by the Minecraft command you wish to execute.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/command command: /say Hello Discord from Minecraft Server Console!"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Command Executed" >
      <discord-embed-description slot="description">
        <discord-code multiline>
[Server] Hello Discord from Minecraft Server Console!
        </discord-code>
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

:::tip
As you type your Minecraft command into the Discord command prompt, Discord-Linker will connect to the server and offer auto-complete options directly from Minecraft's execution engine.
:::

### Arguments

* `command`: The specific Minecraft command to run (no leading slash required). 

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator <DefaultBadge />
:::