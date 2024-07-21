<script setup lang="ts">
const toggleBackground = ref(false);
</script>

<template>
  <main class="min-h-svh" :class="{ main__background: toggleBackground }">
    <header class="px-8 py-4 bg-white flex justify-end border-b border-slate-300">
      <HSwitch
        v-model="toggleBackground"
        label="Background grid"
      />
    </header>
    <div class="grid grid-cols-[250px_1fr]">
      <nav class="flex flex-col">
        <RouterLink class="px-4 py-2" to="/">
          Home
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/btn">
          buttons
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/chips">
          chips & radios
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/dialog">
          dialog
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/drawer">
          drawer
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/inputs">
          inputs
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/menu">
          menu
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/rating">
          rating
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/spinner">
          spinner
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/switch">
          switch
        </RouterLink>
        <RouterLink class="px-4 py-2" to="/table">
          table
        </RouterLink>
      </nav>
      <div class="p-8">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
.main__background{
  background-color: #ffffff;
  background-image:  linear-gradient(#e6e7ff 2px, transparent 2px), linear-gradient(90deg, #e6e7ff 2px, transparent 2px), linear-gradient(#e6e7ff 1px, transparent 1px), linear-gradient(90deg, #e6e7ff 1px, #ffffff 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}
</style>
