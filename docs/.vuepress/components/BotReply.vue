<script setup>
import { computed } from 'vue';

/**
 * A reply from the MC Linker bot, styled like Discord. Embed styles and
 * colours match the bot's language file (success / step / warning / error).
 *
 * <BotReply command="/inventory user: Steve" title="Player Inventory">Here's the inventory of **Steve**:</BotReply>
 */
const props = defineProps({
  command: { type: String, default: '' },
  user: { type: String, default: 'You' },
  title: { type: String, default: '' },
  type: { type: String, default: 'success' },
  color: { type: String, default: '' },
  image: { type: String, default: '' },
  fields: { type: Array, default: () => [] },
  buttons: { type: Array, default: () => [] },
  footer: { type: String, default: '' },
  ephemeral: { type: Boolean, default: false },
});

const styles = {
  success: { color: '#43611a', author: 'Success', icon: '/emoji/success.png' },
  warning: { color: '#f1c40f', author: 'Warning', icon: '/emoji/warning.png' },
  error: { color: '#9e3436', author: 'Error', icon: '/emoji/error.png' },
  step: { color: '#f88239' },
  plain: { color: '#5865f2' },
};
const style = computed(() => styles[props.type] ?? styles.success);
// discord-components lays out inline fields by their position in the row (1-3).
const fieldsWithIndex = computed(() => {
  let run = 0;
  return props.fields.map(f => {
    run = f.inline ? (run % 3) + 1 : 0;
    return { ...f, index: f.inline ? run : undefined };
  });
});
const buttonTypes = { primary: 'primary', secondary: 'secondary', danger: 'destructive', success: 'success' };
</script>

<template>
  <discord-messages>
    <discord-message author="MC Linker" avatar="/logo.png" bot verified :ephemeral="ephemeral || undefined">
      <discord-command v-if="command" slot="reply" :author="user" avatar="/assets/you.svg" :command="command"></discord-command>
      <discord-embed
        slot="embeds"
        :color="color || style.color"
        :author-name="style.author"
        :author-image="style.icon"
        :embed-title="title || undefined"
        :image="image || undefined"
      >
        <discord-embed-description v-if="$slots.default" slot="description"><slot /></discord-embed-description>
        <discord-embed-fields v-if="fields.length" slot="fields">
          <discord-embed-field v-for="(f, i) in fieldsWithIndex" :key="i" :field-title="f.name" :inline="f.inline || undefined" :inline-index="f.index">{{ f.value }}</discord-embed-field>
        </discord-embed-fields>
        <discord-embed-footer v-if="footer" slot="footer">{{ footer }}</discord-embed-footer>
      </discord-embed>
      <discord-attachments v-if="buttons.length" slot="components">
        <discord-action-row>
          <discord-button v-for="(b, i) in buttons" :key="i" :type="buttonTypes[b.style] ?? 'secondary'">{{ b.label }}</discord-button>
        </discord-action-row>
      </discord-attachments>
    </discord-message>
  </discord-messages>
</template>
