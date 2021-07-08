<template>
  <div class="container" @mousemove="mouseMove" @mouseup="mouseUp">
    <div class="box" ref="box">
      <div class="day" ref="day">
        <img :src="day" height="100%" alt="" />
      </div>
      <div class="night">
        <img :src="night" height="100%" alt="" />
      </div>
      <div
        class="move" ref="move" @mousedown="mouseDown" @mouseup="mouseUp">
        <div class="arrow">
          ◀ ▶
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: require("@/assets/day.png"),
      night: require("@/assets/night.png"),
      mouseWidth: '',
      moveWidth: '',
      isDown: false
    };
  },
  methods: {
    mouseDown(e) {
      this.mouseWidth = e.clientX;
      this.moveWidth = this.$refs.move.offsetLeft;
      this.isDown = true;
    },
    mouseMove(e) {
      if (!this.isDown) return;
      let newMouseWidth = e.clientX;
      var width = this.moveWidth + (newMouseWidth - this.mouseWidth)
      if(width <= 0) {
        width = 0
      } else if(width >= this.$refs.box.clientWidth) {
        width = this.$refs.box.clientWidth - 4
      }
      this.$refs.move.style.left = width + 'px'
      this.$refs.day.style.width = width + 'px'
    },
    mouseUp() {
      this.isDown = false;
    }
  }
};
</script>

<style lang="scss" scoped>
$day_width: 100px;
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.box {
  width: 977px;
  height: 550px;
  // border: 1px solid #000;
  position: relative;
}
.day {
  height: 100%;
  width: $day_width;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  overflow: hidden;
}
.night {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.move {
  width: 4px;
  height: 100%;
  position: relative;
  top: 0;
  left: $day_width - 2px;
  background: #32b848;
  z-index: 3;
}
.arrow {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #32b848;
  position: relative;
  top: calc(50% - 30px);
  left: -30px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
}
</style>
