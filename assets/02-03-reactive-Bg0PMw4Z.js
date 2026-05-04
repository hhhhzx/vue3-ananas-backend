import{_ as c,a as p,c as u,d as a,w as t,f as s,b as n,j as o,C as i,a4 as d}from"./index-B7M6RjQb.js";const h={class:"vue3-page"},_={class:"card-header"},b={__name:"02-03-reactive",setup(f){return(m,e)=>{const r=s("el-icon"),l=s("el-card");return p(),u("div",h,[a(l,null,{header:t(()=>[n("div",_,[a(r,null,{default:t(()=>[a(i(d))]),_:1}),e[0]||(e[0]=n("span",null,"二、3. reactive函数",-1))])]),default:t(()=>[e[1]||(e[1]=n("div",{class:"doc-section"},[n("h2",null,"二、3. reactive函数"),n("ul",null,[n("li",null,[o("作用：定义一个"),n("strong",{style:{color:"#DD5145"}},"对象类型"),o("的响应式数据（基本类型不要用它，要用ref函数）")]),n("li",null,[o("语法："),n("code",null,"const 代理对象 = reactive(源对象)"),o("接收一个对象（或数组），返回一个"),n("strong",{style:{color:"#DD5145"}},"代理对象（Proxy的实例对象，简称proxy对象）")]),n("li",null,"reactive定义的响应式数据是“深层次的”。"),n("li",null,"内部基于 ES6 的 Proxy 实现，通过代理对象Reflect操作源对象内部数据进行操作。")]),n("h3",null,"示例代码"),n("pre",null,[n("code",{class:"language-vue"},`<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h3>工作种类：{{person.job.type}}</h3>
  <h3>工作薪水：{{person.job.salary}}</h3>
  <h3>爱好：{{person.hobby}}</h3>
  <h3>测试的数据c：{{person.job.a.b.c}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        type:'前端工程师',
        salary:'30K',
        a:{
          b:{
            c:666
          }
        }
      },
      hobby:['抽烟','喝酒','烫头']
    })
    function changeInfo(){
      person.name = '李四'
      person.age = 48
      person.job.type = 'UI设计师'
      person.job.salary = '60K'
      person.job.a.b.c = 999
      person.hobby[0] = '学习'
    }
    return {
      person,
      changeInfo
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},y=c(b,[["__scopeId","data-v-6e83e1d0"]]);export{y as default};
