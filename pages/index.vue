<template>
  <div>
    <div class="grid-container px-[10px] p-[20px]">
      <div class="aside">
        <SideBar />
      </div>
      <div class="main">
        <GroupList :groups="groups" />

        <UsersOnline />

        <button @click="notify" class="bg-teal">Notify</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { usePush } from "notivue";
// import { Notivue, type NotivueSlot } from "notivue";
// import MyNotification, {
//   type CustomProps,
// } from "@/components/MyNotification.vue";
// const push = usePush();
const query = ref("");
const description = ref("Tropical birds scattered as Drake veered the Jeep");
// const notify = () => {
//   push.success<CustomProps>({
//     title: "У вас новое сообщение!",
//     message: "notification",
//     props: {
//       avatarUrl: "https://avatars.githubusercontent.com/u/10660468?v=4",
//       postUrl: "https://social.com/my-post",
//     },
//     duration: 60000,
//   });
// };
const auth = useAuthStore();
const userStore = UsersOnlineStore();
const findIndex = () => {
  console.log(index);
};
const { data: groups } = await useApiFetch("/api/");
useHead({
  title: "Forum",
});
</script>

<style lang="scss" scoped></style>
