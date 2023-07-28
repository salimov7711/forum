import { storeToRefs } from "pinia";

export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuthStore();

  if (process.client) {
    if (localStorage.getItem("token")) {
      await auth.fetchUser();
    }
  }
});
