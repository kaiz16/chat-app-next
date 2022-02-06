<template>
  <main class="flex flex-col h-full" v-if="selectedConversation._id">
    <div class="overflow-y-auto p-4">
      <h1 class="text-3xl mb-5 font-semibold">
        {{ selectedConversation.name }}
      </h1>
      <div
        class="message flex w-full mb-1"
        v-for="message in messages"
        :key="message.id"
      >
        <Avatar :name="message.sender.name" />
        <div class="flex flex-col ml-2 max-w-[50%]">
          <Message :message="message.text"></Message>
        </div>
      </div>
    </div>
    <Compose class="mt-auto" />
  </main>

  <main
    class="h-full w-full p-4 overflow-y-auto flex flex-col justify-center items-center"
    v-else
  >
    <div>
      <h1 class="text-4xl mb-5 font-semibold">
        You don’t have a <br />
        message selected
      </h1>
      <p>
        Choose one from your existing messages, or <br />
        start a new one.
      </p>
      <Button
        class="btn bg-dark text-snow-500 text-xs mt-2"
        @click="showModal = true"
      >
        New Message
      </Button>
    </div>
    <NewConversation v-model="showModal" />
  </main>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { state } from "../states";
import Message from "@/components/Message.vue";
import Avatar from "@/components/Avatar.vue";
import Button from "@/components/Button.vue";
import NewConversation from "./NewConversation.vue";
import Compose from "./Compose.vue";
export default {
  name: "SelectedConversationVue",
  components: {
    Message,
    Avatar,
    Button,
    NewConversation,
    Compose,
  },
  setup() {
    const showModal = ref(false);
    const selectedConversation = computed(() => {
      return state.selectedConversation;
    });

    const messages = computed(() => {
      return state.messages;
    });
    // Polling
    setInterval(async () => {
      if (selectedConversation.value._id) {
        await state.getMessagesByConversation();
      }
    }, 1000);
    return {
      showModal,
      selectedConversation,
      messages,
    };
  },
};
</script>

<style></style>
