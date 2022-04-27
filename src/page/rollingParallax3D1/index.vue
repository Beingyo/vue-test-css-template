<template>
  <div class="container">
    <div class="box">
		<div style="transform-style: preserve-3d;" v-for="(item, index) in 10" :key="index">
			<div class="box-front">{{msg[index].split(',')[0]}}</div>
			<div class="box-behind">{{msg[index].split(',')[1]}}</div>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: [
        "Lorem,ipsum",
        "dolor,sit",
        "amet,consectetur",
        "adipisicing,elit",
        "Ullam,quo",
        "ab,aliquam",
        "at,officia",
        "quaerat,architecto",
        "voluptatem,soluta",
        "Magni,voluptatibus"
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  background-color: #dddddd;
  padding: 120px 100px;
  width: 500px;
  overflow: auto;
  height: 60vh;
  perspective: 400px;
  --height: 100px;
  .box-front,
  .box-behind {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 100px;
    margin: 0 auto;
    padding: 20px;
    background-color: #aaa;
    transform-style: preserve-3d;
    &::before,
    &::after {
      transform-style: preserve-3d;
    }
  }
  .box-front {
    position: relative;
    z-index: 1;
    transform: translate3d(0, 0, var(--height));
    background-color: #f1f1f1;
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      left: 0;
      height: var(--height);
      background-color: #ccc;
      backface-visibility: visible;
    }
    &::before {
      transform-origin: top center;
      top: 0;
      transform: rotateX(-90deg);
    }
    &::after {
      transform-origin: bottom center;
      bottom: 0;
      transform: rotateX(90deg);
    }
  }
}
</style>
