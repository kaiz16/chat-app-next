<template>
  <section
    class="sm:w-full md:w-1/3 md:mx-auto min-h-full p-4 flex flex-col items-center justify-center"
  >
    <h1 class="text-7xl font-semibold self-start">Login</h1>
    <FormInput
      v-model="email"
      label="Email"
      placeholder="Email Address"
      type="text"
      class="w-full mt-2"
    />
    <FormInput
      v-model="password"
      label="Password"
      placeholder="Password"
      type="password"
      class="w-full mt-2"
    />
    <Button class="btn-primary mt-2 self-end" @click="login">
      <p>Submit</p>
    </Button>
  </section>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import Button from "@/components/Button.vue";
import { ref } from "@vue/reactivity";
import { state as appState } from "@/modules/App/states";
import { useRouter } from "vue-router";
export default {
  name: "LoginPage",
  components: {
    FormInput,
    Button,
  },
  beforeRouteEnter(to, from, next) {
    if (appState.isAuthenticated) {
      next("/");
    }
    next();
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const login = async () => {
      await appState.login({ email: email.value, password: password.value });
      router.push("/");
    };
    return {
      login,
      email,
      password,
    };
  },
};
</script>
