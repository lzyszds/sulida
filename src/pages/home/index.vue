<script setup>
const gridList = [
  {
    icon: "http://sulida.caifubao.xyz/mobile/assets/yuyue.63ad3d27.png",
    text: "订单预约",
  },
  {
    icon: "http://sulida.caifubao.xyz/mobile/assets/fuzhi.6d976e90.png",
    text: "信用优化",
  },
  {
    icon:
      "data:image/png;base64,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",
    text: "消费增值",
  },
  {
    icon: "http://sulida.caifubao.xyz/mobile/assets/qidong.198fe721.png",
    text: "裂变商家",
  },
  {
    icon: "http://sulida.caifubao.xyz/mobile/assets/rihua.5b37844c.png",
    text: "数据优化",
  },
];
</script>

<template>
  <div class="homeIndex">
    <header>
      <img src="@/assets/img/lo.6ce1c58a.png" alt="" />
      <van-notice-bar scrollable left-icon="volume-o" text="新会员注册公告" />
    </header>
    <div class="my-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="main">
      <div class="mcard">
        <div class="logo">
          <img src="@/assets/img/logo.5e46ecfb.png" alt="" />
          我的小店
        </div>
        <div class="authentication">
          完成<span>考试 </span>帮<span>您</span>开启成功之路

          <div class="authCard">
            <img src="@/assets/img/shopping.f47c2f01.png" alt="" />
            <div>
              <h4>店铺认证</h4>
              <p>完成店铺认证解锁更多功能</p>
            </div>
            <van-button type="primary" plain size="small" class="btn">去认证</van-button>
          </div>
        </div>
      </div>

      <van-grid :column-num="5">
        <van-grid-item v-for="value in gridList" :key="value">
          <img style="height: 40px; border-radius: 10px" :src="value.icon" alt="" />
          <div>{{ value.text }}</div>
        </van-grid-item>
      </van-grid>

      <div class="dayTask">
        <h4><span>今日任务</span></h4>
        <ul>
          <li>完成店铺认证</li>
          <li>完成信用优化</li>
          <li>完成商家绑定</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homeIndex {
  width: 100%;
  height: 100%;

  header {
    display: flex;
    align-items: center;
    width: calc(100vw - 20px);
    height: 50px;
    padding: 10px;
    border-bottom: 1px solid #eee;

    img {
      height: 100%;
      flex: 1;
    }
    .van-notice-bar {
      flex: 1;
      line-height: 60px;
      font-size: 12px;
      border-radius: 20px;
      height: 20px;
      padding: 5px 10px;
      background-color: #f0f9eb;
      color: #df361b;
    }
  }
  .my-swipe {
    width: calc(100vw - 20px);
    height: 200px;
    padding: 10px;
    margin-top: 10px;

    & > div {
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
    }
    .van-swipe-item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: #fff;
      background-color: #007aff;
    }
  }

  & > .main {
    width: 100vw;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    .mcard {
      width: calc(100vw - 32px);
      background-image: linear-gradient(to bottom, rgba(216, 30, 6, 0.2), #fff);
      padding: 16px;
      border-radius: 10px 10px 0 0;

      .logo {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        color: #333;

        img {
          height: 100%;
          margin-right: 10px;
        }
      }

      .authentication {
        padding: 0.9375rem;
        margin-top: 0.625rem;
        border-radius: 0.625rem;
        box-shadow: 0 0 4px rgba(216, 30, 6, 0.2);
        font-weight: 600;
        span {
          color: #d81e06;
        }
        .authCard {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.625rem;
          img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }

          & > div {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h4 {
              margin: 0;
              font-size: 14px;
            }
            p {
              font-weight: 100;
              color: #999;
              font-size: 12px;
              margin: 0;
            }
          }
        }
      }
    }
    .van-grid {
      width: 100%;
      .van-grid-item {
        font-size: 12px;
        color: #333;
        text-align: center;
        border: none;
      }
    }
    .dayTask {
      width: 83%;
      margin-top: 0.625rem;
      background-color: #fff;
      border-radius: 10px;
      padding: 0.9375rem;
      margin-top: 0.625rem;
      border-radius: 0.625rem;
      box-shadow: 0 0 4px rgba(216, 30, 6, 0.2);
      font-weight: 600;

      h4 {
        font-size: 16px;
        font-weight: 600;
        color: #333;
        margin: 0;
        span {
          color: #000;
          border-bottom: 2px solid #d81e06;
        }
      }
      ul {
        margin: 0.625rem 0 0;
        padding-left: 1.25rem;
        font-size: 14px;
        color: #000;
        list-style: auto;
        font-weight: 500;

        li {
          margin-bottom: 0.3125rem;
          position: relative;
          margin-top: 20px;
          border-bottom: 1px solid #eee;
        }
      }
    }
  }

  :deep(.van-grid-item__content)::after {
    content: "";
    border: none;
  }
}
</style>
