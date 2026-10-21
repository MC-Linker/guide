# Account linking

Players link their Discord account with their Minecraft account once. After that, MC Linker knows who is who: you can @mention people in commands instead of typing their username, [role sync](./role-sync.md) and [join requirements](./join-requirements.md) work, and [Linked Roles](./linked-roles.md) can show a Minecraft badge on their profile.

<SplitView>
  <template #discord>
    <BotReply command="/account connect user: Cubey" type="step" title="Account Verification"><discord-custom-emoji name="step" url="/emoji/step.png" embed-emoji></discord-custom-emoji> To verify your account, please join the server (<strong>testing.mclinker.com</strong>) and execute the following command: <discord-code multiline>/verify a8f3c</discord-code><strong>You have 3 minutes to run the command.</strong></BotReply>
  </template>
  <template #minecraft>
    <McChat :lines="['&eYou have been added to the verification queue. Please execute &quot;/verify <code>&quot; in-game within 3 minutes to verify your account.', '> /verify a8f3c', '&aYou have been verified successfully.']" />
  </template>
</SplitView>

## Link your account

1. In a Discord server that's connected to the Minecraft server, run `/account connect` with your **Minecraft username** (or UUID):

   ```
   /account connect user: Cubey
   ```

2. Join the Minecraft server and type the `/verify` command the bot shows you. You have **3 minutes**.
3. The bot confirms:

<BotReply command="/account connect user: Cubey" title="Account Verified">Successfully verified your account.</BotReply>

::: tip Kicked when joining?
If the server [requires a linked account](./join-requirements.md), you can't join to type `/verify`. The kick message gives you a 4-digit code instead: send that code to MC Linker in a DM, then join again.
:::

## Global and per-server accounts

You can have one **global** account plus one account **per server**:

- **Global:** used on every server where you don't have a per-server account. Your first premium (Mojang or Bedrock) account becomes global automatically.
- **Per server:** used only on that server, and wins over your global one there. Handy if you play with an alt somewhere.
- **Cracked accounts** (on offline-mode servers) are always per-server, because their names aren't unique across servers.

The `set-as-global` option on `/account connect` lets you choose. Set it to `False` to link a premium account to the current server only.

## Who can link what

| Server type | What works |
|---|---|
| Online mode (default) | Premium Java accounts, and Bedrock accounts through Floodgate. Type Bedrock names with your server's Floodgate prefix, for example `.Steve`. |
| Offline mode | Any username, including cracked accounts. |

Each Minecraft account can only be linked to one Discord user at a time.

## Manage your accounts

`/account manage` shows every link you have, with buttons:

| Button | What it does |
|---|---|
| **Disconnect** | Unlinks that account (asks you to confirm). |
| **Promote To Global** | Turns a per-server premium account into your global account. |
| **Use On This Server** | Uses that account as your per-server account on the current server. |

`/account disconnect` unlinks the account that's active on the current server: your per-server one if there is one, otherwise your global one.

::: warning Disconnecting on servers that require a link
If you disconnect your last link for a server that [requires a linked account](./join-requirements.md), you are kicked from it.
:::

## Troubleshooting

| What you see | What to do |
|---|---|
| **No Username Specified** | Type your Minecraft name, don't @mention someone. |
| **Could Not Resolve Account** | On online-mode servers only real premium accounts (or Floodgate names with the prefix) work. Check the spelling. |
| **Already Linked Globally** / **Already Linked Here** | You already have a link there. Disconnect it first, or use `set-as-global: False`. |
| **Account Already Linked** | Someone else linked that Minecraft account. They have to run `/account disconnect` first. |
| **You are not awaiting verification** (in Minecraft) | Run `/account connect` in Discord first, or the 3 minutes ran out. |
| **The code you specified is incorrect** (in Minecraft) | Copy the newest code exactly. |
| **Server Not Connected** | Run `/account connect` in a Discord server that's linked to a Minecraft server. |

## Related

- [Join requirements](./join-requirements.md)
- [Role sync](./role-sync.md)
- [Linked Roles](./linked-roles.md)
- [Direct messages](./direct-messages.md)
