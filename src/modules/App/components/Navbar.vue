<template>
  <nav id="navbar">
    <div class="navbar shadow-lg bg-dark text-white rounded-none">
      <div class="px-2 mx-2 navbar-start">
        <span class="text-lg" v-html="$route.meta.icon" />
        <span class="text-lg font-bold ml-2">{{ $route.name }}</span>
      </div>
      <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
          <router-link
            v-if="appState.isAuthenticated"
            :to="{ name: 'Home' }"
            class="btn btn-ghost btn-sm rounded-btn"
            >Home</router-link
          >
          <router-link
            v-if="appState.isAuthenticated"
            :to="{ name: 'Chat' }"
            class="btn btn-ghost btn-sm rounded-btn"
            >Chat</router-link
          >
          <router-link
            :to="{ name: 'Register' }"
            class="btn btn-ghost btn-sm rounded-btn"
            >Sign up</router-link
          >
          <router-link
            :to="{ name: 'Login' }"
            class="btn btn-ghost btn-sm rounded-btn"
            >Login</router-link
          >
        </div>
      </div>
      <div class="navbar-end">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
        <button
          @click="drawerOpen = !drawerOpen"
          class="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
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
            v-if="appState.isAuthenticated"
            :to="{ name: 'Home' }"
            class="btn btn-ghost btn-lg rounded-btn"
            @click="drawerOpen = false"
            >Home</router-link
          >
          <router-link
            v-if="appState.isAuthenticated"
            :to="{ name: 'Chat' }"
            class="btn btn-ghost btn-lg rounded-btn"
            @click="drawerOpen = false"
            >Chat</router-link
          >
          <router-link
            :to="{ name: 'Register' }"
            class="btn btn-ghost btn-lg rounded-btn"
            @click="drawerOpen = false"
            >Sign up</router-link
          >
          <router-link
            :to="{ name: 'Login' }"
            class="btn btn-ghost btn-lg rounded-btn"
            @click="drawerOpen = false"
            >Login</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { state as appState } from "@/modules/App/states";
import { ref } from "@vue/reactivity";
export default {
  name: "NavBar",
  setup() {
    const drawerOpen = ref(false);
    return {
      appState,
      drawerOpen,
    };
  },
};
</script>

<style></style>
