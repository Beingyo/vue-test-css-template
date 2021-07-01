<template>
	<div class="container">
		<div class="book">
			<div class="center" style="--open: 3; --close: 3;"></div>
			<div class="first" style="--open: 1; --close: 5;"></div>
			<div class="page" style="--open: 2; --close: 4;"><img :src="img1" alt=""></div>
			<div class="page" style="--open: 3; --close: 3;"><img :src="img2" alt=""></div>
			<div class="page" style="--open: 4; --close: 2;"><img :src="img3" alt=""></div>
			<div class="page" style="--open: 5; --close: 1;"><img :src="img4" alt=""></div>
			<div class="last" style="--open: 3; --close: 3;"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			img1: require('@/assets/magnifier.jpg'),
			img2: require('@/assets/night.png'),
			img3: require('@/../static/CSSBox.jpg'),
			img4: require('@/../static/glass.jpg'),
		}
	},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped>
$border_width: 15px;
$border_color:#576574;
$top_height: -15px;
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 97vh;
}
.book {
	width: 200px;
	height: 350px;
	transform-style: preserve-3d;
	transition: 0.8s;
	perspective: 1000px;
}
.book:hover {
	transform: translateX(50px);
}
.page, .first, .last, .center {
	width: 200px;
	height: 350px;
	position: absolute;
	transform-origin: left;
	transition: calc(var(--close) * 0.3s);
	z-index: calc(var(--close) * 99);
	background: $border_color;
}
.first img,
.page img,
.last img {
	width: 100%;
	height: 100%;
	object-fit:cover;
}

.first, .last, .center {
	border: solid $border_width $border_color;
	border-left: $border_color 0 solid;
	top: $top_height;
	border-radius: 0 20px 20px 0;
}
.book:hover .page,
.book:hover .first {
	transform: rotateY(-180deg);
	transition: calc(var(--open) * 0.4s);
	z-index: calc(var(--open) * 99);
}
.book:hover .center,
.book:hover .last {
	transition: calc(var(--open) * 0.4s);
	border-left: $border_color $border_width solid;
}

</style>
