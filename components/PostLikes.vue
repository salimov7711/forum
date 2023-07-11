<template>
  
</template>

<script setup>
const { likes } = defineProps(["likes"]);
const emit = defineEmits("addLike");
console.log(likes);

</script>

<style lang="scss" scoped></style>
