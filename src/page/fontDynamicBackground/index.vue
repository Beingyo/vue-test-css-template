<template>
	<div class="container">
		<div class="box">
			<p>文字</p>
			<div class="text"><p>{{ text }}</p></div>
		</div>
		<div class="box">
			<p>gif动图</p>
			<div class="gif"></div>
		</div>
		<div class="box">
			<p>background-clip: text</p>
			<div class="text gif clip"><p>{{ text }}</p></div>
		</div>
		<div class="box">
			<p>filter: grayscale(1)灰白处理</p>
			<div class="gif filter-grayscale"></div>
		</div>
		<div class="box black">
			<p>mix-blend-mode: hard-light混合模式(黑色背景)</p>
			<div class="black">
				<div class="text gif clip filter-grayscale mix"><p>{{ text }}</p></div>
			</div>
		</div>
		<div class="box black">
			<p>filter: invert(1)反转黑白值</p>
			<div class="black">
				<div class="text gif clip filter-invert mix"><p>{{ text }}</p></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: "We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching but you're too shy to say it Inside we both know what's been going on We know the game and we're gonna play it And if you ask me how I'm feeling Don't tell me you're too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and"
		}
	},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	// align-items: center;
	// justify-content: center;
}
.box {
	width: 400px;
	height: 330px;
	margin: 20px;
	overflow: hidden;
	.text {
		-webkit-background-clip: text;
		background-clip: text;
		font-size: 15px;
		text-align: justify;
		font-weight: bold;
		font-family: sans-serif;
		word-spacing: 0px;
		letter-spacing: -1px;
		overflow: hidden;
	}
	P{
		margin: 0;
	}
	.gif {
		width: 400px;
		height: 330px;
		background: url(../../assets/fontDynamicBackground.gif) no-repeat;
	}
	.clip {
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
	}
	.filter-grayscale {
		filter: grayscale(1);
	}
	.mix {
		mix-blend-mode: hard-light;
	}
	.filter-invert {
		filter: grayscale(1) invert(1);
	}
	.black {
		background-color: #000000;
	}
}
</style>
