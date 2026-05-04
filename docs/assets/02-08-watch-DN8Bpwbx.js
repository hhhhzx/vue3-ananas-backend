import{_ as u,a as r,c,d as l,w as a,f as o,b as e,C as d,a4 as p}from"./index-CNxBvTdI.js";const m={class:"vue3-page"},i={class:"card-header"},h={__name:"02-08-watch",setup(V){return(w,n)=>{const t=o("el-icon"),s=o("el-card");return r(),c("div",m,[l(s,null,{header:a(()=>[e("div",i,[l(t,null,{default:a(()=>[l(d(p))]),_:1}),n[0]||(n[0]=e("span",null,"二、8. watch函数",-1))])]),default:a(()=>[n[1]||(n[1]=e("div",{class:"doc-section"},[e("h2",null,"二、8. watch函数"),e("p",null,"与Vue2.x中watch配置功能一致"),e("h3",null,"两个小坑"),e("ul",null,[e("li",null,"监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）"),e("li",null,"监视reactive定义的响应式数据中某个属性时：deep配置有效")]),e("h3",null,"示例代码"),e("pre",null,[e("code",{class:"language-vue"},`<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为：{{msg}}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    
    // 情况一：监视ref所定义的一个响应式数据,deep:true要注意
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum变了', newValue, oldValue)
    // }, { immediate: true })
    
    // 情况二：监视ref所定义的多个响应式数据
    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log('sum或msg变了', newValue, oldValue)
    // }, { immediate: true })
    
    // 情况三：监视reactive所定义的一个响应式数据的全部属性
    // 注意：此处无法正确的获取oldValue
    // 注意：强制开启了深度监视（deep配置无效）
    // watch(person, (newValue, oldValue) => {
    //   console.log('person变化了', newValue, oldValue)
    // }, { deep: false })
    
    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    // watch(() => person.name, (newValue, oldValue) => {
    //   console.log('person的name变化了', newValue, oldValue)
    // })
    
    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log('person的name或age变化了', newValue, oldValue)
    // })
    
    // 特殊情况
    // watch(() => person.job, (newValue, oldValue) => {
    //   console.log('person的job变化了', newValue, oldValue)
    // }, { deep: true })
    
    return {
      sum,
      msg,
      person
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},g=u(h,[["__scopeId","data-v-ca88981d"]]);export{g as default};
