<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonVue",
  emits: ["click"],
};
</script>

<style></style>
