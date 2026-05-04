import{_ as a,a as r,c as u,d as o,w as t,f as s,b as n,C as p,a4 as c}from"./index-B7M6RjQb.js";const m={class:"vue3-page"},d={class:"card-header"},v={__name:"02-11-custom-hook",setup(f){return(_,e)=>{const i=s("el-icon"),l=s("el-card");return r(),u("div",m,[o(l,null,{header:t(()=>[n("div",d,[o(i,null,{default:t(()=>[o(p(c))]),_:1}),e[0]||(e[0]=n("span",null,"二、11. 自定义hook函数",-1))])]),default:t(()=>[e[1]||(e[1]=n("div",{class:"doc-section"},[n("h2",null,"二、11. 自定义hook函数"),n("ul",null,[n("li",null,"什么是hook？——本质是一个函数，把setup函数中使用的Composition API进行了封装"),n("li",null,"类似于vue2.x中的mixin"),n("li",null,"自定义hook的优势：复用代码，让setup中的逻辑更清楚易懂")]),n("h3",null,"示例代码"),n("pre",null,[n("code",{class:"language-vue"},`<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo" />
</template>
<script>
import { ref } from 'vue'
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    let isShowDemo = ref(true)
    return { isShowDemo }
  }
}
<\/script>

<template>
  <h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
</template>
<script>
import { reactive } from 'vue'
import usePoint from '../hooks/usePoint.js'
export default {
  name: 'Demo',
  setup() {
    let point = usePoint()
    return { point }
  }
}
<\/script>

import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
  let point = reactive({
    x: 0,
    y: 0
  })
  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(event.pageX, event.pageY)
  }
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })
  return point
}`)])],-1))]),_:1})])}}},x=a(v,[["__scopeId","data-v-dbdfb515"]]);export{x as default};
