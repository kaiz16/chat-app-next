<template>
  <aside class="min-h-full p-4">
    <div class="flex justify-between items-center mb-5">
      <h1 class="text-3xl font-semibold">Chats</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
        />
        <path
          fill-rule="evenodd"
          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
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
