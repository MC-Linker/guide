---
seoTitle: "Role sync: Discord roles and Minecraft groups"
---

# Role sync

Role sync keeps a Discord role and a Minecraft team or group in step. Give someone the **VIP** role in Discord and they join the `vip` group in Minecraft, or the other way round.

<SplitView>
  <template #discord>
    <BotReply command="/rolesync add" title="Added Synced Role">Successfully added the synced role.</BotReply>
  </template>
  <template #minecraft>
    <McChat :lines="['&b[LP] &fcubey &anow inherits permissions from &fvip&a in context global.']" />
  </template>
</SplitView>

::: tip Before you start
- Your server is [connected](../getting-started/connecting.md).
- Players have [linked their accounts](./account-linking.md). Role sync can only match Discord members to players who linked.
- To sync **into** Discord, MC Linker needs **Manage Roles**, and its own role must be **above** the role you sync.
:::

## What you can sync to

| Minecraft side | Needs |
|---|---|
| A vanilla **team** (`/team`) | Nothing, works everywhere |
| A **LuckPerms group** | [LuckPerms](https://luckperms.net) on any platform |
| A **Vault group** | [Vault](https://www.spigotmc.org/resources/vault.34315/) and a Vault-compatible permission plugin (Spigot and Paper only) |

If LuckPerms and Vault are both installed, LuckPerms is used. See [Integrations](../plugin/integrations.md).

## Set it up

1. Create the team or group in Minecraft if it doesn't exist yet, for example `/lp creategroup vip`.
2. Run `/rolesync add`, pick the Discord role and start typing the group or team name. The list shows what exists on your server, marked **(Group)** or **(Team)**.
3. Optionally pick a `direction` (see below).

```
/rolesync add role: @VIP group_or_team: vip (Group) direction: Both
```

MC Linker syncs everyone right away. What happens depends on the direction:

| Direction | Right after adding |
|---|---|
| **Both** | Everyone with the role joins the group, and everyone in the group gets the role. Nobody is removed. |
| **To Minecraft** | The group is made to match the role: role holders join it, **other players are removed from it**. |
| **To Discord** | The role is made to match the group: group members get it, **other members lose it**. |

::: warning One-way directions remove people
With **To Minecraft** or **To Discord**, the side that follows is overwritten. Double-check you picked the right group and role before you confirm.
:::

## Directions

| Direction | Discord → Minecraft | Minecraft → Discord | Use it when… |
|---|---|---|---|
| **Both** (default) | ✅ | ✅ | Changes on either side should count. |
| **To Minecraft** | ✅ | ❌ | Discord is the source of truth, for example roles you hand out by hand or through boosts. |
| **To Discord** | ❌ | ✅ | Minecraft is the source of truth, for example ranks players buy or earn in-game. |

**To Minecraft** doesn't need MC Linker's role to be above the synced role, because MC Linker never changes Discord roles in that direction.

## When it syncs

- Right after you add the synced role.
- When someone gets or loses the role in Discord.
- When someone joins or leaves the group in Minecraft. LuckPerms changes are picked up instantly; teams and Vault groups are checked every 30 seconds (`sync_check_interval` in [config.yml](../plugin/configuration.md)).
- When a player links their account, and when your server reconnects.

## Manage it

| Command | What it does |
|---|---|
| `/rolesync list` | Shows each synced role, its group or team, how many members it has and the direction. |
| `/rolesync remove role: @VIP` | Stops syncing that role. Nobody loses the role or group. |

## Troubleshooting

| What you see | What to do |
|---|---|
| **Role Not Editable** | Move MC Linker's role above the synced role in **Server Settings › Roles**, or use `direction: To Minecraft`. |
| **Group Or Team Not Found** | Check the spelling, or create the group or team first. |
| **Luckperms Not Loaded** | You picked a group, but neither LuckPerms nor a Vault permission plugin is installed. Install one, or sync to a team. |
| **Team/Group Already Synced** | That group or team is already linked to another role. Remove the old one first. |
| **Rate Limited** | Discord limits how often a big server's member list can be loaded. Wait the time shown and try again. |
| Someone isn't synced | They haven't [linked their account](./account-linking.md) yet. |

## Related

- [Account linking](./account-linking.md)
- [Join requirements](./join-requirements.md)
- [Linked Roles](./linked-roles.md)
