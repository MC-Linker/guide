# Inventory

The `/inventory` command quickly retrieves a visually rendered preview of any Minecraft player's current equipment and active items. This gives you their Armor, Hotbar, and Offhand setup.

### Usage

Run `/inventory` and provide either a Discord `user` mention, or a Minecraft `username`.

<discord-messages>
  <discord-message
    author="MC Linker"
    bot verified
    avatar="https://cdn.discordapp.com/avatars/712759741528408064/d3ee14343f8a927473f68a8e9e0e0e29.png" >
    <discord-command
      slot="reply"
      author="Lianecx"
      avatar="https://cdn.discordapp.com/avatars/675658958383349770/50c756c443d43b1a2f544e4e69f55ccc.png"
      command="/inventory username: Lianecx"
    ></discord-command>
    <discord-embed slot="embeds" color="#f88239" embed-title="Inventory of Lianecx" >
      <discord-embed-description slot="description">
        Displaying armor, offhand and hotbar.
      </discord-embed-description>
      <!-- Example Image Placeholder if you host an inventory render API -->
    </discord-embed>
  </discord-message>
</discord-messages>

### Arguments

* `username`: Limit search by Minecraft username. (Optional)
* `user`: Limit search by Discord user mention. (Optional)

### Permissions

:::important [Permissions](/guide/core/permissions.html)
- **Discord:** None <DefaultBadge />
- **Minecraft:** None
:::