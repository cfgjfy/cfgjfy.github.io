"use strict";(self.webpackChunkfirst_web=self.webpackChunkfirst_web||[]).push([[4195],{9294:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),s=a(6010),c=a(2263),o=a(3285);const l={heroBanner:"heroBanner_qdFl",song:"song_Ees0",box:"box_D8X3",name:"name_G8Wb",auther:"auther_qB6k",txt:"txt_Jl6N"};function r(){const{siteConfig:e}=(0,c.Z)(),[t,a]=(0,n.useState)({});return(0,n.useEffect)((()=>{fetch("https://api.vvhan.com/api/reping").then((e=>e.json())).then((e=>{let{data:t}=e;a(t),console.log(t)}));const e=document.createElement("script");return e.src="https://api.vvhan.com/api/yinghua",e.async=!1,document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),(0,n.useEffect)((()=>{document.querySelector("audio").paused&&console.log(111)})),n.createElement("header",{className:(0,s.Z)("hero hero--primary",l.heroBanner)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:l.song},n.createElement("img",{className:l.song.img,src:t.avatarUrl}),n.createElement("div",{className:l.box},n.createElement("p",{className:l.name},t.name),n.createElement("p",{className:l.auther},t.auther),n.createElement("audio",{id:"audio",className:l.audio,src:t.mp3url,controls:!0,autoPlay:!0}))),n.createElement("button",{className:"styles.button",onClick:function(){fetch("https://api.vvhan.com/api/reping").then((e=>e.json())).then((e=>{let{data:t}=e;a(t),console.log(t)}))}},"\u5207\u6b4c"),n.createElement("p",{className:l.txt},t.content)))}function i(){const{siteConfig:e}=(0,c.Z)();return n.createElement(o.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(r,null))}}}]);