import{_ as a,a as d,c as m,d as o,w as t,f as l,b as n,j as u,C as c,a4 as p}from"./index-B7M6RjQb.js";const i={class:"vue3-page"},f={class:"card-header"},_={__name:"02-10-lifecycle",setup(U){return(B,e)=>{const s=l("el-icon"),r=l("el-card");return d(),m("div",i,[o(r,null,{header:t(()=>[n("div",f,[o(s,null,{default:t(()=>[o(c(p))]),_:1}),e[0]||(e[0]=n("span",null,"二、10. 生命周期",-1))])]),default:t(()=>[e[1]||(e[1]=n("div",{class:"doc-section"},[n("h2",null,"二、10. 生命周期"),n("ul",null,[n("li",null,[u("Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名： "),n("ul",null,[n("li",null,"beforeDestroy改名为beforeUnmount"),n("li",null,"destroyed改名为unmounted")])]),n("li",null,[u("Vue3.0也提供了Composition API形式的生命周期钩子，与Vue2.x中钩子对应关系如下： "),n("ul",null,[n("li",null,"beforeCreate ===> setup()"),n("li",null,"created ===> setup()"),n("li",null,"beforeMount ===> onBeforeMount"),n("li",null,"mounted ===> onMounted"),n("li",null,"beforeUpdate ===> onBeforeUpdate"),n("li",null,"updated ===> onUpdated"),n("li",null,"beforeUnmount ===> onBeforeUnmount"),n("li",null,"unmounted ===> onUnmounted")])])]),n("h3",null,"示例代码"),n("pre",null,[n("code",{class:"language-vue"},`<template>
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
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
</template>
<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

export default {
  name: 'Demo',
  setup() {
    console.log('---setup---')
    let sum = ref(0)
    
    onBeforeMount(() => {
      console.log('---onBeforeMount---')
    })
    onMounted(() => {
      console.log('---onMounted---')
    })
    onBeforeUpdate(() => {
      console.log('---onBeforeUpdate---')
    })
    onUpdated(() => {
      console.log('---onUpdated---')
    })
    onBeforeUnmount(() => {
      console.log('---onBeforeUnmount---')
    })
    onUnmounted(() => {
      console.log('---onUnmounted---')
    })
    
    return { sum }
  }
}
<\/script>`)])],-1))]),_:1})])}}},g=a(_,[["__scopeId","data-v-50ee30a5"]]);export{g as default};
