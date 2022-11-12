import{a3 as E,U as R,N as G,O as m,X as N,Q as A,J as Z,L as q,T as j,s as Y}from"./Editor.3fa99236.js";import"./index.b8eb6ee5.js";import"./account.39fe3759.js";import"./transform.812ac62b.js";const w=1,I=2,D=3,M=4,F=5,B=35,L=36,J=37,K=11,H=13;function ee(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function te(e){return e==9||e==10||e==13||e==32}let X=null,z=null,Q=0;function y(e,t){let a=e.pos+t;if(z==e&&Q==a)return X;for(;te(e.peek(t));)t++;let O="";for(;;){let r=e.peek(t);if(!ee(r))break;O+=String.fromCharCode(r),t++}return z=e,Q=a,X=O||null}function _(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let a=0;a<e.length;a++)this.hash+=(this.hash<<4)+e.charCodeAt(a)+(e.charCodeAt(a)<<8)}const Oe=new E({start:null,shift(e,t,a,O){return t==w?new _(y(O,1)||"",e):e},reduce(e,t){return t==K&&e?e.parent:e},reuse(e,t,a,O){let r=t.type.id;return r==w||r==H?new _(y(O,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),ae=new R((e,t)=>{if(e.next==60){if(e.advance(),e.next==47){e.advance();let a=y(e,0);if(!a)return e.acceptToken(F);if(t.context&&a==t.context.name)return e.acceptToken(I);for(let O=t.context;O;O=O.parent)if(O.name==a)return e.acceptToken(D,-2);e.acceptToken(M)}else if(e.next!=33&&e.next!=63)return e.acceptToken(w)}},{contextual:!0});function S(e,t){return new R(a=>{for(let O=0,r=0;;r++){if(a.next<0){r&&a.acceptToken(e);break}if(a.next==t.charCodeAt(O)){if(O++,O==t.length){r>t.length&&a.acceptToken(e,1-t.length);break}}else O=a.next==t.charCodeAt(0)?1:0;a.advance()}})}const re=S(B,"-->"),ne=S(L,"?>"),le=S(J,"]]>"),oe=G({Text:m.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":m.angleBracket,TagName:m.tagName,"MismatchedCloseTag/Tagname":[m.tagName,m.invalid],AttributeName:m.attributeName,AttributeValue:m.attributeValue,Is:m.definitionOperator,"EntityReference CharacterReference":m.character,Comment:m.blockComment,ProcessingInst:m.processingInstruction,DoctypeDecl:m.documentMeta,Cdata:m.special(m.string)}),se=N.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"\u26A0 StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:Oe,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"]],propSources:[oe],skippedNodes:[0],repeatNodeCount:8,tokenData:"Az~R!WOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs&tsv$kvw'Uw}$k}!O(q!O!P$k!P!Q*n!Q![$k![!]+z!]!^$k!^!_/s!_!`=i!`!a>U!a!b>q!b!c$k!c!}+z!}#P$k#P#Q?}#Q#R$k#R#S+z#S#T$k#T#o+z#o%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U$k4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$kX$rUVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kP%ZRVPOv%Uw!^%U!_~%UW%iR{WOr%dsv%dw~%d_%{]VP{WyUOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs%Usv$kw!^$k!^!_%d!_~$kZ&{RzYVPOv%Uw!^%U!_~%U~'XTOp'hqs'hst(Pt!]'h!^~'h~'kTOp'hqs'ht!]'h!]!^'z!^~'h~(POW~~(SROp(]q!](]!^~(]~(`SOp(]q!](]!]!^(l!^~(]~(qOX~Z(xWVP{WOr$krs%Usv$kw}$k}!O)b!O!^$k!^!_%d!_~$kZ)iWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a*R!a~$kZ*[U|QVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k]*uWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a+_!a~$k]+hUdSVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k_,V}`S^QVP{WOr$krs%Usv$kw}$k}!O+z!O!P+z!P!Q$k!Q![+z![!]+z!]!^$k!^!_%d!_!c$k!c!}+z!}#R$k#R#S+z#S#T$k#T#o+z#o$}$k$}%O+z%O%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U+z4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Je$k$Je$Jg+z$Jg$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$k_/ZWVP{WOr$krs%Usv$kw!^$k!^!_%d!_;=`$k;=`<%l+z<%l~$kX/xU{WOq%dqr0[sv%dw!a%d!a!b=X!b~%dX0aZ{WOr%dsv%dw}%d}!O1S!O!f%d!f!g1x!g!}%d!}#O5s#O#W%d#W#X:k#X~%dX1XT{WOr%dsv%dw}%d}!O1h!O~%dX1oR}P{WOr%dsv%dw~%dX1}T{WOr%dsv%dw!q%d!q!r2^!r~%dX2cT{WOr%dsv%dw!e%d!e!f2r!f~%dX2wT{WOr%dsv%dw!v%d!v!w3W!w~%dX3]T{WOr%dsv%dw!{%d!{!|3l!|~%dX3qT{WOr%dsv%dw!r%d!r!s4Q!s~%dX4VT{WOr%dsv%dw!g%d!g!h4f!h~%dX4kV{WOr4frs5Qsv4fvw5Qw!`4f!`!a5c!a~4fP5TRO!`5Q!`!a5^!a~5QP5cOiPX5jRiP{WOr%dsv%dw~%dX5xV{WOr%dsv%dw!e%d!e!f6_!f#V%d#V#W8w#W~%dX6dT{WOr%dsv%dw!f%d!f!g6s!g~%dX6xT{WOr%dsv%dw!c%d!c!d7X!d~%dX7^T{WOr%dsv%dw!v%d!v!w7m!w~%dX7rT{WOr%dsv%dw!c%d!c!d8R!d~%dX8WT{WOr%dsv%dw!}%d!}#O8g#O~%dX8nR{WxPOr%dsv%dw~%dX8|T{WOr%dsv%dw#W%d#W#X9]#X~%dX9bT{WOr%dsv%dw#T%d#T#U9q#U~%dX9vT{WOr%dsv%dw#h%d#h#i:V#i~%dX:[T{WOr%dsv%dw#T%d#T#U8R#U~%dX:pT{WOr%dsv%dw#c%d#c#d;P#d~%dX;UT{WOr%dsv%dw#V%d#V#W;e#W~%dX;jT{WOr%dsv%dw#h%d#h#i;y#i~%dX<OT{WOr%dsv%dw#m%d#m#n<_#n~%dX<dT{WOr%dsv%dw#d%d#d#e<s#e~%dX<xT{WOr%dsv%dw#X%d#X#Y4f#Y~%dX=`R!PP{WOr%dsv%dw~%dZ=rUaQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k_>_U[UVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kZ>xWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a?b!a~$kZ?kU!OQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kZ@UWVP{WOr$krs%Usv$kw!^$k!^!_%d!_#P$k#P#Q@n#Q~$kZ@uWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!aA_!a~$kZAhUwQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k",tokenizers:[ae,re,ne,le,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function h(e,t){let a=t&&t.getChild("TagName");return a?e.sliceString(a.from,a.to):""}function C(e,t){let a=t&&t.firstChild;return!a||a.name!="OpenTag"?"":h(e,a)}function de(e,t,a){let O=t&&t.getChildren("Attribute").find(l=>l.from<=a&&l.to>=a),r=O&&O.getChild("AttributeName");return r?e.sliceString(r.from,r.to):""}function b(e){for(let t=e&&e.parent;t;t=t.parent)if(t.name=="Element")return t;return null}function ie(e,t){var a;let O=Y(e).resolveInner(t,-1),r=null;for(let l=O;!r&&l.parent;l=l.parent)(l.name=="OpenTag"||l.name=="CloseTag"||l.name=="SelfClosingTag"||l.name=="MismatchedCloseTag")&&(r=l);if(r&&(r.to>t||r.lastChild.type.isError)){let l=r.parent;if(O.name=="TagName")return r.name=="CloseTag"||r.name=="MismatchedCloseTag"?{type:"closeTag",from:O.from,context:l}:{type:"openTag",from:O.from,context:b(l)};if(O.name=="AttributeName")return{type:"attrName",from:O.from,context:r};if(O.name=="AttributeValue")return{type:"attrValue",from:O.from,context:r};let d=O==r||O.name=="Attribute"?O.childBefore(t):O;return(d==null?void 0:d.name)=="StartTag"?{type:"openTag",from:t,context:b(l)}:(d==null?void 0:d.name)=="StartCloseTag"&&d.to<=t?{type:"closeTag",from:t,context:l}:(d==null?void 0:d.name)=="Is"?{type:"attrValue",from:t,context:r}:d?{type:"attrName",from:t,context:r}:null}else if(O.name=="StartCloseTag")return{type:"closeTag",from:t,context:O.parent};for(;O.parent&&O.to==t&&!(!((a=O.lastChild)===null||a===void 0)&&a.type.isError);)O=O.parent;return O.name=="Element"||O.name=="Text"||O.name=="Document"?{type:"tag",from:t,context:O.name=="Element"?O:b(O)}:null}class me{constructor(t,a,O){this.attrs=a,this.attrValues=O,this.children=[],this.name=t.name,this.completion=Object.assign(Object.assign({type:"type"},t.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=t.textContent?t.textContent.map(r=>({label:r,type:"text"})):[]}}const W=/^[:\-\.\w\u00b7-\uffff]*$/;function U(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function x(e){return typeof e=="string"?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function $e(e,t){let a=[],O=[],r=Object.create(null);for(let n of t){let $=U(n);a.push($),n.global&&O.push($),n.values&&(r[n.name]=n.values.map(x))}let l=[],d=[],k=Object.create(null);for(let n of e){let $=O,o=r;n.attributes&&($=$.concat(n.attributes.map(c=>typeof c=="string"?a.find(g=>g.label==c)||{label:c,type:"property"}:(c.values&&(o==r&&(o=Object.create(o)),o[c.name]=c.values.map(x)),U(c)))));let u=new me(n,$,o);k[u.name]=u,l.push(u),n.top&&d.push(u)}d.length||(d=l);for(let n=0;n<l.length;n++){let $=e[n],o=l[n];if($.children)for(let u of $.children)k[u]&&o.children.push(k[u]);else o.children=l}return n=>{var $;let{doc:o}=n.state,u=ie(n.state,n.pos);if(!u||u.type=="tag"&&!n.explicit)return null;let{type:c,from:g,context:f}=u;if(c=="openTag"){let s=d,i=C(o,f);if(i){let p=k[i];s=(p==null?void 0:p.children)||l}return{from:g,options:s.map(p=>p.completion),validFor:W}}else if(c=="closeTag"){let s=C(o,f);return s?{from:g,to:n.pos+(o.sliceString(n.pos,n.pos+1)==">"?1:0),options:[(($=k[s])===null||$===void 0?void 0:$.closeNameCompletion)||{label:s+">",type:"type"}],validFor:W}:null}else if(c=="attrName"){let s=k[h(o,f)];return{from:g,options:(s==null?void 0:s.attrs)||O,validFor:W}}else if(c=="attrValue"){let s=de(o,f,g);if(!s)return null;let i=k[h(o,f)],p=((i==null?void 0:i.attrValues)||r)[s];return!p||!p.length?null:{from:g,to:n.pos+(o.sliceString(n.pos,n.pos+1)=='"'?1:0),options:p,validFor:/^"[^"]*"?$/}}else if(c=="tag"){let s=C(o,f),i=k[s],p=[],P=f&&f.lastChild;s&&(!P||P.name!="CloseTag"||h(o,P)!=s)&&p.push(i?i.closeCompletion:{label:"</"+s+">",type:"type",boost:2});let v=p.concat(((i==null?void 0:i.children)||(f?l:d)).map(T=>T.openCompletion));if(f&&(i==null?void 0:i.text.length)){let T=f.firstChild;T.to>n.pos-20&&!/\S/.test(n.state.sliceDoc(T.to,n.pos))&&(v=v.concat(i.text))}return{from:g,options:v,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}else return null}}const V=A.define({parser:se.configure({props:[Z.add({Element(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),q.add({Element(e){let t=e.firstChild,a=e.lastChild;return!t||t.name!="OpenTag"?null:{from:t.to,to:a.name=="CloseTag"?a.from:e.to}}})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function ke(e={}){return new j(V,V.data.of({autocomplete:$e(e.elements||[],e.attributes||[])}))}export{$e as completeFromSchema,ke as xml,V as xmlLanguage};
