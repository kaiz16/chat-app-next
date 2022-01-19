import { createApp } from "vue";
import App from "./modules/App/App";
import router from "./modules/App/routes/index";
import "./index.css";
export const AppInstance = createApp(App);
console.log(
  `%cChat App\nVersion: ${process.env.VUE_APP_VERSION}\nOrigin: ${window.location.origin}\nAPI Endpoint: ${process.env.VUE_APP_API_ENDPOINT}\nMode: ${process.env.NODE_ENV}`,
  "color:#FFA522; font-weight: 700;"
);
const Init = () => {
  AppInstance.use(router);
  AppInstance.mount("#app");
};
Init();
