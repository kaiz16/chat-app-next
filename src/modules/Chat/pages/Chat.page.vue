<template>
  <section class="hidden lg:flex min-w-full h-full">
    <div class="ml-2 left w-[25%] border-dark border-r-2 overflow-y-auto">
      <Conversations />
    </div>
    <div
      class="center flex flex-col w-[50%] border-dark border-r-2 overflow-y-auto"
    >
      <SelectedConversation />
      <Compose />
    </div>
    <div class="ml-2 right w-[25%] border-dark border-r-2 overflow-y-auto">
      <h1 class="text-3xl mb-5 font-semibold">Chat Members</h1>
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
      <Compose />
    </div>
    <div
      class="flex flex-col h-full w-full border-dark border-r-2 overflow-y-auto"
      v-if="activeTab === 2"
    >
      <h1 class="text-3xl mb-5 font-semibold">Chat Members</h1>
    </div>
    <div
      class="tabs tabs-boxed mt-auto justify-center border-t rounded-none border-oxford-blue-500 bg-white shadow-2xl space-x-2"
    >
      <a
        class="tab tab-lg text-xs font-medium rounded-lg flex flex-col"
        :class="activeTab === 0 ? 'text-dark' : 'text-oxford-blue-500'"
        @click="activeTab = 0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
          />
        </svg>
        <p>People</p>
      </a>
      <a
        class="tab tab-lg text-xs font-medium rounded-lg flex flex-col"
        :class="activeTab === 1 ? 'text-dark' : 'text-oxford-blue-500'"
        @click="activeTab = 1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <p>Chat</p>
      </a>
      <a
        class="tab tab-lg text-xs font-medium rounded-lg flex flex-col"
        :class="activeTab === 2 ? 'text-dark' : 'text-oxford-blue-500'"
        @click="activeTab = 2"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
        <p>Info</p>
      </a>
    </div>
  </section>
</template>

<script>
import Conversations from "../components/Conversations.vue";
import SelectedConversation from "../components/SelectedConversation.vue";
import Compose from "../components/Compose.vue";
export default {
  name: "ChatPage",
  components: {
    Conversations,
    SelectedConversation,
    Compose,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>
