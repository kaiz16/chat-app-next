<template>
  <aside class="min-h-full p-4">
    <h1 class="text-3xl mb-5 font-semibold">Chats</h1>
    <Conversation
      v-for="conversation in conversations"
      :key="conversation.id"
      :initials="getInitials(conversation.name)"
      :name="conversation.name"
      :message="conversation.messages[0]?.message || ''"
      @click="selectConversation(conversation)"
    >
    </Conversation>
  </aside>
</template>

<script>
import conversations from "@/mock/conversations";
import Conversation from "@/components/Conversation.vue";
import { state } from "../states/index";
export default {
  name: "ConversationsVue",
  components: {
    Conversation,
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

    function selectConversation(conversation) {
      state.selectConversation({ conversation });
    }
    return {
      state,
      selectConversation,
      getInitials,
      conversations,
    };
  },
};
</script>

<style></style>
