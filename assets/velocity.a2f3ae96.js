function o(t){for(var e={},r=t.split(" "),n=0;n<r.length;++n)e[r[n]]=!0;return e}var f=o("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),i=o("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),c=o("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),k=/[+\-*&%=<>!?:\/|]/;function s(t,e,r){return e.tokenize=r,r(t,e)}function l(t,e){var r=e.beforeParams;e.beforeParams=!1;var n=t.next();if(n=="'"&&!e.inString&&e.inParams)return e.lastTokenWasBuiltin=!1,s(t,e,p(n));if(n!='"'){if(/[\[\]{}\(\),;\.]/.test(n))return n=="("&&r?e.inParams=!0:n==")"&&(e.inParams=!1,e.lastTokenWasBuiltin=!0),null;if(/\d/.test(n))return e.lastTokenWasBuiltin=!1,t.eatWhile(/[\w\.]/),"number";if(n=="#"&&t.eat("*"))return e.lastTokenWasBuiltin=!1,s(t,e,m);if(n=="#"&&t.match(/ *\[ *\[/))return e.lastTokenWasBuiltin=!1,s(t,e,h);if(n=="#"&&t.eat("#"))return e.lastTokenWasBuiltin=!1,t.skipToEnd(),"comment";if(n=="$")return t.eat("!"),t.eatWhile(/[\w\d\$_\.{}-]/),c&&c.propertyIsEnumerable(t.current())?"keyword":(e.lastTokenWasBuiltin=!0,e.beforeParams=!0,"builtin");if(k.test(n))return e.lastTokenWasBuiltin=!1,t.eatWhile(k),"operator";t.eatWhile(/[\w\$_{}@]/);var a=t.current();return f&&f.propertyIsEnumerable(a)?"keyword":i&&i.propertyIsEnumerable(a)||t.current().match(/^#@?[a-z0-9_]+ *$/i)&&t.peek()=="("&&(!i||!i.propertyIsEnumerable(a.toLowerCase()))?(e.beforeParams=!0,e.lastTokenWasBuiltin=!1,"keyword"):e.inString?(e.lastTokenWasBuiltin=!1,"string"):t.pos>a.length&&t.string.charAt(t.pos-a.length-1)=="."&&e.lastTokenWasBuiltin?"builtin":(e.lastTokenWasBuiltin=!1,null)}return e.lastTokenWasBuiltin=!1,e.inString?(e.inString=!1,"string"):e.inParams?s(t,e,p(n)):void 0}function p(t){return function(e,r){for(var n,a=!1,u=!1;(n=e.next())!=null;){if(n==t&&!a){u=!0;break}if(t=='"'&&e.peek()=="$"&&!a){r.inString=!0,u=!0;break}a=!a&&n=="\\"}return u&&(r.tokenize=l),"string"}}function m(t,e){for(var r,n=!1;r=t.next();){if(r=="#"&&n){e.tokenize=l;break}n=r=="*"}return"comment"}function h(t,e){for(var r,n=0;r=t.next();){if(r=="#"&&n==2){e.tokenize=l;break}r=="]"?n++:r!=" "&&(n=0)}return"meta"}const b={startState:function(){return{tokenize:l,beforeParams:!1,inParams:!1,inString:!1,lastTokenWasBuiltin:!1}},token:function(t,e){return t.eatSpace()?null:e.tokenize(t,e)},languageData:{commentTokens:{line:"##",block:{open:"#*",close:"*#"}}}};export{b as velocity};