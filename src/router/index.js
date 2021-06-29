import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', meta: {title: '首页'}, component: () => import('@/components/index')},

    {path: '/CSSBox', name: 'CSSBox', meta: {title: '样式Box'}, component: () => import('@/page/CSSBox/index')},
    {path: '/buttonFault', name: 'buttonFault', meta: {title: '故障按钮'}, component: () => import('@/page/buttonFault/index')},
    {path: '/neonLight', name: 'neonLight', meta: {title: '霓虹灯'}, component: () => import('@/page/neonLight/index')},
    {path: '/borderIrregular', name: 'borderIrregular', meta: {title: '边框不规则'}, component: () => import('@/page/borderIrregular/index')},
    {path: '/texture', name: 'texture', meta: {title: '质感'}, component: () => import('@/page/texture/index')},

    {path: '/deformation', name: 'deformation', meta: {title: '变形'}, component: () => import('@/page/deformation/index')},
    {path: '/dividingLine', name: 'dividingLine', meta: {title: '分割线'}, component: () => import('@/page/dividingLine/index')},
    {path: '/ghost', name: 'ghost', meta: {title: '幽灵'}, component: () => import('@/page/ghost/index')},
    {path: '/emotion', name: 'emotion', meta: {title: '表情'}, component: () => import('@/page/emotion/index')},
    {path: '/eater', name: 'eater', meta: {title: '吃豆人'}, component: () => import('@/page/eater/index')},

    {path: '/eclipse', name: 'eclipse', meta: {title: '日食'}, component: () => import('@/page/eclipse/index')},
    {path: '/weather', name: 'weather', meta: {title: '天气'}, component: () => import('@/page/weather/index')},
    {path: '/gradual', name: 'gradual', meta: {title: '渐进入场'}, component: () => import('@/page/gradual/index')},
    {path: '/stereoText', name: 'stereoText', meta: {title: '立体文字'}, component: () => import('@/page/stereoText/index')},
    {path: '/fuse', name: 'fuse', meta: {title: '融合'}, component: () => import('@/page/fuse/index')},

    {path: '/glass', name: 'glass', meta: {title: '毛玻璃'}, component: () => import('@/page/glass/index')},
    {path: '/dayAndNight', name: 'dayAndNight', meta: {title: '昼夜'}, component: () => import('@/page/dayAndNight/index')},
    {path: '/magnifier', name: 'magnifier', meta: {title: '放大镜'}, component: () => import('@/page/magnifier/index')},
    {path: '/borderRotate', name: 'borderRotate', meta: {title: '边框转动'}, component: () => import('@/page/borderRotate/index')},
    // {path: '/ghost', name: 'ghost', meta: {title: '幽灵'}, component: () => import('@/page/ghost/index')},

    // {path: '/glass', name: 'glass', meta: {title: '毛玻璃'}, component: () => import('@/page/glass/index')},
    // {path: '/dayAndNight', name: 'dayAndNight', meta: {title: '昼夜'}, component: () => import('@/page/dayAndNight/index')},
    // {path: '/magnifier', name: 'magnifier', meta: {title: '放大镜'}, component: () => import('@/page/magnifier/index')},
    // {path: '/stereoText', name: 'stereoText', meta: {title: '立体文字'}, component: () => import('@/page/stereoText/index')},
    // {path: '/ghost', name: 'ghost', meta: {title: '幽灵'}, component: () => import('@/page/ghost/index')},

    {path: '/test', name: 'test', meta: {title: '测试'}, component: () => import('@/page/test/index')},

  ]
})