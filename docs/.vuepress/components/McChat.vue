<script setup>
import { computed } from 'vue';

/**
 * Minecraft chat (or the server console) with `&` colour codes.
 * Lines starting with "> " are shown as what you type. Add `terminal` for the server console.
 *
 * <McChat :lines="['> /verify a8f3c', '&aYou have been verified successfully.']" />
 */
const props = defineProps({
  lines: { type: Array, required: true },
  /** Show it as the server console instead of in-game chat. */
  terminal: { type: Boolean, default: false },
});

// Minecraft draws bold text by repeating each glyph one pixel to the right.
const bold = {
  letterSpacing: '0.0625em',
  textShadow: '0.0625em 0 0 currentColor, 0.12em 0.12em 0 rgb(0 0 0 / 0.6), 0.1825em 0.12em 0 rgb(0 0 0 / 0.6)',
};

const colors = {
  0: '#000000', 1: '#0000aa', 2: '#00aa00', 3: '#00aaaa', 4: '#aa0000', 5: '#aa00aa', 6: '#ffaa00', 7: '#aaaaaa',
  8: '#555555', 9: '#5555ff', a: '#55ff55', b: '#55ffff', c: '#ff5555', d: '#ff55ff', e: '#ffff55', f: '#ffffff',
};

function parse(text) {
  const out = [];
  let cur = { text: '', color: '#ffffff', bold: false, italic: false, underline: false };
  for (let i = 0; i < text.length; i++) {
    const code = text[i + 1]?.toLowerCase();
    if ((text[i] === '&' || text[i] === '§') && code && /[0-9a-fk-or]/.test(code)) {
      if (cur.text) out.push(cur);
      cur = { ...cur, text: '' };
      if (colors[code]) Object.assign(cur, { color: colors[code], bold: false, italic: false, underline: false });
      else if (code === 'l') cur.bold = true;
      else if (code === 'o') cur.italic = true;
      else if (code === 'n') cur.underline = true;
      else if (code === 'r') Object.assign(cur, { color: '#ffffff', bold: false, italic: false, underline: false });
      i++;
      continue;
    }
    cur.text += text[i];
  }
  if (cur.text) out.push(cur);
  return out;
}

const rows = computed(() => props.lines.map(line => {
  const input = line.startsWith('> ');
  return { input, segments: parse(input ? line.slice(2) : line) };
}));
</script>

<template>
  <div class="mc-chat" :class="{ terminal }" role="img" :aria-label="lines.map(l => l.replace(/[&§][0-9a-fk-or]/gi, '')).join('\n')">
    <div v-for="(row, i) in rows" :key="i" class="line" :class="{ input: row.input }">
      <span v-if="row.input" class="prompt">{{ terminal ? '>' : '' }}</span>
      <span
        v-for="(s, j) in row.segments"
        :key="j"
        :style="{ color: s.color, ...(s.bold ? bold : {}), fontStyle: s.italic ? 'italic' : undefined, textDecoration: s.underline ? 'underline' : undefined }"
      >{{ s.text }}</span>
    </div>
  </div>
</template>

<style scoped>
.mc-chat {
  margin: 1rem 0;
  padding: 0.75rem;
  border: 3px solid #000;
  background:
    linear-gradient(rgb(0 0 0 / 0.55), rgb(0 0 0 / 0.55)),
    linear-gradient(#78a6f7, #b4d3ff 70%, #6f9e2d 70%, #6f9e2d 76%, #915d2a 76%);
  font-family: var(--ml-pixel);
  font-size: 0.95rem;
  line-height: 1.45;
  text-shadow: 0.12em 0.12em 0 rgb(0 0 0 / 0.6);
}
.line {
  padding: 0 0.4rem;
  background: rgb(0 0 0 / 0.35);
  color: #fff;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.line.input {
  margin-top: 0.4rem;
  background: rgb(0 0 0 / 0.7);
}
.terminal {
  background: #0c0c0c;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.85rem;
  text-shadow: none;
}
.terminal .line { background: none; padding: 0; }
.terminal .line.input { background: none; margin: 0; }
.prompt { color: #888; margin-right: 0.5ch; }
</style>
