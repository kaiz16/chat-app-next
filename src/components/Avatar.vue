<template>
  <div class="inline-flex relative">
    <div
      class="bg-dark text-white rounded-full flex items-center justify-center w-full h-full"
    >
      <img
        v-if="image"
        width="100"
        height="100"
        class="rounded-full"
        :src="image"
        alt="Avatar image"
      />
      <span v-else>{{ initials }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  name: "AvatarVue",
  props: {
    image: {
      type: String,
      default: () => "",
    },
    name: {
      type: String,
      default: () => "",
    },
  },

  setup(Props) {
    const initials = computed(() => {
      return Props.name
        .match(/(\b\S)?/g)
        .join("")
        .match(/(^\S|\S$)?/g)
        .join("")
        .toUpperCase();
    });
    return {
      initials,
    };
  },
};
</script>

<style></style>
