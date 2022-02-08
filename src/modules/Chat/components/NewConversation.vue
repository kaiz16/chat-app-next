<template>
  <Modal
    v-model="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    customClass="h-[700px]"
    title="New Message"
  >
    <FormInput
      v-model="search"
      label="Search"
      placeholder="Search people"
      class="mt-2"
    >
      <template #icon>
        <SearchIcon class="w-6 h-6" />
      </template>
    </FormInput>
    <FormInput
      v-if="selectedUsers.length"
      v-model="nickname"
      label="Nickname"
      placeholder="Name your chat"
      class="mt-2"
    />

    <div class="flex flex-wrap mt-2">
      <Avatar
        @click="deselectUser(user)"
        :name="user.name"
        :image="user.image"
        v-for="user in selectedUsers"
        :key="user._id"
        class="flex-shrink-0 w-10 h-10 cursor-pointer"
      />
    </div>
    <div class="mt-2">
      <div
        class="flex w-full mt-2 card hover:card-hover"
        v-for="user in searchUsersResult"
        :key="user._id"
        @click="selectUser(user)"
        :class="{
          'card-hover': !!selectedUsers.filter((u) => u._id === user._id)[0],
        }"
      >
        <Avatar
          :name="user.name"
          :image="user.image"
          class="flex-shrink-0 w-10 h-10"
        />
        <div class="ml-2">
          <p class="font-semibold">{{ user.name }}</p>
          <p class="line-clamp-1 text-sm">
            {{ user.email }}
          </p>
        </div>
      </div>
    </div>
    <template #footer>
      <Button
        @click="createConversation()"
        class="btn bg-dark text-snow-500 text-xs ml-auto"
      >
        <p>Done</p>
      </Button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import FormInput from "@/components/FormInput.vue";
import Avatar from "@/components/Avatar.vue";
import Button from "@/components/Button.vue";
import { SearchIcon, XIcon } from "@heroicons/vue/outline";
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
    Avatar,
    Button,
    XIcon,
    SearchIcon
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
        alert("Please name your chat.");
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
