(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6730"],{9993:function(e,n,t){"use strict";t.r(n),t.d(n,"velocity",(function(){return p}));t("4917"),t("28a5");function r(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}var a=r("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),i=r("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),o=r("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),s=/[+\-*&%=<>!?:\/|]/;function l(e,n,t){return n.tokenize=t,t(e,n)}function u(e,n){var t=n.beforeParams;n.beforeParams=!1;var r=e.next();if("'"==r&&!n.inString&&n.inParams)return n.lastTokenWasBuiltin=!1,l(e,n,f(r));if('"'!=r){if(/[\[\]{}\(\),;\.]/.test(r))return"("==r&&t?n.inParams=!0:")"==r&&(n.inParams=!1,n.lastTokenWasBuiltin=!0),null;if(/\d/.test(r))return n.lastTokenWasBuiltin=!1,e.eatWhile(/[\w\.]/),"number";if("#"==r&&e.eat("*"))return n.lastTokenWasBuiltin=!1,l(e,n,c);if("#"==r&&e.match(/ *\[ *\[/))return n.lastTokenWasBuiltin=!1,l(e,n,k);if("#"==r&&e.eat("#"))return n.lastTokenWasBuiltin=!1,e.skipToEnd(),"comment";if("$"==r)return e.eatWhile(/[\w\d\$_\.{}-]/),o&&o.propertyIsEnumerable(e.current())?"keyword":(n.lastTokenWasBuiltin=!0,n.beforeParams=!0,"builtin");if(s.test(r))return n.lastTokenWasBuiltin=!1,e.eatWhile(s),"operator";e.eatWhile(/[\w\$_{}@]/);var u=e.current();return a&&a.propertyIsEnumerable(u)?"keyword":i&&i.propertyIsEnumerable(u)||e.current().match(/^#@?[a-z0-9_]+ *$/i)&&"("==e.peek()&&(!i||!i.propertyIsEnumerable(u.toLowerCase()))?(n.beforeParams=!0,n.lastTokenWasBuiltin=!1,"keyword"):n.inString?(n.lastTokenWasBuiltin=!1,"string"):e.pos>u.length&&"."==e.string.charAt(e.pos-u.length-1)&&n.lastTokenWasBuiltin?"builtin":(n.lastTokenWasBuiltin=!1,null)}return n.lastTokenWasBuiltin=!1,n.inString?(n.inString=!1,"string"):n.inParams?l(e,n,f(r)):void 0}function f(e){return function(n,t){var r,a=!1,i=!1;while(null!=(r=n.next())){if(r==e&&!a){i=!0;break}if('"'==e&&"$"==n.peek()&&!a){t.inString=!0,i=!0;break}a=!a&&"\\"==r}return i&&(t.tokenize=u),"string"}}function c(e,n){var t,r=!1;while(t=e.next()){if("#"==t&&r){n.tokenize=u;break}r="*"==t}return"comment"}function k(e,n){var t,r=0;while(t=e.next()){if("#"==t&&2==r){n.tokenize=u;break}"]"==t?r++:" "!=t&&(r=0)}return"meta"}var p={startState:function(){return{tokenize:u,beforeParams:!1,inParams:!1,inString:!1,lastTokenWasBuiltin:!1}},token:function(e,n){return e.eatSpace()?null:n.tokenize(e,n)},languageData:{commentTokens:{line:"##",block:{open:"#*",close:"*#"}}}}}}]);