import{_ as f,G as w,i as b,T as p,s as _,j as h,l as G,r as l,o as e,c as o,a as t,b as a,u as m,d as i,f as k}from"./index.81564696.js";import{G as I,a as T,T as C,S as $}from"./Subscriptions.2352f3cf.js";const S={components:{GitHubIcon:I,GoogleIcon:T,TwitterIcon:C},data(){return{accountConflict:!1}},computed:{github(){return this.providers.find(n=>n.providerId==="github.com")},google(){return this.providers.find(n=>n.providerId==="google.com")},online(){return this.$store.state.online},providers(){return this.user?this.user.providerData:[]},twitter(){return this.providers.find(n=>n.providerId==="twitter.com")},user(){return this.$store.state.auth.user}},methods:{linkGithub(){this.user.linkWithRedirect(new w)},linkGoogle(){this.user.linkWithRedirect(new b)},linkTwitter(){this.user.linkWithRedirect(new p)},signInGithub(){_(h(),new w)},signInGoogle(){_(h(),new b)},signInTwitter(){_(h(),new p)},signOut(){h().signOut()}},created(){G().then(n=>{n.additionalUserInfo&&n.additionalUserInfo.isNewUser&&window.fathom.trackGoal("SQC05HQB",0)}).catch(n=>{switch(n.code){case"auth/account-exists-with-different-credential":this.accountConflict=!0;break}})}},j={class:"flex flex-col gap-4"},B={key:0,class:"mb-4"},H={class:"flex items-center"},P=t("span",{class:"font-bold text-lg ml-3"},"GitHub",-1),z=t("span",{class:"bg-gray-100 dark:bg-gray-800 text-base font-normal px-1 rounded ml-2"},"Linked",-1),L={key:1,class:"mb-4"},R={class:"flex items-center"},A=t("span",{class:"font-bold text-lg ml-3"},"Google",-1),M=t("span",{class:"bg-gray-100 dark:bg-gray-800 text-base font-normal px-1 rounded ml-2"},"Linked",-1),N={key:2,class:"mb-4"},O={class:"flex items-center"},V=t("span",{class:"font-bold text-lg ml-3"},"Twitter",-1),D=t("span",{class:"bg-gray-100 dark:bg-gray-800 text-base font-normal px-1 rounded ml-2"},"Linked",-1),W={class:"flex flex-col gap-2 lg:max-w-xs"},U=t("span",{class:"ml-3"},"Link GitHub",-1),Q=t("span",{class:"ml-3"},"Link Google",-1),E=t("span",{class:"ml-3"},"Link Twitter",-1),Y=t("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1),q=t("span",{class:"action ml-3"},"Sign Out",-1),F=[Y,q];function J(n,r,x,y,v,s){const d=l("GitHubIcon"),u=l("GoogleIcon"),g=l("TwitterIcon");return e(),o("section",j,[t("div",null,[s.github?(e(),o("div",B,[t("div",H,[a(d,{class:"h-5 w-5"}),P,z]),t("p",null,m(s.github.email),1)])):i("",!0),s.google?(e(),o("div",L,[t("div",R,[a(u,{class:"h-5 w-5"}),A,M]),t("p",null,m(s.google.email),1)])):i("",!0),s.twitter?(e(),o("div",N,[t("div",O,[a(g,{class:"h-5 w-5"}),V,D]),t("p",null,m(s.twitter.email),1)])):i("",!0)]),t("div",W,[s.github?i("",!0):(e(),o("button",{key:0,onClick:r[0]||(r[0]=(...c)=>s.linkGithub&&s.linkGithub(...c)),class:"button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start"},[a(d,{class:"h-5 w-5"}),U])),s.google?i("",!0):(e(),o("button",{key:1,onClick:r[1]||(r[1]=(...c)=>s.linkGoogle&&s.linkGoogle(...c)),class:"button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start"},[a(u,{class:"h-5 w-5"}),Q])),s.twitter?i("",!0):(e(),o("button",{key:2,onClick:r[2]||(r[2]=(...c)=>s.linkTwitter&&s.linkTwitter(...c)),class:"button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start"},[a(g,{class:"h-5 w-5"}),E])),t("button",{onClick:r[3]||(r[3]=(...c)=>s.signOut&&s.signOut(...c)),class:"button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start text-red-400"},F)])])}var K=f(S,[["render",J]]);const X={components:{Providers:K,Subscriptions:$},computed:{online(){return this.$store.state.online},user(){return this.$store.state.auth.user}}},Z={class:"container flex flex-col mx-auto p-4 md:px-16 md:py-8"},tt=t("h2",{class:"text-4xl mb-1"},"My Account",-1),st=t("p",{class:"text-gray-500 mb-8"},"Manage account settings and subscriptions",-1),et={key:0,class:"mb-4"},ot=k("By default, documents are only stored in your browser. This means an action such as "),nt=t("strong",null,"clearing your history could erase everything",-1),it=k(". To protect your data, you should sign up for an account."),rt=[ot,nt,it],at={key:1,class:"mb-8"},ct=t("h3",{class:"text-3xl mb-4"},"Status",-1),lt={key:0,class:"flex items-center"},dt=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),ut=t("span",{class:"ml-2"},"Docs are currently syncing to your account.",-1),ht=[dt,ut],_t={key:1,class:"flex items-center text-red-400"},mt=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),gt=t("span",{class:"ml-2"},"You are currently offline. Docs will continue syncing when you go online.",-1),wt=[mt,gt],bt={class:"mb-8"},pt={key:0,class:"text-3xl mb-4"},ft={key:2,class:"mb-8"},kt=t("h3",{class:"text-3xl mb-4"},"Providers",-1);function xt(n,r,x,y,v,s){const d=l("Subscriptions"),u=l("Providers");return e(),o("div",Z,[tt,st,s.user?i("",!0):(e(),o("p",et,rt)),s.user?(e(),o("section",at,[ct,s.online?(e(),o("div",lt,ht)):(e(),o("div",_t,wt))])):i("",!0),t("section",bt,[s.user?(e(),o("h3",pt,"Subscriptions")):i("",!0),a(d)]),s.user?(e(),o("section",ft,[kt,a(u)])):i("",!0)])}var Gt=f(X,[["render",xt]]);export{Gt as default};
