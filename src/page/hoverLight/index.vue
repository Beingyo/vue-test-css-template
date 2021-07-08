<template>
  <div class="container">
    <div class="text">
      <span style="--delay:1">悬</span>
      <span style="--delay:2">浮</span>
      <span style="--delay:3">发</span>
      <span style="--delay:4">光</span>
      <span style="--delay:5">文</span>
      <span style="--delay:6">字</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$bg: #3c3d46;
$text: #333333;
$hover: #ffffff;
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: $bg;
}
.text{
  font-size: 100px;
  font-weight: 900;
  color: $text;
  cursor: pointer;
}
.text span {
  transition: .5s calc(var(--delay)*.1s);
}
.text:hover span{
  color: $hover;
  text-shadow: 0 0 10px $hover,0 0 20px $hover,0 0 30px $hover,0 0 50px $hover,0 0 80px $hover;
}
</style>
