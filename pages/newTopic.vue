<template>
  <div class="px-[10vw] py-5">
    <div class="bg-white px-4 py-5">
      <form @submit.prevent="handleCreateTopic">
        <label for="title-text" class="text-[0.9em] font-semibold block ml-3">
          Название топика</label
        >

        <input
          v-model="form.title"
          id="title-text"
          type="text"
          class="border-[1px] border-[#e5e7eb] px-2 py-[3px] w-[50vw] ml-3 block mb-5"
        />

        <label for="content-text" class="text-[0.9em] font-semibold block ml-3">
          Контент</label
        >
        <textarea
          v-model="form.content"
          id="content-text"
          type="text"
          class="border-[1px] border-[#e5e7eb] px-2 py-[3px] w-[50vw] ml-3 block mb-5"
        />
        <button
          type="submit"
          class="btn-create bg-[#477bb8] text-[#f5f5f5] px-[1em] h-[2.2em] ml-3 hover:bg-slate-500"
        >
          Создать
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
const category = useCookie("category").value;

const auth = useAuthStore();
const form = ref({
  title: "",
  content: "",
  user_id: auth.user.id,
  category_id: category.id,
});
const { createTopic } = useCreateTopic();
async function handleCreateTopic() {
  await createTopic(form.value);
}

// console.log(category);

// console.log(isCategory.value);
const router = useRouter();
</script>

<style lang="scss" scoped>
.btn-create {
  &:hover {
    background: darken(#477bb8, 10%);
  }
}
</style>
