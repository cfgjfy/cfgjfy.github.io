"use strict";(self.webpackChunkfirst_web=self.webpackChunkfirst_web||[]).push([[7845],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||u;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,o=new Array(u);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<u;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const u={sidebar_position:5},o="\u51fd\u6570",l={unversionedId:"\u524d\u7aef/TypeScript/function",id:"\u524d\u7aef/TypeScript/function",title:"\u51fd\u6570",description:"1. \u51fd\u6570\u7c7b\u578b\u7684\u4f7f\u7528",source:"@site/docs/\u524d\u7aef/TypeScript/function.md",sourceDirName:"\u524d\u7aef/TypeScript",slug:"/\u524d\u7aef/TypeScript/function",permalink:"/docs/\u524d\u7aef/TypeScript/function",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef/TypeScript/function.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u522b\u540d",permalink:"/docs/\u524d\u7aef/TypeScript/type_alias"},next:{title:"\u7c7b",permalink:"/docs/\u524d\u7aef/TypeScript/class"}},i={},c=[{value:"1. \u51fd\u6570\u7c7b\u578b\u7684\u4f7f\u7528",id:"1-\u51fd\u6570\u7c7b\u578b\u7684\u4f7f\u7528",level:3},{value:"2. \u51fd\u6570\u8868\u8fbe\u5f0f",id:"2-\u51fd\u6570\u8868\u8fbe\u5f0f",level:3},{value:"3. \u51fd\u6570\u7684\u53ef\u9009\u5c5e\u6027",id:"3-\u51fd\u6570\u7684\u53ef\u9009\u5c5e\u6027",level:3},{value:"4. \u51fd\u6570\u53c2\u6570\u7684\u9ed8\u8ba4\u503c",id:"4-\u51fd\u6570\u53c2\u6570\u7684\u9ed8\u8ba4\u503c",level:3},{value:"5. \u5269\u4f59\u53c2\u6570",id:"5-\u5269\u4f59\u53c2\u6570",level:3},{value:"6. \u51fd\u6570\u91cd\u8f7d",id:"6-\u51fd\u6570\u91cd\u8f7d",level:3},{value:"7. \u6784\u9020\u51fd\u6570\u7c7b\u578b\u63a5\u53e3",id:"7-\u6784\u9020\u51fd\u6570\u7c7b\u578b\u63a5\u53e3",level:3}],p={toc:c};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.kt)("h3",{id:"1-\u51fd\u6570\u7c7b\u578b\u7684\u4f7f\u7528"},"1. \u51fd\u6570\u7c7b\u578b\u7684\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  function fn(n1: number, n2: number): number {\n    return n1 + n2\n  }\n  fn(2, 3)  // output> 5\n")),(0,a.kt)("h3",{id:"2-\u51fd\u6570\u8868\u8fbe\u5f0f"},"2. \u51fd\u6570\u8868\u8fbe\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  type Fun = (n1: number, n2: number) => number\n  const fun: Fun = (n1, n2) => n1 + n2\n  fun(1, 2)     // output> 5\n")),(0,a.kt)("h3",{id:"3-\u51fd\u6570\u7684\u53ef\u9009\u5c5e\u6027"},"3. \u51fd\u6570\u7684\u53ef\u9009\u5c5e\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  function fn(n1: number, n2?: number): number {\n    return n1\n  }\n  fn(2)   // output> 2\n")),(0,a.kt)("h3",{id:"4-\u51fd\u6570\u53c2\u6570\u7684\u9ed8\u8ba4\u503c"},"4. \u51fd\u6570\u53c2\u6570\u7684\u9ed8\u8ba4\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  function fn(n1: number = 6, n2?: number): number {\n    return n1\n  }\n  fn()   // output> 6\n")),(0,a.kt)("h3",{id:"5-\u5269\u4f59\u53c2\u6570"},"5. \u5269\u4f59\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  let arr: number[] = [1, 2, 3]\n  function fn(arr: number[], ...args: number[]): number[] {\n    return [...arr, ...args]\n  }\n  fn(arr, 4, 5, 6)   // output> [1, 2, 3, 4, 5, 6]\n")),(0,a.kt)("h3",{id:"6-\u51fd\u6570\u91cd\u8f7d"},"6. \u51fd\u6570\u91cd\u8f7d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u8f7d\u662f\u65b9\u6cd5\u540d\u5b57\u76f8\u540c\uff0c\u800c\u53c2\u6570\u4e0d\u540c\uff0c\u8fd4\u56de\u7c7b\u578b\u53ef\u4ee5\u76f8\u540c\u4e5f\u53ef\u4ee5\u4e0d\u540c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u53c2\u6570\u7c7b\u578b\u4e0d\u540c\uff0c\u5219\u53c2\u6570\u7c7b\u578b\u5e94\u8bbe\u7f6e\u4e3a any\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u6570\u91cf\u4e0d\u540c\u4f60\u53ef\u4ee5\u5c06\u4e0d\u540c\u7684\u53c2\u6570\u8bbe\u7f6e\u4e3a\u53ef\u9009\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  function fn(params: number): void\n\n  function fn(params: string, params2: number): void\n\n  function fn(params: any, params2?: any): void {\n    console.log(params)\n    console.log(params2)\n  }\n  \n  fn(123)\n  fn('123', 456)\n")),(0,a.kt)("h3",{id:"7-\u6784\u9020\u51fd\u6570\u7c7b\u578b\u63a5\u53e3"},"7. \u6784\u9020\u51fd\u6570\u7c7b\u578b\u63a5\u53e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u52a0new\u662f\u4fee\u9970\u666e\u901a\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u52a0new\u662f\u4fee\u9970\u7c7b\u7684")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  class Ani {\n    constructor(public name: string, age: number){}\n    eat(){\n      console.log('~~~~~~')\n    }\n  }\n\n  interface Cat {\n    new (name: string, age: number): Ani\n  }\n\n  function cat(Class: Cat, name: string, age: number) {\n    return new Class(name, age)\n  }\n  const c = cat(Ani, '\u6c64\u59c6', 1)\n  p.name  // output> '\u6c64\u59c6'\n  p.age   // output> 1\n  p.eat() // output> ~~~~~~\n")))}s.isMDXComponent=!0}}]);