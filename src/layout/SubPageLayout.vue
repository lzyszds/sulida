<script setup>
import { RouterView } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="subpage">
    <van-nav-bar
      :title="route.name"
      left-text=""
      left-arrow
      @click-left="router.back()"
    />
    <RouterView />
  </div>
</template>

<style scoped></style>
