<template>
  <div class="navbar shadow-lg bg-dark text-white rounded-none" id="navbar">
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
      <label for="my-modal-2" class="btn btn-square btn-ghost">
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
      </label>
    </div>
  </div>
  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
  <div class="modal bg-white bg-opacity-100">
    <label
      for="my-modal-2"
      class="btn btn-square btn-ghost text-7xl h-fit w-[100px] rounded-lg fixed right-[10px] top-[10px] z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </label>
    <div class="modal-box h-full rounded-none bg-transparent shadow-none">
      <div class="h-full flex flex-col items-center justify-evenly">
        <router-link
          v-if="appState.isAuthenticated"
          :to="{ name: 'Home' }"
          class="btn btn-ghost btn-sm rounded-btn text-7xl h-fit"
          >Home</router-link
        >
        <router-link
          v-if="appState.isAuthenticated"
          :to="{ name: 'Chat' }"
          class="btn btn-ghost btn-sm rounded-btn text-7xl h-fit"
          >Chat</router-link
        >
        <router-link
          :to="{ name: 'Register' }"
          class="btn btn-ghost btn-sm rounded-btn text-7xl h-fit"
          >Sign up</router-link
        >
        <router-link
          :to="{ name: 'Login' }"
          class="btn btn-ghost btn-sm rounded-btn text-7xl h-fit"
          >Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { state as appState } from "@/modules/App/states";
export default {
  name: "NavBar",
  setup() {
    return {
      appState,
    };
  },
};
</script>

<style></style>
