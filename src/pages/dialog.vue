<script setup lang="ts">
const isOpen = shallowRef(false);
</script>

<template>
  <div>
    <h1 class="text-4xl pb-8 font-semibold">
      Dialog
    </h1>
    <HBtn text="open dialog" @click="isOpen = true" />
    <HDialog v-model="isOpen">
      <div class="p4 shadow-xl bg-white rounded-xl">
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </div>
    </HDialog>
  </div>
</template>
