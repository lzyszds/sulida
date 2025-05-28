// 验证码字符集，包含大小写字母和数字
const captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// 生成随机字符
function getRandomChar() {
	return captchaChars.charAt(Math.floor(Math.random() * captchaChars.length));
}

// 生成4位验证码
function generateCaptcha() {
	let captcha = '';
	for (let i = 0; i < 4; i++) {
		captcha += getRandomChar();
	}

	return captcha;
}

// 绘制验证码
function drawCaptcha(captcha) {
	const canvas = document.getElementById('checkDisplay');
	const ctx = canvas.getContext('2d');

	// 清空Canvas  
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// 设置字体样式  
	ctx.font = '5vw Arial';
	ctx.fillStyle = '#40D5FF';
	ctx.textBaseline = 'middle';

	// 计算验证码字符串的总宽度
	const charWidth = ctx.measureText(captcha[0]).width;
	const totalWidth = captcha.length * (charWidth + 10) - 10;
	const startX = (canvas.width - totalWidth) / 2;

	// 绘制验证码字符  
	for (let i = 0; i < captcha.length; i++) {
		// 每个字符稍微偏移一些位置和旋转角度  
		// 基准X坐标，不考虑随机偏移
		const baseX = startX + i * (charWidth + 10);
		const x = baseX + Math.random() * 5 - 2.5;
		const y = canvas.height / 2 + Math.random() * 5;
		const angle = Math.random() * 30 - 15;

		// 保存当前状态  
		ctx.save();

		// 平移和旋转  
		ctx.translate(x, y);
		ctx.rotate(angle * Math.PI / 180);

		// 绘制字符  
		ctx.fillText(captcha[i], 0, 0);

		// 恢复状态  
		ctx.restore();
	}
}

// 初始化验证码
let currentCaptcha = generateCaptcha();
drawCaptcha(currentCaptcha);

// 刷新验证码
document.getElementById('checkDisplay').addEventListener('click', function () {
	currentCaptcha = generateCaptcha();
	drawCaptcha(currentCaptcha);
})

 