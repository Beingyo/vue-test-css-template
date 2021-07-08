<template>
	<div class="container">
		<div class="box">
			<div class="top" style="--move: -30">HOLY</div>
			<div class="bottom" style="--move: 30">HOLY</div>
			<div class="text">我</div>
		</div>
		<div class="box">
			<div class="left" style="--move: -50">SPLIT</div>
			<div class="right" style="--move: 50">SPLIT</div>
			<div class="text">裂</div>
		</div>
		<div class="box">
			<div class="leftTop" style="--move: -30">SPLIT</div>
			<div class="rightBottom" style="--move: 30">SPLIT</div>
			<div class="text">开</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$line_hight: 100px;
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: rgb(60, 60, 70);
}
.box {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: $line_hight;
	cursor: pointer;
	flex: 1;
}
.top,
.bottom,
.left,
.right,
.leftTop,
.rightBottom,
.center {
	position: absolute;
	color: rgb(165, 42, 42);
	font-size: 80px;
	font-weight: 900;
	transition: 0.4s;
	line-height: $line_hight;
	top: 0;
}
.top {
	clip-path: inset(0 0 49% 0);
}
.bottom {
	clip-path: inset(50% 0 0 0);
}
.left {
	clip-path: inset(0 50% 0 0);
}
.right {
	clip-path: inset(0 0 0 49%);
}
.leftTop {
	clip-path: polygon(0 0,100% 0, 0 100%);
}
.rightBottom {
	clip-path: polygon(100% 0,100% 100%, 0 100%);
}
.box:hover .top,
.box:hover .bottom {
	top: calc(var(--move) * 1px);
}
.box:hover .left,
.box:hover .right {
	margin-left: calc(var(--move) * 1px);
}
.box:hover .leftTop,
.box:hover .rightBottom {
	margin: calc(var(--move) * 1px) 0 0 calc(var(--move) * 1px);
}
.box:hover .text {
	opacity: 1;
}
.text {
	position: absolute;
	color: rgb(150, 233, 215);
	font-size: 40px;
	font-weight: 600;
	transition: 0.3s;
	line-height: $line_hight;
	opacity: 0;
}
</style>
