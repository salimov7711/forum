<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
    <!-- Navigation -->
    <div class="navigate">
      <div class="toggle-page left">
        <font-awesome-icon
          @click="prevSlide"
          class="icon bg-accent"
          icon="fa-solid fa-angle-left"
        />
      </div>
      <div class="toggle-page right">
        <font-awesome-icon
          @click="nextSlide"
          class="icon bg-accent"
          icon="fa-solid fa-angle-right"
        />
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="paginationEnabled" class="pagination">
      <span
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
        @click="goToSlide(index)"
      >
      </span>
    </div>
  </div>
</template>

<script setup>
const { startAutoPlay, timeOut, navigation, pagination } = defineProps([
  "startAutoPlay",
  "timeOut",
  "navigation",
  "pagination",
]);

const currentSlide = ref(1);
const getSlideCount = ref(null);
const autoPlayEnabled = ref(true);
const timeDuration = ref(3000);
const paginationEnabled = ref(pagination === undefined ? true : pagination);
const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};
const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value -= 1;
};

const goToSlide = (index) => {
  currentSlide.value = index + 1;
};
const autoPlay = () => {
  setInterval(() => {
    nextSlide();
  }, timeDuration.value);
};
if (autoPlayEnabled.value) {
  autoPlay();
}
onMounted(() => {
  getSlideCount.value = document.querySelectorAll(".slide").length;
});
</script>

<style lang="scss" scoped>
.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3c3c3c;
  }
  .active {
    background-color: #fff;
  }
}

.toggle-page {
  display: flex;
  flex: 1;
}
.right {
  justify-content: flex-end;
}
.icon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #fff;
}
</style>
