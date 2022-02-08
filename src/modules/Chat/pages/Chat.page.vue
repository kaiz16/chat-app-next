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
    >
      <component :is="currentComponent" />
    </div>
    <div
      class="mt-auto justify-center border-t rounded-none border-oxford-blue-500"
    >
      <Tabs
        @change="activeTab = $event"
        :activeTab="activeTab"
        :tabs="tabs"
      />
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
import Tabs from "@/components/Tabs.vue";
import { markRaw, ref } from "@vue/reactivity";
import { computed, watchEffect } from "@vue/runtime-core";
import { state } from "../states";
export default {
  name: "ChatPage",
  components: {
    Conversations,
    SelectedConversation,
    ConversationInfo,
    UsersIcon,
    ChatAlt2Icon,
    InformationCircleIcon,
    Tabs,
  },
  setup() {
    const activeTab = ref(0);
    const tabs = ref([
      {
        icon: UsersIcon,
        label: "People",
        disabled: false,
        component: markRaw(Conversations),
      },
      {
        icon: ChatAlt2Icon,
        label: "Chat",
        disabled: false,
        component: markRaw(SelectedConversation),
      },
      {
        icon: InformationCircleIcon,
        label: "Info",
        disabled: false,
        component: markRaw(ConversationInfo),
      },
    ]);
    const currentComponent = computed(() => {
      return tabs.value[activeTab.value].component;
    });

    watchEffect(() => {
      if (state.selectedConversation?._id) {
        activeTab.value = 1;
      }
    });
    return {
      activeTab,
      tabs,
      currentComponent,
    };
  },
};
</script>
