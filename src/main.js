import { createApp } from "vue";
import App from "./modules/App/App";
import router from "./modules/App/routes/index";
import "./index.css";

export const AppInstance = createApp(App);

const Init = () => {
  AppInstance.use(router);
  AppInstance.mount("#app");
};
Init();
