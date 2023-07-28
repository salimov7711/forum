<template>
  <div class="sidebar text-[.9em]">
    <!-- banner -->
    <div class="side-block mb-[20px] h-[220px]">
      <Carousel class="carousel" v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div
            v-show="currentSlide === index + 1"
            class="slide-info text-white"
          >
            <NuxtImg
              :src="`/img/${slide}.jpg`"
              alt="image"
              format="webp"
              sizes="sm:500px md:700px"
            />
          </div>
        </Slide>
      </Carousel>
    </div>

    <!-- Login -->
    <div class="side-block side-login mb-[20px]">
      <div class="side-block-head px-[20px] py-[15px] bg-accent">
        <h3 class="text-[1em] text-white">Login</h3>
      </div>
      <div class="side-login-body">
        <fieldset class="bg-[#fff] p-[20px]">
          <form @submit.prevent="submit">
            <div class="inputbox">
              <input type="text" placeholder="email" />
              <input type="password" placeholder="Password" />
            </div>

            <label  class="text-[.9em]">
              <input type="checkbox" class="align-middle mr-2" />
              Remember me
            </label>

            <div class="button-submit mt-3">
              <input
                type="submit"
                name="login"
                value="Войти"
                class="bg-[#fbfbfb] text-[#3c3c3c] px-[2em] h-[2.2em] text-[0.9em] border-[1px] hover:bg-black/[.03]"
              />
            </div>
          </form>
        </fieldset>
      </div>
    </div>
    <!-- posts -->
    <div class="side-block side-posts">
      <div class="side-block-head px-[20px] py-[15px] bg-accent">
        <h3 class="text-[1em] text-white">Posts</h3>
      </div>
      <div class="side-posts-body p-[20px] bg-white text-[.9em]">
        <div class="mt-[12px]">
          <a href="#" class="sidebar-recent-title font-bold text-[#3c699c]"
            >how to solve</a
          >
          <span class="sidebar-recent-author block opacity-[.5]"
            >By John Doe</span
          >
          <span class="sidebar-recent-content block">What is this item?</span>
        </div>
        <div class="mt-[12px]">
          <a href="#" class="sidebar-recent-title font-bold text-[#3c699c]"
            >how to solve</a
          >
          <span class="sidebar-recent-author block opacity-[.5]"
            >By John Doe</span
          >
          <span class="sidebar-recent-content block">What is this item?</span>
        </div>
        <div class="mt-[12px]">
          <a href="#" class="sidebar-recent-title font-bold text-[#3c699c]"
            >how to solve</a
          >
          <span class="sidebar-recent-author block opacity-[.5]"
            >By John Doe</span
          >
          <span class="sidebar-recent-content block">What is this item?</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const carouselSlides = ["img-1", "img-2", "img-3"];
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 100%;
  height: 100%;

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      height: 100%;
      min-width: 100%;
      object-fit: cover;
    }
  }
}
.side-login-body {
  .inputbox {
    input {
      display: block;
      margin-bottom: 20px;
      width: 100%;
      border: 1px solid rgba($color: #000000, $alpha: 0.1);
      padding: 0 20px;
      height: 33px;
      background-color: #ffffff;
    }
  }
}
</style>
