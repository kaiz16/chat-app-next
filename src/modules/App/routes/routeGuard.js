import { state } from "../states";
import { watchEffect } from "@vue/runtime-core";
export const routeGuard = (to, from, next) => {
  const { isAuthenticated, loading } = state;

  const verify = () => {
    // Pages that do not require auth
    if (!to.meta.requiresAuth) {
      return next();
    }
    /* 
    If user is not logged-in,
    and the page is restricted to logged-in user only,
    redirect user to LOGIN page.
    */
    if (!isAuthenticated && to.meta.requiresAuth) {
      return next("/login");
    }

    // If user is logged-in...
    if (isAuthenticated) {
      return next();
    }

    return next();
  };

  watchEffect(() => {
    if (!loading) return verify();
  });
};
