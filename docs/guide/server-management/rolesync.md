# Rolesync

The `/rolesync` command synchronizes discord roles to connected groups or teams in Minecraft.

### Usage

Run `/rolesync` to initiate a setup prompt to align Minecraft Teams, Vault Groups or LuckPerms Groups with Discord Roles.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/rolesync"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Role Synchronization" >
      <discord-embed-description slot="description">
        Synced **Admin** group with <discord-mention type="role" color="#ff0000">Admin</discord-mention> role.
      </discord-embed-description>
    </discord-embed>
  </discord-message>
</discord-messages>

### Integrations Hook Requirements
It connects smoothly with:
- Vanilla Teams
- LuckPerms Groups
- Vault Groups

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** Administrator <DefaultBadge />
- **Minecraft:** `discordlinker.rolesync`
:::