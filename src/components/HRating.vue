<script setup lang="ts">
const props = withDefaults(
  defineProps< {
    rating?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
  }>(),
  {
    rating: 0,
  },
);
const appearingStars = computed(() => Math.ceil(props.rating));
</script>

<template>
  <div class="h-rating">
    <div class="aspect-[108/20] h-[30px] relative">
      <HIconRating class="size-full fill-transparent stroke-[8px] stroke-orange-500" />
      <p class="h-full bg-indigo-500 absolute top-0 left-0" />
    </div>
  </div>
</template>

<style scoped>
.h-rating {
  --star-original-height: 20px;
  --star-original-gap: 2px;
  --scale-size: 1.5;
  --star-size: calc(var(--star-original-height) * var(--scale-size));
  --rating: v-bind('rating');
  --star-count: v-bind('appearingStars');
  --gap: calc(var(--star-original-gap) * var(--scale-size));
  --gap-calc : calc((var(--star-count, 0) - 1) * var(--gap));
  mask-image: url('~/assets/icons/rating.svg');
}
p {
  width: calc(var(--rating, 0) * var(--star-size) + var(--gap-calc));
}
</style>
