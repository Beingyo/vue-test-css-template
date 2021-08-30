<template>
	<div class="container">
		<div class="box">
			<div class="top" style="--move: -30">HOLY</div>
			<div class="bottom" style="--move: 30">HOLY</div>
			<div class="text">我</div>
		</div>
		<div class="box">
			<!-- 伪元素实现 -->
			<div class="oblique" style="--move: -30">SHIT</div>
			<div class="text">裂</div>
		</div>
		<div class="box">
			<div class="leftTop" style="--move: -30">SPLIT</div>
			<div class="rightBottom" style="--move: 30">SPLIT</div>
			<div class="center">SPLIT</div>
			<div class="text">开</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$line_hight: 100px;
$bg_color: rgb(60, 60, 70);
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: $bg_color;
}
.box {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: $line_hight;
	cursor: pointer;
	flex: 1;
}
.top,
.bottom,
.oblique,
.oblique::after,
.oblique::before,
.leftTop,
.rightBottom,
.leftTop::before,
.leftTop::after,
.rightBottom::before,
.rightBottom::after,
.center {
	position: absolute;
	color: rgb(165, 42, 42);
	font-size: 80px;
	font-weight: 900;
	transition: 0.4s;
	line-height: $line_hight;
	top: 0;
}

// 伪元素实现，把原元素颜色去除
.oblique,
.leftTop,
.rightBottom,
.center {
	color: transparent;
}

.oblique::after,
.oblique::before,
.leftTop::before,
.leftTop::after,
.rightBottom::before,
.rightBottom::after {
	position: absolute;
	left: 0;
	top: 0;
	color: rgb(165, 42, 42);
}

.oblique::after,
.oblique::before {
	content: 'SHIT';
}

.leftTop::before,
.leftTop::after,
.rightBottom::before,
.rightBottom::after {
	content: 'SPLIT';
}

// 与背景色相同，制造圆形缺口
.leftTop::after,
.rightBottom::after {
	color: $bg_color;
	background: $bg_color;
}

// 中间圆形
.center {
	color: rgb(165, 42, 42);
}

.top {
	clip-path: inset(0 0 49% 0);
}
.bottom {
	clip-path: inset(50% 0 0 0);
}

.oblique::after {
	clip-path: polygon(0 0,100% 0, 0 100%);
}

.oblique::before {
	clip-path: polygon(100% 0,100% 100%, 0 100%);
}

.leftTop::before {
	clip-path: polygon(0 0,100% 0, 0 100%);
}

.rightBottom::before {
	clip-path: polygon(100% 0,100% 100%, 0 100%);
}

.leftTop::after,
.rightBottom::after{
	clip-path: circle(15% at 50% 50%);
}

.center {
	clip-path: circle(16% at 50% 50%);
	opacity: 1;
}

.box:hover .top,
.box:hover .bottom {
	top: calc(var(--move) * 1px);
}

.box:hover .oblique::after {
	margin: calc(var(--move) * 1px) 0 0 calc(var(--move) * 1px);
}

.box:hover .oblique::before {
	margin: calc(var(--move) * -1px) 0 0 calc(var(--move) * -1px);
}

.box:hover .leftTop,
.box:hover .rightBottom {
	margin: calc(var(--move) * 1px) 0 0 calc(var(--move) * 1px);
}
.box:hover .center {
	opacity: 0;
}

.box:hover .text {
	opacity: 1;
}
.text {
	position: absolute;
	color: rgb(150, 233, 215);
	font-size: 40px;
	font-weight: 600;
	transition: 0.3s;
	line-height: $line_hight;
	opacity: 0;
}
</style>
