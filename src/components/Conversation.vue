<template>
  <div
    class="mb-3 conversation flex items-center hover:bg-oxford-blue-500 px-2 py-3 rounded-3xl cursor-pointer transition-colors duration-500"
    @click="$emit('click')"
  >
    <Avatar :name="name" :image="image" />
    <div class="last-message ml-2">
      <p class="font-semibold">{{ name }}</p>
      <p class="line-clamp-1 text-sm">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  name: "ConversationVue",
  props: {
    image: {
      type: String,
      default: () => "",
    },
    name: {
      type: String,
      default: () => "",
    },
    message: {
      type: String,
      required: true,
    },
  },
  components: {
    Avatar,
  },
};
</script>

<style></style>
