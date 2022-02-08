import { reactive } from "@vue/reactivity";
import axios from "axios";
export const state = reactive({
  isAuthenticated: false,
  loading: true,
  user: {},
  getToken() {
    return localStorage.getItem("TOKEN");
  },
  setToken(token) {
    localStorage.setItem("TOKEN", token);
  },
  clearToken() {
    localStorage.removeItem("TOKEN");
  },
  async getCurrentUser() {
    this.loading = true;
    try {
      const token = this.getToken();
      if (!token) {
        throw "Unauthenticated";
      }
      const { data } = await axios.get(
        process.env.VUE_APP_API_ENDPOINT + "/users/whoami",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.getToken(),
          },
        }
      );
      this.isAuthenticated = true;
      this.user = data;
    } catch (error) {
      console.log(error.response);
      this.logout();
    } finally {
      this.loading = false;
    }
  },
  async login({ email, password }) {
    try {
      const { data } = await axios.post(
        process.env.VUE_APP_API_ENDPOINT + "/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.setToken(data.jwt);
      this.isAuthenticated = true;
    } catch (error) {
      console.log(error.response);
      alert(error.response.data);
    } finally {
    }
  },
  async register({ name, username, email, password }) {
    try {
      const { data } = await axios.post(
        process.env.VUE_APP_API_ENDPOINT + "/users/register",
        {
          name,
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.setToken(data.jwt);
      this.isAuthenticated = true;
    } catch (error) {
      console.log(error.response);
      alert(error.response.data);
    } finally {
    }
  },
  logout() {
    this.isAuthenticated = false;
    this.user = {};
    this.clearToken();
  },
});
