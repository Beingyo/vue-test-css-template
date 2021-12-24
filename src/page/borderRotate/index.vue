<template>
	<div class="container">
		<div class="box">
			<div class="border"></div>
		</div>
	</div>
</template>

<script>
export default {
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped>
$color: #fff;
$hover_color: #ffffff1a;
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #000;
}
.box {
	position: relative;
	width: 200px;
	height: 200px;
}
.border {
	position: absolute;
	transition: 1s;
	width: 100%;
	height: 100%;
	border: 3px solid $color;
	border-radius: 38% 82% 75% 37% / 41% 74% 50% 70%;
	text-align: left;
	animation: change 10s infinite linear;
}
.border::after,
.border::before {
	content: '';
	position: absolute;
	transition: 1s;
	width: 100%;
	height: 100%;
	border: 3px solid $color;
	color: $color;
	border-radius: 38% 82% 75% 37% / 41% 74% 50% 70%;
}
.border::after {
	animation: change 8s infinite linear;
}
.border::before {
	animation: change 7s infinite linear;
}
@keyframes change {
	0% {
		transform: rotateZ(0);
		border-radius: 38% 62% 63% 37%/ 41% 44% 56% 59%;
	}
	50% {
		transform: rotateZ(180deg);
		border-radius: 38% 82% 75% 37% / 41% 74% 50% 70%;
	}
  100% {
		transform: rotateZ(360deg);
		border-radius: 38% 62% 63% 37%/ 41% 44% 56% 59%;
	}
}
.box:hover .border::before {
  background: rgba(255, 0, 0, 0.3);
}
.box:hover .border::after {
  background: rgba(0, 0, 255, 0.3);
}
.box:hover .border {
  background: rgba(0, 255, 0, 0.3);
}
// .box:hover .border,
// .box:hover .border::after,
// .box:hover .border::before {
//   background: $hover_color;
// }
</style>
