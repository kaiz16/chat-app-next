<template>
  <div class="mb-1 message px-3 py-2 bg-whitesmoke rounded-3xl w-fit">
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
