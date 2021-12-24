<template>
  <div class="container">
    <div>
      <p class="cyberpunk">
        经典的赛博朋克角色是边缘且性格疏远的独行者。他们生活在社会群体的边缘，一个弥漫反乌托邦氛围的未来：日常生活受到急剧改变的科技影响，普及的计算机化信息笼罩全球，以及侵入性的人体改造。
      </p>
      <p class="cyberpunk inverse">
        经典的赛博朋克角色是边缘且性格疏远的独行者。他们生活在社会群体的边缘，一个弥漫反乌托邦氛围的未来：日常生活受到急剧改变的科技影响，普及的计算机化信息笼罩全球，以及侵入性的人体改造。
      </p>
      <p class="cyberpunk inverse dotted">
        经典的赛博朋克角色是边缘且性格疏远的独行者。他们生活在社会群体的边缘，一个弥漫反乌托邦氛围的未来：日常生活受到急剧改变的科技影响，普及的计算机化信息笼罩全球，以及侵入性的人体改造。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$yellow_color: #f9f002;
$border_color: #8ae66e;
.container {
  display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.cyberpunk {
  padding: 5px;
  position: relative;
  font-size: 1.2rem;
  color: $yellow_color;
  border: 30px solid $yellow_color;
  border-right: 5px solid $yellow_color;
  border-left: 5px solid $yellow_color;
  border-bottom: 24px solid $yellow_color;
  background-color: #000;
  clip-path: polygon(0px 25px, 26px 0px, calc(60% - 25px) 0px, 60% 25px, 100% 25px, 100% calc(100% - 10px), calc(100% - 15px) calc(100% - 10px), calc(80% - 10px) calc(100% - 10px), calc(80% - 15px) 100%, 80px calc(100% - 0px), 65px calc(100% - 15px), 0% calc(100% - 15px));
}
.cyberpunk.inverse {
  border: none;
  padding: 40px 15px 30px;
  color: #000;
  background-color: $yellow_color;
  border-right: 2px solid $border_color;
}
.dotted, .dotted:before, .dotted:after {
  background: $yellow_color;
  background-image: radial-gradient(#00000021 1px, transparent 0);
  background-size: 5px 5px;
  background-position: -13px -3px;
}
/* 文本框右侧小编号样式 */
.cyberpunk:before {
  content: "P-14";
  display: block;
  position: absolute;
  bottom: -12px;
  right: 25px;
  padding: 2px 2px 0px 2px;
  font-size: 0.6rem;
  line-height: 0.6rem;
  color: #000;
  background-color: $yellow_color;
  border-left: 2px solid $border_color;
}
.cyberpunk.inverse:before {
  content: "T-71";
  right: 90px;
  bottom: 9px;
}
.cyberpunk.inverse:before, .cyberpunk:before {
  background-color: #000;
  color: $yellow_color;
}
</style>
