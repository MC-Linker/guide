---
seoTitle: "Join requirements: Discord as your whitelist"
---

# Join requirements

Use your Discord server as the whitelist. With a join requirement, only players who [linked their account](./account-linking.md), or who also have certain Discord roles, can join your Minecraft server.

<SplitView first="minecraft">
  <template #discord>
    <discord-messages>
      <discord-message author="Newbie" avatar="/assets/you.svg">4821</discord-message>
      <discord-message author="MC Linker" avatar="/logo.png" bot verified>
        <discord-embed slot="embeds" color="#43611a" author-name="Success" author-image="/emoji/success.png" embed-title="Account Verified">
          <discord-embed-description slot="description">Successfully verified your account.</discord-embed-description>
        </discord-embed>
      </discord-message>
    </discord-messages>
  </template>
  <template #minecraft>
    <McChat :lines="['&7Failed to connect to the server', '&eYou have not connected your Minecraft account to Discord.', '&ePlease join &b&ndiscord.gg/linker-smp&e and DM &b@MC Linker#7784&e with the code &b4821&e in the next&l 3 minutes&e and rejoin.']" />
  </template>
</SplitView>

## Requirements you can set

| Requirement | Who can join |
|---|---|
| **None** (default) | Everyone, as usual. |
| **Require Linked Account** | Only players who linked their Discord account. |
| **Require Role(s)** | Only players who linked their account *and* have the roles you pick. Choose **Any** (one of the roles is enough) or **All** (every role is needed). Up to 25 roles. |

## Set it up

Join requirements are set when you connect, with the `join-requirement` option of [`/connect`](../getting-started/connecting.md):

```
/connect join-requirement: Require Linked Account
```

Already connected? See [Changing options later](../getting-started/connecting.md#changing-options-later).

## What players see

A player who hasn't linked yet is stopped before they enter the world. The kick message tells them what to do:

1. Join your Discord server (the message includes an invite).
2. Send the 4-digit code from the kick message to **MC Linker** in a DM within 3 minutes.
3. Join the Minecraft server again.

Players can also link the usual way with [`/account connect`](./account-linking.md) in Discord before they join.

With **Require Role(s)**, a linked player without the right roles sees:

<McChat :lines="['&cYou do not have the required role(s) to join this server.']" />

## Good to know

- The check happens before the player loads into the world, so players who don't qualify never join.
- If MC Linker can't be reached (for example during an outage), players who need to be checked can't join. They see *Your roles could not be verified. Please try again later.*
- For the invite link, MC Linker uses your vanity URL or an existing invite. If there is none, it creates one in a channel where it has the **Create Invite** permission.
- If a player unlinks their account, they are kicked from servers where they no longer meet the requirement.
- Combine it with [role sync](./role-sync.md) to give everyone who joins a matching Minecraft group.

## Related

- [Account linking](./account-linking.md)
- [Connecting your server](../getting-started/connecting.md)
- [Role sync](./role-sync.md)
