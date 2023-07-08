<template>
  <div>
    <Header />

    <slot />
    <ModalsContainer></ModalsContainer>
    <Footer />
  </div>
</template>

<script setup>
import { ModalsContainer } from "vue-final-modal";
const auth = useAuthStore();

async function handleLogout() {
  await auth.logout();
}
</script>

<style lang="scss" scoped></style>
