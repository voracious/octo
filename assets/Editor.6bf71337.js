var p=Object.defineProperty,l=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var i=(t,e,a)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,r=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&i(t,a,e[a]);if(s)for(var a of s(e))f.call(e,a)&&i(t,a,e[a]);return t},d=(t,e)=>l(t,h(e));import{E as y}from"./Editor.674c8847.js";import{_ as m,K as $,X as o,Y as g,Z as D,$ as A,a0 as E,a1 as S,o as T,a2 as _,r as b,a as v,d as w}from"./index.3e4a98f4.js";const n=(t,e=", ")=>t.map(a=>`#${a}`).join(e),I=$({name:"EditorView",components:{Editor:y},props:{id:String,initialFocus:{type:String,default:()=>"any",validator:t=>["any","start","end"].includes(t)},initialSelections:{type:Array},readonly:{type:Boolean}},data(){return{editor:null,placeholder:new o({text:n(this.$store.state.context.tags," ")})}},watch:{doc(){this.$refs.editable.clearHistory(),this.$refs.editable.focusEditor()},tags:{deep:!0,handler(){this.updateTitle()}},header(){this.updateTitle()}},computed:{appearance(){return this.$store.state.settings.theme==="october"?"dark":this.$store.state.settings.theme},currentDoc(){return this.$store.getters.currentDoc},doc(){return this.$store.getters.decrypted.find(t=>t.id===this.id)||this.placeholder},settings(){return this.$store.state.settings.editor},tags(){return this.doc.tags},header(){return this.doc.headers[0]}},methods:{async updateTitle(){g(this.doc.header||n(this.doc.tags))},async findSharedDocument(){const t=await D({docId:this.$route.params.id}),e=t.data(),a=d(r({},e),{id:e.id||e.clientId,firebaseId:t.id,textKey:e.textKey||e.dataKey,createdAt:e.createdAt?e.createdAt.toDate():null,discardedAt:e.discardedAt?e.discardedAt.toDate():null,updatedAt:e.updatedAt?e.updatedAt.toDate():null,touchedAt:e.touchedAt?e.touchedAt.toDate():null,syncedAt:e.syncedAt.toDate()});return A(a,{privateKey:this.$store.state.settings.crypto.privateKey})},async input(t){this.readonly||(this.id?this.$store.dispatch(E,{id:this.doc.id,text:t}):(this.$store.dispatch(S,new o({id:this.doc.id,text:t})),T({name:"doc",params:{id:this.doc.id,props:{initialSelections:this.$refs.editable.getSelections()}}})))}},beforeRouteUpdate(t,e,a){t.name==="doc"&&this.$store.dispatch(_,{id:t.params.id}),a()},async mounted(){this.updateTitle(),this.readonly&&(this.placeholder=await this.findSharedDocument())}});function K(t,e,a,k,C,U){const c=b("Editor",!0);return v(),w(c,{ref:"editable",appearance:t.appearance,initialSelections:t.initialSelections,readonly:t.readonly,settings:t.settings,text:t.doc.text,onInput:t.input},null,8,["appearance","initialSelections","readonly","settings","text","onInput"])}var N=m(I,[["render",K]]);export{N as default};
