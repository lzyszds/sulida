<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";

// 图片验证码
const imageCaptcha = reactive({
  code: "",
  userInput: "",
  error: "",
  verified: false,
});

const captchaCanvas = ref(null);

const exit = defineEmits(["captcheCode"]);

// 生成图片验证码
const generateImageCaptcha = () => {
  const canvas = captchaCanvas.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";

  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 设置背景
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 生成验证码
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  imageCaptcha.code = code;
  imageCaptcha.userInput = "";
  imageCaptcha.error = "";
  imageCaptcha.verified = false;

  exit("captcheCode", imageCaptcha.code);

  // 绘制验证码
  ctx.font = "20px Arial";
  ctx.textBaseline = "middle";

  for (let i = 0; i < code.length; i++) {
    ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 50%)`;
    ctx.save();
    ctx.translate(20 + i * 20, 20);
    ctx.rotate((Math.random() - 0.5) * 0.5);
    ctx.fillText(code[i], 0, 0);
    ctx.restore();
  }

  // 添加干扰线
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 50%, 70%)`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }

  // 添加干扰点
  for (let i = 0; i < 20; i++) {
    ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 70%)`;
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      1,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
};

// 验证图片验证码
const verifyImageCaptcha = () => {
  if (imageCaptcha.userInput.toUpperCase() === imageCaptcha.code) {
    imageCaptcha.verified = true;
    imageCaptcha.error = "";
  } else {
    imageCaptcha.error = "验证码错误";
    imageCaptcha.verified = false;
  }
};

// 组件挂载时初始化
onMounted(async () => {
  await nextTick();
  generateImageCaptcha();
});
</script>

<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <!-- 图片验证码 -->
    <div class="mb-8 p-4 border rounded-lg">
      <div class="flex flex-col items-center">
        <canvas
          ref="captchaCanvas"
          width="120"
          height="40"
          class="border border-gray-300 cursor-pointer bg-gray-100"
          @click="generateImageCaptcha"
        ></canvas>
      </div>
    </div>
  </div>
</template>
