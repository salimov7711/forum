<template>
  <div
    class="login-subhead flex bg-[#E1E1E1] py-[20px] px-[20px] border-b-[1.1px] border-black/[.1]"
  >
    <h1 class="text-2xl font-solid">Регистрация</h1>
  </div>
  <div class="registration-body py-[20px] bg-[#E8E8E8]">
    <div class="chunk px-[20px]">
      <div
        class="panel sm:max-w-[70vw] mx-auto p-[2em] bg-[#FAFAFA] text-[0.9em] border-2 border-b-black/[.1]"
      >
        <form @submit.prevent="handleRegister" class="w-full mx-auto">
          <!-- Name Input box -->
          <div class="mb-[1.2em] sm:w-[50%] mx-auto">
            <label class="block mb-1">Имя пользователя:</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Имя"
              class="border-[1px] underline-none text-[.9em] h-[2.4em] px-3 hover:border-[#c2c2c2] outline-none w-full md:w-full focus:border-[teal]"
              required
            />
            <div class="text-red-500 text-[0.8em]"></div>
          </div>

          <!-- Email input box -->
          <div class="mb-[1.2em] sm:w-[50%] mx-auto">
            <label class="block mb-1">Электронная почта:</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="email"
              class="border-[1px] underline-none text-[.9em] h-[2.4em] px-3 hover:border-[#c2c2c2] outline-none w-full md:w-full focus:border-[teal]"
              required
            />
            <div v-if="errors.email" class="text-red-500 text-[0.8em]">
              {{ errors.email[0] }}
            </div>
          </div>

          <!-- address input box -->
          <div class="mb-[1.2em] sm:w-[50%] mx-auto">
            <label class="block mb-1">Адрес проживания</label>
            <input
              v-model="form.address"
              type="text"
              placeholder="адрес"
              class="border-[1px] underline-none text-[.9em] h-[2.4em] px-3 hover:border-[#c2c2c2] outline-none w-full md:w-full focus:border-[teal]"
            />
            <div class="text-red-500 text-[0.8em]"></div>
          </div>

          <!-- password input box -->
          <div class="mb-[1.2em] sm:w-[50%] mx-auto">
            <label class="block mb-1">Пароль:</label>
            <input
              v-model="form.password"
              type="password"
              placeholder="Пароль"
              class="border-[1px] focus:border-[teal] text-[.9em] h-[2.4em] px-3 hover:border-[#c2c2c2] outline-none w-full md:w-[full]"
              required
            />
          </div>

          <!-- password confirm box -->
          <div class="mb-[1.2em] sm:w-[50%] mx-auto">
            <label class="block mb-1">Пароль:</label>
            <input
              v-model="form.password_confirmation"
              type="password"
              placeholder="Подтвердите пароль"
              class="border-[1px] focus:border-[teal] h-[2.4em] text-[.9em] px-3 hover:border-[#c2c2c2] outline-none w-full md:w-[full]"
              required
            />
            <div v-if="errors.password" class="text-red-500 text-[0.8em]">
              {{ errors.password[0] }}
            </div>
          </div>

          <!-- checkboxes  -->
          <div class="checkboxes flex justify-center mb-4 text-[0.8em]">
            <label class="mr-[4em]">
              <input class="mr-2 align-[-2px]" type="checkbox" />Запомнить
            </label>
            <label>
              <input class="mr-2 align-[-2px]" type="checkbox" />Показывать в
              сети
            </label>
          </div>

          <!-- Button submit -->
          <div class="button-submit flex justify-center">
            <input
              type="submit"
              name="registr"
              value="Создать"
              class="bg-[#477bb8] text-[#f5f5f5] px-[1em] h-[2.2em]"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const auth = useAuthStore();

const form = ref({
  name: "avaz",
  email: "avaz@mail.ru",
  address: "moscow",
  password: "12312312",
  password_confirmation: "123123123",
});
const errors = ref({});
async function handleRegister() {
  const { error } = await auth.register(form.value);
  if (!error.value) {
    navigateTo("/");
  }
  errors.value = error.value.data.errors;
  console.log(errors.value);
}
</script>

<style lang="scss" scoped>
.registration-body {
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
</style>
