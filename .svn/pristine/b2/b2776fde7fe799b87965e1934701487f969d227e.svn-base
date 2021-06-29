<template>
  <div class="container" ref="container">
    <div class="button-box">
      <el-button size="mini" @click="change('summy', 'rain', 'normal')"
        >晴天</el-button
      ><el-button size="mini" @click="change('rain', 'summy', 'normal')"
        >雨天</el-button
      >
    </div>
    <div class="water" ref="water"></div>
    <div class="cloud normal" ref="cloud"></div>
  </div>
</template>

<script>
export default {
  methods: {
    change(add, remove) {
      this.$refs.container.classList.add(add);
      this.$refs.container.classList.remove(remove);
      this.$refs.cloud.classList.add(add);
      this.$refs.cloud.classList.remove(remove);
      if (add == "summy") {
        this.$refs.water.style.display = "none";
      } else {
        this.$refs.water.style.display = "inline";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$white: #fff;
$grey: #aaa;
$sky: rgba(20, 107, 287, 0.8);

.container {
  width: 100%;
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $sky;
}
// 晴天背景
.container.summy {
  animation: bgSummy 1s ease-in 1 normal;
  animation-fill-mode: forwards;
}
@keyframes bgSummy {
  0% {
    background: $white;
  }
  100% {
    background: $sky;
  }
}
// 雨天背景
.container.rain {
  animation: bgRain 1s ease-in 1 normal;
  animation-fill-mode: forwards;
}
@keyframes bgRain {
  0% {
    background: $sky;
  }
  100% {
    background: $white;
  }
}
// 按钮
.button-box {
  position: absolute;
  top: 100px;
}
// 云
.cloud {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
}
.cloud.normal {
  background: $white;
  box-shadow: 23px 20px 0 $white, 80px 15px 0 $white, 30px -30px 0 $white,
    80px -35px 0 $white, 120px -5px 0 $white;
  transform: translate(-25px, -25px);
  animation: summy 2s linear 1s infinite alternate;
}
// 晴天云
.cloud.summy {
  transform: translate(-25px, -25px);
  animation: toSummy 1s linear 1 normal, summy 2s linear 1s infinite alternate;
  animation-fill-mode: forwards;
}
@keyframes toSummy {
  0% {
    background: $grey;
    box-shadow: 23px 20px 0 $grey, 80px 15px 0 $grey, 30px -30px 0 $grey,
      80px -35px 0 $grey, 120px -5px 0 $grey;
  }
  100% {
    background: $white;
    box-shadow: 23px 20px 0 $white, 80px 15px 0 $white,
      30px -30px 0 $white, 80px -35px 0 $white, 120px -5px 0 $white;
  }
}
@keyframes summy {
  100% {
    transform: translate(-105px, -25px);
  }
}
// 雨天云
.cloud.rain {
  transform: translate(-50px, -20px);
  animation: toRain 1s linear 1 normal, rain 1s linear 1s infinite alternate;
  animation-fill-mode: forwards;
}
@keyframes toRain {
  0% {
    background: $white;
    box-shadow: 23px 20px 0 $white, 80px 15px 0 $white,
      30px -30px 0 $white, 80px -35px 0 $white, 120px -5px 0 $white;
  }
  100% {
    transform: translate(-50px, -25px);
    background: $grey;
    box-shadow: 23px 20px 0 $grey, 80px 15px 0 $grey, 30px -30px 0 $grey,
      80px -35px 0 $grey, 120px -5px 0 $grey;
  }
}
@keyframes rain {
  100% {
    transform: translate(-50px, -20px);
  }
}
// 雨滴
.water {
  width: 3px;
  height: 6px;
  display: none;
  background: $grey;
  position: absolute;
  transform: translate(-40px, 0px) rotate(-20deg);
  box-shadow: -25px -10px 0 $grey, 23px 15px 0 $grey, 50px 5px 0 $grey,
    80px 20px 0 $grey, 110px 30px 0 $grey;
  animation: fall 1s linear 0.5s infinite normal;
}
@keyframes fall {
  100% {
    transform: translate(-20px, 130px) rotate(-20deg);
  }
}
</style>
