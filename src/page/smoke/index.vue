<template>
  <div class="container">
    <div class="cssSmoke">
      <span style="--delay: 1">C</span>
      <span style="--delay: 2">S</span>
      <span style="--delay: 3">S</span>
      <span style="--delay: 4">&nbsp;</span>
      <span style="--delay: 5">S</span>
      <span style="--delay: 6">M</span>
      <span style="--delay: 7">O</span>
      <span style="--delay: 8">K</span>
      <span style="--delay: 9">Y</span>
    </div>
    <div class="svgSmoke">
      <div class="text">
        HOVER SMOKY
      </div>
    </div>
    <svg width="0">
      <filter id="filter">
        <feTurbulence id="turbulence" type="fractalNoise" baseFrequency=".03" numOctaves="20" />
        <feDisplacementMap id="displacement" in="SourceGraphic" scale="20" />
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    setTimeout(() => {
      this.SVGMove()
    }, 0);
  },
  methods: {
    SVGMove() {
      const filter = document.querySelector("#turbulence");
      const displacement = document.querySelector("#displacement");

      var frames = 1;
      var rad = Math.PI / 180;
      var bfx, bfy;

      function freqAnimation() {
        frames += .2

        if(frames <= 60) {
          displacement.setAttributeNS(null, 'scale', frames);
        }

        bfx = 0.03;
        bfy = 0.03;

        bfx += 0.005 * Math.cos(frames * rad);
        bfy += 0.005 * Math.sin(frames * rad);

        let bf = bfx.toString() + " " + bfy.toString();
        filter.setAttributeNS(null, "baseFrequency", bf);

        window.requestAnimationFrame(freqAnimation);
      }

      window.requestAnimationFrame(freqAnimation);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
	height: 100vh;
	display: flex;
  flex-flow: column;
	align-items: center;
	justify-content: center;
	background: #000;
}
.cssSmoke {
  margin-top: 70px;
  span{
    color: #fff;
    font-size: 60px;
    display: inline-block;
    text-shadow: 0 0 0px whitesmoke;
    animation: somky 5s infinite;
    animation-delay: calc((2 + var(--delay) / 10) * 1s);
  }

  @keyframes somky {
    60% {
      color: transparent;
      text-shadow:
        0 0 10px whitesmoke,
        0 0 20px whitesmoke,
        0 0 30px whitesmoke,
        0 0 40px whitesmoke,
        0 0 50px whitesmoke,
        0 0 60px whitesmoke;
    }
    to {
      opacity: 0;
      text-shadow: 0 0 20px whitesmoke;
      transform:
        translate3d(18rem,-8rem, 0)
        rotate(-40deg)
        skewX(70deg)
        scale(1.3);
    }
  }

  span:nth-child(even){
    animation-name: smoky-mirror;
  }

  @keyframes smoky-mirror {
    60% {
      color: transparent;
      text-shadow:
        0 0 10px whitesmoke,
        0 0 20px whitesmoke,
        0 0 30px whitesmoke,
        0 0 40px whitesmoke,
        0 0 50px whitesmoke,
        0 0 60px whitesmoke;
    }
    to {
      transform:
        translate3d(18rem,-8rem,0)
        rotate(-40deg)
        skewX(-70deg)
        scale(1.6);
      text-shadow: 0 0 40px whitesmoke;
      opacity: 0;
    }
  }
}

.svgSmoke {
  margin-top: 70px;
  &:hover {
    filter: url('#filter');
    cursor: pointer;
    .text {
      filter: blur(5px);
    }
  }
  .text {
    font-size: 60px;
    color: transparent;
    background: linear-gradient(#fff, #999, #ddd, #888);
    background-clip: text;
    -webkit-background-clip: text;
  }
}

</style>