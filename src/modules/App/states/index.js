import { reactive } from "@vue/reactivity";
import users from "@/mock/users.json";
export const state = reactive({
  isAuthenticated: true,
  loading: false,
  user: {},
  login({ email, password }) {
    const user = users.filter((user) => user.email === email)[0];
    if (user) {
      this.isAuthenticated = true;
      this.user = user;
    }
  },
  register({ name, email }) {
    const user = users.filter((user) => user.email === email)[0];
    if (!user) {
      users.push({ name, email, id: new Date().toISOString() });
      this.isAuthenticated = true;
      this.user = user;
    }
  },
  logout() {
    this.isAuthenticated = false;
    this.user = {};
  },
});
