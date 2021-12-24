<template>
  <div class="container">
    <div class="neon">
      neon light
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.neon {
  font-size: 50px;
  text-shadow: 0 0 3vw #F4BD0A;
  animation: neon 2s ease-in-out infinite;
}
@keyframes neon {
  0%, 100% {
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 5vw #FA1C16, 0 0 5vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FFFC00;
  }
  50% {
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 3vw #800E0B, 0 0 3vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #e7bf2f;
  }
}
</style>
