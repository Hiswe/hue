<script setup lang="ts">
const desserts = [
  { name: `Frozen Yogurt`, price: 4.5, calories: 159, fat: 6.0, other: { carbs: 24, protein: 4.0, iron: 0.01 }, yumLevel: `high` },
  { name: `Ice cream sandwich`, price: 8, calories: 237, fat: 9.0, other: { carbs: 37, protein: 4.3, iron: 0.01 }, yumLevel: `mid` },
  { name: `Eclair`, price: 1.234, calories: 262, fat: 16.0, other: { carbs: 23, protein: 6.0, iron: 0.07 }, yumLevel: `low` },
  { name: `Cupcake`, price: 666, calories: 305, fat: 3.7, other: { carbs: 67, protein: 4.3, iron: 0.08 } },
  { name: `Gingerbread`, price: 42, calories: 1356, fat: 16.0, other: { carbs: 49, protein: 3.9, iron: 0.16 } },
  { name: `Jelly bean`, price: 12_768, calories: 375, fat: 0.0, other: { carbs: 94, protein: 0.0, iron: 0 } },
  { name: `Lollipop`, price: 0.5, calories: 392, fat: 0.2, other: { carbs: 98, protein: 0, iron: 0.02 }, yumLevel: `mid` },
  { name: `Honeycomb`, calories: 408, fat: 3.2, other: { carbs: 87, protein: 6.5, iron: 0.45 } },
  { name: `Donut`, calories: 452, fat: 25.0, other: { carbs: 51, protein: 4.9, iron: 0.22 } },
  { name: `KitKat`, calories: 518, fat: 26.0, other: { carbs: 65, protein: 7, iron: 0.06, yumLevel: `low` } },
];
</script>

<template>
  <HTable>
    <thead>
      <tr>
        <th>Name</th>
        <th class="text-end">
          price
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="dessert of desserts" :key="dessert.name">
        <td v-text="dessert.name" />
        <td class="text-end" v-text="dessert.price" />
      </tr>
    </tbody>
  </HTable>
</template>
