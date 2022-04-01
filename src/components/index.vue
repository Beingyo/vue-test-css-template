<template>
  <div style="overflow-x: hidden;">
    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="CSSBox" @click="routeLink">样式Box</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="buttonFault" @click="routeLink">故障按钮</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="neonLight" @click="routeLink">霓虹灯</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="borderIrregular" @click="routeLink">边框不规则</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="texture" @click="routeLink">质感</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="deformation" @click="routeLink">变形</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="dividingLine" @click="routeLink">分割线</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="ghost" @click="routeLink">幽灵</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="emotion" @click="routeLink">表情</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="eater" @click="routeLink">吃豆人</span></div></el-col>
    </el-row>

  <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="eclipse" @click="routeLink">日食</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="weather" @click="routeLink">天气</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="gradual" @click="routeLink">渐进入场</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="solidText" @click="routeLink">立体文字</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="fuse" @click="routeLink">融合</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="glass" @click="routeLink">毛玻璃</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="dayAndNight" @click="routeLink">昼夜</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="magnifier" @click="routeLink">放大镜</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="borderRotate" @click="routeLink">边框转动</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="hoverLight" @click="routeLink">悬浮发光</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="split" @click="routeLink">分裂</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="book" @click="routeLink">翻页</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="tunnel" @click="routeLink">隧道</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="card" @click="routeLink">卡片</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="mouse" @click="routeLink">鼠标跟踪</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="scroll" @click="routeLink">滚动视差</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="rotate" @click="routeLink">绕点旋转</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="carouselFilp" @click="routeLink">图片翻面</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="spotlight" @click="routeLink">聚光灯</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="block" @click="routeLink">方块</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="borderSVG" @click="routeLink">SVG边框动画</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="borderAnimation" @click="routeLink">边框动画</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="snows" @click="routeLink">雪地</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="reflection" @click="routeLink">倒影</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="clipBox" @click="routeLink">裁剪Box</span></div></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="smoke" @click="routeLink">烟雾</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="fontFitBackground" @click="routeLink">字体适配背景色</span></div></el-col>
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="snows" @click="routeLink">雪地</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="reflection" @click="routeLink">倒影</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="clipBox" @click="routeLink">裁剪Box</span></div></el-col> -->
    </el-row>

    <el-row :gutter="10">
      <el-col :span="3" :offset="2"><div class="grid-content bg-purple"><span id="test" @click="routeLink">测试</span></div></el-col>
      <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="testBox" @click="routeLink">测试Box</span></div></el-col>
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="" @click="routeLink">0</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="" @click="routeLink">0</span></div></el-col> -->
      <!-- <el-col :span="3" :offset="1"><div class="grid-content bg-purple"><span id="" @click="routeLink">0</span></div></el-col> -->
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    routeLink(e) {
      console.log(e.currentTarget.id)
      this.$router.push({path:'/' + e.currentTarget.id})
    }
  }
}
</script>

<style lang="scss" scoped>
  span {
    line-height: 36px;
    cursor:pointer;
    color: #3a97fa;
  }
.el-row {
  margin: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #eaf0f5;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
