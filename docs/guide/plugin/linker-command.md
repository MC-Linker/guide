# The Linker Command

The `/linker` command serves as the core utility within the Minecraft chat or server console to manage your Discord-Linker plugin configuration and connections.

### Available Subcommands

| Command | Action | Permissions |
| -------- | ------- | ------- |
| `/linker connect <code>` | Connect the Minecraft server to the Discord bot using a pairing token code. | `discordlinker.linker.connect` (or OP) |
| `/linker disconnect` | Immediately sever the connection between Discord and the server. | `discordlinker.linker.disconnect` (or OP) |
| `/linker reload` | Reloads the configuration variables and re-establishes bot socket connections. | `discordlinker.linker.reload` (or OP) |
| `/linker bot_port [port]` | Displays or modifies the listening WebSocket port for the locally hosted bot integrations (if used). | `discordlinker.linker.port` (or OP) |
| `/linker debug` | Toggles verbose debugging readouts in the server console to help diagnose networking errors. | `discordlinker.linker.debug` (or OP) |

### Example

<discord-code multiline>
[User] /linker connect 123456789:abcdef
[Server] Successfully connected to Discord! Wait a moment for channels to synchronize.
</discord-code>