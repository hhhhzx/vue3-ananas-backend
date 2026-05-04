import{_ as p,a as s,c,d as n,w as t,f as o,b as e,j as a,C as i,a4 as d}from"./index-CNxBvTdI.js";const _={class:"vue3-page"},m={class:"card-header"},f={__name:"02-04-reactive-principle",setup(g){return(v,l)=>{const r=o("el-icon"),u=o("el-card");return s(),c("div",_,[n(u,null,{header:t(()=>[e("div",m,[n(r,null,{default:t(()=>[n(i(d))]),_:1}),l[0]||(l[0]=e("span",null,"二、4. Vue3.0中的响应式原理",-1))])]),default:t(()=>[l[1]||(l[1]=e("div",{class:"doc-section"},[e("h2",null,"二、4. Vue3.0中的响应式原理"),e("h3",null,"vue2.x的响应式"),e("ul",null,[e("li",null,[a("实现原理： "),e("ul",null,[e("li",null,"对象类型：通过Object.defineProperty()对属性的读取、修改进行拦截（数据劫持）。"),e("li",null,"数组类型：通过重写更新数组的一系列方法来实现拦截（对数组的变更方法进行了包裹）。")])]),e("li",null,[a("存在问题： "),e("ul",null,[e("li",null,"新增属性、删除属性，界面不会更新。"),e("li",null,"直接通过下标修改数组，界面不会自动更新。")])])]),e("h3",null,"Vue3.0的响应式"),e("ul",null,[e("li",null,[a("实现原理： "),e("ul",null,[e("li",null,"通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等。"),e("li",null,"通过Reflect（反射）：对源对象的属性进行操作。")])])]),e("h3",null,"示例代码"),e("pre",null,[e("code",{class:"language-javascript"},`const p = new Proxy(person,{
  get(target,propName){
    console.log('有人读取了p身上的',propName,'属性')
    return Reflect.get(target,propName)
  },
  set(target,propName,value){
    console.log('有人修改了p身上的',propName,'属性，我要去更新界面了！')
    Reflect.set(target,propName,value)
  },
  deleteProperty(target,propName){
    console.log('有人删除了p身上的',propName,'属性，我要去更新界面了！')
    return Reflect.deleteProperty(target,propName)
  }
})`)])],-1))]),_:1})])}}},x=p(f,[["__scopeId","data-v-76d80fed"]]);export{x as default};
