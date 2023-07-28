<script setup lang="ts">
import type { NotivueSlot } from "notivue";

// Any additional custom prop you want to pass when calling push()
export interface CustomProps {
  avatarUrl: string;
  postUrl?: string;
  routeData: object;
}

const props = defineProps<{
  item: NotivueSlot<CustomProps>;
}>();

//console.log(props.item);
// Check the console to see the full structure
</script>

<template>
  <div class="Wrapper rounded-lg px-3 py-3" :data-notification="item.type">
    <!-- <img :src="item.props.avatarUrl" /> -->

    <div class="flex gap-3">
      <Avatar size="base" indicator="true" :src="item.props.avatarUrl" />
      <div class="message-content">
        <h4 class="text-[#919191] text-[0.9em]">{{ item.title }}</h4>
        <p>
          <span class="font-semibold text-[0.9em]">John Snow</span>
          <span class="text-[0.9em] ml-2">ответил(a) вам в сообщении..</span>
        </p>
      </div>
    </div>
    <div class="flex justify-end mt-2">
      <NuxtLink
        :to="`/${item.props.routeData.category.group.url}/${item.props.routeData.category.url}/${item.props.routeData.url}`"
        class="bg-white text-[#438bff] border-[#438bff] border-2 px-2 py-1 text-[0.8em] font-semibold rounded-md hover:bg-[#438bff] hover:text-white"
        v-if="item.type === 'success'"
        :href="item.props.postUrl"
        >Прочитать</NuxtLink
      >
      <button
        @click="item.clear"
        class="bg-red-500 text-white rounded-md ml-3 px-4 hover:bg-red-600 focus:ring focus:ring-red-300 focus:outline-none"
      >
        Закрыть
      </button>
    </div>
  </div>
</template>

<style scoped>
.Wrapper {
  width: 400px;
  max-width: 100%;
  /* 🖕 Make it responsive */

  background-color: #fff;
}

[data-notification="success"] .Content {
  color: green;
}

[data-notification="error"] .Content {
  color: red;
}
</style>
