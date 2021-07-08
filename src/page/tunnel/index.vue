<template>
	<div class="container">
		<div class="box">
			<div class="item" v-for="(index, item) in 15" :key="index" :style="{'--delay': index}"></div>
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
$bg_color: rgb(60, 60, 70);
$border: rgb(255, 255, 255);
$border_color: rgb(150, 20, 100);
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: $bg_color;
}
.box {
	width: 500px;
	height: 300px;
}
.item {
	width: 500px;
	height: 300px;
	position: absolute;
	border: solid 15px $border;
	border-radius: 20px;
	box-shadow: 0 0 20px $border_color, inset 0 0 20px $border_color;
	transform-style: preserve-3d;
	animation: move 15s ease-in-out infinite;
	animation-delay: calc(var(--delay) * 1s);
	animation-fill-mode: both;
}
@keyframes move {
	0% {
		opacity: 0;
		transform:translateZ(-700px) scale(.1);
	}
	100% {
		opacity: 1;
		// /* transformZ越大时，元素就离你越近，
		// scale是缩放，在元素离你越来越近的同时也越来越大 */
		transform:translateZ(200px) scale(1.5);
	}
}
</style>
