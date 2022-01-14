<template>
  <NavBar />
  <div id="content">
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "./components/Navbar.vue";
import { state } from "./states";
import { useRouter } from "vue-router";

export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();

    return {
      router,
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
  max-height: 10%;
}
#content {
  height: 90%;
  max-height: 90%;
}
</style>
