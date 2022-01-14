<template>
  <div class="flex w-full px-4 py-2">
    <FormInput
      v-model="newMessage"
      class="w-full"
      placeholder="Write a message..."
      type="text"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import FormInput from "@/components/FormInput.vue";

export default {
  name: "ComposeVue",
  components: {
    FormInput,
  },
  setup() {
    let msg = ref("");
    return {
      msg,
    };
  },
};
</script>
