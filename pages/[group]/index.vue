<template>
  <div>
    <div class="p-[20px]">
      <CategoryList :data="data" />
    </div>
  </div>
</template>

<script setup>
const { group } = useRoute().params;
const { data } = await useApiFetch(`/api/${group}`);
console.log(data);
</script>

<style lang="scss" scoped></style>

<style lang="sass" scoped></style>
