<script setup>
import { computed, getCurrentInstance, ref } from 'vue';

/**
 * A reply from the MC Linker bot, styled like Discord. Embed styles and
 * colours match the bot's language file (success / step / warning / error).
 *
 * <BotReply command="/inventory user: Steve" title="Player Inventory">Here's the inventory of **Steve**:</BotReply>
 *
 * Clicking a button emits `button` with that button ({ label, style }).
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
  thumbnail: { type: String, default: '' },
  // A second embed under the first, like the bot's detail pages:
  // { title, description (HTML), color, author, authorIcon, fields, footer }
  extra: { type: Object, default: null },
});

const styles = {
  success: { color: '#43611a', author: 'Success', icon: '/emoji/success.png' },
  warning: { color: '#f1c40f', author: 'Warning', icon: '/emoji/warning.png' },
  error: { color: '#9e3436', author: 'Error', icon: '/emoji/error.png' },
  step: { color: '#f88239' },
  plain: { color: '#5865f2' },
};
const emit = defineEmits(['button']);
const style = computed(() => styles[props.type] ?? styles.success);
// discord-components lays out inline fields by their position in the row (1-3).
// Field values may hold HTML (set html: true), for inline code and line breaks.
function withIndex(fields) {
  let run = 0;
  return fields.map(f => {
    run = f.inline ? (run % 3) + 1 : 0;
    return { ...f, index: f.inline ? run : undefined };
  });
}
const fieldsWithIndex = computed(() => withIndex(props.fields));
const extraFields = computed(() => withIndex(props.extra?.fields ?? []));
const buttonTypes = { primary: 'primary', secondary: 'secondary', danger: 'destructive', success: 'success' };

// Like Discord: a clicked button shows pulsing dots in place of its label while the bot
// answers, and other clicks wait until the answer arrives. Buttons nobody listens to stay still.
const listening = !!getCurrentInstance()?.vnode.props?.onButton;
const loading = ref(null);
function press(b) {
  if(!listening || loading.value) return;
  loading.value = b.label;
  setTimeout(() => {
    loading.value = null;
    emit('button', b);
  }, 650);
}
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
        :thumbnail="thumbnail || undefined"
      >
        <discord-embed-description v-if="$slots.default" slot="description"><slot /></discord-embed-description>
        <discord-embed-fields v-if="fields.length" slot="fields">
          <discord-embed-field v-for="(f, i) in fieldsWithIndex" :key="i" :field-title="f.name" :inline="f.inline || undefined" :inline-index="f.index"><span v-if="f.html" v-html="f.value"></span><template v-else>{{ f.value }}</template></discord-embed-field>
        </discord-embed-fields>
        <discord-embed-footer v-if="footer" slot="footer">{{ footer }}</discord-embed-footer>
      </discord-embed>
      <discord-embed
        v-if="extra"
        slot="embeds"
        :color="extra.color || style.color"
        :author-name="extra.author || undefined"
        :author-image="extra.authorIcon || undefined"
        :embed-title="extra.title || undefined"
      >
        <discord-embed-description v-if="extra.description" slot="description"><span v-html="extra.description"></span></discord-embed-description>
        <discord-embed-fields v-if="extraFields.length" slot="fields">
          <discord-embed-field v-for="(f, i) in extraFields" :key="i" :field-title="f.name" :inline="f.inline || undefined" :inline-index="f.index"><span v-if="f.html" v-html="f.value"></span><template v-else>{{ f.value }}</template></discord-embed-field>
        </discord-embed-fields>
        <discord-embed-footer v-if="extra.footer" slot="footer"><span class="pre">{{ extra.footer }}</span></discord-embed-footer>
      </discord-embed>
      <discord-attachments v-if="buttons.length" slot="components">
        <discord-action-row>
          <discord-button v-for="(b, i) in buttons" :key="b.label" :type="buttonTypes[b.style] ?? 'secondary'" @click="press(b)" :aria-busy="loading === b.label || undefined"><span class="label" :class="{ loading: loading === b.label }"><span class="text">{{ b.label }}</span><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span></span></discord-button>
        </discord-action-row>
      </discord-attachments>
    </discord-message>
  </discord-messages>
</template>

<style scoped>
.pre { white-space: pre-line; }
/* Discord's pulsing ellipsis: the label keeps the button's width but is hidden behind three dots. */
.label { position: relative; display: inline-block; }
.dots { position: absolute; inset: 0; display: none; align-items: center; justify-content: center; gap: 0.2rem; }
.label.loading .text { visibility: hidden; }
.label.loading .dots { display: flex; }
.dots i { width: 0.375rem; height: 0.375rem; border-radius: 50%; background: currentColor; animation: pulse 1.4s ease-in-out infinite; }
.dots i:nth-of-type(2) { animation-delay: 0.15s; }
.dots i:nth-of-type(3) { animation-delay: 0.3s; }
@keyframes pulse { 0%, 60%, 100% { opacity: 1; transform: scale(1); } 30% { opacity: 0.3; transform: scale(0.8); } }
</style>
