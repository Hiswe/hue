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
  <div>
    <div>
      <!-- TODO: slot before -->
      <label
        class="h-text-input
          group/input
          grid rounded
          before:content-[''] before:pointer-events-none before:rounded-s-lg before:col-start-1 before:row-start-1
          before:border before:border-black before:!border-e-0 has-[:focus-within]:before:border-2 has-[:focus-within]:before:border-indigo-500
          after:content-[''] after:pointer-events-none after:rounded-e-lg after:col-start-3 after:row-start-1
          after:border after:border-black after:!border-s-0 has-[:focus-within]:after:border-2 has-[:focus-within]:after:border-indigo-500
        "
      >
        <!-- TODO: slot inner before -->
        <input
          v-model="modelValue"
          class="outline-none bg-yellow-50 row-start-1"
          type="text"
          :placeholder="placeholder"
        >
        <!-- TODO: slot inner after -->
        <p
          class="
            h-text-input__notch whitespace-nowrap pointer-events-none col-start-2 row-start-1
            border-solid border-black group-has-[:focus-within]/input:border-indigo-500
          "
        >
          <span class="block group-has-[:focus-within]/input:text-indigo-500">
            {{ label }}
          </span>
        </p>
      </label>
    <!-- TODO: slot after -->
    </div>
    <!-- TODO: text under -->
  </div>
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
  --border-width: 1px;
  --spacing-inline: 1.25rem;
  --spacing-block: 1rem;
  --spacing-label-border: 3px;
  --label-displacement: 1.4rem;

  grid-template-columns: var(--spacing-inline) min-content minmax(var(--spacing-inline), 1fr);
  /* position: relative; */
}

.h-text-input:focus-within {
  --border-width: 2px;
}

.h-text-input::before,
.h-text-input::after {
  transition: border-color .3s;
}
.h-text-input__notch {
  border-width: var(--border-width) 0;
  padding-block: var(--spacing-block);
  transition: border-color .3s;
}

/*
  The notch will handle the borders
*/
.h-text-input__notch {
  padding-inline-start: var(--spacing-label-border);
  padding-inline-end: var(--spacing-label-border);
}

.h-text-input__notch span {
  transition: all 0.3s;
  font-size: 1rem;
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
  grid-column: 2 / span 2;
  border: solid transparent;
  border-width: 2px 0;
  padding-block: var(--spacing-block);
  padding-inline-start: var(--spacing-label-border);
  padding-inline-end: var(--spacing-label-border);
}
</style>
