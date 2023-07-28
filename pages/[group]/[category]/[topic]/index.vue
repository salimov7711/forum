<template>
  <div class="px-[30px] py-[20px]">
    <Breadcrumbs />
    <div class="subhead flex justify-between">
      <MyButton @click="open">Ответить в теме</MyButton>
    </div>

    <div class="post-list-wrapper bg-white px-[20px] py-[20px] mb-4">
      <div class="post-list-subhead mb-4">
        <h2
          class="text-[1em] font-bold border-b-[1px] border-[#bdbdbd] leading-5 inline-block"
        >
          Тема: {{ data.topic.title }}
        </h2>
      </div>
      <PostList :posts="data.posts" @refresh="refresh" />
    </div>
    <div class="subhead flex justify-between">
      <MyButton @click="open">Ответить в теме</MyButton>
    </div>
  </div>
</template>

<script setup>
const route = useRoute().params;

const { data, pending, error, refresh } = await useApiFetch(
  `/api/category/${route.topic}`,
  {}
);

// const fetchPosts = async () => {
//   await useApiFetch(`/api/category/${route.topic}`, { server: false }).then(
//     (r) => {
//       data.value = r.data.value;
//     }
//   );
//   console.log(data.value);
// };

onMounted(async () => {
  // fetchPosts();
});
import { useModal } from "vue-final-modal";
import ModalCreatePost from "@/components/ModalCreatePost";

const { open, close } = useModal({
  component: ModalCreatePost,
  attrs: {
    onConfirm() {
      close();
      refresh();
    },

    title: "Ответить в теме!",
    topic: data.value.topic,
  },
  slots: {
    default: "<p>UseModal: The content of the modal</p>",
  },
});
</script>

<style lang="scss" scoped></style>
