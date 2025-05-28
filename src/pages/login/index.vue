<script setup>
const username = ref("");
const password = ref("");
const onSubmit = (values) => {
  console.log("submit", values);
};
</script>

<template>
  <h1>登录账号</h1>
  <p>欢迎您进入快开店</p>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="success" native-type="submit"> 登录 </van-button>
      <van-button round block type="primary" @click="$router.push('/register')">
        注册新账号
      </van-button>
    </div>
  </van-form> 
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 50px;
  font-size: 24px;
}
p {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  color: #888;
  margin-bottom: 10%;
}
.van-field__control {
  font-size: 16px;
}
.van-button {
  margin-top: 10px;
  height: 45px;
}
</style>
