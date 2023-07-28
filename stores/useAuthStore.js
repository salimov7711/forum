// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
// type Credentials = {
//   email: string;
//   password: string;
// };

// type RegistrationInfo = {
//   name: "string";
//   address: "string";
//   email: "string";
//   password: "string";
//   password_confirmation: "string";
// };

export const useAuthStore = defineStore("authStore", () => {
  const user = ref(null);
  const isLoggedIn = computed(() => !!user.value);
  const { subscribePusher } = usePusher();
  /* Logout */
  async function logout() {
    await useApiFetch("/api/logout", {
      // method: "post",
      headers: {
        Authorization: "Bearer " + `${localStorage.getItem("token")}`,
      },
    }).then((r) => {
      if (r.data.value) {
        console.log(r), localStorage.removeItem("token");
      }
    });
    user.value = null;

    navigateTo("/login");
  }

  /* Fetch User */
  async function fetchUser() {
    await useApiFetch("/api/user", {
      headers: {
        // Accept: "application/json",
        Authorization: "Bearer " + `${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      user.value = res.data.value.user;
    });
  }

  /* Login method */
  async function login(credentials) {
    const login = await useApiFetch("/api/user/login", {
      method: "POST",
      body: credentials,
    });
    localStorage.setItem("token", login.data.value.token);
    user.value = login.data.value.user;

    if (login.data.value.success) {
      navigateTo("/");
    }
    return login;
  }

  /* Register method */
  async function register(info) {
    const register = await useApiFetch("/register", {
      method: "post",
      body: info,
    });
    await fetchUser();
    return register;
  }

  return { user, login, isLoggedIn, fetchUser, logout, register };
});
