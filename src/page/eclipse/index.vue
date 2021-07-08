<template>
  <div class="container">
    <div class="eclipse eclipse-before"></div>
    <div class="eclipse eclipse-after"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  /* 天空默认颜色 */
  background: skyblue;
  /* 动画 */
  animation: bgChange 5s linear infinite;
}
.eclipse {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  /* 居中 */
  margin: auto;
}

.eclipse-after {
  animation: eclipse 5s linear infinite;
}

.eclipse-before {
  background: #fff;
  animation: shadow 5s linear infinite;
}

/* 编写动画 */

@keyframes bgChange {
  0%,
  100% {
    background: skyblue;
  }

  45%,
  60% {
    background: #282c34;
  }
}

@keyframes shadow {
  50% {
    box-shadow: 0 0 10px 5px #fff;
  }
}

@keyframes eclipse {
  0% {
    left: 300px;
    background: skyblue;
  }
  45%,
  60% {
    left: 0;
    background: #282c34;
  }
  100% {
    left: -300px;
    background: skyblue;
  }
}
</style>
