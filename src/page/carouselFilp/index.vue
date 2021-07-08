<template>
	<div class="container">
		<div class="box" ref="box">
			<div class="imgBox" ref="imgBox" v-for="(imgBox, row) in rows" :key="row">
				<div class="img" :style="{'--col':col, '--row':row}" :ref="'img' + row + '_' + col" v-for="(item, col) in cols" :key="col">
					<div class="front"></div>
					<div class="back"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			rows: 20,
			cols: 20
		}
	},
	created() {
		this.interval()
	},
	methods: {
		interval() {
			let count = 1
			setInterval(() => {
				for(let row = 0; row < this.rows; row ++) {
					for(let col = 0; col < this.cols; col ++) {
						this.$refs[ 'img' +  row + '_' + col ][0].style.transform = `rotateY(${(count % 2) * 180}deg)`
					}
				}
				count++
			},5000)
		}
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
	width: $box_width;
	height: $box_height;
}
.imgBox {
	width: $img_width;
	height: $img_height;
	position: absolute;
}
.img {
	width: 100%;
	height: 100%;
	position: absolute;
	transform-style: preserve-3d;
	left: calc(var(--col) * 30px);
	top: calc(var(--row) * 17px);
	transition: .5s linear calc(calc(var(--col) + var(--row)) * .1s);
}
.front {
	width: 100%;
	height: 100%;
	position: absolute;
	background-image: url('../../../static/glass.jpg');
	background-size: $box_width $box_height;
	background-position: calc(var(--col) * -30px) calc(var(--row) * -17px);
	transform: rotateY(0deg);
}
.back {
	width: 100%;
	height: 100%;
	position: absolute;
	background-image: url('../../../static/card.jpg');
	background-size: $box_width $box_height;
	background-position: calc(var(--col) * -30px) calc(var(--row) * -17px);
	transform: rotateY(180deg);
}
</style>
