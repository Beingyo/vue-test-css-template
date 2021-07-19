<template>
	<div class="container">
		<div class="box">
			<svg class="svg-box" width="320" height="60">
				<rect class="shape" height="60" width="320"></rect>
			</svg>
			<div class="hover-text">HOVER ME</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	created() {
	},
	methods: {},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.box {
    position: absolute;
    width: 320px;
    height: 60px;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
}

.svg-box {
	display: inline;
}

.hover-text {
    position: absolute;
    line-height: 60px;
    width: 320px;
    top: 0;
    color: #333;
    font-size: 28px;
    text-align: center;
    cursor: pointer;
}

.shape {
    fill: transparent;
    stroke-width: 4px;
    stroke: #333;
    stroke-dasharray: 160 520;
    stroke-dashoffset: -460;
}

.box:hover .hover-text {
    // transition: 0.5s;
    transition: 2s;
    color: #3F51B5;
}

.box:hover .shape {
    // -webkit-animation: draw 0.5s linear forwards;
    // animation: draw 0.5s linear forwards;
	 animation: move 2s linear forwards;
}

@keyframes draw {
    0% {
        stroke-dasharray: 160 520;
        stroke-dashoffset: -460;
        stroke-width: 4px;
    }
    100% {
        stroke-dasharray: 760;
        stroke-dashoffset: 0;
        stroke-width: 2px;
        stroke: #3F51B5;
    }
}
@keyframes move {
    0%{
        stroke-dasharray: 20, 760;
		stroke-dashoffset: -530;
    }
    50%{
        stroke-dasharray: 20, 10;
		stroke-dashoffset: -530;
    }
    100%{
        stroke-dasharray: 760, 0;
		stroke-dashoffset: 0;
        stroke: #3F51B5;
    }
}
</style>
