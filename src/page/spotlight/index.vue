<template>
	<div class="container">
		<div class="box" ref="box" :style="{'--width':width, '--height':height}" @mousemove="move" @mouseout="leave">
			<p>悬浮聚光灯效果</p>
			<p class="text" ref="text">悬浮聚光灯效果</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			width:-45+'px',
			height:0,
		}
	},
	mounted() {},
	methods: {
		move(e) {
			let mouseWidth = e.clientX
			let mouseHeight = e.clientY
			let left = this.$refs.text.offsetLeft
			let top = this.$refs.text.offsetTop
			let moveWidth = mouseWidth - left
			let moveHeight = mouseHeight - top
			this.width = moveWidth + 'px'
			this.height = moveHeight + 'px'
		},
		leave() {
			this.width = -45 + 'px'
			this.height = 0
		}
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #222222;
	user-select:none;
	-ms-user-select:none;
	-moz-user-select:none;
	-webkit-user-select:none;
}
.box {
	padding: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		color: transparent;
		margin: 0;
		padding: 0;
		font-size: 4rem;
		letter-spacing: 1rem;
	}
	.text {
		color: #2c3e50;
		margin: 0;
		padding: 0;
		font-size: 4rem;
		letter-spacing: 1rem;
		position: absolute;
	}

	.text::after {
		content: '悬浮聚光灯效果';
		position: absolute;
		top: 0;
		left: 0;
		color: transparent;
		background-image: linear-gradient(
			to right,
			#c23616,
			#192a56,
			#00d2d3,
			#ffff00,
			#6d214f,
			#2e86de,
			#4cd137,
			#e84118
		);
		background-clip: text;
		-webkit-background-clip: text;
		clip-path: circle(45px at var(--width) var(--height));
		// 动画
		// animation: move 5s infinite;
	}
	/* 下面设置圆形移动效果 */
	@keyframes move {
		0% {
			clip-path: circle(100px at 0% 50%);
		}
		50% {
			clip-path: circle(100px at 100% 50%);
		}
		100% {
			clip-path: circle(100px at 0% 50%);
		}
	}
}
</style>
