<template>
	<div class="container">
		<div class="box">
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
	justify-content: center;
	align-items: center;
	background: rgb(211, 211, 211);
}
.box {
	width: 300px;
	height: 400px;
	overflow: hidden;
	background: #fff;
	transition: .3s linear;
	clip-path: circle(20px at 44px 44px);
	&:hover {
		clip-path: circle(460px at 44px 44px);
	}
}
</style>
