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
        @get-results="getResults"
      />
    </div>

    <Topics :topics="data.topics.data" />

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
        @get-results="getResults"
      />
    </div>
  </div>

  <!-- <h2>{{ category }}</h2> -->
</template>

<script setup>
const { group, category } = useRoute().params;
// const Page = ref(useRoute().query.page);

const { data } = await useApiFetch(`/api/group/${category}`);

const cookie = useCookie("category", { default: () => {} });
cookie.value = data.value.category;

const getResults = async (page = 1) => {
  const response = await useApiFetch(`/api/group/${category}?page=${page}`);
  data.value = response.data.value;
};
console.log(data);
</script>

<style lang="scss" scoped></style>
