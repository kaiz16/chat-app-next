<template>
  <main class="h-full w-full p-4 overflow-y-auto" v-if="selectedConversation">
    <h1 class="text-3xl mb-5 font-semibold">
      {{ selectedConversation.name }}
    </h1>
    <div
      class="message flex w-full mb-1"
      v-for="(message, i) in messages"
      :key="message.id"
    >
      <div class="avatar placeholder">
        <div
          class="bg-dark text-white rounded-full w-10 h-10"
          :class="{
            'opacity-0':
              i !== 0 && messages[i - 1].user.email === message.user.email,
          }"
        >
          <span>{{ getInitials(message.user.name) }}</span>
        </div>
      </div>
      <div class="flex flex-col ml-2 max-w-[50%]">
        <Message :message="message.message"></Message>
      </div>
    </div>
  </main>

  <main
    class="h-full w-full p-4 overflow-y-auto flex items-center justify-center"
    v-else
  >
    <h1 class="text-4xl mb-5 font-semibold">Please select a conversation</h1>
  </main>
</template>

<script>
import { computed } from "@vue/reactivity";
import { state } from "../states";
import mockMessages from "@/mock/messages";
import Message from "@/components/Message.vue";
export default {
  name: "SelectedConversation",
  components: {
    Message,
  },
  setup() {
    function getInitials(name) {
      return name
        .match(/(\b\S)?/g)
        .join("")
        .match(/(^\S|\S$)?/g)
        .join("")
        .toUpperCase();
    }
    const hasSelectedConversation = computed(() => {
      return state.hasSelectedConversation;
    });
    const selectedConversation = computed(() => {
      return state.selectedConversation;
    });
    if (mockMessages.length <= 100) {
      [1, 2, 3].forEach(() => mockMessages.push(...mockMessages));
    }

    const messages = computed(() => {
      return mockMessages.filter(
        (message) => message.conversation.id === selectedConversation.value.id
      );
    });
    return {
      getInitials,
      hasSelectedConversation,
      selectedConversation,
      messages,
    };
  },
};
</script>

<style></style>
