<script setup lang="ts">
const props = defineProps<{
  popovertarget: string
}>();

defineSlots<{
  default: () => any
}>();

// Doc about popover
// • https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using
// • https://frontendmasters.com/blog/menus-toasts-and-more/
// • https://www.oidaisdes.org/popover-api-accessibility.en/
// Doc about anchors
// • https://developer.chrome.com/blog/anchor-positioning-api
// Transition behavior (allow-discrete)
// https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior

// “anchor positioning” positioning fallback (june 2024)
// https://caniuse.com/css-anchor-positioning
const hasAnchorPositioning = `anchorName` in document.documentElement.style;
const button = ref<HTMLButtonElement>();
const { x: scrollX, y: scrollY } = !hasAnchorPositioning
  ? useWindowScroll()
  : { x: ref(0), y: ref(0) };
const { x, y, width, height } = !hasAnchorPositioning
  ? useElementBounding(button)
  : { x: ref(0), y: ref(0), width: ref(0), height: ref(0) };

const popoverStyle = computed(() => {
  const styles: Record<string, string> = { 'position-anchor': `--${props.popovertarget}` };
  if (hasAnchorPositioning) return styles;
  styles.left = `${x.value + width.value / 2 + scrollX.value}px`;
  styles.top = `${y.value + height.value + scrollY.value}px`;
  return styles;
});
</script>

<template>
  <div class="contents">
    <button ref="button" :popovertarget class="border rounded" :style="`anchor-name: --${popovertarget};`">
      Button
    </button>
    <div
      :id="popovertarget"
      popover
      class="border rounded absolute m-0 mt-1 p-3 top-[anchor(bottom)] left-[anchor(center)] shadow-md"
      :style="popoverStyle"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior */
[popover]:popover-open {
  opacity: 1;
}
/*
  Browser support isn't that good (june 2024)
  => remove transition when not supported
*/
@supports (transition-behavior: allow-discrete) {
  /* Final state of the exit animation */
  [popover] {
    opacity: 0;
  }
}

[popover] {
  position-try-options: flip-block;
  inset-area: block-end;

  transition-property: opacity, overlay, display;
  transition-duration: 0.3s;
  transition-behavior: allow-discrete;

  /* Using the shorthand transition property, we could write:
    transition:
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;

    or even:
    transition: all 0.7s allow-discrete;
  */
}

/* Needs to be included after the previous [popover]:popover-open
   rule to take effect, as the specificity is the same */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
  }
}
</style>
