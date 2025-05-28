<script setup>
const route = useRoute();
</script>

<template>
  <div class="radio-input">
    <RouterLink to="/" class="selection" :class="{ active: route.path.includes('/pages') }">
      <span>首页</span>
    </RouterLink>
    <RouterLink
      to="/team/index"
      class="selection"
      :class="{ active: route.path.includes('/team') }"
    >
      <span>团队矩阵</span>
    </RouterLink>
    <RouterLink
      to="/mine/index"
      class="selection"
      :class="{ active: route.path.includes('/mine') }"
    >
      <span>我的</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.radio-input {
  --container_width: 100%;
  width: calc(100% - 10px);
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #eee;
  color: #000000;
  overflow: hidden;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0px;
  left: 0%;
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
    color: #1977fb;
    font-weight: 600;
    background-color: #fff;
  }
}
</style>
