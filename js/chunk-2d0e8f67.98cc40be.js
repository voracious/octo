(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8f67"],{"8c06":function(t,e,n){"use strict";n.r(e),n.d(e,"sparql",(function(){return f}));var r;n("4917"),n("3b2b");function u(t){return new RegExp("^(?:"+t.join("|")+")$","i")}var a=u(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a","bind"]),i=u(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load"]),o=/[*+\-<>=&|\^\/!\?]/;function c(t,e){var n=t.next();if(r=null,"$"==n||"?"==n)return"?"==n&&t.match(/\s/,!1)?"operator":(t.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/),"variableName.local");if("<"!=n||t.match(/^[\s\u00a0=]/,!1)){if('"'==n||"'"==n)return e.tokenize=l(n),e.tokenize(t,e);if(/[{}\(\),\.;\[\]]/.test(n))return r=n,"bracket";if("#"==n)return t.skipToEnd(),"comment";if("^"===n)return n=t.peek(),"^"===n?t.eat("^"):t.eatWhile(o),"operator";if(o.test(n))return t.eatWhile(o),"operator";if(":"==n)return s(t),"atom";if("@"==n)return t.eatWhile(/[a-z\d\-]/i),"meta";if(t.eatWhile(/[_\w\d]/),t.eat(":"))return s(t),"atom";var u=t.current();return a.test(u)?"builtin":i.test(u)?"keyword":"variable"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function s(t){while(t.match(/([:\w\d._-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-fA-F0-9][a-fA-F0-9])/));}function l(t){return function(e,n){var r,u=!1;while(null!=(r=e.next())){if(r==t&&!u){n.tokenize=c;break}u=!u&&"\\"==r}return"string"}}function d(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function p(t){t.indent=t.context.indent,t.context=t.context.prev}var f={startState:function(){return{tokenize:c,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);if("comment"!=n&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==r)d(e,")",t.column());else if("["==r)d(e,"]",t.column());else if("{"==r)d(e,"}",t.column());else if(/[\]\}\)]/.test(r)){while(e.context&&"pattern"==e.context.type)p(e);e.context&&r==e.context.type&&(p(e),"}"==r&&e.context&&"pattern"==e.context.type&&p(e))}else"."==r&&e.context&&"pattern"==e.context.type?p(e):/atom|string|variable/.test(n)&&e.context&&(/[\}\]]/.test(e.context.type)?d(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return n},indent:function(t,e,n){var r=e&&e.charAt(0),u=t.context;if(/[\]\}]/.test(r))while(u&&"pattern"==u.type)u=u.prev;var a=u&&r==u.type;return u?"pattern"==u.type?u.col:u.align?u.col+(a?0:1):u.indent+(a?0:n.unit):0},languageData:{commentTokens:{line:"#"}}}}}]);