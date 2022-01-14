<template>
  <section class="min-w-full flex h-full">
    <div class="ml-2 left w-[25%] border-dark border-r-2">
      <Conversations />
    </div>
    <div class="center flex flex-col w-[50%] border-dark border-r-2">
      <SelectedConversation />
      <Compose />
    </div>
    <!-- <div class="ml-2 right w-[25%] border-dark border-r-2">
      <h1 class="text-xl mb-5">Chat Members</h1>
    </div> -->
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
};
</script>
