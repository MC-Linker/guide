---
seoTitle: "Direct messages between Minecraft and Discord"
---

# Direct messages

Players can send a Discord DM from inside Minecraft with `/dm`, and get replies back in their chat. In the other direction, [`/message`](../commands/message.md) whispers to an online player from Discord.

<SplitView first="minecraft">
  <template #minecraft>
    <McChat :lines="['> /dm TheAnnoying meet me at spawn?', '&aDM sent to TheAnnoying: meet me at spawn?', '&9&o&lDiscord &8&o| &7&oTheAnnoying whispers to you: omw!']" />
  </template>
  <template #discord>
    <discord-messages>
      <discord-message author="MC Linker" avatar="/logo.png" bot verified><div class="dc-container"><discord-header level="3">📬 New DM from Cubey</discord-header>meet me at spawn?<discord-subscript>Sent from Minecraft (testing.mclinker.com) · Reply to this message to send a reply · <discord-code>/account dms</discord-code> to manage DM settings</discord-subscript></div></discord-message>
    </discord-messages>
  </template>
</SplitView>

## Send a DM from Minecraft

```
/dm <user> <message>
```

`<user>` can be:

- a Discord username or user ID, or
- the Minecraft name or UUID of a player who [linked their account](./account-linking.md).

The person has to be a member of the Discord server that's linked to your Minecraft server.

## Reply from Discord

**Reply** to the DM in Discord (right-click › Reply). Your answer appears in the player's chat as a whisper. You can reply for 10 minutes; after that the DM says *Reply window closed*, but you can still whisper to the player with [`/message`](../commands/message.md) in your Discord server.

## Block DMs

Anyone can turn DMs from Minecraft off with `/account dms`:

| Command | What it does |
|---|---|
| `/account dms block` | Block all DMs from Minecraft. |
| `/account dms block server: True` | Block DMs from the Minecraft server linked to this Discord server. |
| `/account dms block player: Cubey` | Block DMs from one player. |
| `/account dms unblock …` | The same options, to undo it. |

## What players see when it fails

| Message in Minecraft | Meaning |
|---|---|
| *Could not find a valid Discord account…* | The name or ID didn't match a member of the linked Discord server. Minecraft names only work for linked players. |
| *That Discord user has DMs disabled.* | Their Discord privacy settings don't allow DMs from server members. |
| *That Discord user has blocked DMs for this request.* | They blocked DMs with `/account dms`. |

## Permissions

`/dm` needs the `discordlinker.dm` permission, which every player has by default. See [Plugin permissions](../plugin/permissions.md).

## Related

- [/message](../commands/message.md)
- [Account linking](./account-linking.md)
- [Plugin commands](../plugin/commands.md)
