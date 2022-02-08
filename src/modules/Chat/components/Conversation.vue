<template>
  <div
    class="mb-3 flex items-center card hover:card-hover"
    @click="$emit('click')"
  >
    <Avatar :name="name" :image="image" class="w-10 h-10 flex-shrink-0" />
    <div class="ml-2">
      <p class="font-semibold">{{ name }}</p>
      <p class="line-clamp-1 text-sm">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
export default {
  name: "ConversationVue",
  props: {
    image: {
      type: String,
      default: () => "",
    },
    name: {
      type: String,
      default: () => "",
    },
    message: {
      type: String,
      required: true,
    },
  },
  components: {
    Avatar,
  },
};
</script>

<style></style>
