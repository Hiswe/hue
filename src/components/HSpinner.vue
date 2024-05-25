<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: `default` | `small` | `x-small`
  }>(),
  {
    size: `default`,
  },
);
// NOTE: we use “before“ to avoid having a transform at the root div
</script>

<template>
  <div
    role="status"
    class="rounded-full overflow-clip text-indigo-500 before:content-[''] before:block before:size-full"
    :class="{
      'size-8': size === `default`,
      'size-6': size === `small`,
      'size-4': size === `x-small`,
    }"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>

<style scoped>
[role="status"] {
  --duration: 1.4s;
  --spinner-fill-start: 0deg;
  --spinner-fill-end: 90deg;
  &::before {
    background: conic-gradient(
      rgb(229 229 229),
      rgb(229 229 229) var(--spinner-fill-start),
      currentColor var(--spinner-fill-start),
      currentColor var(--spinner-fill-end),
      rgb(229 229 229) var(--spinner-fill-end)
    );
    animation: var(--duration) linear infinite spinner-rotate;
  }

  /*
    this seems to be the way to see if @property is supported
    https://stackoverflow.com/a/69615696
  */
  @supports (background: paint(something)) {
    &::before {
      --spinner-fill-start: 0;
      --spinner-fill-end: 5deg;
      animation:
        var(--duration) linear infinite spinner-stroke,
        var(--duration) linear infinite spinner-rotate;
    }
  }
  &.size-8::before {
    clip-path: path("M16,0c8.831,0 16,7.169 16,16c0,8.831 -7.169,16 -16,16c-8.831,0 -16,-7.169 -16,-16c0,-8.831 7.169,-16 16,-16Zm0,4c-6.623,0 -12,5.377 -12,12c0,6.623 5.377,12 12,12c6.623,0 12,-5.377 12,-12c0,-6.623 -5.377,-12 -12,-12Z");
  }
  &.size-6::before {
    clip-path: path("M12,0c6.623,0 12,5.377 12,12c0,6.623 -5.377,12 -12,12c-6.623,0 -12,-5.377 -12,-12c0,-6.623 5.377,-12 12,-12Zm0,3c-4.967,-0 -9,4.033 -9,9c-0,4.967 4.033,9 9,9c4.967,0 9,-4.033 9,-9c0,-4.967 -4.033,-9 -9,-9Z");
  }
  &.size-4::before {
    clip-path: path("M8,0c4.415,0 8,3.584 8,8c0,4.415 -3.585,8 -8,8c-4.416,0 -8,-3.585 -8,-8c0,-4.416 3.584,-8 8,-8Zm0,2.004c-3.309,-0 -5.996,2.687 -5.996,5.996c-0,3.309 2.687,5.996 5.996,5.996c3.309,0 5.996,-2.687 5.996,-5.996c0,-3.309 -2.687,-5.996 -5.996,-5.996Z");
  }
}

/******
ANIMATIONS
******/

@keyframes spinner-rotate {
  0% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

/*
  needed to animate gradient
  as for now (FireFox@126.0) doesn't support it
  https://developer.mozilla.org/en-US/docs/Web/CSS/@property
*/

@property --spinner-fill-start {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

@property --spinner-fill-end {
  syntax: "<angle>";
  inherits: false;
  initial-value: 5deg;
}

@keyframes spinner-stroke {
  0% {
    --spinner-fill-start: 0deg;
    --spinner-fill-end: 5deg;
  }
  50% {
    --spinner-fill-start: 30deg;
    --spinner-fill-end: 330deg;
  }
  60% {
    --spinner-fill-start: 90deg;
    --spinner-fill-end: 360deg;
  }
  100% {
    --spinner-fill-start: 355deg;
    --spinner-fill-end: 360deg;
  }
}
</style>
