import{_ as r,a as c,c as u,d as t,w as o,f as a,b as e,C as p,a4 as f}from"./index-B7M6RjQb.js";const d={class:"vue3-page"},i={class:"card-header"},_={__name:"02-12-to-ref",setup(m){return(h,n)=>{const l=a("el-icon"),s=a("el-card");return c(),u("div",d,[t(s,null,{header:o(()=>[e("div",i,[t(l,null,{default:o(()=>[t(p(f))]),_:1}),n[0]||(n[0]=e("span",null,"二、12. toRef与toRefs",-1))])]),default:o(()=>[n[1]||(n[1]=e("div",{class:"doc-section"},[e("h2",null,"二、12. toRef与toRefs"),e("ul",null,[e("li",null,"作用：创建一个ref对象，其value值指向另一个对象中的某个属性"),e("li",null,"语法：const name = toRef(person, 'name')"),e("li",null,"应用：要将响应式对象中的某个属性单独提供给外部使用时"),e("li",null,"扩展：toRefs与toRef功能一致，但可以批量创建多个ref对象，且只会创建第一层，语法：toRefs(person)")]),e("h3",null,"示例代码"),e("pre",null,[e("code",{class:"language-vue"},`<template>
  <h4>{{person}}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
<script>
import { reactive, toRef, toRefs } from 'vue'
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
    return {
      person,
      ...toRefs(person)
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},b=r(_,[["__scopeId","data-v-7b6ddee9"]]);export{b as default};
