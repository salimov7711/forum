<template>
  <ul class="groups-container flex gap-4 text-center flex-wrap mb-3">
    <li class="group relative" v-for="(group, index) in groups">
      <NuxtLink :to="`/${group.url}`">
        <span
          class="descr absolute text-sm top-0 left-0 w-full h-full bg-black/[0.5] text-yellow-300 pt-[20px] text-center opacity-0 transition-all duration-[.5s] group-hover:opacity-100"
          >{{ group.title }}</span
        >

        <div class="group-image w-[150px] h-[150px]">
          <img :src="`/img/group-${index + 1}.webp`" class="w-full h-full" />
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const { groups } = defineProps(["groups"]);

</script>

<style lang="scss" scoped></style>
