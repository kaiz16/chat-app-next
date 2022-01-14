<template>
  <div class="avatar">
    <div
      class="rounded-full"
      :class="`w-${width} h-${height}`"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvatarVue",
  props: {
    width: {
      type: String,
      default: () => "8",
    },
    height: {
      type: String,
      default: () => "8",
    },
  },
};
</script>

<style></style>
