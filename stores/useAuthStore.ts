type User = {
  id: number;
  name: string;
  email: string;
};
type Credentials = {
  email: string;
  password: string;
};

type RegistrationInfo = {
  name: "string";
  address: "string";
  email: "string";
  password: "string";
  password_confirmation: "string";
};
export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => !!user.value);

  /* Logout */
  async function logout() {
    await useApiFetch("/logout", { method: "POST" });
    user.value = null;
    navigateTo("/login");
  }

  /* Fetch User */
  async function fetchUser() {
    const { data, error } = await useApiFetch("/api/user");
    console.log(error);
    user.value = data.value as User;
  }

  /* Login method */
  async function login(credentials: Credentials) {
    await useApiFetch("/sanctum/csrf-cookie");

    const login = await useApiFetch("/login", {
      method: "post",
      body: credentials,
    });
    await fetchUser();

    return login;
  }

  /* Register method */
  async function register(info: RegistrationInfo) {
    await useApiFetch("/sanctum/csrf-cookie");

    const register = await useApiFetch("/register", {
      method: "post",
      body: info,
    });

    await fetchUser();

    return register;
  }

  return { user, login, isLoggedIn, fetchUser, logout, register };
});
