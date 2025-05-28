<script setup>
const route = useRoute();
</script>

<template>
  <div class="radio-input">
    <RouterLink
      to="/"
      class="selection"
      :class="{ active: route.path === '/pages/index' }"
    >
      <span>首页</span>
    </RouterLink>
    <RouterLink to="/team" class="selection" :class="{ active: route.path === '/team' }">
      <span>团队矩阵</span>
    </RouterLink>
    <RouterLink to="/mine" class="selection" :class="{ active: route.path === '/mine' }">
      <span>我的</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.radio-input {
  --container_width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #eee;
  color: #000000;
  width: var(--container_width);
  overflow: hidden;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 40px;
  padding: 5px;
   background-color: #eee;
}

.radio-input .selection {
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  letter-spacing: -1px;
  font-size: 14px;
  color: #999;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  
  &.active {
    color: #000;
    font-weight: 600;
    background-color: #fff;
  }
}
</style>
