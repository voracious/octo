(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6003"],{"1afc":function(e,t,n){"use strict";n.r(t),n.d(t,"elm",(function(){return v}));n("4917");function r(e,t,n){return t(n),n(e,t)}var i=/[a-z]/,u=/[A-Z]/,o=/[a-zA-Z0-9_]/,a=/[0-9]/,f=/[0-9A-Fa-f]/,s=/[-&*+.\\/<>=?^|:]/,l=/[(),[\]{}]/,c=/[ \v\f]/;function p(){return function(e,t){if(e.eatWhile(c))return null;var n=e.next();if(l.test(n))return"{"===n&&e.eat("-")?r(e,t,h(1)):"["===n&&e.match("glsl|")?r(e,t,m):"builtin";if("'"===n)return r(e,t,d);if('"'===n)return e.eat('"')?e.eat('"')?r(e,t,w):"string":r(e,t,k);if(u.test(n))return e.eatWhile(o),"type";if(i.test(n)){var p=1===e.pos;return e.eatWhile(o),p?"def":"variable"}if(a.test(n)){if("0"===n){if(e.eat(/[xX]/))return e.eatWhile(f),"number"}else e.eatWhile(a);return e.eat(".")&&e.eatWhile(a),e.eat(/[eE]/)&&(e.eat(/[-+]/),e.eatWhile(a)),"number"}return s.test(n)?"-"===n&&e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(s),"keyword"):"_"===n?"keyword":"error"}}function h(e){return 0==e?p():function(t,n){while(!t.eol()){var r=t.next();if("{"==r&&t.eat("-"))++e;else if("-"==r&&t.eat("}")&&(--e,0===e))return n(p()),"comment"}return n(h(e)),"comment"}}function w(e,t){while(!e.eol()){var n=e.next();if('"'===n&&e.eat('"')&&e.eat('"'))return t(p()),"string"}return"string"}function k(e,t){while(e.skipTo('\\"'))e.next(),e.next();return e.skipTo('"')?(e.next(),t(p()),"string"):(e.skipToEnd(),t(p()),"error")}function d(e,t){while(e.skipTo("\\'"))e.next(),e.next();return e.skipTo("'")?(e.next(),t(p()),"string"):(e.skipToEnd(),t(p()),"error")}function m(e,t){while(!e.eol()){var n=e.next();if("|"===n&&e.eat("]"))return t(p()),"string"}return"string"}var x={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1},v={startState:function(){return{f:p()}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,(function(e){t.f=e})),r=e.current();return x.hasOwnProperty(r)?"keyword":n}}}}]);