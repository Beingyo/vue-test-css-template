<template>
	<div class="container">
		<div v-for="(item,index) in  10" :key="index">{{ index }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			styleString: { color: 'orange' },
		}
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
	background: rgb(211, 211, 211);
	flex-direction: column;
}
.test1 {
	color: red;
}
.test2 {
	color: blue;
}
</style>
