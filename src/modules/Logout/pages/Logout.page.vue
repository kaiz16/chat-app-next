<template>
  <section
    class="sm:w-full md:w-1/3 md:mx-auto min-h-full p-4 flex flex-col items-center justify-center"
  ></section>
</template>

<script>
import { state as appState } from "@/modules/App/states";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  name: "LogoutPage",
  setup() {
    const router = useRouter();
    onMounted(async () => {
      appState.logout();
      router.push('/')
    });
    return {};
  },
};
</script>
