<template>
  <section class="hidden lg:flex min-w-full h-full">
    <div class="ml-2 left w-[25%] border-dark border-r-2 overflow-y-auto">
      <Conversations />
    </div>
    <div class="center w-[50%] border-dark border-r-2 overflow-y-auto">
      <SelectedConversation />
    </div>
    <div class="ml-2 right w-[25%] border-dark border-r-2 overflow-y-auto">
      <ConversationInfo />
    </div>
  </section>
  <section class="lg:hidden min-w-full flex flex-col h-full">
    <div
      class="flex flex-col h-full w-full border-dark border-r-2 overflow-y-auto"
      v-if="activeTab === 0"
    >
      <Conversations />
    </div>
    <div
      class="flex flex-col h-full w-full border-dark border-r-2 overflow-y-auto"
      v-if="activeTab === 1"
    >
      <SelectedConversation />
    </div>
    <div
      class="flex flex-col h-full w-full border-dark border-r-2 overflow-y-auto"
      v-if="activeTab === 2"
    >
      <ConversationInfo />
    </div>
    <div
      class="tabs tabs-boxed mt-auto justify-center border-t rounded-none border-oxford-blue-500 bg-white shadow-2xl space-x-2"
    >
      <a
        class="tab tab-lg text-xs font-medium rounded-lg flex flex-col"
        :class="activeTab === 0 ? 'text-dark' : 'text-oxford-blue-500'"
        @click="activeTab = 0"
      >
        <UsersIcon class="h-6 w-6" />
        <p>People</p>
      </a>
      <a
        class="tab tab-lg text-xs font-medium rounded-lg flex flex-col"
        :class="activeTab === 1 ? 'text-dark' : 'text-oxford-blue-500'"
        @click="activeTab = 1"
      >
        <ChatAlt2Icon class="h-6 w-6" />
        <p>Chat</p>
      </a>
      <a
        class="tab tab-lg text-xs font-medium rounded-lg flex flex-col"
        :class="activeTab === 2 ? 'text-dark' : 'text-oxford-blue-500'"
        @click="activeTab = 2"
      >
        <InformationCircleIcon class="h-6 w-6" />
        <p>Info</p>
      </a>
    </div>
  </section>
</template>

<script>
import Conversations from "../components/Conversations.vue";
import SelectedConversation from "../components/SelectedConversation.vue";
import ConversationInfo from "../components/ConversationInfo.vue";
import {
  UsersIcon,
  ChatAlt2Icon,
  InformationCircleIcon,
} from "@heroicons/vue/solid";
export default {
  name: "ChatPage",
  components: {
    Conversations,
    SelectedConversation,
    ConversationInfo,
    UsersIcon,
    ChatAlt2Icon,
    InformationCircleIcon,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
