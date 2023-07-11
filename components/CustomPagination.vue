<template>
  <div>
    <nav
      class="isolate inline-flex -space-x-px rounded-md shadow-sm"
      v-if="data.total > data.per_page"
    >
      <NuxtLink
        :class="itemClasses"
        :to="`${route.path}?page=${current_page > 1 ? current_page - 1 : 1}`"
        class="relative inline-flex items-center rounded-l-md border px-2 py-2 text-sm font-medium focus:z-20 disabled:opacity-50"
      >
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </NuxtLink>

      <NuxtLink
        :class="[
          page == data.current_page ? activeClasses : itemClasses,
          page == data.current_page ? 'z-30' : '',
        ]"
        :to="`${route.path}?page=${page}`"
        class="relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"
        v-for="(page, key) in Math.ceil(data.total / data.per_page)"
      >
        {{ page }}
      </NuxtLink>

      <NuxtLink
        :class="itemClasses"
        :to="`${route.path}?page=${
          current_page < Math.ceil(data.total / data.per_page)
            ? current_page + 1
            : current_page
        }`"
        class="relative inline-flex items-center rounded-r-md border px-2 py-2 text-sm font-medium focus:z-20 disabled:opacity-50"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </NuxtLink>
    </nav>
  </div>
</template>
<script setup>
const emit = defineEmits(["getResults"]);
const route = useRoute();
const current_page = ref(parseInt(route.query.page) || 1);

const props = defineProps(["data", "itemClasses", "activeClasses"]);
emit("getResults", current_page.value);
watch(
  () => route.query.page,
  async (newValue) => {
    current_page.value = parseInt(newValue);
    emit("getResults", current_page.value);
  }
);
</script>

<style lang="scss" scoped></style>
