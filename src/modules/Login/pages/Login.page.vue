<template>
  <section class="min-w-full min-h-full flex items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <div class="self-start" style="">
        <h1 class="text-7xl font-semibold">Login</h1>
      </div>
      <FormInput
        v-model="email"
        label="Email"
        placeholder="Email Address"
        type="text"
      />
      <FormInput
        v-model="password"
        label="Password"
        placeholder="Password"
        type="password"
      />
      <Button class="btn-primary mt-2 self-end" @click="login">
        <p>Submit</p>
      </Button>
    </div>
  </section>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import Button from "@/components/Button.vue";
import { ref } from "@vue/reactivity";
import { state as appState } from "@/modules/App/states";
export default {
  name: "LoginPage",
  components: {
    FormInput,
    Button,
  },
  setup() {
    let email = ref("");
    let password = ref("");
    function login() {
      appState.login({ email: email.value });
    }
    return {
      login,
      email,
      password,
    };
  },
};
</script>
