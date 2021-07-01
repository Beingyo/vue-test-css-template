<template>
	<div class="container">
		<div class="box" ref="box">
			<img :src="imgUrl" width="100%" alt="" />
			<div class="move" ref="move" @mousemove="mousemove">
				<img :src="imgUrl" ref="img" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imgUrl: require('@/assets/magnifier.jpg'),
		}
	},
	created() {},
	methods: {
		mousemove(e) {
			// 鼠标移动数据
			let mouseWidth = e.clientX
			let mouseHeight = e.clientY
			// box距离页面数据
			let left = this.$refs.box.offsetLeft
			let top = this.$refs.box.offsetTop
			// 放大框的一半
			let halfWidth = this.$refs.move.clientWidth / 2
			let halfHeight = this.$refs.move.clientHeight / 2
			// 放大图片与显示图片的比例大小
			const percentWidth =
				this.$refs.img.clientWidth / this.$refs.box.clientWidth
			const percentHeight =
				this.$refs.img.clientHeight / this.$refs.box.clientHeight
			// 可移动的最小最大距离
			let minMoveWidth = left + halfWidth
			let maxMoveWidth = left + this.$refs.box.clientWidth - halfWidth
			let minMoveHeight = top + halfHeight
			let maxMoveHeight = top + this.$refs.box.clientHeight - halfHeight
			// 移动距离 = 鼠标位置 - box页面距离 - 放大框的一半
			// 大图的移动距离 = ( 鼠标位置 - box页面距离 ) * 比例大小 - 放大框的一半
			if (mouseWidth <= minMoveWidth) {
				this.$refs.move.style.left = 0 + 'px'
			} else if (mouseWidth >= maxMoveWidth) {
				this.$refs.move.style.right = 0 + 'px'
			} else {
				this.$refs.move.style.left =
					mouseWidth - left - halfWidth + 'px'
				this.$refs.img.style.left =
					-((mouseWidth - left) * percentWidth - halfWidth) + 'px'
			}
			if (mouseHeight <= minMoveHeight) {
				this.$refs.move.style.top = 0 + 'px'
			} else if (mouseHeight >= maxMoveHeight) {
				this.$refs.move.style.bottom = 0 + 'px'
			} else {
				this.$refs.move.style.top =
					mouseHeight - top - halfHeight + 'px'
				this.$refs.img.style.top =
					-((mouseHeight - top) * percentHeight - halfHeight) + 'px'
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 97vh;
}
.box {
	width: 800px;
	min-height: 100px;
	position: relative;
}
.move {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 3px solid #000;
	position: absolute;
	left: 0;
	top: 0;
	overflow: hidden;
}
.move img {
	position: absolute;
	left: 0;
	top: 0;
}
</style>
