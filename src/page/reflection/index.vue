<template>
	<div class="container">
		<div class="circle-top">
			 <div class="line"></div>
		</div>
		<div class="circle-bottom"/>
		<!-- SVG feTurbulence 滤镜效果 -->
		<svg>
			<filter id="fractal" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
				<feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="10">
					<animate
						attributeName="baseFrequency"
						dur="30s"
						values="0.01 0.01;0.03 0.15;0.01 0.01"
						repeatCount="indefinite" />
				</feTurbulence>
				<feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
			</filter>
		</svg>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
	background: rgb(211, 211, 211);
}
.circle-top,
.circle-bottom {
	position: fixed;
	width: 100vw;
	height: 50vh;
	overflow: hidden;
	background: #000;
	&::before {
		content: '';
		position: absolute;
		left: 50%;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: #000;
		border: 25px solid #fff;
	}
}
.circle-top {
	z-index: 1;
	&::before {
		bottom: 0;
		z-index: 1;
		transform: translate(-50%, 125px);
		box-shadow:
			0 0 4px 1px rgba(255, 255, 255, .8),
			0 0 8px 1px rgba(255, 255, 255, .6);
	}
	&::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-radial-gradient(
			circle at 50% 100%,
			transparent,
			transparent 5px,
			#3a77f6 5.2px,
			#3a77f6 6.2px,
			transparent 6.5px
		);
        mask: radial-gradient(
			circle at 50% 100%,
			rgba(255, 255, 255, 1),
			transparent 25%,
			transparent
		);
        z-index: 0;
    }
}
.circle-bottom {
	top: calc(50vh - 5px);
	left: -5px;
	padding-right: 10px;
	padding-bottom: 10px;
	z-index: 0;
	filter: url(#fractal);
	&::before {
		top: 0;
		z-index: 2;
		transform: translate(-50%, -120px);
		box-shadow:
			0 0 4px 1px rgba(255, 255, 255, .8),
			0 0 8px 1px rgba(255, 255, 255, .7),
			0 0 20px 1px rgba(255, 255, 255, .6);
		filter: blur(4px);
		mask: linear-gradient(
			rgba(255, 255, 255, 1),
			rgba(255, 255, 255, 1) 50%,
			rgba(255, 255, 255, .9)
		);
	}
    &::after {
        content: "";
        position: absolute;
        top: 5px;
        left: 0;
        right: 0;
        bottom: 0;
		// transform-style: preserve-3d;
		// transform-origin: center top;
		// transform: rotateX(60deg);
        background: repeating-radial-gradient(
			circle at 50% 0,
			transparent,
			transparent 5px,
			#3a77f6 5.1px,
			#3a77f6 6.4px,
			transparent 6.5px
		);
        mask: radial-gradient(
			circle at 50% 0,
			rgba(255, 255, 255, .6),
			transparent 25%,
			transparent
		);
        z-index: 3;
    }
}
.line {
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 500px;
    height: 6px;
    border-radius: 50%;
    background: rgba(46,107,232, 0.8);
    transform: translate(-50%, -50%);
    z-index: 10;
    filter: blur(5px) contrast(1.2) brightness(1.2);
    box-shadow: 0 0 5px rgba(46,107,232, 0.7);
}
</style>
