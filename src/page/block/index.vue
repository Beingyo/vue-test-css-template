<template>
	<div class="container">
		<div class="box">
			<div class="item">
				<div class="top"></div>
				<div class="bottom"></div>
				<div class="left"></div>
				<div class="right">
					<div class="wave"></div>
				</div>
				<div class="front"></div>
				<div class="back"></div>
				
				<!-- <div class="front">
					<div class="wave">
					</div> -->
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
$bg_color: rgba(0, 0, 0, 0.02);
$border_color: rgba(0, 0, 0, 0.5);
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

.wave {
	position: absolute;
	height: 180px;
	width: 180px;
	background: $bg_color;
	left: 97%;
	border-radius: 45% 47% 44% 42%;
	text-align: left;
}
.wave::after,
.wave::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
}
.wave::after {
	border-radius: 38% 46% 43% 47%;
	background: $bg_color;
	transform: translateY(-60px);
}
.wave::before {
	border-radius: 42% 46% 37% 40%;
	background: $bg_color;
	transform: translateY(60px);
}


// .wave {
// 	position: absolute;
// 	height: 180px;
// 	width: 180px;
// 	background: lightcyan;
// 	left: 90%;
// 	border-radius: 45% 47% 44% 42%;
// 	text-align: left;
// }
// .wave::after,
// .wave::before {
// 	content: '';
// 	position: absolute;
// 	width: 100%;
// 	height: 100%;
// }
// .wave::after {
// 	border-radius: 38% 46% 43% 47%;
// 	background: rgb(255, 224, 252);
// 	transform: rotate(-135deg);
// }
// .wave::before {
// 	border-radius: 42% 46% 37% 40%;
// 	background: rgb(233, 255, 224);
// 	transform: rotate(135deg);
// }
</style>
