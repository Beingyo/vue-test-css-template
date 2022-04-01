<template>
	<div class="container">
		<div class="box" ref="box">
			<span>滚动视差</span>
		</div>

		<!-- <div class="background"><span>Goat</span></div> -->
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	created() {
		this.scroll()
	},
	methods: {
		scroll() {
			document.addEventListener('scroll', () => {
				const scrollY = window.scrollY
				if (scrollY !== 0) {
					this.$refs.box.style.backgroundPosition = `calc(50% - ${scrollY}px) calc(50% - ${scrollY}px)`
				} else {
					this.$refs.box.style.backgroundPosition = ''
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 180vh;
	overflow-x: hidden;
}
.box {
	height: 180vh;
	width: 100%;
	background-image: url('../../../static/scroll.jpg');
	background-size: cover;
	background-position: 50% 50%;
	font: 900 20vw '';
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}
.box::before {
	content: '';
	background-size: cover;
	background-image: inherit;
	background-position: 50% 50%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -99;
}
</style>
