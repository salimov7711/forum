<template>
  <Breadcrumbs />
  <div class="px-[10px] sm:px-[20px]">
    <div class="action-bar-top flex justify-between">
      <NuxtLink to="/newTopic"><MyButton>Создать тему</MyButton></NuxtLink>
      <CustomPagination
        :data="data.topics"
        :item-classes="[
          'bg-blue',
          'text-white',
          'border-blue',
          'hover:bg-[#396293]',
        ]"
        :active-classes="['bg-[#3c3c3c]', 'text-white', 'border-[#3c3c3c]']"
      />
      <TailwindPagination
        class="flex h-[36px]"
        :data="data.topics"
        :item-classes="[
          'bg-blue',
          'text-white',
          'border-blue',
          'hover:bg-[#396293]',
          'active-classes',
        ]"
        :active-classes="['bg-[#3c3c3c]', 'text-white', 'border-[#3c3c3c]']"
        @pagination-change-page="getResults"
      />
    </div>

    <Topics :topics="data.topics.data" />

    <div class="action-bar-top flex justify-between">
      <NuxtLink to="/newTopic"><MyButton>Создать тему</MyButton></NuxtLink>
      <TailwindPagination
        class="flex h-[36px]"
        :data="data.topics"
        :item-classes="[
          'bg-blue',
          'text-white',
          'border-blue',
          'hover:bg-[#396293]',
        ]"
        :active-classes="['bg-[#3c3c3c]', 'text-white', 'border-[#3c3c3c]']"
        @pagination-change-page="getResults"
      />
    </div>
  </div>

  <!-- <h2>{{ category }}</h2> -->
</template>

<script setup>
const { group, category } = useRoute().params;
const page = ref(1);
const { data } = await useApiFetch(`/api/group/${category}`);

const localPage = ref(1);
import { TailwindPagination } from "laravel-vue-pagination";
const router = useRouter();
const route = useRoute();
const cookie = useCookie("category", { default: () => {} });
cookie.value = data.value.category;

const getResults = async (page = 1) => {
  // const response = await useApiFetch(`/api/group/${category}?page=${page}`);
};

// cookies.value = null;
// console.log(cookie.value);
// console.log(data.value);
// console.log(group);
console.log(data);
</script>

<style lang="scss" scoped></style>
