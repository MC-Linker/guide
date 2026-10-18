# Linked Roles

[Linked Roles](https://support.discord.com/hc/en-us/articles/10388356626711) are a Discord feature: a role that members can only get by connecting an app. With MC Linker, you can make a role that only players with a linked Minecraft account can get, and MC Linker shows up under their profile's connections.

::: tip Before you start
Members need a [linked Minecraft account](./account-linking.md). Any link counts, global or per-server.
:::

## Set it up (admins)

1. Open **Server Settings › Roles** and create a role (or edit one), for example **Verified Player**.
2. Open the **Links** tab of the role and click **Add requirement**.
3. Choose **MC Linker** and the requirement **Has Minecraft Account**.
4. Save.

## Get the role (members)

1. Click your server's name and choose **Linked Roles**.
2. Pick the role and connect **MC Linker**.
3. Authorize MC Linker in the window that opens. You'll see *You have been authorized as …! You can now close this window and go back to Discord.*
4. Back in Discord, claim the role.

If you haven't linked your Minecraft account yet, run [`/account connect`](./account-linking.md) first. If you link later, MC Linker updates your connection by itself.

## Linked Roles or role sync?

| | Linked Roles | [Role sync](./role-sync.md) |
|---|---|---|
| What it checks | "Has a linked Minecraft account" | Membership of a Minecraft team or group |
| Who starts it | The member, through Discord's Linked Roles menu | Automatic |
| Changes Minecraft | No | Yes, if the direction allows it |

## Related

- [Account linking](./account-linking.md)
- [Role sync](./role-sync.md)
