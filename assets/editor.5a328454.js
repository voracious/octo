import{_,n as f,r as s,o,c as m,b as d,w as c,a as t,d as n,t as g,f as b}from"./index.b3b626fe.js";import{T as k}from"./TheLogo.9da81cee.js";import v from"./menu.0adddee6.js";import x from"./meta.60180c77.js";import"./TagLink.3e4e9eba.js";import"./Tag.4ba8c9bb.js";import"./files.17db9d83.js";import"./moment.9709ab41.js";const y={components:{TheLogo:k},computed:{doc(){return this.$store.getters.currentDoc},isDoc(){return this.doc&&this.$route.name==="docs-doc"},isDashboard(){return this.$route.name==="docs-new"},october(){return this.$store.state.settings.theme==="october"}},methods:{close(){if(this.doc)return f({path:`/docs/${this.doc.id}`});f({path:"/docs/new"})}}},T={class:"relative flex flex-wrap items-center content-between p-4 z-index-10 md:hidden w-full"},$={class:"flex items-stretch fixed top-3 right-3"},S=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1),C=t("span",{class:"ml-2"},"Menu",-1),B=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),L=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),M=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),D=[M];function z(h,l,p,w,u,e){const a=s("TheLogo"),r=s("router-link");return o(),m("nav",T,[d(r,{class:"pt-1 pb-1 mr-4 text-lg whitespace-no-wrap flex justify-between items-center",to:{path:"/docs/new"}},{default:c(()=>[d(a,{class:"h-9 text-theme"})]),_:1}),t("div",$,[d(r,{class:"button button-size-medium button-color-gray ml-2",to:{path:"/menu"},role:"button","aria-haspopup":"true","aria-expanded":"false"},{default:c(()=>[S,C]),_:1}),e.isDashboard?(o(),n(r,{key:0,to:{path:"/quick-action"},class:"button button-size-medium button-color-gray ml-2"},{default:c(()=>[B]),_:1})):e.isDoc?(o(),n(r,{key:1,to:{path:`/docs/${e.doc.id}/meta`},class:"button button-size-medium button-color-gray ml-2"},{default:c(()=>[L]),_:1},8,["to"])):(o(),m("button",{key:2,onClick:l[0]||(l[0]=(...i)=>e.close&&e.close(...i)),class:"button button-size-medium button-color-gray ml-2"},D))])])}var j=_(y,[["render",z]]);const N={components:{TheNavbar:j},data(){return{routeKey:null}},watch:{$route:{deep:!0,handler(h){h.query.p||(this.routeKey=g())}}}};function R(h,l,p,w,u,e){const a=s("TheNavbar"),r=s("router-view"),i=s("SimpleBar");return o(),n(i,{class:"the-content"},{default:c(()=>[d(a),(o(),n(r,{inheritAttrs:!0,key:u.routeKey,class:"flex"}))]),_:1})}var q=_(N,[["render",R],["__scopeId","data-v-e8158a00"]]);const K={components:{TheContent:q,TheLeftSidebar:v,TheRightSidebar:x},inject:["mq"],computed:{currentDoc(){return this.$store.getters.currentDoc},mobile(){return["xs","sm"].includes(this.mq.current)},showLeftSidebar(){return this.$store.state.showLeftSidebar},showRightSidebar(){return this.$route.name==="docs-doc"&&this.$store.state.showRightSidebar}}},V={class:"flex h-screen"};function A(h,l,p,w,u,e){const a=s("TheLeftSidebar"),r=s("TheContent"),i=s("TheRightSidebar");return o(),m("div",V,[!e.mobile&&e.showLeftSidebar?(o(),n(a,{key:0,class:"hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded shadow"})):b("",!0),d(r,{class:"flex-grow flex-shrink relative h-screen"}),!e.mobile&&e.showRightSidebar&&e.currentDoc?(o(),n(i,{key:1,class:"hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded"})):b("",!0)])}var Q=_(K,[["render",A]]);export{Q as default};
