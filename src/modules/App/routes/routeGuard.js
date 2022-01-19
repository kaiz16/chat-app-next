import { state } from "../states";
import { watchEffect } from "@vue/runtime-core";
export const routeGuard = (to, from, next) => {
  const verify = async () => {
    // console.log("TO", to.path);
    // console.log("FROM", from.path);
    // console.log("Auth", state.isAuthenticated);
    /* 
    If user is not logged-in,
    and the page is restricted to logged-in user only,
    redirect user to LOGIN page.
    */
    if (!state.isAuthenticated && to.meta.requiresAuth) {
      return next("/login");
    }

    return next();
  };

  // verify();
  // watch(state, (newState, oldState) => {
  //   if (!state.loading && oldState.loading) {
  //     console.log("Loading", state.loading);
  //     return verify();
  //   }
  // });

  watchEffect(() => {
    if (!state.loading) return verify();
  });
};
