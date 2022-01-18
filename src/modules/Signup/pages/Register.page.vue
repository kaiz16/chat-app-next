<template>
  <section
    class="sm:w-full md:w-1/3 md:mx-auto min-h-full p-4 flex flex-col items-center justify-center"
  >
    <h1 class="text-7xl font-semibold self-start">Register</h1>
    <FormInput v-model="name" label="Name" placeholder="Name" type="text" />
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
