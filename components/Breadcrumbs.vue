<template>
  <div
    class="subhead bg-[#e1e1e1] mb-[20px] border-y-[1px] border-y-black/[0.05]"
  >
    <div class="wrapper px-[20px] flex items-center">
      <div class="subhead-title py-[30px]">
        <h3></h3>
      </div>
      <div class="route-history py-[30px]">
        <ul>
          <li class="inline-block cursor-pointer" @click="router.push('/')">
            На главную
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
// console.log(router);
// const { categoryTitle } = defineProps(["categoryTitle"]);
// onMounted(() => {
//   console.log(categoryName);
// });
</script>

<style lang="sass" scoped></style>
