<template>
  <div>
    <div class="grid-container px-[10px] p-[20px]">
      <div class="aside">
        <SideBar />
      </div>
      <div class="main">
        <GroupList :groups="groups" />

        <UsersOnline />
      </div>
    </div>
  </div>
</template>

<script setup>
const auth = useAuthStore();
const { data: groups } = await useApiFetch("/api/");
useHead({
  title: "Forum",
});
</script>

<style lang="scss" scoped></style>
