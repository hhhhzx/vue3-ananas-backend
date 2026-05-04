import{_ as s,a as c,c as u,d as a,w as t,f as o,b as n,j as p,C as i,a4 as d}from"./index-CNxBvTdI.js";const m={class:"vue3-page"},_={class:"card-header"},w={__name:"03-03-to-raw",setup(R){return(f,e)=>{const l=o("el-icon"),r=o("el-card");return c(),u("div",m,[a(r,null,{header:t(()=>[n("div",_,[a(l,null,{default:t(()=>[a(i(d))]),_:1}),e[0]||(e[0]=n("span",null,"三、3. toRaw与markRaw",-1))])]),default:t(()=>[e[1]||(e[1]=n("div",{class:"doc-section"},[n("h2",null,"三、3. toRaw与markRaw"),n("ul",null,[n("li",null,"toRaw：将一个由reactive生成的响应式对象转为普通对象"),n("li",null,"使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新"),n("li",null,"markRaw：标记一个对象，使其永远不会再成为响应式对象，返回值是对象本身"),n("li",null,[p("应用场景： "),n("ul",null,[n("li",null,"有些值不应被设置为响应式的，例如复杂的第三方库"),n("li",null,"当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能")])])]),n("h3",null,"示例代码"),n("pre",null,[n("code",{class:"language-vue"},`<template>
  <h4>{{person}}</h4>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一辆车</button>
  <button @click="person.name += '~'">修改名字</button>
  <button @click="person.car.name += '~'">修改车的名字</button>
  <button @click="person.car.price++">修改车的价格</button>
</template>
<script>
import { reactive, toRaw, markRaw } from 'vue'
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
    function showRawPerson() {
      const p = toRaw(person)
      console.log(p)
    }
    function addCar() {
      let car = { name: '奔驰', price: 40 }
      person.car = markRaw(car)
    }
    return {
      person,
      showRawPerson,
      addCar
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},k=s(w,[["__scopeId","data-v-4300d2cd"]]);export{k as default};
