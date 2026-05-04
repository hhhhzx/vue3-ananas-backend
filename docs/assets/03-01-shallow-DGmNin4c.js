import{_ as c,a as u,c as r,d as l,w as t,f as a,b as n,j as i,C as h,a4 as p}from"./index-CNxBvTdI.js";const d={class:"vue3-page"},_={class:"card-header"},f={__name:"03-01-shallow",setup(m){return(b,e)=>{const o=a("el-icon"),s=a("el-card");return u(),r("div",d,[l(s,null,{header:t(()=>[n("div",_,[l(o,null,{default:t(()=>[l(h(p))]),_:1}),e[0]||(e[0]=n("span",null,"三、1. shallowReactive与shallowRef",-1))])]),default:t(()=>[e[1]||(e[1]=n("div",{class:"doc-section"},[n("h2",null,"三、1. shallowReactive与shallowRef"),n("ul",null,[n("li",null,"shallowReactive：只处理对象最外层属性的响应式（浅响应式）"),n("li",null,"shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理"),n("li",null,[i("什么时候使用？ "),n("ul",null,[n("li",null,"如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ===> shallowReactive"),n("li",null,"如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef")])])]),n("h3",null,"示例代码"),n("pre",null,[n("code",{class:"language-vue"},`<template>
  <h4>当前的x.y值是：{{x.y}}</h4>
  <button @click="x = { y: 888 }">点我替换x</button>
  <button @click="x.y++">点我x.y++</button>
  <hr>
  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    let x = shallowRef({
      y: 0
    })
    return {
      x,
      person,
      ...toRefs(person)
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},w=c(f,[["__scopeId","data-v-152ba68b"]]);export{w as default};
