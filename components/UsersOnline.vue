<template>
  <div class="users-online">
    <div class="header-users-online py-[15px] px-4 bg-[#3C3C3C]">
      <h3 class="text-white text-[.8em]">Пользователи онлайн</h3>
    </div>
    <div class="usersbody p-5 text-[.8em] bg-[#FAFAFA] text-[#6c6c6c]">
      <ul>
        <li class="" v-for="(user, index) in usersStore.usersOnline">
          <span>
            <a href="" class="forumtitle">
              {{ user.user_name }}
            </a>
          </span>
        </li>
      </ul>
    </div>
    <div
      class="total-users px-4 py-[15px] bg-[#F0F0F0] text-[.8em] text-[#6c6c6c]"
    >
      Всего: <span>257</span>(ползователей: <span>250</span>,гостей:
      <span>7</span> )
    </div>
  </div>
</template>

<script setup>
const usersStore = UsersOnlineStore();
</script>

<style lang="scss" scoped>
.total-users {
  span {
    color: black;
    font-weight: 600;
  }
}
</style>
