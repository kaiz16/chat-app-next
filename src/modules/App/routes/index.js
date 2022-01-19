import ChatRoutes from "@/modules/Chat/routes";
import HomeRoutes from "@/modules/Home/routes";
import LoginRoutes from "@/modules/Login/routes";
import LogoutRoutes from "@/modules/Logout/routes";
import RegisterRoutes from "@/modules/Signup/routes";
import { createRouter, createWebHistory } from "vue-router";
import { routeGuard } from "./routeGuard";
const routes = [
  ...HomeRoutes,
  ...LoginRoutes,
  ...LogoutRoutes,
  ...ChatRoutes,
  ...RegisterRoutes,
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(routeGuard);

export default router;
