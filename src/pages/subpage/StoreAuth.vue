<script setup>
const form = ref({
  taobao: "",
  alibaba: "",
  xianyu: "",
  tianmao: "",
  businessLicense: [],
  zfb: "",
  zfbRemote: [],
  zfbMerchant: [],
  wxMerchant: [],
  recipient: "",
  bank: "",
});
</script>

<template>
  <div class="store-auth">
    <van-field name="uploader" label="营业执照照片" label-width="120px">
      <template #input>
        <van-uploader max-count="1" v-model="form.businessLicense" />
      </template>
    </van-field>
    <div>
      <van-field
        v-model="form.taobao"
        name="taobao"
        label="淘宝店铺地址"
        placeholder="请输入淘宝店铺地址"
      />
      <van-field
        v-model="form.alibaba"
        name="alibaba"
        label="阿里巴巴地址"
        placeholder="请输入阿里巴巴地址"
      />
      <van-field
        v-model="form.xianyu"
        name="xianyu"
        label="闲鱼店铺地址"
        placeholder="请输入闲鱼店铺地址"
      />
      <van-field
        v-model="form.tianmao"
        name="tianmao"
        label="天猫商城地址"
        placeholder="请输入天猫商城地址"
      />
    </div>
    <div style="margin-top: 10px">
      <van-field
        v-model="form.zfb"
        name="zfb"
        label="支付宝账号"
        placeholder="请输入支付宝账号"
      />
      <van-field name="uploader" label="支付宝远程收款码" style="padding-bottom: 0;" label-width="120px">
        <template #input>
          <van-uploader max-count="1" v-model="form.zfbRemote" />
        </template>
      </van-field>

      <van-field name="uploader" label="支付宝商家收款码" style="padding-bottom: 0;" label-width="120px">
        <template #input>
          <van-uploader max-count="1" v-model="form.zfbMerchant" />
        </template>
      </van-field>

      <van-field name="uploader" label="微信商家收款码" style="padding-bottom: 0;" label-width="120px">
        <template #input>
          <van-uploader max-count="1" v-model="form.wxMerchant" />
        </template>
      </van-field>

      <van-field
        v-model="form.recipient"
        name="recipient"
        label="收款人"
        placeholder="请输入收款人"
      />

      <van-field
        v-model="form.bank"
        name="bank"
        label="银行卡号"
        placeholder="请输入银行卡号"
      />
    </div>
    <van-button type="primary" block style="margin-top: 10px"> 提交认证 </van-button>
  </div>
</template>

<style scoped>
.store-auth {
  padding: 8px 0 16px;
  background-color: #f5f5f5;
}
.store-auth > .van-cell {
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
  padding-bottom: 0;
}
:deep(.van-uploader__upload) {
  border-radius: 8px;
  background-color: #f5f5f5;
}
:deep(.van-field__label) {
  font-size: 14px;
}
</style>
