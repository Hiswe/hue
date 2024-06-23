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

function onClick(event: Event) {
  if (!dialogElement.value) return;
  if (event.target !== dialogElement.value) return;
  dialogElement.value.close();
}
</script>

<template>
  <dialog
    ref="dialogElement"
    class="backdrop:bg-black/50 bg-transparent overflow:visible shadow-xl bg-white inset-0 h-auto max-h-none left-auto w-sm m-0"
    :open
    @close="open = false"
    @click="onClick"
  >
    <div class="p4 shadow-xl bg-white inset-0 h-full">
      <slot />
    </div>
  </dialog>
</template>

<style scoped>
/* https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior */
dialog,
dialog::backdrop{
  transition-property: opacity, transform, overlay, display;
  transition-duration: 0.3s;
  transition-behavior: allow-discrete;
}
dialog[open]  {
  opacity: 1;
  transform: translateX(0);
}
dialog[open]::backdrop {
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
    transform: translateX(100%);
  }
  dialog::backdrop {
    opacity: 0;
  }
}

/* Needs to be included after the previous dialog[open]
   rule to take effect, as the specificity is the same */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: translateX(100%);
  }
  dialog[open]::backdrop {
    opacity: 0;
  }
}
</style>
