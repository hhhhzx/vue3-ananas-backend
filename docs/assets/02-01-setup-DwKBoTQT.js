import{_ as c,a as r,c as i,d as t,w as o,f as s,b as e,j as n,C as p,a4 as d}from"./index-B7M6RjQb.js";const m={class:"vue3-page"},h={class:"card-header"},_={__name:"02-01-setup",setup(g){return(b,l)=>{const a=s("el-icon"),u=s("el-card");return r(),i("div",m,[t(u,null,{header:o(()=>[e("div",h,[t(a,null,{default:o(()=>[t(p(d))]),_:1}),l[0]||(l[0]=e("span",null,"二、1. 拉开序幕的setup",-1))])]),default:o(()=>[l[1]||(l[1]=e("div",{class:"doc-section"},[e("h2",null,"二、1. 拉开序幕的setup"),e("ol",null,[e("li",null,"理解：Vue3.0中一个新的配置项，值为一个函数。"),e("li",null,[n("setup是所有"),e("strong",{style:{color:"#DD5145"}},"Composition API（组合API）"),n("表演的舞台。")]),e("li",null,"组件中所用到的：数据、方法等等，均要配置在setup中。"),e("li",null,[n("setup函数的两种返回值： "),e("ol",null,[e("li",null,"若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）"),e("li",null,"若返回一个渲染函数：则可以自定义渲染内容。（了解）")])]),e("li",null,[n("注意点： "),e("ol",null,[e("li",null,[n("尽量不要与Vue2.x配置混用 "),e("ul",null,[e("li",null,[n("Vue2.x配置（data、methos、computed...）中"),e("strong",{style:{color:"#DD5145"}},"可以访问到"),n("setup中的属性、方法。")]),e("li",null,[n("但在setup中"),e("strong",{style:{color:"#DD5145"}},"不能访问到"),n("Vue2.x配置（data、methos、computed...）。")]),e("li",null,"如果有重名, setup优先。")])]),e("li",null,"setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）")])])]),e("h3",null,"示例代码"),e("pre",null,[e("code",{class:"language-vue"},`<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{sex}}</h2>
  <h2>a的值是：{{a}}</h2>
  <button @click="sayHello">说话(Vue3所配置的——sayHello)</button>
  <br><br>
  <button @click="sayWelcome">说话(Vue2所配置的——sayWelcome)</button>
  <br><br>
  <button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
  <br><br>
  <button @click="test2">测试一下在Vue3的setup配置中去读取Vue2中的数据、方法</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sex:'男',
      a:100
    }
  },
  methods: {
    sayWelcome(){
      alert('欢迎来到尚硅谷学习')
    },
    test1(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
    }
  },
  setup(){
    let name = '张三'
    let age = 18
    let a = 200
    function sayHello(){
      alert('我叫\${name}，我\${age}岁了，你好啊！')
    }
    function test2(){
      console.log(name)
      console.log(age)
      console.log(sayHello)
      console.log(this.sex)
      console.log(this.sayWelcome)
    }
    return {
      name,
      age,
      sayHello,
      test2,
      a
    }
  }
}
<\/script>`)])],-1))]),_:1})])}}},x=c(_,[["__scopeId","data-v-51d76db4"]]);export{x as default};
