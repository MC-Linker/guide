# Managing Permissions

Managing permissions properly ensures that your Discord community cannot abuse features like Server Commands, Chat Bridges, or Moderation tools.

## Discord Slash Command Permissions

By default, powerful slash commands (such as `/ban`, `/kick`, `/command`, `/rolesync`, and `/customize`) are restricted to members with the **Administrator** permission.
If you want to grant these commands to specific roles (like your Moderators or Admins) without giving them global server administrator rights, use Discord's built-in Integrations menu.

### How to configure Discord permissions

1. Navigate to your **Server Settings**.
2. Click on **Integrations** under the Apps section.
3. Click on the **MC Linker** bot or search for it.
4. You will see a list of commands. You can click on specific commands (like `/ban`) or apply rules globally.
5. Add specific **Roles** or **Members** to allow or deny them from using the command. You can also restrict commands to specific channels.

![Discord Integrations Setup](https://via.placeholder.com/600x300.png?text=Discord+Integrations+Menu)  
*(Navigate to Server Settings > Integrations to fine-tune slash commands)*

## Minecraft Permissions

Some plugin/mod commands executed in-game (like `/linker connect`, `/linker reload`, etc.) require explicit permissions to ensure unauthorized players cannot link your server to their own bots.

By default, **OP** (Operator) status is required to run administrative `/linker` commands. 

If you prefer to assign permissions per group rather than giving players OP, you should use a permission management plugin like **LuckPerms** or a **Vault**-compatible plugin. 

### Useful Guides

* **[LuckPerms Wiki](https://luckperms.net/wiki/)**: The most popular permissions plugin. You can grant nodes like `discordlinker.linker.connect` to an admin group.
* **[Vault GitHub](https://github.com/MilkBowl/Vault)**: Vault acts as an API to tie into generic Bukkit string-based permission handlers.
