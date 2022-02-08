<template>
  <div class="flex relative items-center w-full px-4 py-2">
    <Picker
      v-show="showEmoji"
      native
      color="#000022"
      :showPreview="false"
      :data="emojiIndex"
      set="twitter"
      @select="selectEmoji"
      class="absolute bottom-16"
    />
    <EmojiHappyIcon
      class="h-6 w-6 text-oxford-blue-300 cursor-pointer"
      @click="showEmoji = !showEmoji"
    />

    <FormInput
      v-model="msg"
      @keyup.enter="send()"
      class="w-full ml-1"
      placeholder="Message..."
      type="text"
    />
    <div
      @click="send()"
      class="absolute transition-all inset-y-0 right-0 mr-6 flex items-center"
      :class="msg ? 'scale-1' : 'scale-0'"
    >
      <p class="text-dark font-medium cursor-pointer text-sm">Send</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import FormInput from "@/components/FormInput.vue";
import Button from "@/components/Button.vue";
import { state } from "../states";
import data from "emoji-mart-vue-fast/data/all.json";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";
import { EmojiHappyIcon } from "@heroicons/vue/outline";
export default {
  name: "ComposeVue",
  components: {
    FormInput,
    Button,
    Picker,
    EmojiHappyIcon,
  },
  setup(Props, Context) {
    const msg = ref("");
    const showEmoji = ref(false);
    const emojiIndex = new EmojiIndex(data);
    const send = async () => {
      if (!msg.value) return;
      state.sendMessage(msg.value);
      msg.value = "";
    };

    const selectEmoji = (emoji) => {
      msg.value += emoji.native;
    };
    return {
      msg,
      showEmoji,
      emojiIndex,
      send,
      selectEmoji,
    };
  },
};
</script>
