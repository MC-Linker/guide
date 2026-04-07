# Plugin Configuration

Because MC Linker is primarily managed dynamically through Discord Slash commands (such as Chat Channels, Stat Channels, and Role Sync), the local plugin file required on your Minecraft server is remarkably minimal.

### config.yml

The config file located at `plugins/Discord-Linker/config.yml` (Spigot/Paper) or `config/Discord-Linker.json` (Fabric/Forge) generally focuses solely on the connection variables and whether debugging is active. You typically do not need to manually edit this file.

```yaml
# Do not share this token code with anyone
connection-token: "..."

# Enables console printouts for network tracing
debug: false
```

### Note on Features

Everything previously found in local config files—from toggling Chat Channels, Server Information settings, to modifying user permissions—is safely managed from within your Discord Server via the Admin commands and the newly introduced `/customize` interface.

Use `/linker reload` in-game if you ever edit this file manually.