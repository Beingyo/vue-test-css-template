<template>
	<div class="container">
		<div class="box">
			<div
				class="item"
				:style="{ '--rotate': index }"
				v-for="(item, index) in 12"
				:key="index"
			>
				<div class="top"></div>
				<div class="bottom"></div>
				<div class="left"></div>
				<div class="right"></div>
				<div class="front"></div>
				<div class="back"></div>
				<span>{{ item }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped>
$translate: 350px;
$bg_color: rgba(0, 0, 0, 0.02);
$border_color: rgba(0, 0, 0, 0.5);
$text: rgba(0, 0, 0, 0.25);

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: rgb(211, 211, 211);
}
.box {
	position: relative;
	width: 150px;
	height: 200px;
	transform-style: preserve-3d;
	animation: rotate 10s linear infinite normal;
}
.item {
	position: absolute;
	width: 150px;
	height: 200px;
	transform-style: preserve-3d;
	transform: rotateY(calc(var(--rotate) * 30deg)) translateZ($translate);
}

.item span {
	line-height: 200px;
	font-size: 100px;
	font-weight: 900;
	color: rgb(255, 255, 255);
	-webkit-text-stroke: 1px rgb(0, 0, 0);
	text-shadow: 0 0 5px rgb(0, 0, 0);
	text-shadow:
    1px 1px 0 $text,
    2px 2px 0 $text,
    3px 3px 0 $text,
    4px 4px 0 $text,
    5px 5px 0 $text,
    6px 6px 0 $text,
    7px 7px 0 $text;
}
.top,
.bottom,
.left,
.right,
.front,
.back {
	position: absolute;
	background: $bg_color;
}
.top,
.bottom {
	width: 150px;
	height: 20px;
}
.left,
.right {
	width: 18px;
	height: 198px;
	border: solid 1px $border_color;
}
.front,
.back {
	width: 148px;
	height: 198px;
	border: solid 1px $border_color;
}
.top {
	top: 0;
	transform-origin: top;
	transform: rotateX(-90deg) translateY(-10px);
}
.bottom {
	bottom: 0;
	transform-origin: bottom;
	transform: rotateX(90deg) translateY(10px);
}
.left {
	left: 0;
	transform-origin: left;
	transform: rotateY(90deg) translateX(-10px);
}
.right {
	right: 0;
	transform-origin: right;
	transform: rotateY(-90deg) translateX(10px);
}
.front {
	transform: translateZ(10px);
}
.back {
	transform: translateZ(-10px);
}
@keyframes rotate {
	0% {
		transform: rotateX(-10deg) rotateY(0deg);
	}
	100% {
		transform: rotateX(-10deg) rotateY(-360deg);
	}
}
</style>
