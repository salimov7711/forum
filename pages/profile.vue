<template>
  <div class="px-[30px] py-[20px]">
    <div class="profile-wrapper bg-white px-[20px] py-[20px] mb-4">
      <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src="img/default.png"
              alt="{{auth.user}}"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              {{ auth.user.name }}
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>WEB разработчик</p>
            </div>
            <table class="text-xs my-3">
              <tbody>	
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Имя</td>
                  <td class="px-2 py-2">{{ auth.user.name }}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Адресс</td>
                  <td class="px-2 py-2">{{ auth.user.address }}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Телефон</td>
                  <td class="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">{{ auth.user.email }}</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
                >View Profile</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const auth = useAuthStore();
</script>

<style lang="scss" scoped></style>
