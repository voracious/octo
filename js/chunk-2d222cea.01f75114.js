(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222cea"],{cfd5:function(n,e,t){"use strict";t.r(e),t.d(e,"sieve",(function(){return s}));t("28a5");function r(n){for(var e={},t=n.split(" "),r=0;r<t.length;++r)e[t[r]]=!0;return e}var i=r("if elsif else stop require"),u=r("true false not");function o(n,e){var t=n.next();if("/"==t&&n.eat("*"))return e.tokenize=l,l(n,e);if("#"===t)return n.skipToEnd(),"comment";if('"'==t)return e.tokenize=f(t),e.tokenize(n,e);if("("==t)return e._indent.push("("),e._indent.push("{"),null;if("{"===t)return e._indent.push("{"),null;if(")"==t&&(e._indent.pop(),e._indent.pop()),"}"===t)return e._indent.pop(),null;if(","==t)return null;if(";"==t)return null;if(/[{}\(\),;]/.test(t))return null;if(/\d/.test(t))return n.eatWhile(/[\d]/),n.eat(/[KkMmGg]/),"number";if(":"==t)return n.eatWhile(/[a-zA-Z_]/),n.eatWhile(/[a-zA-Z0-9_]/),"operator";n.eatWhile(/\w/);var r=n.current();return"text"==r&&n.eat(":")?(e.tokenize=a,"string"):i.propertyIsEnumerable(r)?"keyword":u.propertyIsEnumerable(r)?"atom":null}function a(n,e){return e._multiLineString=!0,n.sol()?("."==n.next()&&n.eol()&&(e._multiLineString=!1,e.tokenize=o),"string"):(n.eatSpace(),"#"==n.peek()?(n.skipToEnd(),"comment"):(n.skipToEnd(),"string"))}function l(n,e){var t,r=!1;while(null!=(t=n.next())){if(r&&"/"==t){e.tokenize=o;break}r="*"==t}return"comment"}function f(n){return function(e,t){var r,i=!1;while(null!=(r=e.next())){if(r==n&&!i)break;i=!i&&"\\"==r}return i||(t.tokenize=o),"string"}}var s={startState:function(n){return{tokenize:o,baseIndent:n||0,_indent:[]}},token:function(n,e){return n.eatSpace()?null:(e.tokenize||o)(n,e)},indent:function(n,e,t){var r=n._indent.length;return e&&"}"==e[0]&&r--,r<0&&(r=0),r*t.unit},languageData:{indentOnInput:/^\s*\}$/}}}}]);