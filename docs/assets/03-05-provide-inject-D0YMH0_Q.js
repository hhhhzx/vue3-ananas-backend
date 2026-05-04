import{_ as o,a as i,c as p,d as t,w as l,f as r,b as n,j as s,C as d,a4 as u}from"./index-CNxBvTdI.js";const m={class:"vue3-page"},v={class:"card-header"},_={__name:"03-05-provide-inject",setup(f){return(h,e)=>{const a=r("el-icon"),c=r("el-card");return i(),p("div",m,[t(c,null,{header:l(()=>[n("div",v,[t(a,null,{default:l(()=>[t(d(u))]),_:1}),e[0]||(e[0]=n("span",null,"三、5. provide与inject",-1))])]),default:l(()=>[e[1]||(e[1]=n("div",{class:"doc-section"},[n("h2",null,"三、5. provide与inject"),n("ul",null,[n("li",null,"作用：实现祖与后代组件间通信"),n("li",null,"套路：父组件有一个provide选项来提供数据，后代组件有一个inject选项来开始使用这些数据"),n("li",null,[s("具体写法： "),n("ul",null,[n("li",null,"祖组件中：provide('car', car)"),n("li",null,"后代组件中：const car = inject('car')")])])]),n("h3",null,"示例代码"),n("pre",null,[n("code",{class:"language-vue"},`<template>
  <div class="app">
    <h3>我是App组件(祖)，{{name}}，{{price}}</h3>
    <button @click="name += '~'">修改name</button>
    <button @click="price++">修改price</button>
    <Child />
  </div>
</template>
<script>
import { ref, provide, reactive } from 'vue'
import Child from './components/Child.vue'
export default {
  name: 'App',
  components: { Child },
  setup() {
    let name = ref('奔驰')
    let price = ref('40w')
    let car = reactive({ name, price })
    provide('car', car)
    return {
      name,
      price
    }
  }
}
<\/script>

<template>
  <div class="child">
    <h3>我是Child组件(子)，{{car.name}}，{{car.price}}</h3>
    <Son />
  </div>
</template>
<script>
import { inject } from 'vue'
import Son from './Son.vue'
export default {
  name: 'Child',
  components: { Son },
  setup() {
    let car = inject('car')
    return { car }
  }
}
<\/script>`)])],-1))]),_:1})])}}},C=o(_,[["__scopeId","data-v-2a92457d"]]);export{C as default};
