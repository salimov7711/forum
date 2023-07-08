<template>
  <div
    class="login-subhead flex bg-[#E1E1E1] py-[20px] px-[20px] border-b-[1.1px] border-black/[.1]"
  >
    <h1 class="text-2xl font-solid">Войти</h1>
  </div>
  <div class="login-body py-[20px] bg-[#E8E8E8]">
    <div class="chunk px-[20px]">
      <div
        class="panel sm:max-w-[70vw] mx-auto p-[2em] bg-[#FAFAFA] text-[0.9em] border-2 border-b-black/[.1]"
      >
        <form @submit.prevent="handleLogin" class="w-full mx-auto">
          <div class="mb-[1.8em] sm:w-[50%] mx-auto">
            <label for="email" class="block mb-1">Электронная почта</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="Почта"
              class="border-[1px] underline-none h-[2.4em] px-3 hover:border-[#c2c2c2] outline-none w-full md:w-full focus:border-[teal]"
              required
            />
          </div>
          <div class="mb-[1.8em] sm:w-[50%] mx-auto">
            <label for="password" class="block mb-1">Пароль:</label>
            <input
              v-model="form.password"
              type="password"
              placeholder="Пароль"
              class="border-[1px] focus:border-[teal] h-[2.4em] px-3 hover:border-[#c2c2c2] outline-none w-full md:w-[full]"
              required
            />
          </div>
          <div class="checkboxes flex justify-center mb-4 text-[0.8em]">
            <!-- <label for="autoLogin" class="mr-[4em]">
              <input class="mr-2 align-[-2px]" type="checkbox" />Запомнить
            </label> -->
            <!-- <label for="viewOnLogin">
              <input class="mr-2 align-[-2px]" type="checkbox" />Показывать в
              сети
            </label> -->
          </div>
          <div class="button-submit sm:w-[50%] mx-auto flex justify-around">
            <input
              type="submit"
              name="login"
              value="Войти"
              class="bg-[#477bb8] text-[#f5f5f5] px-[1em] h-[2.2em]"
            />
            <NuxtLink to="/register">
              <button
                class="registr-button bg-[#477bb8] text-[#f5f5f5] px-[1em] h-[2.2em]"
              >
                Регистрация
              </button>
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  email: "test@example.com",
  password: "password",
});
const auth = useAuthStore();

async function handleLogin() {
  const { error } = await auth.login(form.value);
  console.log(error);
}
</script>

<style lang="scss" scoped>
.login-body {
  font-family: inherit;
  label {
    font-size: 0.9em;
  }
}

.button-submit {
  input {
    cursor: pointer;
    &:hover {
      transition: 0.3 ease all;
      background-color: darken(#477bb8, 10%);
    }
  }
}

.registr-button {
  &:hover {
    transition: 0.3 ease all;
    background-color: darken(#477bb8, 10%);
  }
}
</style>
