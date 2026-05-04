import{_ as r,a as u,c,d as l,w as a,f as o,b as n,C as d,a4 as p}from"./index-B7M6RjQb.js";const i={class:"vue3-page"},_={class:"card-header"},m={__name:"03-02-readonly",setup(h){return(f,e)=>{const t=o("el-icon"),s=o("el-card");return u(),c("div",i,[l(s,null,{header:a(()=>[n("div",_,[l(t,null,{default:a(()=>[l(d(p))]),_:1}),e[0]||(e[0]=n("span",null,"三、2. readonly与shallowReadonly",-1))])]),default:a(()=>[e[1]||(e[1]=n("div",{class:"doc-section"},[n("h2",null,"三、2. readonly与shallowReadonly"),n("ul",null,[n("li",null,"readonly：让一个响应式数据变为只读的（深只读）"),n("li",null,"shallowReadonly：让一个响应式数据变为只读的（浅只读--第一层）"),n("li",null,"应用场景：不希望数据被修改时")]),n("h3",null,"示例代码"),n("pre",null,[n("code",{class:"language-vue"},`<template>
  <h4>当前求和为：{{sum}}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    person = readonly(person)
    return {
      sum,
      ...toRefs(person)
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},b=r(m,[["__scopeId","data-v-1d912c63"]]);export{b as default};
