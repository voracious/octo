import{_ as k,a as d,c as r,e as t,t as l,l as x,m as c,p as D,q as A,o as w,s as C,R as M,u as S,v as T,x as R,r as _,d as p,w as j,f as i,F as f,k as v}from"./index.2884e55a.js";import{_ as B}from"./TagLink.4a9b5e5f.js";import"./Tag.3fc79494.js";const E={name:"DiscardableAction",props:{discardedAt:Date,onDiscard:Function,onRestore:Function},computed:{actionText(){return this.discardedAt?"Restore":"Discard"}},methods:{toggle(){this.discardedAt?this.onRestore():this.onDiscard()}}},U=t("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),Y={class:"ml-6 md:ml-3 text-left flex-grow"};function I(n,s,a,h,m,e){return d(),r("button",{class:"flex items-center cursor-pointer",onClick:s[0]||(s[0]=x((...u)=>e.toggle&&e.toggle(...u),["stop"]))},[U,t("div",Y,l(e.actionText),1)])}var L=k(E,[["render",I]]);const N=n=>{const s={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({files:n})};return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",s).then(a=>a.json()).then(a=>a.sandbox_id)},H=n=>{n&&window.open(`https://codesandbox.io/s/${n}`,"_blank")};var g={create:N,open:H};const O={name:"TheRightSidebar",components:{DiscardableAction:L,TagLink:B},data(){return{now:c(),ticker:null}},computed:{codeblocks(){return D(this.doc.text)},createdAt(){return this.$route.params.id?c(this.doc.createdAt).format("ddd, MMM Do, YYYY [at] h:mm A"):"Not yet created"},discardedAt(){return c(this.doc.discardedAt).format("ddd, MMM Do, YYYY [at] h:mm A")},doc(){return this.$store.getters.currentDoc},hasCodeblocks(){return this.codeblocks.length>0},publicUrl(){const n=this.$router.resolve({name:"public_doc",params:{id:this.doc.id}}).href;return`${location.protocol}//${location.host}${n}`},savedAt(){return this.$route.params.id?this.now.diff(this.doc.updatedAt,"seconds")<5?"just now":`${c(this.doc.updatedAt).from(this.now,!0)} ago`:"Not yet saved"},updatedAt(){return this.$route.params.id?c(this.doc.updatedAt).format("ddd, MMM Do, YYYY [at] h:mm A"):"Not yet updated"}},methods:{async copyPublicUrl(){this.$refs.link.select(),document.execCommand("copy")},async discardDocument(){this.$store.dispatch(A,{id:this.doc.id}),w({name:"new_doc"})},async duplicateDocument(){const n=await this.$store.dispatch(C,{id:this.doc.id});w({name:"doc",params:{id:n}})},async openSandbox(){const n=this.codeblocks.reduce((s,a,h)=>{const m=a.filename||[h,a.language||"txt"].join(".");return{...s,[m]:{content:a.code}}},{});g.create(n).then(s=>g.open(s))},async restoreDocument(){this.$store.dispatch(M,{id:this.doc.id})},async restrictDocument(){this.$store.dispatch(S,{id:this.doc.id})},async shareDocument(){this.$store.dispatch(T,{id:this.doc.id})},async toggleMeta(){this.$store.dispatch(R,!this.$store.state.showRightSidebar)}},async beforeUnmount(){clearInterval(this.ticker)},async mounted(){this.mounted=!0,this.ticker=setInterval(()=>{this.now=c()},5e3)}},V={class:"flex flex-col flex-grow"},P={class:"hidden mb-4 md:flex justify-end"},z=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),F=t("span",{class:"ml-3"},"Hide",-1),q=[z,F],G={key:0,class:"flex flex-col flex-grow"},J=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})],-1),K=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Duplicate",-1),Q=[J,K],W=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})],-1),X=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Create Sandbox",-1),Z=[W,X],$={key:0},tt=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})],-1),et=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Make Private",-1),st=[tt,et],ot=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"})],-1),dt=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Copy Link",-1),nt=[ot,dt],rt=["value"],at={key:1,class:"mb-2"},it=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"})],-1),ct=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Make Public",-1),lt=[it,ct],ht={class:"mt-4"},mt={class:"mt-4"},ut={class:"flex items-center px-3 py-2 my-1 md:px-2 md:py-1"},_t=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1),pt={class:"flex-grow overflow-hidden truncate ml-3"},wt={class:"flex flex-col justify-end flex-grow px-3 md:p-2 mt-4 mb-3 md:mb-1"},ft={key:0},vt=t("small",{class:"text-gray-700"},"Last Saved",-1),gt={class:"capitalize pt-2 md:pt-1"},kt={key:1,class:"mt-3 md:mt-2"},xt=t("small",{class:"text-gray-700"},"Created",-1),bt={class:"pt-2 md:pt-1"},yt={key:2,class:"mt-3 md:mt-2"},Dt=t("small",{class:"text-gray-700"},"Updated",-1),At={class:"pt-2 md:pt-1"},Ct={key:3,class:"mt-3 md:mt-2"},Mt=t("small",{class:"text-gray-700"},"Discarded",-1),St={class:"pt-2 md:pt-1"};function Tt(n,s,a,h,m,e){const u=_("DiscardableAction"),b=_("TagLink"),y=_("SimpleBar");return d(),p(y,{class:"meta p-4 md:p-2"},{default:j(()=>[t("div",V,[t("div",P,[t("button",{onClick:s[0]||(s[0]=(...o)=>e.toggleMeta&&e.toggleMeta(...o)),class:"sidebar-button"},q)]),e.doc?(d(),r("div",G,[t("div",null,[e.doc.id?(d(),p(u,{key:0,discardedAt:e.doc.discardedAt,onDiscard:e.discardDocument,onRestore:e.restoreDocument,class:"sidebar-button w-full"},null,8,["discardedAt","onDiscard","onRestore"])):i("",!0),t("button",{onClick:s[1]||(s[1]=x((...o)=>e.duplicateDocument&&e.duplicateDocument(...o),["stop"])),class:"sidebar-button w-full"},Q),e.hasCodeblocks?(d(),r("button",{key:1,onClick:s[2]||(s[2]=(...o)=>e.openSandbox&&e.openSandbox(...o)),class:"sidebar-button w-full"},Z)):i("",!0),t("div",null,[e.doc.public?(d(),r("div",$,[t("button",{onClick:s[3]||(s[3]=(...o)=>e.restrictDocument&&e.restrictDocument(...o)),class:"sidebar-button w-full"},st),t("button",{onClick:s[4]||(s[4]=(...o)=>e.copyPublicUrl&&e.copyPublicUrl(...o)),class:"sidebar-button w-full"},nt),t("input",{ref:"link",value:e.publicUrl,type:"text",class:"form-text w-full mb-2",readonly:""},null,8,rt)])):(d(),r("div",at,[t("button",{onClick:s[5]||(s[5]=(...o)=>e.shareDocument&&e.shareDocument(...o)),class:"sidebar-button w-full"},lt)]))])]),t("div",ht,[(d(!0),r(f,null,v(e.doc.tags,o=>(d(),p(b,{key:o,tag:o,class:"sidebar-link"},null,8,["tag"]))),128))]),t("div",mt,[(d(!0),r(f,null,v(e.doc.tasks,o=>(d(),r("div",ut,[_t,t("span",pt,l(o),1)]))),256))]),t("div",wt,[e.doc.updatedAt?(d(),r("div",ft,[vt,t("div",gt,l(e.savedAt),1)])):i("",!0),e.doc.createdAt?(d(),r("div",kt,[xt,t("div",bt,l(e.createdAt),1)])):i("",!0),e.doc.updatedAt?(d(),r("div",yt,[Dt,t("div",At,l(e.updatedAt),1)])):i("",!0),e.doc.discardedAt?(d(),r("div",Ct,[Mt,t("div",St,l(e.discardedAt),1)])):i("",!0)])])):i("",!0)])]),_:1})}var Et=k(O,[["render",Tt]]);export{Et as default};
