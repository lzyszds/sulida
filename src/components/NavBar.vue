<script setup></script>

<template>
  <div class="radio-input">
    <label>
      <input type="radio" id="value-1" name="value-radio" value="value-1" />
      <span>首页</span>
    </label>
    <label>
      <input type="radio" id="value-2" name="value-radio" value="value-2" />
      <span>团队矩阵</span>
    </label>
    <label>
      <input type="radio" id="value-3" name="value-radio" value="value-3" />
      <span>我的</span>
    </label>
  </div>
</template>

<style scoped>
.radio-input input {
  display: none;
}

.radio-input {
  --container_width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #000000;
  width: var(--container_width);
  overflow: hidden;
  border: 1px solid rgba(53, 52, 52, 0.226);
  position: fixed;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 60px;
}

.radio-input label {
  width: 100%;
  height: 100%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  letter-spacing: -1px;
  font-size: 14px;
}

.selection {
  display: none;
  position: absolute;
  height: 100%;
  width: calc(var(--container_width) / 3);
  z-index: 0;
  left: 0;
  top: 0;
  transition: 0.15s ease;
}

.radio-input label:has(input:checked) {
  background-color: rgb(11 117 223);
  color: #fff;
}

</style>
