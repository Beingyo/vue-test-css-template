<template>
  <div class="container">
    <div class="box" @mousemove="move" @mouseleave="leave">
      <div class="box-content" ref="rotate"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      divisor: 10
    };
  },
  methods: {
    move(e) {
				const mouseX = (e.clientX - this.$refs.rotate.offsetLeft - this.$refs.rotate.clientWidth / 2) / this.divisor
				const mouseY = -(e.clientY - this.$refs.rotate.offsetTop - this.$refs.rotate.clientHeight / 2) / this.divisor
        this.$refs.rotate.style.transform = `rotateX(${mouseY}deg) rotateY(${mouseX}deg)`
    },
    leave() {
      this.$refs.rotate.style.transform = `rotateX(0deg) rotateY(0deg)`
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 500px;
}

.box {
  padding: 200px;
  border: 2px solid grey;
}

.box-content {
  width: 200px;
  height: 200px;
  background: lightpink;
  transform-style: preserve-3d;
	transition: 0.1s;
  box-shadow: 0px 0px 10px 0px #49515a;
}

</style>
