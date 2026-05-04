import{_ as u,a as r,c,d as t,w as o,f as l,b as e,j as s,C as m,a4 as i}from"./index-CNxBvTdI.js";const d={class:"vue3-page"},h={class:"card-header"},_={__name:"02-06-setup-notes",setup(f){return(g,n)=>{const a=l("el-icon"),p=l("el-card");return r(),c("div",d,[t(p,null,{header:o(()=>[e("div",h,[t(a,null,{default:o(()=>[t(m(i))]),_:1}),n[0]||(n[0]=e("span",null,"二、6. setup的两个注意点",-1))])]),default:o(()=>[n[1]||(n[1]=e("div",{class:"doc-section"},[e("h2",null,"二、6. setup的两个注意点"),e("h3",null,"setup执行的时机"),e("ul",null,[e("li",null,"在beforeCreate之前执行一次，this是undefined")]),e("h3",null,"setup的参数"),e("ul",null,[e("li",null,[e("strong",{style:{color:"#DD5145"}},"props"),s("：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性")]),e("li",null,[e("strong",{style:{color:"#DD5145"}},"context"),s("：上下文对象 "),e("ul",null,[e("li",null,"attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于this.$attrs"),e("li",null,"slots: 收到的插槽内容, 相当于this.$slots"),e("li",null,"emit: 分发自定义事件的函数, 相当于this.$emit")])])]),e("h3",null,"示例代码"),e("pre",null,[e("code",{class:"language-vue"},`<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="尚硅谷">
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
    <template v-slot:asd>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(\`你好啊，你触发了hello事件，我收到的参数是:\${value}！\`)
    }
    return {
      showHelloMsg
    }
  }
}
<\/script>

<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>
<script>
import {reactive} from 'vue'
export default {
  name: 'Demo',
  props: ['msg', 'school'],
  emits: ['hello'],
  setup(props, context) {
    console.log('---setup---', props)
    console.log('---setup---', context)
    console.log('---setup---', context.attrs)
    console.log('---setup---', context.emit)
    console.log('---setup---', context.slots)
    
    let person = reactive({
      name: '张三',
      age: 18
    })
    
    function test() {
      context.emit('hello', 666)
    }
    
    return {
      person,
      test
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},x=u(_,[["__scopeId","data-v-95e096f8"]]);export{x as default};
