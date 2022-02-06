<template>
  <div class="modal" :class="modelValue ? 'modal-open' : ''">
    <div class="modal-box overflow-auto" :class="customClass">
      <div class="header flex items-center mb-4">
        <div class="cursor-pointer mr-4" @click="$emit('update:modelValue', false)">
          <XIcon class="h-6 w-6" />
        </div>
        <slot name="header"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    customClass: {
      type: String,
      default: () => "",
    },
  },
  emits: ["update:modelValue"],
  components: {
    XIcon,
  },
};
</script>

<style>
.modal-open {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}
</style>
