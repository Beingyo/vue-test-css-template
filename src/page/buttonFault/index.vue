<template>
  <div class="container">
    <button>按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
button, button::after{
  width: 300px;
  height: 86px;
  font-size: 40px;
  background-image: linear-gradient(45deg, #fff  5%, #FF013C 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  line-height: 88px;
  box-shadow: 6px 0px 0px #00E6F6;
  outline: transparent;
  position: relative;
}
button::after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(60% -6px 0 0);
  --slice-2: inset(30% -6px 50% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(30% -6px 20% 10%);
  content: '损坏';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
  text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
  clip-path: var(--slice-0);
}
button:hover::after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}
@keyframes glitch {
  0% { clip-path: var(--slice-1); transform: translate(-20px, -10px); }
  10% { clip-path: var(--slice-3); transform: translate(10px, 10px); }
  20% { clip-path: var(--slice-1); transform: translate(-10px, 10px); }
  30% { clip-path: var(--slice-3); transform: translate(0px, 5px); }
  40% { clip-path: var(--slice-2); transform: translate(-5px, 0px); }
  50% { clip-path: var(--slice-3); transform: translate(5px, 0px); }
  60% { clip-path: var(--slice-4); transform: translate(5px, 10px); }
  70% { clip-path: var(--slice-2); transform: translate(-10px, 10px); }
  80% { clip-path: var(--slice-5); transform: translate(-30px, 10px); }
  90% { clip-path: var(--slice-1); transform: translate(-10px, 0px); }
  100% { clip-path: var(--slice-1); transform: translate(0); }
}
</style>
