<template>
  <div class="container">
    <!--创建盒子-->
    <div class="box">
      <!--创建按钮-->
      <div class="buttons">
        <button class="happy-btn" @click="change('happy', 'angry', 'normal')">:)</button>
        <button class="normal-btn" @click="change('normal', 'happy', 'angry')">:|</button>
        <button class="angry-btn" @click="change('angry', 'happy', 'normal')">:(</button>
      </div>

      <!--创建主体-->
      <div class="smiley" ref="smiley">
        <!--眼睛-->
        <div class="eyes">
          <div class="eye"></div>
          <div class="eye"></div>
        </div>
        <!--嘴巴-->
        <div class="mouth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  methods: {
    change(add, remove1, remove2) {
      this.$refs.smiley.classList.add(add);
      this.$refs.smiley.classList.remove(remove1);
      this.$refs.smiley.classList.remove(remove2);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}
/*外框盒子*/
.box {
  width: 500px;
  height: 500px;
  position: relative;
}

/*点击按钮框*/
.buttons {
  width: 100%;
  text-align: center;
}

/*点击按钮*/
.buttons button {
  /*糖按钮转正*/
  transform: rotate(90deg);
  background: #ffcd00;
  border: 0;
  color: #b57700;
  padding: 15px;
  font-size: 23px;
  margin: 30px 10px;
  border-radius: 5px;
}

/*表情*/
.smiley {
  background: linear-gradient(135deg, rgb(255, 233, 25), rgb(251, 192, 0));
  border-radius: 100%;
  padding: 25px;
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(211, 165, 110, 0.5) 0 20px 30px,
    rgb(245, 245, 245) 0 20px 10px;
}

/*嘴巴*/
.mouth {
  width: 60%;
  height: 30%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  box-sizing: border-box;
  position: absolute;
  bottom: 18%;
  left: 50%;
  margin-left: -30%;
  background: #b57700;
  transition: all 300ms ease-in-out;
}

/*眼睛外框*/
.eyes {
  width: 100%;
  margin-top: 15%;
  box-sizing: border-box;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 300ms ease-in-out;
}

/*创建眼睛*/
.eyes .eye {
  width: 20px;
  height: 20px;
  background: #b57700;
  border-radius: 100%;
  position: relative;
}

.eyes .eye::after {
  content: "";
  display: block;
  position: absolute;
  background: #fed800;
  transform: rotate(0deg);
  top: -15px;
  left: 5px;
  transition: all 300ms ease-in-out;
}

/* 默认动画  normal */

/*先去搞个js 先*/

/*来做切换效果 */
.smiley.normal .mouth {
  border-radius: 100px;
  height: 10%;
  width: 40%;
  bottom: 25%;
  margin-left: -20%;
}

.smiley.normal .eyes {
  margin-top: 30%;
}

/* angry 动画*/

.smiley.angry .mouth {
  width: 40%;
  height: 20%;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  bottom: 18%;
  left: 50%;
  margin-left: -20%;
}

.smiley.angry .eyes {
  margin-top: 35%;
}

.smiley.angry .eye:after {
  width: 120%;
  height: 50%;
  transform: rotate(-35deg);
  top: -3px;
  left: -5px;
  border-radius: 0;
}

.smiley.angry .eye:first-of-type::after {
  transform: rotate(35deg);
  left: auto;
  right: -5px;
}

/*开心状态 */
.smiley.happy .mouth,
.smiley.happy .eyes {
  animation: move-mouth-down 0.8s ease-in-out 0.3s;
}

.smiley.happy .eye:nth-of-type(2) {
  height: 20px;
  margin-top: 0;
  animation: wink 0.8s ease-in-out 0.3s;
}

/* 默认  normal*/
.smiley.normal .eye {
  height: 20px;
  margin-top: 0;
  animation: blink 0.8s ease-in-out 0.3s;
}

.smiley.angry .eyes,
.small.angry .mouth {
  animation: move-angry-head 0.6s ease-in-out 0.3s;
}

/*注入灵魂*/

@keyframes move-mouth-down {
  0% {
    bottom: 18%;
  }
  35% {
    bottom: 16%;
  }
  65% {
    bottom: 16%;
  }
  100% {
    bottom: 18%;
  }
}

@keyframes move-eyes-down {
  0% {
    margin-top: 15%;
  }
  35% {
    margin-top: 19%;
  }
  65% {
    margin-top: 19%;
  }
  100% {
    margin-top: 15%;
  }
}

/*女神必备技能 */
@keyframes wink {
  0% {
    height: 20px;
    margin-top: 0;
  }
  30% {
    height: 3px;
    margin-top: 8px;
  }
  70% {
    height: 3px;
    margin-top: 8px;
  }
  100% {
    height: 20px;
    margin-top: 0;
  }
}

/*眨眼技能  布灵布灵*/
@keyframes blink {
  0% {
    height: 20px;
    margin-top: 0;
  }
  25% {
    height: 2px;
    margin-top: 8px;
  }
  50% {
    height: 20px;
    margin-top: 0;
  }
  75% {
    height: 2px;
    margin-top: 8px;
  }
  100% {
    height: 20px;
    margin-top: 0;
  }
}

@keyframes move-angry-head {
  0% {
    transform: translateX(0%);
  }
  20% {
    transform: translateX(-20%);
  }
  40% {
    transform: translateX(15%);
  }
  60% {
    transform: translateX(-10%);
  }
  80% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
