<template>
	<div class="container">
		<div class="box">
			<div class="item">
				<div class="top"></div>
				<div class="bottom"></div>
				<div class="left">
					<div class="wave"></div>
				</div>
				<div class="right">
					<div class="wave"></div>
				</div>
				<div class="front">
					<div class="wave"></div>
				</div>
				<div class="back">
					<div class="wave"></div>
				</div>
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
$bg_color: rgb(194, 191, 191);
$border_color: rgb(0, 0, 0);
$bg_water: rgb(151, 204, 253);
$box_length: 180px;
$box_width: 180px;
$box_height: 180px;

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: rgb(211, 211, 211);
}
.box {
	position: relative;
	width: $box_length;
	height: $box_height;
	transform-style: preserve-3d;
	transform: rotateX(-25deg) rotateY(-45deg);
}
.item {
	position: absolute;
	width: $box_length;
	height: $box_height;
	transform-style: preserve-3d;
}

.top,
.bottom,
.left,
.right,
.front,
.back {
	position: absolute;
	background: $bg_color;
	overflow: hidden;
	opacity: 0.5;
}
.top,
.bottom {
	width: $box_length;
	height: $box_width;
	// border: solid 1px $border_color;
}
.left,
.right {
	width: $box_width;
	height: $box_height;
	// border: solid 1px $border_color;
}
.front,
.back {
	width: $box_length;
	height: $box_height;
	// border: solid 1px $border_color;
}
.top {
	top: 0;
	transform-origin: top;
	transform: rotateX(90deg) translateY(calc(#{$box_width} / -2));
}
.bottom {
	bottom: 0;
	transform-origin: bottom;
	transform: rotateX(-90deg) translateY(calc(#{$box_width} / 2));
	background: $bg_water;
}
.left {
	left: 0;
	transform-origin: left;
	transform: rotateY(-90deg) translateX(calc(#{$box_width} / -2));
}
.right {
	right: 0;
	transform-origin: right;
	transform: rotateY(90deg) translateX(calc(#{$box_width} / 2));
}
.front {
	transform: translateZ(calc(#{$box_width} / 2));
}
.back {
	transform: rotateY(180deg) translateZ(calc(#{$box_width} / 2));
}

.front .wave,
.right .wave,
.back .wave,
.left .wave {
	position: relative;
	height: 100%;
	width: 100%;
	background-image: linear-gradient($bg_color, $bg_color 50%, $bg_water 50%, $bg_water 100%);
}

.front .wave::after,
.front .wave::before,
.right .wave::after,
.right .wave::before,
.back .wave::after,
.back .wave::before,
.left .wave::after,
.left .wave::before  {
	content: '';
	position: absolute;
	height: 41%;
	width: 41%;
	top: 50%;
	transform: translate(0,-50%) rotate(-45deg);
	border-radius: 0% 100% 0% 100%;
}

.front .wave::after {
	left: 0;
	background: $bg_water;
}

.front .wave::before {
	right: 0;
	background: $bg_color;
}

.back .wave::after {
	left: 0;
	background: $bg_water;
}

.back .wave::before {
	right: 0;
	background: $bg_color;
}

.right .wave::after {
	left: 0;
	background: $bg_color;
}

.right .wave::before {
	right: 0;
	background: $bg_water;
}

.left .wave::after {
	left: 0;
	background: $bg_color;
}

.left .wave::before {
	right: 0;
	background: $bg_water;
}
</style>
