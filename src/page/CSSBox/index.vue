<template>
  <div class="background">
    <div class="div-box">
      <div class="text-box">
        <div class="title-box">
          <div class="title">
            <p>测试字体</p>
          </div>
        </div>
        <!-- <el-progress
          :percentage="percentage"
          :color="customColors"
        ></el-progress> -->
        <!-- 进度条方向处理颜色渐变问题 -->
        <div class="progress-box">
          <el-progress
            :percentage="percentage"
            :color="customColor"
            :show-text="false"
          />
          <span class="percent">{{ -(percentage - 100) }}%</span>
        </div>
      </div>
      <div>
        <el-button-group>
          <el-button
            size="mini"
            icon="el-icon-minus"
            @click="decrease"
          ></el-button>
          <el-button
            size="mini"
            icon="el-icon-plus"
            @click="increase"
          ></el-button>
        </el-button-group>
      </div>
      <!-- <div class="div-box2">
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "DIVStyle",
  data() {
    return {
      // percentage: 20,
      // customColors: [
      //   { color: "#ff0055", percentage: 33 },
      //   { color: "#0055ff", percentage: 66 },
      //   { color: "#55ff00", percentage: 100 }
      // ],
      percentage: 0,
      customColor: "#409eff"
    };
  },
  created() {
    this.percentage = 10;
    this.percentage = 100 - this.percentage;
  },
  methods: {
    increase() {
      // this.percentage += 10;
      // if (this.percentage > 100) {
      //   this.percentage = 100;
      // }
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    decrease() {
      // this.percentage -= 10;
      // if (this.percentage < 0) {
      //   this.percentage = 0;
      // }
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    }
  }
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}
.background {
  background: url("../../../static/CSSBox.jpg") no-repeat;
  background-size: cover;
  position: absolute;
  background-attachment: fixed;
  padding: 10px;
  margin: -10px;
  width: 1900px;
  height: 920px;
}
.div-box {
  width: 300px;
  height: 200px;
  margin: 0 0 0 100px;
  // transform: translate(400px, 150px);
  border: 1px solid #12407b;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 5px inset #19355f;
  background: rgba(51, 90, 147, 0.2);
}
.div-box2 {
  width: 80px;
  height: 50px;
  margin: 0 0 0 20px;
  border: 1px solid #12407b;
  border-radius: 12px;
  box-shadow: 0px 0px 5px 5px inset #193058;
  background: rgba(40, 70, 114, 0.2);
}
.text-box {
  .title-box {
    padding: 1px;
    clip-path: polygon(49px 0px, 71px 25px, 231px 25px, 252px 0px);
    background: #6b91d3;
    .title {
      clip-path: polygon(50px 0px, 70px 23px, 230px 23px, 250px 0px);
      background-image: linear-gradient(
        to bottom,
        #0a2d58 5%,
        #0349a3,
        #3d74d9
      ) !important;
      p {
        font-size: 14px;
        color: #87cefa;
        padding: 2px 0;
        margin: 0 auto;
        text-shadow: 0px 0px 15px #87cefa;
      }
    }
  }
}
.progress-box {
  margin-top: 40px;
  display: flex;
  .percent {
    width: 50px;
  }
  .el-progress {
    flex: 1;
    transform: rotateY(180deg);
    height: 20px;
    margin: 6px 0 6px 10px;
  }
}
.el-progress-bar__outer {
  background: transparent !important;
  // background-image: linear-gradient(to right, #1663d7, #2f97d4) !important;
  background-image: linear-gradient(to left, #ff0055, #55ff00) !important;
  border-radius: 0;
  width: 100%;
}
.el-progress-bar__inner {
  border-radius: 0;
  background-image: linear-gradient(to left, #1663d7, #2f97d4) !important;
}
.el-progress__text {
  width: 40px;
}
</style>
