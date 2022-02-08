<template>
  <TransitionRoot appear :show="modelValue" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 w-screen h-screen bg-dark/40" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              :class="customClass"
            >
              <div class="flex flex-col h-full w-full">
                <!-- Header -->
                <div class="flex items-center">
                  <DialogTitle
                    as="h3"
                    class="text-2xl font-semibold leading-6 text-gray-900"
                  >
                    {{ title }}
                  </DialogTitle>
                  <Button
                    @click="closeModal"
                    class="ml-auto outline-none shadow-none bg-transparent text-dark p-0"
                  >
                    <XIcon class="h-6 w-6" />
                  </Button>
                </div>
                <!-- Body -->
                <div class="mt-2 overflow-x-hidden overflow-y-auto">
                  <slot></slot>
                </div>
                <!-- Footer -->
                <div class="mt-auto">
                  <slot name="footer"></slot>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import Button from "./Button.vue";
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: () => "",
    },
  },
  emits: ["update:modelValue"],
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    XIcon,
    Button,
  },

  setup(Props, Context) {
    function closeModal() {
      Context.emit("update:modelValue", false);
    }
    return {
      closeModal,
    };
  },
};
</script>
