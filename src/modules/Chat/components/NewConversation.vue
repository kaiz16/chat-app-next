<template>
  <Modal
    v-model="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    customClass="h-[700px]"
  >
    <template #header>
      <h1 class="text-2xl font-semibold">New Message</h1>
      <Button
        @click="createConversation()"
        class="btn bg-dark text-snow-500 text-xs ml-auto"
      >
        <p>Done</p>
      </Button>
    </template>
    <FormInput v-model="search" placeholder="Search people" />
    <FormInput
      v-if="selectedUsers.length"
      v-model="nickname"
      label="Nickname"
      placeholder="Name of the converation"
    />

    <div class="flex flex-wrap mt-2">
      <div
        class="badge badge-dark p-3 text-white flex mr-2 my-2"
        v-for="user in selectedUsers"
        :key="user._id"
      >
        <p class="mx-2">{{ user.name }}</p>
        <XIcon
          @click="deselectUser(user)"
          class="inline-block w-4 h-4 cursor-pointer"
        />
      </div>
    </div>
    <div class="mt-2">
      <div
        class="flex w-full mt-2 px-2 py-3 rounded-3xl cursor-pointer transition-all duration-500 hover:bg-oxford-blue-500"
        v-for="user in searchUsersResult"
        :key="user._id"
        @click="selectUser(user)"
        :class="{
          'bg-oxford-blue-500': !!selectedUsers.filter(
            (u) => u._id === user._id
          )[0],
        }"
      >
        <Avatar :name="user.name" :image="user.image" class="flex-shrink-0" />
        <div class="ml-2">
          <p class="font-semibold">{{ user.name }}</p>
          <p class="line-clamp-1 text-sm">
            {{ user.email }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-2"></div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import FormInput from "@/components/FormInput.vue";
import Dropdown from "@/components/Dropdown.vue";
import Avatar from "@/components/Avatar.vue";
import Button from "@/components/Button.vue";
import { XIcon } from "@heroicons/vue/outline";
import { computed, ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { state } from "../states";
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  components: {
    Modal,
    FormInput,
    Dropdown,
    Avatar,
    Button,
    XIcon,
  },
  setup(Props, Context) {
    const search = ref("");
    const nickname = ref("");
    const selectedUsers = ref([]);

    function deselectUser(user) {
      let index = selectedUsers.value.findIndex((u) => u._id === user._id);
      if (index !== -1) {
        selectedUsers.value.splice(index, 1);
      }
      return index;
    }
    function selectUser(user) {
      let index = deselectUser(user);
      if (index === -1) {
        selectedUsers.value.push(user);
      }
    }

    watchEffect(() => {
      if (!search.value) {
        state.searchUsersResult = [];
        return;
      }
      setTimeout(async () => {
        await state.searchUsers(search.value);
      }, 1000);
    });

    const createConversation = async () => {
      // Verify
      if (!nickname.value) {
        alert("Please fill the name of the conversation.");
        return;
      }
      const participantIDs = selectedUsers.value.map((u) => u._id);
      if (!participantIDs.length) {
        alert("Please select at least one user.");
        return;
      }
      let type;
      if (participantIDs.length === 1) {
        type = "Individual";
      } else if (participantIDs.length > 1) {
        type = "Group";
      }

      await state.createConversation(nickname.value, type, participantIDs);
      Context.emit("update:modelValue", false);
    };

    const searchUsersResult = computed(() => {
      return state.searchUsersResult;
    });
    return {
      search,
      nickname,
      selectedUsers,
      selectUser,
      deselectUser,
      searchUsersResult,
      createConversation,
    };
  },
};
</script>

<style></style>
