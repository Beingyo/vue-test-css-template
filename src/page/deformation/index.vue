<template>
  <div class="container">
    <div class="change"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: inline;
}
.change {
  background-color: grey;
  max-width: 600px;
  height: 400px;
  margin: 0 auto;
  padding: 0;
  animation: auto-transition 2s infinite alternate;
}
@keyframes auto-transition {
  0% {
    clip-path: polygon(
      50px 100px,
      160px 30px,
      160px 90px,
      360px 90px,
      360px 30px,
      470px 100px,
      360px 170px,
      360px 110px,
      160px 110px,
      160px 170px
    );
  }
  100% {
    clip-path: polygon(
      50px 110px,
      50px 90px,
      160px 30px,
      260px 30px,
      400px 90px,
      480px 150px,
      480px 50px,
      400px 110px,
      260px 170px,
      160px 170px
    );
  }
}
</style>
