import{K as p,O as m,N as f,P as d,Q as y,o as q,c as g,b as _,M as a}from"./index.b3b626fe.js";import{D as v}from"./DocumentList.ca88edac.js";import"./moment.9709ab41.js";import"./Tag.4ba8c9bb.js";import"./TheLogo.9da81cee.js";const w={class:"container mx-auto p-4 md:px-16 md:py-8"},N=p({__name:"docs",props:["filter","tag"],setup(n){const o=n,t=m(),u=f(),i=o.filter||t.query.filter,r=d(t.query.q),c=o.tag||t.query.tag;return y(r,s=>{const e=u.resolve({...t,query:{...t.query,q:s}});window.history.replaceState(window.history.state,"",e.fullPath)}),(s,e)=>(q(),g("div",w,[_(v,{query:r.value,"onUpdate:query":e[0]||(e[0]=l=>r.value=l),filter:a(i),tag:a(c)},null,8,["query","filter","tag"])]))}});export{N as default};