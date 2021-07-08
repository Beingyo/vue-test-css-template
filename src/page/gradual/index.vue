<template>
  <div class="container">
    <div class="item yellow">
      <p>CSS&emsp;&emsp;&emsp;&emsp;<br>&emsp;&emsp;&emsp;&emsp;渐进式进场</p>
    </div>
    <div class="item blue">
      <p>CSS&emsp;&emsp;&emsp;&emsp;<br>&emsp;&emsp;&emsp;&emsp;渐进式进场</p>
    </div>
    <div class="item green">
      <p>CSS&emsp;&emsp;&emsp;&emsp;<br>&emsp;&emsp;&emsp;&emsp;渐进式进场</p>
    </div>
    <div class="item red">
      <p>CSS&emsp;&emsp;&emsp;&emsp;<br>&emsp;&emsp;&emsp;&emsp;渐进式进场</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
$yellow: #9c9c47;
$blue: #47509c;
$green: #479c59;
$red: #99479c;
$speed: cubic-bezier(.27,1,.36,1);
.container {
  position: relative;
  height: 100vh;
}
.item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 66px;
  font-style: italic;
  color: #ffffff;
  transform: translateX(-100%);
}
.item p {
  transform: translateX(-190%);
}

.yellow {
  background: $yellow;
  animation: bg 0.3s $speed forwards;
}

.yellow p {
  animation: text 3s $speed 0.3s forwards;
}

.blue {
  background: $blue;
  clip:rect(0px,65vw,100vh,0px);
  animation: bg 2.4s $speed 0.6s forwards;
}

.blue p {
  animation: text 3s $speed 0.6s forwards;
}

.green {
  background: $green;
  clip:rect(0px,55vw,100vh,0px);
  animation: bg 2.1s $speed 0.9s forwards;
}

.green p {
  animation: text 3s $speed 0.9s forwards;
}

.red {
  background: $red;
  clip:rect(0px,40vw,100vh,0px);
  animation: bg 1.8s $speed 1.2s forwards;
}

.red p {
  animation: text 3s $speed 1.2s forwards;
}

@keyframes bg {
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0px);
  }
}
@keyframes text {
  0%{
    transform: translateX(-190%);
  }
  100%{
    transform: translateX(0px);
  }
}
</style>
