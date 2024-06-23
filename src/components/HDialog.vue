<script setup lang="ts">
const open = defineModel<boolean>({ default: false });

const dialogElement = shallowRef<HTMLDialogElement | null>(null);

watch(open, (isOpen) => {
  if (!dialogElement.value) return;
  // To activate a “modal mode” (with the backdrop)
  // we nee to use “showModal()” method
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
  if (isOpen) dialogElement.value.showModal();
  else dialogElement.value.close();
}, { immediate: true });
</script>

<template>
  <dialog
    ref="dialogElement"
    class="backdrop:bg-black/50 bg-transparent overflow:visible"
    :open
    @close="open = false"
  >
    <slot />
  </dialog>
</template>

<style scoped>
/* https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior */
dialog {
  transition-property: opacity, overlay, display;
  transition-duration: 0.3s;
  transition-behavior: allow-discrete;
}
dialog[open] {
  opacity: 1;
}

/*
  Browser support isn't that good (june 2024)
  => remove transition when not supported
*/
@supports (transition-behavior: allow-discrete) {
  /* Final state of the exit animation */
  dialog {
    opacity: 0;
  }
}

/* Needs to be included after the previous dialog[open]
   rule to take effect, as the specificity is the same */
@starting-style {
  dialog[open] {
    opacity: 0;
  }
}
</style>
