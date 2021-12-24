<template>
	<div class="container">
		<div class="box">
			<div class="card">
				<div class="snow" v-for="(item, index) in 100" :key="index"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$snow-size: 2em;
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: black;
}

.box {
	display: inline;
}
.card {
	width: $snow-size * 10;
	height: $snow-size * 10;
	padding: 10em;
	display: flex;
	flex-wrap: wrap;
	background: black;
	filter: blur(15px) contrast(30);

	.snow {
		position: relative;
		width: $snow-size;
		height: $snow-size;
		border-radius: 100%;
		&::after {
			position: absolute;
			content: '';
			left: 0;
			width: inherit;
			height: inherit;
			background: white;
			transition: 30s cubic-bezier(0.19, 1, 0.22, 1);
		}

		&:hover::after {
			transform: scale(0);
			transition-duration: 0.3s;
		}
	}
}
</style>
