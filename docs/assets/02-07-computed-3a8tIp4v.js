import{_ as l,a as p,c as u,d as t,w as a,f as s,b as e,C as m,a4 as c}from"./index-CNxBvTdI.js";const d={class:"vue3-page"},i={class:"card-header"},_={__name:"02-07-computed",setup(f){return(N,n)=>{const o=s("el-icon"),r=s("el-card");return p(),u("div",d,[t(r,null,{header:a(()=>[e("div",i,[t(o,null,{default:a(()=>[t(m(c))]),_:1}),n[0]||(n[0]=e("span",null,"二、7. computed函数",-1))])]),default:a(()=>[n[1]||(n[1]=e("div",{class:"doc-section"},[e("h2",null,"二、7. computed函数"),e("p",null,"与Vue2.x中computed配置功能一致"),e("h3",null,"写法"),e("pre",null,[e("code",{class:"language-vue"},`<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <br>
  <span>全名：{{person.fullName}}</span>
  <br>
  全名：<input type="text" v-model="person.fullName">
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })
    
    // 计算属性——简写
    let fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })
    
    // 计算属性——完整
    let fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    
    return {
      person,
      fullName
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},x=l(_,[["__scopeId","data-v-57e9ccf5"]]);export{x as default};
