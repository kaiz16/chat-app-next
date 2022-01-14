<template>
  <section class="min-w-full min-h-full flex items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <div class="self-start" style="">
        <h1 class="text-7xl font-semibold">Register</h1>
      </div>
      <FormInput
        v-model="name"
        label="Name"
        placeholder="Name"
        type="text"
      />
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
      <Button class="btn-primary mt-2 self-end" @click="register">
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
  name: "RegisterPage",
  components: {
    FormInput,
    Button,
  },
  setup() {
    let name = ref("");
    let email = ref("");
    let password = ref("");
    function register() {
      appState.register({
        name: name.value,
        email: email.value,
      });
    }
    return {
      register,
      name,
      email,
      password,
    };
  },
};
</script>
