<template>
  <div class="relative inline-block">
    <span :class="containerClass" :title="props.name">
      <img
        class="h-full w-full object-cover border-white"
        v-if="verifiedSrc"
        :src="verifiedSrc"
        :alt="props.name"
      />
      <template v-else>{{ fallback }}</template>
      <span :class="innerBorderClass"> </span>
    </span>
    <span v-if="indicator === 'true'" :class="indicatorClass"></span>
  </div>
</template>

<script setup>
import { cva } from "class-variance-authority";

const props = defineProps({
  name: String,
  src: String,
  initials: String,
  indicator: String,
  size: {
    type: String,
    validator: (value) => ["sm", "base", "lg"].includes(value),
    default: "base",
  },
  shape: {
    type: String,
    validator: (value) => ["circle", "square"].includes(value),
    default: "circle",
  },
});

const verifiedSrc = ref(null);

watchEffect(() => {
  const img = new Image();
  img.src = props.src;
  img
    .decode()
    .then(() => (verifiedSrc.value = props.src))
    .catch((e) => {
      verifiedSrc.value = null;
      throw e;
    });
});

const fallback = computed(() => {
  return props.initials || props.name?.charAt(0) || "?";
});

const containerClass = computed(() => {
  return cva(
    "relative inline-flex items-center   justify-center font-bold text-slate-700  select-none  shrink-0 bg-slate-200  overflow-hidden",
    {
      variants: {
        size: {
          sm: "text-xs h-8 w-8",
          base: "text-xl h-[2.5rem] w-[2.5rem]",
          lg: "text-5xl h-28 w-28",
        },
        shape: {
          circle: "rounded-full",
          square: "rounded",
        },
      },
    }
  )({ size: props.size, shape: props.shape });
});

const innerBorderClass = computed(() => {
  return cva("absolute inset-0 border border-black/5 ", {
    variants: {
      shape: {
        circle: "rounded-full",
        square: "rounded",
      },
    },
  })({ shape: props.shape });
});

const indicatorClass = computed(() => {
  return cva(" rounded-full bg-green-500   border-white absolute ", {
    variants: {
      size: {
        sm: "w-2 h-2 ",
        base: "w-[14px] h-[14px]",
        lg: "w-5 h-5",
      },
    },
    compoundVariants: [
      {
        size: "lg",
        shape: "circle",
        class: "border-2 right-4",
      },
      {
        size: "base",
        shape: "circle",
        class: "border-2 right-0",
      },
      {
        size: "sm",
        shape: "circle",
        class: "border-2 right-1",
      },
      {
        size: "lg",
        shape: "square",
        class: "border-2 right-0",
      },
      {
        size: "base",
        shape: "square",
        class: "border-2 right-0",
      },
      {
        size: "sm",
        shape: "square",
        class: "border-2 right-0",
      },
    ],
  })({ size: props.size, shape: props.shape });
});
</script>

<style lang="scss" scoped></style>
