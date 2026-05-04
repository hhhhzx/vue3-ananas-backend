import{_ as o,a as u,c as d,d as s,w as t,f as l,b as e,C as r,a4 as c}from"./index-CNxBvTdI.js";const i={class:"vue3-page"},m={class:"card-header"},_={__name:"05-03-suspense",setup(h){return(f,n)=>{const a=l("el-icon"),p=l("el-card");return u(),d("div",i,[s(p,null,{header:t(()=>[e("div",m,[s(a,null,{default:t(()=>[s(r(c))]),_:1}),n[0]||(n[0]=e("span",null,"五、3. Suspense",-1))])]),default:t(()=>[n[1]||(n[1]=e("div",{class:"doc-section"},[e("h2",null,"五、3. Suspense"),e("ul",null,[e("li",null,"Suspense组件，用于处理异步组件加载时的情况")]),e("h3",null,"示例代码"),e("pre",null,[e("code",{class:"language-vue"},`<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template #default>
        <Child />
      </template>
      <template #fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>
<script>
import Child from './components/Child.vue'
export default {
  name: 'App',
  components: { Child }
}
<\/script>

<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <h3>{{sum}}</h3>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Child',
  async setup() {
    let sum = ref(0)
    let p = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000)
    })
    return await p
  }
}
<\/script>`)])],-1))]),_:1})])}}},C=o(_,[["__scopeId","data-v-d1b7903f"]]);export{C as default};
