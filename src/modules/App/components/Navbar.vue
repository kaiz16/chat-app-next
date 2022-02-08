<template>
  <nav id="navbar">
    <div
      class="min-h-full flex justify-between items-center shadow-lg bg-dark text-white rounded-none"
    >
      <div class="px-4">
        <span class="text-lg font-bold ml-2">{{ $route.name }}</span>
      </div>
      <div class="hidden px-4 lg:flex lg:justify-between">
        <Button
          v-for="(menu, index) in menus"
          :key="index"
          :to="menu.to"
          tag="router-link"
          v-show="menu.enabled"
          class="bg-transparent p-0"
          >{{ menu.label }}</Button
        >
      </div>
      <div class="px-4">
        <button
          @click="drawerOpen = !drawerOpen"
          class="btn btn-square btn-ghost"
        >
          <MenuAlt2Icon class="h-6 w-6" />
        </button>
      </div>
    </div>

    <div class="mobile-drawer">
      <div
        class="absolute top-0 z-20 bg-dark opacity-40 w-screen h-screen"
        :class="{ hidden: drawerOpen === false }"
        @click="drawerOpen = false"
      ></div>
      <div
        class="absolute top-0 z-20 shadow rounded-none w-80 h-screen transition-all duration-500"
        :class="drawerOpen ? 'translate-x-0' : '-translate-x-80'"
      >
        <div
          class="bg-dark h-full text-white p-4 flex flex-col items-start overflow-y-auto"
        >
          <Button
            v-for="(menu, index) in menus"
            :key="index"
            :to="menu.to"
            tag="router-link"
            v-show="menu.enabled"
            class="bg-transparent p-0"
            >{{ menu.label }}</Button
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { state as appState } from "@/modules/App/states";
import { computed, ref } from "@vue/reactivity";
import { MenuAlt2Icon } from "@heroicons/vue/outline";
import Button from "@/components/Button.vue";
export default {
  name: "NavBar",
  components: {
    MenuAlt2Icon,
    Button,
  },
  setup() {
    const drawerOpen = ref(false);
    const menus = computed(() => {
      return [
        {
          label: "Chat",
          to: "/chat",
          enabled: appState.isAuthenticated,
        },
        {
          label: "Login",
          to: "/login",
          enabled: !appState.isAuthenticated,
        },
        {
          label: "Signup",
          to: "/register",
          enabled: !appState.isAuthenticated,
        },
        {
          label: "Logout",
          to: "/logout",
          enabled: appState.isAuthenticated,
        },
      ];
    });
    return {
      drawerOpen,
      menus,
    };
  },
};
</script>

<style></style>
