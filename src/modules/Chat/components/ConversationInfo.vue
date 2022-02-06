<template>
  <aside class="min-h-full p-4">
    <div class="flex justify-between items-center mb-5">
      <h1 class="text-3xl font-semibold">Members</h1>
    </div>
    <div
      class="flex items-center w-full mb-2"
      v-for="user in selectedConversation.participants"
      :key="user.id"
    >
      <Avatar :name="user.name" :image="user.image" />
      <div class="ml-2">
        <p class="font-semibold">{{ user.name }}</p>
        <p class="line-clamp-1 text-sm">
          {{ user.email }}
        </p>
      </div>
    </div>
  </aside>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import { state } from "../states/index";
import { computed } from "@vue/runtime-core";
export default {
  name: "ConverationInfo",
  components: {
    Avatar,
  },
  setup() {
    const selectedConversation = computed(() => {
      return state.selectedConversation;
    });

    return {
      selectedConversation,
    };
  },
};
</script>

<style></style>
