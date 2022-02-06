<template>
  <nav id="navbar">
    <div class="navbar shadow-lg bg-dark text-white rounded-none">
      <div class="px-2 mx-2 navbar-start">
        <span class="text-lg font-bold ml-2">{{ $route.name }}</span>
      </div>
      <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
          <router-link
            v-for="(menu, index) in menus"
            :key="index"
            :to="menu.to"
            v-show="menu.enabled"
            class="btn btn-ghost btn-sm rounded-btn"
            >{{ menu.label }}</router-link
          >
        </div>
      </div>
      <div class="navbar-end">
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
        class="absolute z-20 overlay bg-dark opacity-40 w-screen h-screen"
        :class="{ hidden: drawerOpen === false }"
        @click="drawerOpen = false"
      ></div>
      <div
        class="absolute z-20 shadow rounded-none w-80 h-screen transition-all duration-500"
        :class="drawerOpen ? 'translate-x-0' : '-translate-x-80'"
      >
        <div
          class="bg-dark h-full text-white p-4 flex flex-col items-start overflow-y-auto"
        >
          <router-link
            v-for="(menu, index) in menus"
            :key="index"
            :to="menu.to"
            v-show="menu.enabled"
            class="btn btn-ghost btn-lg rounded-btn"
            >{{ menu.label }}</router-link
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
export default {
  name: "NavBar",
  components: {
    MenuAlt2Icon,
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
          label: "signup",
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
