import { reactive } from "@vue/reactivity";
import { state as appState } from "@/modules/App/states";
import axios from "axios";
export const state = reactive({
  conversations: [],
  messages: [],
  searchUsersResult: [],
  hasSelectedConversation: false,
  selectedConversation: {},
  loading: false,
  async getConversations() {
    this.loading = true;
    try {
      const { data } = await axios.get(
        process.env.VUE_APP_API_ENDPOINT + "/conversations/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: appState.getToken(),
          },
        }
      );
      this.conversations = data;
    } catch (error) {
      console.log(error.response);
    } finally {
      this.loading = false;
    }
  },
  async createConversation(name, type, participant_ids) {
    this.loading = true;
    try {
      const { data } = await axios.post(
        process.env.VUE_APP_API_ENDPOINT + "/conversations/create",
        {
          name,
          type,
          participant_ids,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: appState.getToken(),
          },
        }
      );
      const conversation = this.conversations.filter(
        (conversation) => conversation._id === data._id
      )[0];
      if (!conversation) {
        this.conversations.push(data);
      }
      this.selectConversation(data);
    } catch (error) {
      console.log(error.response);
    } finally {
      this.loading = false;
    }
  },
  async getMessagesByConversation() {
    this.loading = true;
    try {
      const { data } = await axios.get(
        process.env.VUE_APP_API_ENDPOINT +
          "/messages/" +
          this.selectedConversation._id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: appState.getToken(),
          },
        }
      );
      this.messages = data;
    } catch (error) {
      console.log(error.response);
    } finally {
      this.loading = false;
    }
  },
  async sendMessage(text) {
    this.loading = true;
    try {
      await axios.post(
        process.env.VUE_APP_API_ENDPOINT + "/messages/create",
        {
          text,
          sender_id: appState.user._id,
          conversation_id: this.selectedConversation._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: appState.getToken(),
          },
        }
      );
    } catch (error) {
      console.log(error.response);
    } finally {
      this.loading = false;
    }
  },
  async searchUsers(query) {
    this.loading = true;
    try {
      const { data } = await axios.get(
        process.env.VUE_APP_API_ENDPOINT + "/users?search=" + query,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: appState.getToken(),
          },
        }
      );
      this.searchUsersResult = data;
    } catch (error) {
      console.log(error.response);
    } finally {
      this.loading = false;
    }
  },
  selectConversation(conversation) {
    this.hasSelectedConversation = true;
    if (conversation) {
      this.selectedConversation = conversation;
    }
  },
  unselectConversation() {
    this.hasSelectedConversation = false;
    this.selectedConversation = {};
  },
});
