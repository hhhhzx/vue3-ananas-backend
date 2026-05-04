import{_ as s,a as u,c,d as t,w as l,f as o,b as e,C as d,a4 as m}from"./index-B7M6RjQb.js";const i={class:"vue3-page"},p={class:"card-header"},_={__name:"03-04-custom-ref",setup(f){return(v,n)=>{const r=o("el-icon"),a=o("el-card");return u(),c("div",i,[t(a,null,{header:l(()=>[e("div",p,[t(r,null,{default:l(()=>[t(d(m))]),_:1}),n[0]||(n[0]=e("span",null,"三、4. customRef",-1))])]),default:l(()=>[n[1]||(n[1]=e("div",{class:"doc-section"},[e("h2",null,"三、4. customRef"),e("ul",null,[e("li",null,"作用：创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显式控制")]),e("h3",null,"示例代码"),e("pre",null,[e("code",{class:"language-vue"},`<template>
  <input type="text" v-model="keyword">
  <h3>{{keyword}}</h3>
</template>
<script>
import { customRef } from 'vue'
export default {
  name: 'Demo',
  setup() {
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            track()
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()
            }, delay)
          }
        }
      })
    }
    let keyword = myRef('hello', 500)
    return {
      keyword
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},y=s(_,[["__scopeId","data-v-5c68c07d"]]);export{y as default};
