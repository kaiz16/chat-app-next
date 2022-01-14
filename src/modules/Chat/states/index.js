import { reactive } from "@vue/reactivity";
export const state = reactive({
  hasSelectedConversation: false,
  selectedConversation: null,
  selectConversation({ conversation }) {
    this.hasSelectedConversation = true;
    if (conversation) {
      this.selectedConversation = conversation;
    }
  },
  unselectConversation() {
    this.hasSelectedConversation = false;
    this.selectedConversation = null;
  },
});
