import{_ as r,a as p,c,d as t,w as l,f as o,b as e,C as i,a4 as d}from"./index-B7M6RjQb.js";const u={class:"vue3-page"},_={class:"card-header"},m={__name:"05-02-teleport",setup(f){return(h,n)=>{const s=o("el-icon"),a=o("el-card");return p(),c("div",u,[t(a,null,{header:l(()=>[e("div",_,[t(s,null,{default:l(()=>[t(i(d))]),_:1}),n[0]||(n[0]=e("span",null,"五、2. Teleport",-1))])]),default:l(()=>[n[1]||(n[1]=e("div",{class:"doc-section"},[e("h2",null,"五、2. Teleport"),e("ul",null,[e("li",null,"什么是Teleport？Teleport是一种能够将我们的组件html结构移动到指定位置的技术")]),e("h3",null,"示例代码"),e("pre",null,[e("code",{class:"language-vue"},`<template>
  <div class="app">
    <h3>我是App组件</h3>
    <button @click="isShow = true">点我弹窗</button>
    <teleport to="body">
      <div v-if="isShow" class="modal">
        <h3>我是一个弹窗</h3>
        <h4>内容：{{msg}}</h4>
        <button @click="isShow = false">点我关闭弹窗</button>
      </div>
    </teleport>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    let isShow = ref(false)
    let msg = ref('尚硅谷')
    return {
      isShow,
      msg
    }
  }
}
<\/script>
<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 300px;
  background-color: pink;
  text-align: center;
}
</style>`)])],-1))]),_:1})])}}},g=r(m,[["__scopeId","data-v-23a64c75"]]);export{g as default};
