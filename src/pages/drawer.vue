<script setup lang="ts">
const isOpen = shallowRef(false);
</script>

<template>
  <div>
    <h1 class="text-4xl pb-8 font-semibold">
      Drawer
    </h1>
    <HBtn text="open drawer" @click="isOpen = true" />
    <HDrawer v-model="isOpen">
      <p>Greetings, one and all!</p>
      <form method="dialog">
        <button>OK</button>
      </form>
    </HDrawer>
  </div>
</template>
