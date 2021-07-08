<template>
	<div class="container">
		<div class="box">
			<div class="leftTop"></div>
			<div class="rightTop"></div>
			<div class="rightBottom"></div>
			<div class="leftBottom"></div>
			<p>LOADING...</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$img_width: 640px;
$img_height: 400px;
$left: -270px;
$left_move: -350px;
$right: 270px;
$right_move: 350px;
$font_size: 36px;
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.box {
	position: relative;
	width: $img_width;
	height: $img_height;
	background-image: url('../../../static/card.jpg');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}
.leftTop,
.rightTop,
.rightBottom,
.leftBottom {
	position: absolute;
	width: $img_width;
	height: $img_height;
	filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.5));
	opacity: 0.7;
	transition: 0.7s;
	text-align: left;
}
.leftTop::after,
.rightTop::after,
.rightBottom::after,
.leftBottom::after {
	content: '';
	position: absolute;
	width: $img_width;
	height: $img_height;
	background-image: url('../../../static/card.jpg');
	background-size: cover;
}
.leftTop {
	left: $left;
	transform: rotateZ(-105deg);
	overflow: hidden;
}
// 设置图片偏移量，也可以不设置，或者使用毛玻璃，透明背景等方式，按个人喜好。
.leftTop::after {
	transform: rotateZ(105deg);
	background-position: -$left;
}
.leftBottom {
	left: $left;
	transform: rotateZ(100deg);
	overflow: hidden;
}
.leftBottom::after {
	transform: rotateZ(-100deg);
	background-position: -$left;
}
.rightTop {
	left: $right;
	transform: rotateZ(100deg);
	overflow: hidden;
}
.rightTop::after {
	transform: rotateZ(-100deg);
	background-position: -$right;
}
.rightBottom {
	left: $right;
	transform: rotateZ(-105deg);
	overflow: hidden;
}
.rightBottom::after {
	transform: rotateZ(105deg);
	background-position: -$right;
}
.box p {
	opacity: 0;
	font: 900 $font_size '';
	/* 设置字体间距 */
	letter-spacing: 3px;
	color: rgb(60, 60, 70);
	transition: 0.5s;
}
.box:hover .leftTop {
	left: $left_move;
}
.box:hover .leftBottom {
	left: $left_move;
}
.box:hover .rightTop {
	left: $right_move;
}
.box:hover .rightBottom {
	left: $right_move;
}
.box:hover p {
  opacity: 1;
}
// .leftTop::after,
// .leftBottom::after,
// .rightTop::after,
// .rightBottom::after {
// 	transition: 0.5s;
// }
// .box:hover .leftTop::after {
// 	background-position: -$left_move;
// }
// .box:hover .leftBottom::after {
// 	background-position: -$left_move;
// }
// .box:hover .rightTop::after {
// 	background-position: -$right_move;
// }
// .box:hover .rightBottom::after {
// 	background-position: -$right_move;
// }
</style>
