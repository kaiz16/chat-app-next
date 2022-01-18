<template>
  <div class="flex relative w-full px-4 py-2">
    <FormInput
      v-model="msg"
      @keyup.enter="send()"
      class="w-full"
      placeholder="Message..."
      type="text"
    />
    <div
      @click="send()"
      class="absolute transition-all inset-y-0 right-0 mr-6 flex items-center"
      :class="msg ? 'scale-1' : 'scale-0'"
    >
      <p class="text-dark font-medium cursor-pointer text-sm">
        Send
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import FormInput from "@/components/FormInput.vue";
import Button from "@/components/Button.vue";
export default {
  name: "ComposeVue",
  components: {
    FormInput,
    Button,
  },
  emits: ["sendMessage"],
  setup(Props, Context) {
    let msg = ref("");
    function send() {
      console.log("Send");
      Context.emit("sendMessage", msg.value);
    }
    return {
      msg,
      send,
    };
  },
};
</script>
