# Writing for the MC Linker Guide

Every page in the guide follows one of three templates, so readers always know where to look. Facts (option names, permissions, messages) come from the bot's language file (`resources/languages/en_us.json` in MC-Linker) and the plugin source (Discord-Linker). Check there before writing.

## Structure

```
docs/guide/
  README.md               Introduction: what MC Linker is and how it works
  getting-started/        Quick start, installing, connecting, permissions, disconnecting
  features/               One page per feature (task-oriented: "how do I set up X")
  commands/               One page per command people use day to day (reference)
  plugin/                 Everything that lives on the Minecraft server
  help/                   Troubleshooting and FAQ
```

Setup commands (`/chatchannel`, `/statchannel`, `/rolesync`, `/account`, `/customize`, `/connect`) are documented on their feature page. The [command overview](docs/guide/commands/README.md) links every command to the page that explains it, so nothing is documented twice.

## Template: feature page

```md
# Feature name

What it does and why you'd want it, in one or two sentences.

<SplitView> showing the Discord side and the Minecraft side </SplitView>

::: tip Before you start
- What has to be true first (connected server, permissions, linked accounts…)
:::

## Set it up
Numbered steps. One action per step. Show the bot's reply.

## Options            (what each option or choice does, as a table)
## Manage it          (list, change, remove)
## Troubleshooting    (only problems specific to this feature)
## Related            (links)
```

## Template: command page

```md
# /command

One sentence: what it does.

<CommandInfo discord="…" where="…" needs="…" />

## Usage              (a code block with the command, plus one line of explanation)
## Options            (table: Option | Required | What it does)
## Example            (<BotReply>, and <McChat> in a <SplitView> if something happens in-game)
## Good to know       (optional: tips and limits)
## Related
```

## Template: reference page

Plugin and help pages are reference material: a short intro, then tables or question-and-answer sections.

## Components

| Component | Use it for |
|---|---|
| `<BotReply command="/x" title="…" type="success">text</BotReply>` | A bot reply. `type` is `success`, `step`, `warning`, `error` or `plain`. Optional `fields`, `buttons`, `image`, `footer`. Use HTML (`<strong>`, `<discord-code>`) inside, not Markdown. |
| `<McChat :lines="['> /typed command', '&aGreen reply']" />` | Minecraft chat. `&` colour codes work. Add `terminal` for the server console. |
| `<SplitView>` with `#discord` and `#minecraft` templates | Showing both sides of one action. |
| `<CommandInfo discord="Administrator" where="Discord servers" needs="…" />` | The summary at the top of every command page. |

## Style

- Write to the reader ("you"), in short sentences. Steps start with a verb.
- Commands in code: `/chatchannel add`. Menu paths in bold: **Server Settings › Integrations**.
- Use the exact names the bot uses for options, buttons and messages.
- Only document what exists. If something is a limit (for example, one Minecraft server per Discord server), say so plainly.
- Link the first mention of another feature to its page.
