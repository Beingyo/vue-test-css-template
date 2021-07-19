<template>
  <div class="container">
    <div class="box">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.box {
  height: 400px;
  width: 700px;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  filter: contrast(20);
  background: #fff; // 关键
}
.box div {
  border-radius: 50%;
  filter: blur(6px);
}
.left {
  width: 100px;
  height: 100px;
  background: #c57d7d;
  animation: move 4s cubic-bezier(.25,.61,.75,.37) infinite alternate;
}
.right {
  width: 130px;
  height: 130px;
  background: #e70505;
  transform: translateX(-200px);
}
@keyframes move {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(300px);
  }
}
</style>
