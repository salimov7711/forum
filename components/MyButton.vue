<template>
  <button
    class="whightspace-nowrap new_topic bg-blue text-white px-[20px] py-[5px] mb-4 hover:bg-[#396293]"
  >
    <font-awesome-icon icon="fa-solid fa-pencil" class="text-[0.7em] mr-3" />
    <h3 class="text-[.8em] inline-block"><slot></slot></h3>
  </button>
</template>

<script setup></script>

<style lang="scss">
.new_topic {
  background: #477bb8 url("assets/img/newbtn_middle.png");
  background-repeat: repeat-x;
}
</style>