<template>
	<div class="container">
		<div class="box">
			<p>文字适配背景色</p>
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
.container {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgb(211, 211, 211);
}
.box {
	width: 500px;
	height: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
	writing-mode:vertical-lr;
	background: linear-gradient(#000 0%, #fff 100%);
	p {
		color: #fff;
		font-size: 32px;
		letter-spacing:14px;
		mix-blend-mode: difference;
		animation: move 5s infinite linear;
	}
	@keyframes move {
		0% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-25%);
		}
		50% {
			transform: translateY(0);
		}
		75% {
			transform: translateY(25%);
		}
		100% {
			transform: translateY(0);
		}
	}
}
</style>
