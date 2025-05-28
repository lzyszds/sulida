<script setup></script>

<template>
  <div class="view">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
  <NavBar />
</template>

<style scoped>
.view {
  position: relative;
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: auto;
  background-color: #fff;
}
</style>
