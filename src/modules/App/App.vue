<template>
  <NavBar />
  <div id="content">
    <router-view></router-view>
  </div>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import NavBar from "./components/Navbar.vue";
import { state } from "./states";
export default {
  components: {
    NavBar,
  },
  setup() {
    onMounted(async () => {
      await state.getCurrentUser();
    });
    return {
      state,
    };
  },
};
</script>
<style>
html,
body,
#app {
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  /* background: var(--white); */
  overflow-x: hidden;
  /* @apply bg-dark; */
  /* @apply text-white; */
}
#navbar {
  height: 10%;
  width: 100%;
  max-height: 10%;
}
#content {
  height: 90%;
  width: 100%;
  max-height: 90%;
}
</style>
