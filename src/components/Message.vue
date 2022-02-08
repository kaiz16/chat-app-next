<template>
  <div class="mb-1 px-3 py-2 bg-whitesmoke rounded-3xl w-fit break-words">
    <p class="text-black">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "MessageVue",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
