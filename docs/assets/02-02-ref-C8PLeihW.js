import{_ as c,a as u,c as d,d as a,w as t,f as o,b as e,j as n,C as f,a4 as p}from"./index-CNxBvTdI.js";const i={class:"vue3-page"},_={class:"card-header"},h={__name:"02-02-ref",setup(m){return(x,l)=>{const s=o("el-icon"),r=o("el-card");return u(),d("div",i,[a(r,null,{header:t(()=>[e("div",_,[a(s,null,{default:t(()=>[a(f(p))]),_:1}),l[0]||(l[0]=e("span",null,"二、2. ref函数",-1))])]),default:t(()=>[l[1]||(l[1]=e("div",{class:"doc-section"},[e("h2",null,"二、2. ref函数"),e("ul",null,[e("li",null,"作用：定义一个响应式的数据"),e("li",null,[n(" 语法："),e("code",null,"const xxx = ref(initValue)"),e("ul",null,[e("li",null,[n("创建一个包含响应式数据的"),e("strong",{style:{color:"#DD5145"}},"引用对象（reference对象，简称ref对象）"),n("。")]),e("li",null,[n("JS中操作数据："),e("code",null,"xxx.value")]),e("li",null,[n("模板中读取数据：不需要.value，直接："),e("code",null,"{{xxx}}")])])])]),e("h3",null,"示例代码"),e("pre",null,[e("code",{class:"language-vue"},`<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30K'
    })
    function changeInfo(){
      console.log(job.value)
    }
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},v=c(h,[["__scopeId","data-v-4d2e46dc"]]);export{v as default};
