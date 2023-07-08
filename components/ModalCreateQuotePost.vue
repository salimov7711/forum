<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-[50vw] mx-4 px-[30px] py-[20px] bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
    :content-transition="{
      'enter-active-class': 'transition duration-200 ease-linear',
      'enter-from-class': 'scale-0',
      'enter-to-class': 'scale-100	',
      'leave-active-class': 'transition duration-100 ease-linear',
      'leave-to-class': 'scale-0',
      'leave-from-class': 'scale-100',
    }"
  >
    <h1 class="text-xl">{{ title }}</h1>
    <form @submit.prevent="">
      <label for="title-text" class="text-[0.9em] font-semibold block w-[80vw]">
        Заглавие</label
      >

      <input
        v-model="formData.title"
        id="title-text"
        type="text"
        class="border-[1px] border-[#e5e7eb] px-2 py-[3px] block mb-5 w-[100%]"
      />

      <label for="content-text" class="text-[0.9em] font-semibold block">
        Контент</label
      >
      <textarea
        required
        v-model="formData.content"
        id="content-text"
        type="text"
        class="border-[1px] border-[#e5e7eb] px-2 py-[3px] block mb-5 w-[100%]"
      />
      <button
        type="submit"
        class="btn-create bg-[#477bb8] text-[#f5f5f5] px-[1em] h-[2.2em] hover:bg-slate-500"
      >
        Ответить
      </button>
    </form>

    <button
      class="mt-1 ml-auto px-2 border rounded-lg"
      @click="emit('confirm')"
    >
      Confirm
    </button>
  </VueFinalModal>
</template>

<script setup lang="js">

const formData = ref({
  title: "",
  content: "",
});
// const {isLoggedIn} = useAuth();
// if(!isLoggedIn()) {
// 	navigateTo('/login')
// }

 import { VueFinalModal } from "vue-final-modal";
 const {title} = defineProps(['title'])
 const emit = defineEmits(['confirm']);
// 		const {user} =useAuthStore();
// const createAnswer = async ()=> {
// 	await use$fetch("post", {
//     method: "post",
//     body: JSON.stringify({
//       title: formData.value.title,
//       content: formData.value.content,
//       topic_id: topic.data[0].topic_id,
// 			user_id: user.id
//     }),

//   }).then((res) => {
// 		 emit('confirm');
//     console.log(res);
// 		window.location.reload();

//   });
// }
// console.log(topic);
// const handleSubmit = async () => {
// console.log(formData.value, topic.id,user.id)
// await createAnswer();

// }
</script>

<style lang="scss" scoped></style>
