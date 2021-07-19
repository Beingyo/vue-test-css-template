<template>
	<div class="container">
		<div class="box">
			<div class="animation-A"><div class="border"></div></div>
			<div class="animation-B"><div class="border"></div></div>
			<div class="animation-C"><div class="border"></div></div>
			<div class="animation-D"><div class="border"></div></div>
			<div class="animation-E"><div class="border"></div></div>
			<div class="animation-F"><div class="border"></div></div>
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
$animation_A_color: rgb(146, 63, 255);
$animation_B_color: rgb(63, 140, 255);
$animation_C_color: rgb(255, 255, 255);
$animation_D_color: rgb(57, 153, 83);
$animation_E_color: rgb(83, 108, 128);
$animation_F_color: rgb(83, 108, 128);

// transparent

.container {
	// justify-content: center;
	// align-items: center;
	flex-direction: column;
	height: 100vh;
}
.box {
	margin: 50px 0 0 50px;
	display: grid;
	grid-template-columns: repeat(4, 125px);
	grid-template-rows: repeat(5, 75px);
	grid-gap: 50px;
}
.animation-A {
	cursor: pointer;
	.border {
		position: relative;
		height: 75px;
		width: 125px;
		border: solid 1px $animation_A_color;
	}
	.border::after,
	.border::before {
		content: "";
		position: absolute;
        height: 15px;
		width: 15px;
		transition: .3s ease-in-out;
	}
	.border::before {
		left: -4px;
		top: -4px;
		border-left: solid 1px $animation_A_color;
		border-top: solid 1px $animation_A_color;
	}
	.border::after {
		right: -4px;
		bottom: -4px;
		border-right: solid 1px $animation_A_color;
		border-bottom: solid 1px $animation_A_color;
	}
	.border:hover::after,
	.border:hover::before {
		width: calc(100% + 7px);
		height: calc(100% + 7px);
	}
}
.animation-B {
	cursor: pointer;
	.border {
		position: relative;
		height: 77px;
		width: 125px;
		outline: solid 1px $animation_B_color;
		outline-offset:-1px;
		transition: .5s linear;
	}
	.border:hover {
		outline: solid 1px transparent;
		background:
			linear-gradient(90deg, $animation_B_color 50%, transparent 0) repeat-x,
			linear-gradient(90deg, $animation_B_color 50%, transparent 0) repeat-x,
			linear-gradient(0deg, $animation_B_color 50%, transparent 0) repeat-y,
			linear-gradient(0deg, $animation_B_color 50%, transparent 0) repeat-y;
		background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
		background-position: 0 0, 0 100%, 0 0, 100% 0;
		box-shadow: inset 0px 0px 5px $animation_B_color;
		animation: moveB .3s linear infinite;
	}
	@keyframes moveB {
		0% {
			background-position: 0 0, 0 100%, 0 0, 100% 0;
		}
		100% {
			background-position: 6px 0, -6px 100%, 0 -6px, 100% 6px;
		}
	}
}
.animation-C {
	cursor: pointer;
	.border {
		position: relative;
		height: 75px;
		width: 125px;
		overflow: hidden;
	}
	.border::after {
		content: '';
		position: absolute;
		left: 3px;
		top: 3px;
		height: calc(100% - 6px);
		width: calc(100% - 6px);
		background: $animation_C_color;
	}
	.border::before {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		left: -50%;
		top: -50%;
		background-repeat: no-repeat;
        background-size: 50% 50%, 50% 50%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
		animation: moveC 3s linear infinite;
	}
	.border:hover::before {
		display: inline;
		// animation: moveC 3s linear infinite;
	}
	@keyframes moveC {
		100% {
			transform: rotate(1turn);
		}
	}
}
.animation-D {
	cursor: pointer;
	.border {
		position: relative;
		height: 75px;
		width: 125px;
		overflow: hidden;
	}
	.border::after {
		content: '';
		position: absolute;
		left: 3px;
		top: 3px;
		height: calc(100% - 6px);
		width: calc(100% - 6px);
		background: rgb(255, 255, 255);
	}
	.border::before {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		left: -50%;
		top: -50%;
		background: rgb(226, 226, 226);
		background-repeat: no-repeat;
		background-size: 50% 50%;
		background-position: 0 0;
		background-image: linear-gradient($animation_D_color, $animation_D_color);
		animation: moveD 2s linear infinite;
	}
	.border:hover::before {
		display: inline;
		// animation: moveD 2s linear infinite;
	}
	@keyframes moveD {
		100% {
			transform: rotate(1turn);
		}
	}
}
.animation-E {
	cursor: pointer;
	.border {
		position: relative;
		height: 75px;
		width: 125px;
		overflow: hidden;
	}
	.border::after {
		content: '';
		position: absolute;
		left: 3px;
		top: 3px;
		height: calc(100% - 6px);
		width: calc(100% - 6px);
		background: rgb(255, 255, 255);
	}
	.border::before {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		left: -50%;
		top: -50%;
		background-repeat: no-repeat;
		background-size: 50% 50%;
		background-position: 0 0;
		background: conic-gradient(transparent, rgb(180, 239, 252), transparent 30%);
		background-color: $animation_E_color;
		animation: moveE 2s linear infinite;
	}
	.border:hover::before {
		display: inline;
		// animation: moveE 2s linear infinite;
	}
	@keyframes moveE {
		100% {
			transform: rotate(1turn);
		}
	}
}
.animation-F {
	cursor: pointer;
	.border {
		border-radius: 5px;
		position: relative;
		height: 75px;
		width: 125px;
		background: rgb(226, 226, 226);
	}
	.border::after,
	.border::before {
		border-radius: 5px;
		content: '';
		position: absolute;
		height: calc(100% + 6px);
		width: calc(100% + 6px);
		left: -5px;
		top: -5px;
		border: solid 2px $animation_F_color;
		animation: moveF 3s linear infinite;
	}
	.border::after {
		animation: moveF 3s -1.5s linear infinite;
	}
	.border:hover::before {
		display: inline;
		// animation: moveF 2s linear infinite;
	}
	.border:hover::after {
		display: inline;
		// animation: moveF 3s -1.5s linear infinite;
	}
	@keyframes moveF {
		0% {
			 clip-path: inset(0 0 98% 0);
		}
		25% {
			 clip-path: inset(0 0 0 98%);
		}
		50% {
			 clip-path: inset( 98% 0 0);
		}
		75% {
			 clip-path: inset(0 98% 0 0);
		}
		100% {
			 clip-path: inset(0 0 98% 0);
		}
	}
}
</style>
