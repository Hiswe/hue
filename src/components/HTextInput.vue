<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    placeholder?: string
  }>(),
  {
    // Placeholder needed for value detection
    // https://stackoverflow.com/a/35593489
    placeholder: ` `,
  },
);

const modelValue = defineModel<string>();
</script>

<template>
  <label
    class="h-text-input
      grid rounded
      before:content-['']
      after:content-['']
    "
  >
    <input
      v-model="modelValue"
      type="text"
      :placeholder="placeholder"
    >
    <div class="h-text-input__notch">
      <span>
        {{ label }}
      </span>
    </div>
  </label>
</template>

<style scoped>
/*
This is a good example of what we want to achieved
https://vuetifyjs.com/en/components/text-fields/
• Unfortunately, this needs some JS

The following examples are imperfect:
https://codepen.io/SnafuParadise/pen/ExpjaMV?editors=1100
https://medium.com/@algopoint.ltd/how-to-create-an-animated-material-input-in-pure-css-43e611785878
• it needs background color label bg color to match
• to have the illusion of the notch
*/

/*
For select we could with:
• selectlist
  https://github.com/Devographics/surveys/discussions/95
  https://open-ui.org/components/selectlist/
*/

.h-text-input {
  --border-color: black;
  --border-width: 1px;
  --radius: 0.5rem;
  --spacing-inline: 1.25rem;
  --spacing-block: 1rem;
  --spacing-label-border: 3px;
  --label-displacement: 1.4rem;

  grid-template-columns: var(--spacing-inline) min-content minmax(var(--spacing-inline), 1fr);
  /* position: relative; */
}

.h-text-input:focus-within {
  --border-color: blue;
  --border-width: 2px;
}

.h-text-input::before,
.h-text-input::after,
.h-text-input__notch {
  border: 0 solid var(--border-color);
  border-style: solid;
  border-block-width: var(--border-width);
  padding-block: var(--spacing-block);
  grid-row: 1;
  pointer-events: none;
  transition: border-color .3s;
}

/*
  Beginning & end of border
*/

.h-text-input::before {
  border-inline-start-width: var(--border-width);
  border-radius: var(--radius) 0 0 var(--radius);
  grid-column: 1;
}

.h-text-input::after {
  border-inline-end-width: var(--border-width);
  border-radius: 0 var(--radius) var(--radius) 0;
  grid-column: 3;
}

/*
  The notch will handle the borders
*/
.h-text-input__notch {
  white-space: nowrap;
  grid-column: 2;
  padding-inline-start: var(--spacing-label-border);
  padding-inline-end: var(--spacing-label-border);
}

.h-text-input__notch span {
  transition: all 0.3s;
  font-size: 1rem;
  display: block;
  color: var(--border-color);
  translate: 0 0;
}

/*
  Use placeholder display to check if an input is empty
  • https://stackoverflow.com/a/35593489
  • https://caniuse.com/css-placeholder-shown
*/

.h-text-input:focus-within .h-text-input__notch,
input:not(:placeholder-shown) + .h-text-input__notch {
  border-top-width: 0;
  border-top-color: transparent;
}

.h-text-input:focus-within .h-text-input__notch span,
input:not(:placeholder-shown) + .h-text-input__notch span {
  font-size: 0.75rem;
  translate: 0 calc(var(--label-displacement) * -1);
}

.h-text-input input {
  grid-row: 1;
  grid-column: 2 / span 2;
  background: none;
  border: solid transparent;
  border-width: 2px 0;
  outline: none;
  padding-block: var(--spacing-block);
  padding-inline-start: var(--spacing-label-border);
  padding-inline-end: var(--spacing-label-border);
}
</style>
