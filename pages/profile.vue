<template>
  <div class="px-[30px] py-[20px]">
    <div
      class="wrapper bg-[#e8e8e8] px-[20px] gap-5 mb-4 grid grid-cols-[300px_minmax(500px,_1fr)]"
    >
      <div class="max-w-xs">
        <div class="bg-[#e8e8e8] shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2 h-[100px] w-[100px] mx-auto">
            <ClientOnly>
              <img
                class="w-full h-full rounded-full mx-auto object-cover"
                :src="` ${config.public.BASE_URL}/api/get/image?name=${data.icon}`"
              />
            </ClientOnly>
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              {{ data.name }}
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>WEB разработчик</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Имя</td>
                  <td class="px-2 py-2">{{ data.name }}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Адресс</td>
                  <td class="px-2 py-2">{{ data.address }}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Телефон</td>
                  <td class="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">{{ data.email }}</td>
                </tr>
                <tr @click="getTopics">
                  <td class="px-2 py-2 text-gray-500 font-semibold">id</td>
                  <td class="px-2 py-2"></td>
                </tr>
              </tbody>
            </table>

            <div class="my-3">
              <!-- <button
                @click="open"
                class="text-xs block text-red-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                Редактировать данные
              </button> -->
              <button
                v-show="data.id === auth.user.id"
                @click="openPhoto"
                class="text-xs text-red-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                Редактировать аватар
              </button>
              <form
                @submit.prevent="handleSubmit"
                class="mb-4"
                v-if="showPhotoEdit"
              >
                <label class="inline-block mb-1 w-[40px]">Фото:</label>
                <input
                  class="px-1 py-1 text-[.8em] mb-2 inline-block ml-4 border-[1px] border-[#3c3c3c]"
                  type="file"
                  accept="image/*"
                  placeholder="имя"
                  @change="handleImageSelected"
                />
                <input
                  type="submit"
                  class="bg-blue px-2 py-1 text-white hover:brightness-[0.8]"
                />
              </form>
              <form class="text-xs my-3" v-if="showEdit">
                <div class="mb-4">
                  <label class="inline-block mb-1 w-[40px]">Имя:</label>
                  <input
                    class="px-1 py-1 text-[.8em] mb-2 inline-block ml-4 border-[1px] border-[#3c3c3c]"
                    type="text"
                    placeholder="имя"
                  />
                </div>
                <div class="mb-4">
                  <label class="mb-1 inline-block w-[40px]">Адрес:</label>
                  <input
                    class="px-1 py-1 text-[.8em] mb-2 inline-block ml-4 border-[1px] border-[#3c3c3c]"
                    type="text"
                    placeholder="адресс"
                  />
                </div>
                <div class="mb-4">
                  <label class="inline-block mb-1 w-[40px]">Почта:</label>
                  <input
                    class="px-1 py-1 text-[.8em] mb-2 inline-block ml-4 border-[1px] border-[#3c3c3c]"
                    type="text"
                    placeholder="почта"
                  />
                </div>

                <button
                  class="bg-blue p-2 w-[50px] text-white hover:brightness-[0.8]"
                >
                  ok
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ul class="header-topic bg-[#477BB8] text-white px-2">
          <li class="row">
            <dl class="flex justify-between py-[10px]">
              <dt>
                <h3 class="list-inner text-[15px]">
                  темы на которые подписан: <span>{{ data.name }}</span>
                </h3>
              </dt>
              <input
                v-model="searchQuery"
                type="text"
                class="mr-4 min-w-[300px] text-black focus:outline-none py-1 px-2 text-[1.2em]"
              />
            </dl>
          </li>
        </ul>
        <UserTopics :topics="searchedTopics" v-model:query="searchQuery" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

const config = useRuntimeConfig();
const auth = useAuthStore();
// const { user } = storeToRefs(auth);

const { imageFile, imageUrl, handleImageSelected } = useImageUpload();
const showEdit = ref(false);
const showPhotoEdit = ref(false);

const { data: userTopics } = await useApiFetch(
  `/api/topics/${useRoute().query.id}`
);

const { searchQuery, searchedTopics } = useSearchedTopics(userTopics);

const { data, refresh } = await useApiFetch(
  `/api/user/${useRoute().query.id}`,
  { server: false }
);
console.log(data);

console.log(useRoute().query);
const open = () => {
  showEdit.value = !showEdit.value;
};
function openPhoto() {
  showPhotoEdit.value = !showPhotoEdit.value;
}
const date = new Date();
async function handleSubmit() {
  let data = new FormData();
  data.append("image", imageFile.value);
  await useApiFetch("/api/image/create", {
    method: "POST",
    headers: { Authorization: "Bearer " + `${localStorage.getItem("token")}` },
    body: data,
  }).then(async (r) => {
    if (r.status.value === "success") {
      refresh();
    }
  });
}

onMounted(async () => {
  // fetchUserTopics();
});
</script>

<style lang="scss" scoped></style>
