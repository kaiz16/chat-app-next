<template>
  <div
    class="mb-3 conversation flex items-center hover:bg-oxford-blue-500 px-2 py-3 rounded-3xl cursor-pointer transition-colors duration-500"
    @click="$emit('click')"
  >
    <div class="avatar placeholder">
      <div class="bg-dark text-white rounded-full w-10 h-10">
        <span>{{ initials }}</span>
      </div>
    </div>
    <div class="last-message ml-2">
      <p class="font-semibold">{{ name }}</p>
      <p class="line-clamp-1 text-sm">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConversationVue",
  props: {
    initials: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
