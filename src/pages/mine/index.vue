<script setup>
const serverRouter = [
  {
    title: "团队服务费统计",
    icon: "ri:team-fill",
    router: "/serviceCharge/teamServiceFee",
  },
  {
    title: "我的订单",
    icon: "ri:money-cny-circle-fill",
    router: "/serviceCharge/order",
  },
  {
    title: "店铺列表",
    icon: "ri:shopping-bag-3-fill",
    router: "/serviceCharge/storeList",
  },
  {
    title: "提现收益",
    icon: "ri:coins-fill",
    router: "/serviceCharge/withdrawal",
  },
  {
    title: "消费明细",
    icon: "ri:bill-fill",
    router: "/serviceCharge/consDetails",
  },
  {
    title: "增值清单",
    icon: "ri:archive-stack-fill",
    router: "/serviceCharge/valueAddList",
  },
  {
    title: "联系客服",
    icon: "ri:customer-service-2-fill",
    router: "/serviceCharge/customerService",
  },
];

const showRight = ref(false);
</script>

<template>
  <!-- 我的页面 -->
  <div class="mine">
    <!-- 右侧弹出 -->
    <van-popup
      v-model:show="showRight"
      position="right"
      :style="{ width: '80%', height: '100%' }"
    >
      <div class="right-content">
        <div class="right-header">
          <img class="mine-avatar" src="@/assets/img/logo.5e46ecfb.png" alt="用户头像" />
          <p>用户lzyszds</p>
        </div>

        <van-cell-group>
          <van-cell title="编辑资料" is-link>
            <template #icon>
              <LzyIcon name="ri:edit-box-line" style="margin-right: 10px" />
            </template>
          </van-cell>
          <van-cell title="收货地址" is-link>
            <template #icon>
              <LzyIcon name="ri:map-pin-range-line" style="margin-right: 10px" />
            </template>
          </van-cell>
          <van-cell title="支付方式" is-link>
            <template #icon>
              <LzyIcon name="ri:shield-check-line" style="margin-right: 10px" />
            </template>
          </van-cell>
          <van-cell title="隐私策略" is-link>
            <template #icon>
              <LzyIcon name="ri:article-line" style="margin-right: 10px" />
            </template>
          </van-cell>
          <van-cell title="关于我们" is-link>
            <template #icon>
              <LzyIcon name="ri:information-2-line" style="margin-right: 10px" />
            </template>
          </van-cell>
          <van-cell title="退出登陆" is-link>
            <template #icon>
              <LzyIcon  name="ri:logout-box-r-line" style="margin-right: 10px" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </van-popup>

    <div class="mine-header">
      <div class="top">
        <img class="mine-avatar" src="@/assets/img/logo.5e46ecfb.png" alt="用户头像" />
        <div class="role"><van-tag round type="danger">普通会员</van-tag></div>
        <LzyIcon
          name="ri:list-settings-line"
          size="24"
          style="color: #fff"
          @click="showRight = true"
        />
      </div>
      <div class="mine-info">
        <div>
          <p>PQXOBI</p>
          <p>邀请码</p>
        </div>
        <div>
          <p>399.00</p>
          <p>积分</p>
        </div>
      </div>
    </div>
    <div class="mine-nav">
      <van-grid>
        <van-grid-item>
          <p>0</p>
          <p>服务费累计</p>
        </van-grid-item>
        <van-grid-item>
          <p>0</p>
          <p>订单收益</p>
        </van-grid-item>
        <van-grid-item>
          <p>0</p>
          <p>直推收益</p>
        </van-grid-item>
        <van-grid-item>
          <p>0</p>
          <p>已提现</p>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="mine-content">
      <h4><span>我的服务</span></h4>
      <van-cell
        v-for="item in serverRouter"
        :title="item.title"
        is-link
        :to="item.router"
      >
        <template #icon>
          <LzyIcon :name="item.icon" style="margin-right: 5px" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<style scoped>
.mine {
  width: 100%;
  height: calc(100vh - 60px);
  padding-top: 10px;
  background-color: #f9f9f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mine-header {
  width: calc(95% - 40px);
  height: 120px;
  background-color: #0e9ef3;
  padding: 20px 20px 10px;
  border-radius: 16px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .mine-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .role {
    flex: 1;
    .van-tag {
      padding: 2px 10px;
    }
  }
  .mine-info {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 50%;
      height: 80%;
      transform: translate(-50%, -50%);
      width: 1px;
      background-color: #fff;
    }

    p {
      margin: 0;
    }
    p:first-child {
      font-size: 16px;
    }
  }
}

.mine-nav {
  width: 95%;
  margin-top: 20px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  p:first-child {
    font-size: 16px;
    font-weight: bold;
    color: red;
  }
  p {
    margin: 0;
    font-size: 13px;
  }
}
.mine-content {
  width: calc(95% - 2rem);
  margin-top: 0.625rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 0.625rem;
  border-radius: 0.625rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;

  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
    margin-bottom: 16px;
    span {
      color: #000;
    }
  }
  .van-cell {
    padding-left: 0;
    font-weight: 500;
    font-size: 13px;
    font-family: PingFang SC-Bold, PingFang SC;
  }
}

.right-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  p {
    margin: 5px;
  }
}
</style>
