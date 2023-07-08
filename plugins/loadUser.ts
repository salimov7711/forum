import { storeToRefs } from "pinia";
export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuthStore();
  const { isLoggedIn } = storeToRefs(auth);
  if (!auth.isLoggedIn) {
    await auth.fetchUser();
  }
});
