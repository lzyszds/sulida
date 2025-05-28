<template>
  <div class="container">
    <!-- 头部 -->
    <van-nav-bar
      title="我的团队"
      right-text="团队订单明细"
      right-arrow
      @click-right="onClickLeft"
    />

    <!-- 头像区域 -->
    <div class="avatar-section">
      <div class="avatar">
        <span>JT</span>
      </div>
    </div>

    <!-- 统计数据区域 -->
    <div class="stats-section">
      <div class="stats-row">
        <span class="stats-label">矩阵总金额：</span>
        <span class="stats-value">¥0</span>
        <span style="margin: 0 0.625rem; font-weight: 100"> | </span>
        <span class="stats-label">矩阵数：</span>
        <span class="stats-value">0</span>
      </div>

      <div class="stats-row">
        <span class="stats-label">已完成矩阵总金额：</span>
        <span class="stats-value">0</span>
        <span style="margin: 0 0.625rem; font-weight: 100"> | </span>

        <span class="stats-label">矩阵数：</span>
        <span class="stats-value">0</span>
      </div>

      <div class="stats-center">
        <span class="stats-label">团队矩阵总人数：</span>
        <span class="stats-value">0</span>
      </div>

      <div class="stats-center">
        <span class="stats-label">直推矩阵人数：</span>
        <span class="stats-value">0</span>
      </div>

      <div class="stats-center">
        <span class="stats-label">新增矩阵人数：</span>
        <span class="stats-value">0</span>
      </div>
    </div>

    <!-- 蓝色汇总区域 -->
    <div class="summary-section">
      <div class="summary-row">
        <div class="summary-item">
          <span class="summary-label">个人抢购：</span>
          <span class="summary-value">0</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">个人总金额：</span>
          <span class="summary-value">¥0</span>
        </div>
      </div>

      <div class="summary-row">
        <div class="summary-item">
          <span class="summary-label">团队抢购：</span>
          <span class="summary-value">0</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">团队总金额：</span>
          <span class="summary-value">¥0</span>
        </div>
      </div>
    </div>

    <!-- 表格头部 -->
    <div class="table-header">
      <div class="table-cell">姓名</div>
      <div class="table-cell">会员账号</div>
      <div class="table-cell">订单</div>
      <div class="table-cell">总金额</div>
      <div class="table-cell">人数</div>
    </div>

    <!-- 表格内容（空状态） -->
    <div class="table-content">
      <div class="empty-state">
        <div class="empty-icon">📊</div>
        <p class="empty-text">暂无数据</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// 团队数据
const teamStats = reactive({
  matrixTotalAmount: 0,
  matrixCount: 0,
  completedMatrixAmount: 0,
  completedMatrixCount: 0,
  teamMatrixPeople: 0,
  directPushPeople: 0,
  newMatrixPeople: 0,
  personalPurchase: 0,
  personalTotal: 0,
  teamPurchase: 0,
  teamTotal: 0,
});

// 团队成员数据
const teamMembers = ref([]);

// 模拟加载数据的方法
const loadTeamData = () => {
  // 这里可以添加API调用来获取实际数据
  console.log("Loading team data...");
};

// 组件挂载时加载数据
loadTeamData();
</script>

<style scoped>
/* 基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* 头部样式 */
.header {
  background-color: #ffffff;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}

.title {
  font-size: 18px;
  font-weight: 500;
}

.detail-link {
  font-size: 14px;
  color: #1976d2;
  text-decoration: none;
}

/* 头像区域样式 */
.avatar-section {
  background-color: #f0f0f0;
  padding: 32px 0;
  display: flex;
  justify-content: center;
}

.avatar {
  width: 80px;
  height: 80px;
  background-color: #1976d2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar span {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

/* 统计数据区域样式 */
.stats-section {
  background-color: #f0f0f0;
  padding: 0 16px 24px;
}

.stats-row {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  gap: 5px;
  font-size: 1rem;
  font-weight: 700;
}

.stats-center {
  text-align: center;
  margin-bottom: 12px;
}

.stats-label {
  color: #000;
  font-weight: 500;
}

.stats-value {
  color: #ff3b30;
  font-weight: 500;
}

/* 蓝色汇总区域样式 */
.summary-section {
  background-color: #1976d2;
  color: white;
  padding: 8px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.summary-row:last-child {
  margin-bottom: 0;
}

.summary-item {
  flex: 1;
  text-align: center;
}

.summary-label {
  font-size: 12px;
}

.summary-value {
  font-size: 12px;
  font-weight: 500;
}

/* 表格样式 */
.table-header {
  background-color: white;
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e5e5;
}

.table-cell {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #666666;
}

.table-content {
  background-color: white;
  min-height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-state {
  text-align: center;
}

.empty-icon {
  font-size: 36px;
  margin-bottom: 8px;
}

.empty-text {
  font-size: 14px;
  color: #999999;
}
</style>
