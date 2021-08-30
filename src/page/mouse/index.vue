<template>
	<div class="container">
		<div class="box">
			<div class="item" ref="item" v-for="item in 49" :key="item"></div>
		</div>
		<div class="eyes-box">
			<div class="eye" ref="eye" v-for="(item, index) in 7" :key="item">
				<div class="eyes" :ref="'eyes' + index"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.move()
		this.eyesMove()
	},
	methods: {
		move() {
			document.addEventListener('mousemove', (e) => {
				const mouseX = e.clientX
				const mouseY = e.clientY
				this.$refs.item.forEach((item) => {
					const itemX = item.offsetLeft
					const itemY = item.offsetTop

					const moveX = mouseX - itemX - item.clientWidth / 2
					const moveY = mouseY - itemY - item.clientHeight / 2

					const radians = Math.atan2(moveY, moveX)
					const angle = (radians * 180) / Math.PI

					item.style.transform = `rotate(${angle}deg)`
				})
			})
		},
		eyesMove() {
			document.addEventListener('mousemove', (e) => {
				const mouseX = e.clientX
				const mouseY = e.clientY
				this.$refs.eye.forEach((item, index) => {
					const eyeX = item.offsetLeft
					const eyeY = item.offsetTop

					const moveX = mouseX - eyeX - item.clientWidth / 2
					const moveY = mouseY - eyeY - item.clientHeight / 2

					const radians = Math.atan2(moveY, moveX)
					const angle = (radians * 180) / Math.PI + 45

					this.$refs[ 'eyes' + index ][0].style.transform = `rotate(${angle}deg)`
				})
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
	height: 100vh;
	flex-direction: column;
}
.box {
	display: grid;
	grid-template-columns: repeat(7, 40px);
	grid-template-rows: repeat(7, 40px);
	grid-gap: 1.5rem;
}
.item {
	width: 40px;
	height: 40px;
	background-color: rgb(40, 40, 40);
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	border-left: solid 10px #fff;
	position: relative;
	text-align: left;
}
.item::after,
.item::before {
	content: '';
	width: 5px;
	height: 5px;
	display: block;
	position: absolute;
	border-radius: 50%;
	left: 20px;
	background-color: #fff;
}
.item::after {
	top: 25px;
}
.item::before {
	bottom: 25px;
}

/* ----------------------------------------------------------------------------------------*/

.eyes-box {
	display: grid;
	grid-template-columns: repeat(7, 40px);
	grid-template-rows: repeat(1, 40px);
	grid-gap: 1.5rem;
	margin-top: 50px;
}
.eye {
	width: 40px;
	height: 40px;
	background-color: rgb(255, 255, 255);
	border-radius: 0px 27px 0px 27px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	position: relative;
	transform: rotateZ(-45deg);
}
.eyes {
	width: 40px;
	height: 20px;
	position: absolute;
	background: #000;
	left: 0px;
	top: 10px;
	background: transparent;
}
.eyes::after {
	content: '';
	width: 18px;
	height: 18px;
	display: block;
	position: absolute;
	border-radius: 50%;
	right: 5px;
	top: 1px;
	background-color: rgb(32, 32, 32);
}
</style>
