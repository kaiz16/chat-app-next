<template>
  <aside class="min-h-full p-4">
    <div class="flex justify-between mb-5">
      <h1 class="text-3xl font-semibold">Chats</h1>
      <InboxIcon
        class="h-5 mt-1 w-5 cursor-pointer"
        @click="modalActive = true"
      />
    </div>
    <Conversation
      v-for="conversation in state.conversations"
      :key="conversation.id"
      :name="conversation.name"
      :message="
        conversation.lastMessage
          ? `${conversation.lastMessage.sender.name}: ${conversation.lastMessage.text}`
          : ''
      "
      @click="state.selectConversation(conversation)"
    >
    </Conversation>

    <NewConversation v-model="modalActive" />
  </aside>
</template>

<script>
import conversations from "@/mock/conversations";
import Conversation from "./Conversation.vue";
import Button from "@/components/Button.vue";
import NewConversation from "./NewConversation.vue";
import { InboxIcon } from "@heroicons/vue/outline";
import { state } from "../states/index";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "ConversationsVue",
  components: {
    Conversation,
    Button,
    NewConversation,
    InboxIcon,
  },
  setup() {
    const modalActive = ref(false);
    onMounted(async () => {
      await state.getConversations();
    });

    return {
      conversations,
      modalActive,
      state,
    };
  },
};
</script>

<style></style>
