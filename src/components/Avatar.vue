<template>
  <div class="avatar placeholder">
    <div
      class="bg-dark text-white rounded-full"
      :class="`w-${width} h-${height}`"
    >
      <img v-if="image" :src="image" alt="Avatar image" />
      <span v-else>{{ initials }}</span>
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  name: "AvatarVue",
  props: {
    width: {
      type: String,
      default: () => "10",
    },
    height: {
      type: String,
      default: () => "10",
    },
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
