<template>
	<div class="container">
		<div class="box" ref="box">
			<div class="imgBox" ref="imgBox">
				<div class="test">
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</div>
			<div class="imgBoxA" ref="imgBox">
				<div class="test">
					<div class="frontA"></div>
					<div class="backA"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			rows: 2,
			cols: 2
		}
	},
	mounted() {
		// this.filp()
	},
	methods: {
		filp() {
			let box = this.$refs.box
			let height = this.$refs.imgBox[0].offsetHeight
			let width = this.$refs.imgBox[0].offsetWidth
			this.rows = box.offsetHeight / height
			this.cols = box.offsetWidth / width


			for(let row = 0; row < this.rows - 1; row ++) {
				for(let col = 0; col < this.cols; col ++) {
					this.$refs[ 'front' +  row + '_' + col ][0].style.left = col * width + 'px'
					this.$refs[ 'front' +  row + '_' + col ][0].style.top = row * height  + 'px'
					this.$refs[ 'front' +  row + '_' + col ][0].style.backgroundPosition = `${-width * col}px ${-height * row}px`
					this.$refs[ 'back' +  row + '_' + col ][0].style.left = col * width + 'px'
					this.$refs[ 'back' +  row + '_' + col ][0].style.top = row * height  + 'px'
					this.$refs[ 'back' +  row + '_' + col ][0].style.backgroundPosition = `${-width * col}px ${-height * row}px`
				}
			}
			// for(let i = 0; i < 20 - 1; i ++) {
			// 	for(let j = 0; j < 20; j ++) {
			// 		let imgBox = document.createElement('div')
			// 		imgBox.className = 'imgBox'
			// 		imgBox.style.height = height + 'px'
			// 		imgBox.style.width = width + 'px'
			// 		imgBox.style.left = j = width + 'px'
			// 		let front = document.createElement('div')
			// 		front.className = 'test'
			// 		imgBox.appendChild(front)
			// 		let back = document.createElement('div')
			// 		back.className = 'back'
			// 		imgBox.appendChild(back)
			// 		box.appendChild(imgBox)
			// 	}
			// }
		},
	},
}
</script>

<style lang="scss" scoped>
$box_width: 600px;
$box_height: 340px;
$img_width: 30px;
$img_height: 17px;
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.box {
	position: absolute;
	width: $box_width;
	height: $box_height;
	// min-width: $box_width;
	// min-height: $box_height;
}
.imgBox {
	width: $img_width;
	height: $img_height;
	position: absolute;
	transform-style: preserve-3d;
	transition: 5s;
	// transform: rotateY(180deg);
}
.test {
	// width: $img_width;
	// height: $img_height;
	// position: absolute;
	// transform-style: preserve-3d;
	// transform-style: preserve-3d;
	// transform: rotateY(180deg);
}
.front {
	width: 100%;
	height: 100%;
	background-image: url('../../../static/glass.jpg');
	background-size: $box_width $box_height;
	position: absolute;
	top: 0;
	left: 0;
	transform: rotateY(0deg);
}
.back {
	width: 100%;
	height: 100%;
	background-image: url('../../../static/card.jpg');
	background-size: $box_width $box_height;
	position: absolute;
	top: 0;
	left: 0;
	transform: rotateY(180deg);
}
.imgBoxA {
	width: $img_width;
	height: $img_height;
	position: absolute;
	transform-style: preserve-3d;
	transition: 5s;
	left: 60px;
	transform: rotateY(180deg);
}
.frontA {
	width: 100%;
	height: 100%;
	background-image: url('../../../static/glass.jpg');
	background-size: $box_width $box_height;
	position: absolute;
	top: 0;
	left: 0;
	transform: rotateY(0deg);
}
.backA {
	width: 100%;
	height: 100%;
	background-image: url('../../../static/card.jpg');
	background-size: $box_width $box_height;
	position: absolute;
	top: 0;
	left: 0;
	transform: rotateY(180deg);
}
</style>
